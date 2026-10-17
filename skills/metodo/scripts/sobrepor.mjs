#!/usr/bin/env node
// Desenha por cima de um PNG (render ou quadro de vídeo) a grade de colunas, a linha de base
// e/ou as zonas proibidas de uma plataforma, para conferir alinhamento e zona segura no olho.
// Uso: node sobrepor.mjs <imagem.png> [--zona reels] [--colunas 12 --margem 64 --gutter 24] [--linha-base 8] [--saida arquivo.png]
// Requer ffmpeg no PATH.
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { lerArgs } from './_navegador.mjs';

const { pos, op } = lerArgs(process.argv.slice(2));
if (!pos[0]) {
  console.error('Uso: node sobrepor.mjs <imagem.png> [--zona reels] [--colunas 12 --margem 64 --gutter 24] [--linha-base 8] [--saida arq.png]');
  process.exit(2);
}
const img = path.resolve(pos[0]);
const info = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0:s=x', img]).toString().trim();
const [W, H] = info.split('x').map(Number);
const filtros = [];

if (op.zona) {
  const dir = path.dirname(fileURLToPath(import.meta.url));
  const zonas = JSON.parse(readFileSync(path.join(dir, 'zonas.json'), 'utf8'));
  const z = zonas[op.zona];
  if (!z) {
    console.error(`Zona desconhecida: ${op.zona}`);
    process.exit(2);
  }
  const sx = W / z.referencia[0];
  const sy = H / z.referencia[1];
  for (const p of z.proibidas) {
    filtros.push(`drawbox=x=${Math.round(p.x * sx)}:y=${Math.round(p.y * sy)}:w=${Math.round(p.w * sx)}:h=${Math.round(p.h * sy)}:color=red@0.28:t=fill`);
    filtros.push(`drawbox=x=${Math.round(p.x * sx)}:y=${Math.round(p.y * sy)}:w=${Math.round(p.w * sx)}:h=${Math.round(p.h * sy)}:color=red@0.9:t=3`);
  }
}

if (op.colunas) {
  const n = Number(op.colunas);
  const m = Number(op.margem ?? Math.round(W * 0.06));
  const g = Number(op.gutter ?? Math.round(W * 0.02));
  const col = (W - 2 * m - (n - 1) * g) / n;
  for (let i = 0; i < n; i++) {
    const x = Math.round(m + i * (col + g));
    filtros.push(`drawbox=x=${x}:y=0:w=${Math.round(col)}:h=${H}:color=cyan@0.12:t=fill`);
  }
  filtros.push(`drawbox=x=${m}:y=${m}:w=${W - 2 * m}:h=${H - 2 * m}:color=cyan@0.8:t=2`);
}

if (op['linha-base']) {
  const lb = Number(op['linha-base']);
  for (let y = lb; y < H; y += lb) filtros.push(`drawbox=x=0:y=${y}:w=${W}:h=1:color=magenta@0.25:t=fill`);
}

if (!filtros.length) {
  console.error('Nada a desenhar: passe --zona, --colunas e/ou --linha-base.');
  process.exit(2);
}
const saida = path.resolve(op.saida ?? img.replace(/\.png$/i, '-sobreposto.png'));
execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', img, '-vf', filtros.join(','), saida]);
console.log(saida);
console.error('Abra a imagem: texto dentro do vermelho = reprovado; bordas fora das colunas ciano = desalinhado.');
