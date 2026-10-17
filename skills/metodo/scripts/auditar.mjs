#!/usr/bin/env node
// Auditoria determinística de uma peça em HTML renderizada (sem IA).
// Mede: contraste real de cada texto, escala tipográfica, famílias de fonte, medida de linha,
// múltiplos da base de espaçamento, quase-alinhamentos, cores fora da paleta, transbordo,
// alvos de toque e texto dentro de zonas proibidas (Reels/Stories etc.).
//
// Uso: node auditar.mjs <arquivo.html|url> [--tamanho 1080x1920] [--base 4] [--escala 14,16,20,28,40,56]
//        [--fontes "Stack Sans,Inter"] [--paleta "#20262E,#246BFD,#FFFFFF"] [--zona reels] [--json]
// Código de saída: 0 = sem reprovações, 1 = há reprovações, 2 = erro de uso, 3 = sem navegador.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { abrirNavegador, paraUrl, lerTamanhos, lerArgs } from './_navegador.mjs';
import { parseCor, compor, razao } from './contraste.mjs';

const { pos, op } = lerArgs(process.argv.slice(2));
if (!pos[0]) {
  console.error('Uso: node auditar.mjs <arquivo|url> [--tamanho 1440x900] [--base 4] [--escala ...] [--fontes ...] [--paleta ...] [--zona reels|stories|feed-4x5|...] [--json]');
  process.exit(2);
}
const [tamanho] = lerTamanhos(op.tamanho, '1440x900');
const base = Number(op.base ?? 4);
const escala = op.escala ? String(op.escala).split(',').map(Number) : null;
const fontesPermitidas = op.fontes ? String(op.fontes).split(',').map((f) => f.trim().toLowerCase().replace(/["']/g, '')) : null;
const paleta = op.paleta ? String(op.paleta).split(',').map((c) => parseCor(c.trim())) : null;

const dir = path.dirname(fileURLToPath(import.meta.url));
const zonas = JSON.parse(readFileSync(path.join(dir, 'zonas.json'), 'utf8'));
const zona = op.zona ? zonas[op.zona] : null;
if (op.zona && !zona) {
  console.error(`Zona desconhecida: ${op.zona}. Opções: ${Object.keys(zonas).filter((k) => !k.startsWith('_')).join(', ')}`);
  process.exit(2);
}

const navegador = await abrirNavegador();
if (!navegador) {
  console.error('A auditoria precisa do Playwright. Peça aprovação para instalar: "npm i -g playwright && npx playwright install chromium".');
  process.exit(3);
}
const pagina = await navegador.newPage({ viewport: tamanho });
await pagina.goto(paraUrl(pos[0]), { waitUntil: 'networkidle' }).catch(() => pagina.goto(paraUrl(pos[0])));
await pagina.evaluate(() => document.fonts?.ready);
await pagina.waitForTimeout(300);

// Coleta no navegador: só dados brutos; os julgamentos ficam aqui no Node.
const dados = await pagina.evaluate(() => {
  const visivel = (el, cs, r) =>
    cs.display !== 'none' && cs.visibility !== 'hidden' && Number(cs.opacity) > 0.05 && r.width > 0 && r.height > 0;
  const seletor = (el) => {
    let s = el.tagName.toLowerCase();
    if (el.id) s += `#${el.id}`;
    else if (el.classList.length) s += '.' + [...el.classList].slice(0, 2).join('.');
    const txt = (el.innerText || el.getAttribute('alt') || '').trim().replace(/\s+/g, ' ').slice(0, 40);
    return txt ? `${s} "${txt}"` : s;
  };
  // Fundo efetivo: sobe pelos ancestrais acumulando cores; para se achar imagem/gradiente/mídia.
  const fundoDe = (el) => {
    const camadas = [];
    let n = el;
    while (n && n.nodeType === 1) {
      const cs = getComputedStyle(n);
      if (cs.backgroundImage && cs.backgroundImage !== 'none') return { camadas, incerto: `fundo com imagem/gradiente em ${seletor(n)}` };
      if (['IMG', 'VIDEO', 'CANVAS', 'SVG'].includes(n.tagName) && n !== el) return { camadas, incerto: `mídia em ${seletor(n)}` };
      camadas.push(cs.backgroundColor);
      n = n.parentElement;
    }
    return { camadas, incerto: null };
  };
  // Texto posicionado por cima de imagem/vídeo irmão (comum em pôster e quadro de vídeo).
  const sobreMidia = (r) =>
    [...document.querySelectorAll('img,video,canvas,picture,svg image')].some((m) => {
      const q = m.getBoundingClientRect();
      return q.width * q.height > 0 && r.left < q.right && r.right > q.left && r.top < q.bottom && r.bottom > q.top;
    });

  const textos = [];
  const blocos = [];
  const espacos = [];
  const cores = new Set();
  const interativos = [];
  const transbordos = [];
  const imagensSemAlt = [];
  for (const el of document.body.querySelectorAll('*')) {
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    if (!visivel(el, cs, r)) continue;
    const temTextoProprio = [...el.childNodes].some((c) => c.nodeType === 3 && c.textContent.trim().length > 0);
    if (temTextoProprio) {
      const f = getComputedStyle(el);
      const fundo = fundoDe(el);
      textos.push({
        sel: seletor(el),
        tamanho: parseFloat(f.fontSize),
        peso: Number(f.fontWeight) || 400,
        familia: f.fontFamily.split(',')[0].trim().replace(/["']/g, ''),
        entrelinha: f.lineHeight === 'normal' ? null : parseFloat(f.lineHeight),
        alinhamento: f.textAlign,
        cor: f.color,
        fundo: fundo.camadas,
        incerto: fundo.incerto ?? (sobreMidia(r) ? 'texto sobre imagem/vídeo' : null),
        caracteres: el.innerText.trim().length,
        largura: r.width,
        linhas: f.lineHeight !== 'normal' ? Math.round(r.height / parseFloat(f.lineHeight)) : null,
        rect: { x: r.left, y: r.top + scrollY, w: r.width, h: r.height },
      });
      cores.add(f.color);
    }
    if (cs.backgroundColor && !/rgba\(0, 0, 0, 0\)|transparent/.test(cs.backgroundColor)) cores.add(cs.backgroundColor);
    if (parseFloat(cs.borderTopWidth) > 0 && cs.borderTopStyle !== 'none') cores.add(cs.borderTopColor);
    for (const p of ['marginTop', 'marginBottom', 'marginLeft', 'marginRight', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight', 'rowGap', 'columnGap']) {
      const v = parseFloat(cs[p]);
      if (v > 0) espacos.push({ v, sel: seletor(el), prop: p });
    }
    if (r.width >= 24 && r.height >= 12 && ['block', 'flex', 'grid', 'inline-block', 'table', 'list-item'].includes(cs.display)) {
      blocos.push({ sel: seletor(el), x: Math.round(r.left * 10) / 10, xd: Math.round(r.right * 10) / 10 });
    }
    if (el.matches('a,button,input,select,textarea,[role=button],[tabindex]:not([tabindex="-1"])')) {
      interativos.push({ sel: seletor(el), w: r.width, h: r.height });
    }
    if ((cs.overflowX === 'hidden' || cs.overflow === 'hidden' || cs.textOverflow === 'ellipsis') && el.scrollWidth > el.clientWidth + 1 && temTextoProprio) {
      transbordos.push({ sel: seletor(el), motivo: 'texto cortado pelo próprio contêiner' });
    }
    if (r.right > innerWidth + 1 && cs.position !== 'fixed') transbordos.push({ sel: seletor(el), motivo: `ultrapassa a largura da tela em ${Math.round(r.right - innerWidth)}px` });
    if (el.tagName === 'IMG' && !el.hasAttribute('alt')) imagensSemAlt.push(seletor(el));
  }
  return {
    textos, blocos, espacos, cores: [...cores], interativos, transbordos, imagensSemAlt,
    rolagemHorizontal: document.documentElement.scrollWidth > innerWidth + 1,
    largura: innerWidth, altura: innerHeight,
  };
});
await navegador.close();

// ---------- Julgamentos ----------
const reprovacoes = [];
const alertas = [];
const incertos = [];
const branco = { r: 255, g: 255, b: 255, a: 1 };

function corEfetiva(camadas) {
  // camadas vêm do elemento para fora; compõe de fora para dentro sobre branco (fundo padrão).
  let acc = branco;
  for (const c of [...camadas].reverse()) {
    try {
      acc = compor(parseCor(c), acc);
    } catch {}
  }
  return acc;
}

// Contraste
for (const t of dados.textos) {
  if (t.incerto) {
    incertos.push(`${t.sel}: contraste não mensurável (${t.incerto}). Olhe no render e garanta área calma/scrim.`);
    continue;
  }
  const fundo = corEfetiva(t.fundo);
  const frente = compor(parseCor(t.cor), fundo);
  const r = razao(frente, fundo);
  const grande = t.tamanho >= 24 || (t.tamanho >= 18.66 && t.peso >= 700);
  const minimo = grande ? 3 : 4.5;
  if (r < minimo) reprovacoes.push(`Contraste ${r.toFixed(2)}:1 < ${minimo}:1 em ${t.sel} (${t.tamanho}px/${t.peso})`);
}

// Escala tipográfica
const tamanhosUsados = [...new Set(dados.textos.map((t) => Math.round(t.tamanho * 10) / 10))].sort((a, b) => a - b);
if (escala) {
  const fora = tamanhosUsados.filter((s) => !escala.some((e) => Math.abs(e - s) <= 0.5));
  if (fora.length) alertas.push(`Tamanhos fora da escala definida (${escala.join(', ')}): ${fora.join(', ')}px`);
} else if (tamanhosUsados.length > 7) {
  alertas.push(`${tamanhosUsados.length} tamanhos de fonte distintos (${tamanhosUsados.join(', ')}px). Escala provavelmente sem sistema.`);
}
for (let i = 1; i < tamanhosUsados.length; i++) {
  const d = tamanhosUsados[i] - tamanhosUsados[i - 1];
  if (d > 0 && d < 2 && tamanhosUsados[i] > 12) alertas.push(`Tamanhos quase iguais ${tamanhosUsados[i - 1]}px e ${tamanhosUsados[i]}px: diferença que não lê como hierarquia.`);
}
const maior = tamanhosUsados.at(-1);
const menor = tamanhosUsados[0];
if (maior && menor && maior / menor < 2 && dados.textos.length > 3) alertas.push(`Razão maior/menor texto = ${(maior / menor).toFixed(1)}×: hierarquia por tamanho fraca. Confira se peso/espaço/cor compensam.`);

// Famílias
const familias = [...new Set(dados.textos.map((t) => t.familia))];
if (fontesPermitidas) {
  const foraFontes = familias.filter((f) => !fontesPermitidas.includes(f.toLowerCase()));
  if (foraFontes.length) reprovacoes.push(`Fontes fora do DESIGN.md: ${foraFontes.join(', ')} (permitidas: ${op.fontes})`);
} else if (familias.length > 3) alertas.push(`${familias.length} famílias de fonte: ${familias.join(', ')}`);

// Medida de linha e entrelinha em textos corridos (relativo ao maior tamanho: vale para web e quadros de vídeo)
const limiteCorrido = Math.max(...dados.textos.map((t) => t.tamanho), 0) * 0.6;
for (const t of dados.textos.filter((t) => t.caracteres > 140 && t.tamanho <= limiteCorrido)) {
  const porLinha = t.linhas ? t.caracteres / t.linhas : t.largura / (t.tamanho * 0.5);
  if (porLinha > 85) alertas.push(`Medida longa (~${Math.round(porLinha)} car./linha) em ${t.sel}. Alvo 45–75.`);
  if (porLinha < 30 && t.linhas > 3) alertas.push(`Medida curta (~${Math.round(porLinha)} car./linha) em ${t.sel}: muitas quebras.`);
  if (t.entrelinha && t.entrelinha / t.tamanho < 1.25) alertas.push(`Entrelinha apertada (${(t.entrelinha / t.tamanho).toFixed(2)}) em texto corrido: ${t.sel}`);
  if (t.alinhamento === 'justify') alertas.push(`Texto justificado em ${t.sel}: confira rios e hifenização.`);
}

// Espaçamento fora da base
const foraBase = dados.espacos.filter((e) => Math.abs(e.v / base - Math.round(e.v / base)) > 0.01 && e.v > 1);
if (foraBase.length) {
  const contagem = {};
  for (const e of foraBase) contagem[e.v] = (contagem[e.v] ?? 0) + 1;
  const top = Object.entries(contagem).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([v, n]) => `${v}px×${n}`);
  alertas.push(`${foraBase.length} espaçamentos fora da base ${base}px: ${top.join(', ')}`);
}

// Quase-alinhamento (bordas esquerdas/direitas a 1–3px umas das outras)
const quase = new Set();
for (const lado of ['x', 'xd']) {
  const valores = [...new Set(dados.blocos.map((b) => b[lado]))].sort((a, b) => a - b);
  for (let i = 1; i < valores.length; i++) {
    const d = valores[i] - valores[i - 1];
    if (d >= 1 && d <= 3) quase.add(`${lado === 'x' ? 'esquerda' : 'direita'} ${valores[i - 1]}px vs ${valores[i]}px`);
  }
}
if (quase.size) alertas.push(`Quase-alinhamentos (parecem erro, não intenção): ${[...quase].slice(0, 8).join('; ')}`);

// Paleta
const coresUsadas = dados.cores.map((c) => {
  try {
    return { txt: c, ...parseCor(c) };
  } catch {
    return null;
  }
}).filter(Boolean);
if (paleta) {
  const dist = (a, b) => Math.hypot(a.r - b.r, a.g - b.g, a.b - b.b);
  const foraPaleta = coresUsadas.filter((c) => c.a > 0.05 && !paleta.some((p) => dist(c, p) <= 12));
  if (foraPaleta.length) alertas.push(`Cores fora da paleta do DESIGN.md: ${[...new Set(foraPaleta.map((c) => c.txt))].slice(0, 10).join(', ')}`);
}

// Transbordo e rolagem
if (dados.rolagemHorizontal) reprovacoes.push('A página tem rolagem horizontal nesta largura.');
for (const t of dados.transbordos.slice(0, 10)) alertas.push(`Transbordo: ${t.sel} — ${t.motivo}`);

// Alvos de toque (só faz sentido em larguras de celular)
if (dados.largura <= 480) {
  for (const i of dados.interativos.filter((i) => i.w < 44 || i.h < 44).slice(0, 10)) {
    alertas.push(`Alvo de toque pequeno (${Math.round(i.w)}×${Math.round(i.h)}px < 44×44): ${i.sel}`);
  }
}
for (const s of dados.imagensSemAlt.slice(0, 10)) alertas.push(`Imagem sem alt: ${s}`);

// Zonas proibidas (coordenadas definidas num quadro de referência e escaladas para o tamanho atual)
if (zona) {
  const sx = dados.largura / zona.referencia[0];
  const sy = dados.altura / zona.referencia[1];
  const proibidas = zona.proibidas.map((z) => ({ ...z, x: z.x * sx, y: z.y * sy, w: z.w * sx, h: z.h * sy }));
  for (const t of dados.textos) {
    for (const z of proibidas) {
      const r = t.rect;
      if (r.x < z.x + z.w && r.x + r.w > z.x && r.y < z.y + z.h && r.y + r.h > z.y) {
        reprovacoes.push(`Texto em zona proibida "${z.nome}" (${op.zona}): ${t.sel}`);
      }
    }
  }
}

const relatorio = {
  alvo: pos[0],
  tamanho: `${tamanho.width}x${tamanho.height}`,
  resumo: { reprovacoes: reprovacoes.length, alertas: alertas.length, nao_mensuravel: incertos.length },
  tipografia: { tamanhos_px: tamanhosUsados, familias },
  cores_usadas: [...new Set(coresUsadas.map((c) => c.txt))],
  reprovacoes,
  alertas,
  nao_mensuravel: incertos,
  aviso: 'Auditoria mede o que é mensurável. Composição, conceito e hierarquia exigem OLHAR o render.',
};

if (op.json) console.log(JSON.stringify(relatorio, null, 2));
else {
  console.log(`Auditoria de ${relatorio.alvo} em ${relatorio.tamanho}`);
  console.log(`Tamanhos: ${tamanhosUsados.join(', ')}px | Famílias: ${familias.join(', ')}`);
  const bloco = (titulo, itens) => {
    if (!itens.length) return;
    console.log(`\n${titulo} (${itens.length})`);
    for (const i of itens) console.log(`  - ${i}`);
  };
  bloco('REPROVAÇÕES', reprovacoes);
  bloco('ALERTAS', alertas);
  bloco('NÃO MENSURÁVEL (olhe no render)', incertos);
  if (!reprovacoes.length && !alertas.length) console.log('\nNada a apontar no que é mensurável.');
  console.log(`\n${relatorio.aviso}`);
}
process.exit(reprovacoes.length ? 1 : 0);
