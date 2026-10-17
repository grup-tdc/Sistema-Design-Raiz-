#!/usr/bin/env node
// Renderiza HTML/SVG/URL em PNG para o agente OLHAR o resultado.
// Uso: node renderizar.mjs <arquivo.html|arquivo.svg|url> [--tamanhos 1080x1920,390x844] [--saida pasta] [--pagina-inteira] [--escala 1]
// Sem Playwright, tenta o Chrome/Chromium do sistema em modo headless (sem página inteira).
import { mkdirSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { abrirNavegador, paraUrl, lerTamanhos, lerArgs } from './_navegador.mjs';

const { pos, op } = lerArgs(process.argv.slice(2));
if (!pos[0]) {
  console.error('Uso: node renderizar.mjs <arquivo|url> [--tamanhos 1440x900,390x844] [--saida pasta] [--pagina-inteira] [--escala 1]');
  process.exit(2);
}
const alvo = pos[0];
const url = paraUrl(alvo);
const tamanhos = lerTamanhos(op.tamanhos, '1440x900,390x844');
const saida = path.resolve(op.saida ?? 'renders');
const escala = Number(op.escala ?? 1);
const base = path.basename(alvo).replace(/[^\w.-]+/g, '_').replace(/\.(html?|svg)$/i, '') || 'pagina';
mkdirSync(saida, { recursive: true });

const gerados = [];
const navegador = await abrirNavegador();
if (navegador) {
  const ctx = await navegador.newContext({ deviceScaleFactor: escala });
  const pagina = await ctx.newPage();
  for (const t of tamanhos) {
    await pagina.setViewportSize(t);
    await pagina.goto(url, { waitUntil: 'networkidle' }).catch(() => pagina.goto(url));
    await pagina.evaluate(() => document.fonts?.ready);
    await pagina.waitForTimeout(Number(op.espera ?? 300));
    const arq = path.join(saida, `${base}-${t.width}x${t.height}${op['pagina-inteira'] ? '-inteira' : ''}.png`);
    await pagina.screenshot({ path: arq, fullPage: Boolean(op['pagina-inteira']) });
    gerados.push(arq);
  }
  await navegador.close();
} else {
  const candidatos = [
    process.env.CHROMIUM_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ].filter(Boolean);
  const chrome = candidatos.find((c) => existsSync(c));
  if (!chrome) {
    console.error('Nem Playwright nem Chrome encontrados. Instale um dos dois (peça aprovação à pessoa): "npm i -g playwright && npx playwright install chromium".');
    process.exit(3);
  }
  for (const t of tamanhos) {
    const arq = path.join(saida, `${base}-${t.width}x${t.height}.png`);
    execFileSync(chrome, ['--headless=new', '--hide-scrollbars', `--window-size=${t.width},${t.height}`, `--screenshot=${arq}`, url], { stdio: 'ignore' });
    gerados.push(arq);
  }
  if (op['pagina-inteira']) console.error('Aviso: sem Playwright não há captura de página inteira; capturei só a janela.');
}

console.log(gerados.join('\n'));
console.error('Agora ABRA cada PNG com a ferramenta de leitura de imagem e olhe antes de seguir.');
