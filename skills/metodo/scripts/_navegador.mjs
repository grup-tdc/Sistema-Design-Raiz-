// Localiza o Playwright (projeto, pasta do script ou instalação global) e abre um Chromium.
// Se nada for encontrado, devolve null e o chamador decide o que fazer.
import { createRequire } from 'node:module';
import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

function raizesDeBusca() {
  const raizes = [path.join(process.cwd(), 'x.js'), new URL(import.meta.url).pathname];
  try {
    raizes.push(path.join(execSync('npm root -g', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim(), 'x.js'));
  } catch {}
  return raizes;
}

export function carregarPlaywright() {
  for (const raiz of raizesDeBusca()) {
    const req = createRequire(raiz);
    for (const nome of ['playwright', 'playwright-core']) {
      try {
        return req(nome);
      } catch {}
    }
  }
  return null;
}

export async function abrirNavegador() {
  const pw = carregarPlaywright();
  if (!pw) return null;
  const tentativas = [];
  if (process.env.CHROMIUM_PATH) tentativas.push({ executablePath: process.env.CHROMIUM_PATH });
  tentativas.push({});
  tentativas.push({ channel: 'chrome' });
  tentativas.push({ channel: 'msedge' });
  for (const t of ['/opt/pw-browsers/chromium']) if (existsSync(t)) tentativas.push({ executablePath: t });
  let ultimoErro;
  for (const opcoes of tentativas) {
    try {
      return await pw.chromium.launch(opcoes);
    } catch (e) {
      ultimoErro = e;
    }
  }
  throw new Error(`Playwright encontrado, mas nenhum Chromium abriu. Rode "npx playwright install chromium" ou defina CHROMIUM_PATH.\n${ultimoErro?.message ?? ''}`);
}

export function paraUrl(alvo) {
  if (/^https?:\/\//.test(alvo) || alvo.startsWith('file://') || alvo.startsWith('data:')) return alvo;
  return pathToFileURL(path.resolve(alvo)).href;
}

export function lerTamanhos(txt, padrao) {
  return (txt ?? padrao).split(',').map((t) => {
    const [w, h] = t.toLowerCase().split('x').map(Number);
    if (!w || !h) throw new Error(`Tamanho inválido: ${t} (use LARGURAxALTURA)`);
    return { width: w, height: h };
  });
}

export function lerArgs(argv) {
  const pos = [];
  const op = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const chave = a.slice(2);
      const prox = argv[i + 1];
      if (prox === undefined || prox.startsWith('--')) op[chave] = true;
      else op[chave] = argv[++i];
    } else pos.push(a);
  }
  return { pos, op };
}
