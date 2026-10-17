---
titulo: Espaço, ritmo e equilíbrio
quando_consultar: Ao definir espaçamentos, a divisão principal do formato (simétrica ou assimétrica) e a densidade, ou quando a peça parece apertada, vazia, torta ou "quase certa".
fontes:
  - owl-listener/designer-skills — visual-critique/critique-composition (MIT): equilíbrio, espaço em branco, ritmo
  - Dragoon0x/taste-skills — perception/screenshot-surgery e visual-language/craft-signals (MIT): leitura de sinais de acabamento no render
  - jsonmaster555-ai/Design-skills- — proximity-and-whitespace.md, alignment-and-grid-structures.md, contrast-and-scale.md (sem licença: só ideias)
  - jpoindexter/typography-skills — typography-layout-systems (MIT): colunas ímpares contra divisões preguiçosas ao meio
  - Conhecimento canônico: Arnheim (equilíbrio e centro óptico), Müller-Brockmann, Jan Tschichold (assimetria na Nova Tipografia)
---
# Espaço, ritmo e equilíbrio

## Princípios

- **Espaço em branco ativo** tem forma, função e medida: separa grupos, isola o elemento 1, conduz o olho, dá tom. **Sobra** é o espaço que ficou porque nada foi decidido — tem formato irregular e não serve a nenhum elemento.
- **Ritmo** é repetição com intervalos previsíveis; **interesse** vem de uma variação controlada dentro do ritmo. Só repetição = monotonia; só variação = ruído.
- **Equilíbrio** não exige simetria. Equilíbrio assimétrico distribui pesos diferentes a distâncias diferentes do centro (alavanca de Arnheim).
- **Tensão** é um recurso, desde que seja intencional e única. Tensão acidental (algo quase tocando a borda, quase alinhado) lê como erro.
- **Quase-alinhado é pior que deslocamento deliberado**: o olho detecta diferenças de poucos pixels entre bordas próximas e as interpreta como descuido.

## Regras operacionais

### Escala de espaçamento

| Base | Escala sugerida | Contexto |
|---|---|---|
| 4 px | 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 | UI densa, componentes |
| 8 px | 8, 16, 24, 32, 48, 64, 96, 128, 192 | web, posts, quadros 1080 |
| Linha de base (impresso) | ½, 1, 2, 3, 4, 6 linhas | editorial; tudo vertical em múltiplos da entrelinha |

- Use **no máximo 5–6 valores** por peça. Cada valor novo precisa de um motivo (nível da escada de proximidade).
- Em formatos 1080 px de largura, a escala costuma começar em 16 e ter saltos maiores (24, 48, 72, 96, 144) — a peça é vista reduzida.
- Em quadros de vídeo, padding interno de caixas de texto ≥ 0,5× a altura de corpo do texto, para não parecer espremido em tela pequena.

### Divisões do formato

| Split | Proporção | Efeito | Onde |
|---|---|---|---|
| 6/6 (meio) | 1:1 | estático, comparação, confronto | antes/depois, A×B |
| 7/5 | ≈ 1,4:1 | assimetria leve, editorial | landing (texto 7, imagem 5) |
| 8/4 | 2:1 | principal + apoio claros | artigo + barra lateral; post com imagem dominante |
| Terços | 2:1 em 3 partes | ponto de interesse nas interseções | foto, pôster, quadro de vídeo |
| 9/3 ou 10/2 | 3:1, 5:1 | massa dominante + coluna de microtexto | pôster com metadados laterais |
| ≈ φ (8:5) | 1,6:1 | proporção alongada clássica | capas, impresso |

Em 12 colunas, 7/5 e 8/4 são as assimetrias mais úteis; em pôster de 5 ou 7 colunas, as divisões 3/2 e 5/2 evitam o "meio a meio" automático.

### Simetria x assimetria

| Use simetria (eixo central) quando | Use assimetria quando |
|---|---|
| o conteúdo é formal ou cerimonial (convite, certificado) | há hierarquia forte entre os elementos |
| há um único bloco curto | há texto + imagem de pesos diferentes |
| comparação de dois itens equivalentes | se quer movimento e direção de leitura |

