#!/usr/bin/env node
// Razão de contraste WCAG 2.x entre duas cores. Sem dependências.
// Uso: node contraste.mjs "#246BFD" "#20262E" [--json]
// Aceita #rgb, #rrggbb, #rrggbbaa (alfa sobre a segunda cor), rgb()/rgba().

export function parseCor(txt) {
  const s = String(txt).trim().toLowerCase();
  let m = s.match(/^#?([0-9a-f]{3,8})$/);
  if (m) {
    let h = m[1];
    if (h.length === 3 || h.length === 4) h = [...h].map((c) => c + c).join('');
    if (h.length !== 6 && h.length !== 8) throw new Error(`Cor inválida: ${txt}`);
    const n = (i) => parseInt(h.slice(i, i + 2), 16);
    return { r: n(0), g: n(2), b: n(4), a: h.length === 8 ? n(6) / 255 : 1 };
  }
  m = s.match(/^rgba?\(([^)]+)\)$/);
  if (m) {
    const p = m[1].split(/[\s,\/]+/).filter(Boolean).map(Number);
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  }
  throw new Error(`Cor inválida: ${txt}`);
}

export function compor(frente, fundo) {
  const a = frente.a ?? 1;
  return {
    r: frente.r * a + fundo.r * (1 - a),
    g: frente.g * a + fundo.g * (1 - a),
    b: frente.b * a + fundo.b * (1 - a),
    a: 1,
  };
}

export function luminancia({ r, g, b }) {
  const canal = (v) => {
    const c = v / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * canal(r) + 0.7152 * canal(g) + 0.0722 * canal(b);
}

export function razao(c1, c2) {
  const [a, b] = [luminancia(c1), luminancia(c2)].sort((x, y) => y - x);
  return (a + 0.05) / (b + 0.05);
}

export function veredito(r) {
  return {
    'texto normal AA (4,5:1)': r >= 4.5,
    'texto grande AA (3:1, ≥24px ou ≥18,66px negrito)': r >= 3,
    'texto normal AAA (7:1)': r >= 7,
    'componentes e gráficos (3:1)': r >= 3,
  };
}

const ehPrincipal = import.meta.url === `file://${process.argv[1]}`;
if (ehPrincipal) {
  const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
  const json = process.argv.includes('--json');
  if (args.length < 2) {
    console.error('Uso: node contraste.mjs <cor-do-texto> <cor-do-fundo> [--json]');
    process.exit(2);
  }
  const fundo = parseCor(args[1]);
  const frente = compor(parseCor(args[0]), fundo);
  const r = razao(frente, fundo);
  const v = veredito(r);
  if (json) {
    console.log(JSON.stringify({ texto: args[0], fundo: args[1], razao: +r.toFixed(2), ...v }, null, 2));
  } else {
    console.log(`Contraste ${args[0]} sobre ${args[1]}: ${r.toFixed(2)}:1`);
    for (const [k, ok] of Object.entries(v)) console.log(`  ${ok ? 'PASSA' : 'FALHA'}  ${k}`);
  }
  process.exit(v['texto normal AA (4,5:1)'] ? 0 : 1);
}
