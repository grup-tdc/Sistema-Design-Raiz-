#!/usr/bin/env node
// Extrai quadros de um vídeo e monta uma prancha (contact sheet) para o agente olhar o movimento.
// Uso: node quadros.mjs <video> [--intervalo 0.5] [--tempos 0,0.5,1.2] [--colunas 6] [--saida pasta]
// Requer ffmpeg no PATH.
import { mkdirSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { lerArgs } from './_navegador.mjs';

const { pos, op } = lerArgs(process.argv.slice(2));
if (!pos[0]) {
  console.error('Uso: node quadros.mjs <video> [--intervalo 0.5] [--tempos 0,1,2.5] [--colunas 6] [--saida pasta]');
  process.exit(2);
}
try {
  execFileSync('ffmpeg', ['-version'], { stdio: 'ignore' });
} catch {
  console.error('ffmpeg não encontrado. Peça aprovação para instalar (macOS: "brew install ffmpeg").');
  process.exit(3);
}
const video = path.resolve(pos[0]);
const nome = path.basename(video).replace(/\.[^.]+$/, '');
const saida = path.resolve(op.saida ?? `quadros-${nome}`);
mkdirSync(saida, { recursive: true });
const colunas = Number(op.colunas ?? 6);

if (op.tempos) {
  for (const t of String(op.tempos).split(',')) {
    const arq = path.join(saida, `${nome}-t${String(t).replace('.', '_')}s.png`);
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-ss', t, '-i', video, '-frames:v', '1', arq]);
  }
} else {
  const intervalo = Number(op.intervalo ?? 0.5);
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', video, '-vf', `fps=1/${intervalo}`, path.join(saida, `${nome}-%03d.png`)]);
}

const quadros = readdirSync(saida).filter((f) => f.endsWith('.png') && !f.startsWith('prancha')).sort();
const linhas = Math.ceil(quadros.length / colunas);
const prancha = path.join(saida, 'prancha.png');
execFileSync('ffmpeg', [
  '-y', '-loglevel', 'error',
  '-pattern_type', 'glob', '-i', path.join(saida, op.tempos ? `${nome}-t*.png` : `${nome}-*.png`),
  '-vf', `scale=270:-1,tile=${colunas}x${linhas}:padding=6:margin=6:color=gray`,
  '-frames:v', '1', prancha,
]);
console.log(`${quadros.length} quadros em ${saida}`);
console.log(prancha);
console.error('Abra a prancha e os quadros-chave (primeiro segundo, cada entrada de texto, último quadro) antes de avaliar.');