Simetria precisa de um elemento que quebre a estaticidade (escala extrema, uma cor, um corte). Assimetria precisa de contrapeso: massa grande de um lado → elemento pequeno, escuro ou isolado do outro.

### Centro óptico e margens

- O centro percebido fica ≈ 3–5% da altura **acima** do centro geométrico. Um elemento "centralizado" verticalmente deve subir esse tanto.
- Margem inferior 1,1–1,5× a superior para a peça não parecer escorregar.

### Tensão: intencional x acidental

| Distância do elemento à borda/vizinho | Leitura |
|---|---|
| ≥ margem da grade | calmo, contido |
| sangrando (ultrapassa a borda) | tensão forte e deliberada |
| encostado exatamente (0 px) | tensão deliberada, gráfica |
| entre ~2 px e ~½ margem | **ambíguo: parece erro** — afaste ou sangre |

Mesmo raciocínio para alinhamento: bordas de blocos vizinhos devem coincidir **exatamente** ou diferir por **≥ meia coluna / ≥ 2× gutter**. Diferenças de 1–8 px nunca.

### Densidade

- Defina antes: peça **arejada** (muito espaço ativo, poucas informações — luxo, institucional, impacto) ou **densa** (muita informação organizada — programação, tabela, infográfico, painel).
- Densidade alta exige grade mais rígida e escada de proximidade mais precisa; densidade baixa exige um elemento dominante forte, senão o espaço vira sobra.
- Distribua a densidade de forma desigual de propósito: uma zona cheia contra uma vazia cria foco. Densidade uniforme em toda a área = monotonia.

## Falhas comuns

| Sintoma visível | Causa | Correção |
|---|---|---|
| Espaços com formatos estranhos entre elementos | elementos posicionados um a um, sem grade | encaixe na grade; agrupe e deixe o vazio concentrado em um lugar |
| Peça apertada, "sem respiro" | margens < 5% do lado curto, padding mínimo | suba margens; corte conteúdo antes de reduzir espaço |
| Peça vazia e sem foco | pouco conteúdo sem elemento dominante | aumente a escala do elemento 1 ou concentre o vazio |
| Peça parece pender para um lado | massa escura de um lado sem contrapeso | contrapeso do outro lado ou recentralize o eixo |
| Elemento a 6 px da borda | tensão acidental | leve à margem ou faça sangrar |
| Duas colunas de texto quase alinhadas | ajuste manual, valores fora da escala | alinhe exatamente ou desloque ≥ meia coluna |
| Muitos espaçamentos diferentes (13, 17, 22, 30 px) | sem escala | reduza a 5–6 valores da escala |
| Layout meio a meio sem razão | grade par usada por reflexo | 7/5, 8/4 ou terços |

## Como verificar

- **Medir** todos os espaços verticais e horizontais e listar os valores únicos; devem pertencer à escala e ser ≤ 6.
- **Sobrepor a grade** e procurar bordas a menos de meia coluna de uma guia sem estar nela.
- **Inverter o render** (negativo) ou preencher o espaço vazio de uma cor: as formas do vazio devem parecer intencionais e simples.
- **Espelhar horizontalmente**: se a peça espelhada parece muito mais desequilibrada que a original, o equilíbrio dependia da direção de leitura — aceitável; se ambas parecem tortas, falta contrapeso.
- **Squint**: a massa de peso deve estar equilibrada em relação ao centro óptico, não ao geométrico.
- **Miniatura**: em tamanho de feed, os espaços ainda separam os grupos ou colapsam?

## Quando quebrar a regra

- **Horror vacui intencional**: colagem, zine, cartaz de festa, peças de varejo agressivo — densidade total é a linguagem; mantenha um único ponto de leitura protegido.
- **Valor fora da escala** é aceitável para correção óptica (ícone redondo, letra com bojo, número 1 estreito) — documente a exceção.
- **Simetria rígida sem quebra** em peças solenes (luto, comunicado oficial), quando a estaticidade é o tom desejado.
- **Tensão de borda** é obrigatória em linguagem de pôster com evento dominante — mas é uma por peça, executada com sangria ou encosto exato.
