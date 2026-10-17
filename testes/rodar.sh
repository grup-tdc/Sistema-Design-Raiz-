#!/usr/bin/env bash
# Teste de regressão dos scripts de verificação: a peça "ruim" tem que reprovar, a "boa" tem que passar.
set -u
D="$(cd "$(dirname "$0")" && pwd)"; S="$D/../skills/metodo/scripts"; falhas=0
node "$S/contraste.mjs" "#767676" "#FFFFFF" >/dev/null || { echo "FALHA: #767676/branco deveria passar (4,54:1)"; falhas=1; }
node "$S/contraste.mjs" "#777777" "#FFFFFF" >/dev/null && { echo "FALHA: #777777/branco deveria reprovar (4,48:1)"; falhas=1; }
node "$S/auditar.mjs" "$D/ruim.html" --tamanho 1080x1920 --base 8 --zona reels --fontes "Stack Sans" >/dev/null
[ $? -eq 1 ] || { echo "FALHA: ruim.html deveria reprovar"; falhas=1; }
node "$S/auditar.mjs" "$D/bom.html" --tamanho 1080x1920 --base 8 --zona vertical-universal --fontes Arial \
  --paleta "#20262E,#F2F4F7,#AEB6C2,#1F5FE0,#FFFFFF" --escala 32,40,96 >/dev/null
[ $? -eq 0 ] || { echo "FALHA: bom.html deveria passar"; falhas=1; }
[ $falhas -eq 0 ] && echo "OK: todos os testes passaram"; exit $falhas
