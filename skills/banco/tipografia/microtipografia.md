---
titulo: Microtipografia
quando_consultar: No acabamento de qualquer peça com texto (antes de entregar), ou quando o texto está "certo" nas medidas e ainda parece amador, barato ou irregular.
fontes:
  - jpoindexter/typography-skills — skills microtypography, typography-critique, editorial-web-typography; references/opentype-features.md (MIT); destilam Hochuli (Detail in Typography), Lupton, Stocks, Rutter
  - educlopez/ui-craft — references/typography.md (MIT)
  - pbakaus/impeccable — skill/reference/typeset.md e craft-floor.md (Apache-2.0)
  - Convenções de pontuação do português do Brasil (uso editorial corrente; Acordo Ortográfico de 1990 para hifenização)
---
# Microtipografia

## Princípios

1. **O amadorismo mora no detalhe.** Com uma boa fonte bem escalada, o que ainda denuncia descuido quase sempre está aqui: aspas retas, hífen no lugar de travessão, caixa alta sem tracking, rios, palavras sozinhas.
2. **Espaços entre palavras devem ser regulares e invisíveis.** Quando aparecem como formas (buracos, rios), atrapalham a leitura.
3. **Kerning ≠ tracking.** Kerning é o espaço entre um par específico de letras (AV, To); tracking é o espaçamento de um bloco inteiro. Quem reclama de "kerning ruim" num parágrafo quase sempre fala de tracking, fonte mal espaçada ou bandeira ruim.
4. **Espaçamento é relativo ao corpo.** Tracking em unidade absoluta (1 px) só está certo no tamanho em que foi ajustado.
5. **Cada caractere tem uma função.** Hífen, meia-risca e travessão são três sinais diferentes; aspas retas são marcas de máquina de escrever.

## Regras operacionais

### Tracking por tamanho e caixa (alfabeto latino)

| Caso | Faixa de partida | Contexto |
|---|---|---|
| Texto corrido no corpo de leitura | 0 | o desenhista já espaçou para isso |
| Texto pequeno (11–13 px; 6–8 pt) | +0,01 a +0,03 em | também texto claro sobre escuro |
| Display sem serifa (≥ ~24 px / 2,5× corpo) | −0,01 a −0,03 em; piso −0,04 em | tamanhos grandes parecem frouxos |
| Display serifado | 0 a −0,01 em | serifadas já vêm otimizadas; aperto danifica o ritmo |
| Caixa alta e versaletes | +0,05 a +0,12 em | sempre; rótulos pequenos no lado alto |
| Legenda e texto de vídeo | 0 a +0,02 em | compressão funde letras apertadas |

- Na web: `letter-spacing` em `em`. No InDesign/Illustrator: tracking em milésimos de eme (+50 = +0,05 em). No After Effects/Premiere: o tracking também é em milésimos de eme.
- Desligue ligaduras onde houver tracking positivo (fi espaçado parece quebrado).
- Não ajuste tracking de escritas não latinas sem conhecer a convenção delas.

### Kerning e alinhamento óptico em display

- Use o kerning da fonte (métrico) por padrão; o óptico do software ajuda em fontes mal kernadas ou em combinações de fontes.
- Em títulos grandes, revise à mão pares críticos: AV, AT, LT, To, Te, Ty, Vo, Wa, P., F., r, (vírgula após r), aspas ao lado de A, números com 1.
- Em caixa alta grande, iguale a área branca entre letras (o olho mede área, não distância): pares retos (HH) pedem mais espaço que pares redondos (OO).
- **Alinhamento óptico:** letras redondas (O, C, G) e pontas (A, V) devem ultrapassar levemente a linha de base, a altura de x e a margem para parecerem alinhadas. Em títulos grandes, empurre aspas, hífens, T, V, W e O iniciais ligeiramente para fora da margem (pontuação pendurada). Web: `hanging-punctuation` (suporte limitado) ou `text-indent` negativo no bloco de citação. Impresso: "Alinhamento óptico da margem" do InDesign com corpo igual ao do texto.

### Rios, viúvas e órfãs

- **Rio:** espaços em linhas consecutivas alinhados formando canal vertical. Causa típica: justificado em medida curta. Corrija reescrevendo a quebra, ativando hifenização, ajustando a medida ou passando para bandeira.
- Justificado abaixo de ~50 caracteres por linha produz buracos quase inevitavelmente; prefira bandeira.
- Terminologia varia entre autores; use a descrição: **palavra sozinha na última linha** do parágrafo (evitar sempre em títulos, chamadas e legendas; em texto corrido, evitar quando a última linha tiver menos de ~7 caracteres) e **linha isolada no topo ou pé** de coluna/página (evitar no impresso; mínimo 2 linhas de cada lado).
- Título nunca no pé de coluna sem pelo menos 2–3 linhas do texto que ele abre.
- Web: `text-wrap: balance` em títulos (até ~6 linhas), `text-wrap: pretty` em parágrafos; ambos degradam sem quebrar. Espaço inseparável (`&nbsp;`) só para unidades e nomes ("12 kg", "R$ 50", "art. 5º"), não para consertar quebra pontual. Impresso: "Sem quebra" em pares de palavras, compositor de parágrafo do InDesign.
- Vídeo e pôster: quebre à mão por unidade de sentido ("O prazo / termina hoje"), nunca separando artigo/preposição do substantivo ("o / prazo").

### Hifenização (PT-BR)

- Declare o idioma (web `lang="pt-BR"`; dicionário Português Brasil no InDesign) ou a hifenização usará regras erradas.
- Configuração de partida no impresso: palavras de no mínimo 6 letras, ao menos 3 antes e 2 depois da quebra, no máximo 2 linhas hifenizadas seguidas, sem hifenizar a última palavra do parágrafo nem palavras em caixa alta.
- Não deixe uma vogal sozinha no fim ou início de linha (a-|mor), nem quebras que formem palavra constrangedora.
- Palavra composta com hífen quebrada no hífen: pela convenção do Acordo, repete-se o hífen no início da linha seguinte (guarda-|-chuva). Siga essa convenção ou o manual da marca, consistentemente.
- Sem hifenização em títulos, chamadas, legendas de vídeo e interface.
- Web: `hyphens: auto` só em texto corrido; `hyphenate-limit-chars: 6 3 2` onde suportado.

### Pontuação correta em PT-BR

| Uso | Sinal | Exemplo |
|---|---|---|
| Aspas principais | “ ” | “Prazo encerrado” |
| Aspas dentro de aspas | ‘ ’ | “Ele disse ‘nunca’ ontem” |
| Apóstrofo | ’ (não ') | d’água, pingo-d’água |
| Hífen: composição, quebra | - | bem-vindo |
| Meia-risca: intervalos | – (sem espaços) | 2020–2024, p. 10–15, 9h–18h |
| Travessão: diálogo, inciso | — (com espaços no inciso) | — Sim, disse ela. / O curso — gratuito — começa hoje. |
| Reticências | … (um caractere, colado à palavra anterior) | Talvez… |
| Sinal de menos | − | −5 °C |
| Multiplicação, dimensões | × | 1080 × 1920 px |
| Ordinal | º ª (não o grau °) | 1º lugar, 2ª turma |
| Grau | ° | 25 °C |

- No Brasil, aspas angulares « » são raras (mais lusitanas); use apenas se o manual da marca pedir.
- Números: vírgula decimal e ponto de milhar (1.250,50); moeda com espaço inseparável (R$ 1.250,50); horas 14h30 ou 14:30 (escolha um); unidades com espaço (12 kg, 30 min). Percentual: 50% é o uso editorial corrente (o SI recomenda 50 %); escolha um e mantenha.
- Sem espaço antes de vírgula, ponto, dois-pontos, ponto e vírgula, interrogação e exclamação (a regra francesa não vale em PT-BR).
- Acentos sempre, inclusive em caixa alta (É, Ç, Ã). Caixa alta não dispensa acento.
- Parênteses e colchetes ficam em redondo mesmo quando o conteúdo é itálico.

### Numerais

| Tipo | Use em |
|---|---|
| Tabulares (larguras iguais) | tabelas, preços em coluna, placares, cronômetros, contadores animados, datas em lista |
| Proporcionais | números soltos em texto e títulos |
| Oldstyle (de texto, com ascendentes/descendentes) | texto corrido serifado, editorial, livros — se a fonte tiver |
| Lining (de altura de maiúscula) | interface, caixa alta, tabelas, sinalização |
| Zero cortado | código, senhas, cupons (0 vs O) |

- Web: `font-variant-numeric: tabular-nums` (ou `oldstyle-nums`, `slashed-zero`). InDesign/Illustrator: painel OpenType. After Effects: verifique se o recurso OpenType está disponível; caso não, use uma fonte com tabulares por padrão para contadores.
- Contador animado com numerais proporcionais "treme" a cada quadro: defeito clássico.
- Versaletes verdadeiros (`smcp`) para siglas longas em texto corrido; versalete sintetizado (maiúscula reduzida) fica fino demais.

## Falhas comuns

| Sintoma visível | Causa | Correção |
|---|---|---|
| Aspas retas " ' no texto final | sem substituição tipográfica | trocar por “ ” ‘ ’ na revisão ou no pipeline de conteúdo |
| "2020-2024" ou " - " no lugar de inciso | hífen no papel de meia-risca/travessão | – para intervalo, — para inciso |
| "..." com três pontos espaçados | sem o caractere próprio | usar … |
| Título em caixa alta parecendo bloco espremido | tracking 0 em maiúsculas | +0,05 a +0,12 em |
| Título grande "frouxo" | tracking de texto no display | apertar levemente; revisar pares |
| Buracos e rios no justificado | medida curta, sem hifenização | bandeira ou hifenizar e alargar |
| Palavra sozinha na 2ª linha do título | quebra automática | quebra balanceada ou quebra manual por sentido |
| Contador do vídeo tremendo | numerais proporcionais | tabulares |
| Hífen no início da linha esquerda "morde" a margem | sem alinhamento óptico | pontuação pendurada |
| 1º com símbolo de grau | caractere errado | º/ª |
| Maiúsculas sem acento | hábito de digitação | acentuar sempre |

## Como verificar

1. **Squint test** no bloco: textura cinza uniforme. Manchas claras = rios/buracos; manchas escuras = aperto ou peso desigual.
2. **Busca por caracteres** no texto final: `"`, `'`, ` - `, `...`, `--`, `x` entre números, `o` ou `°` após numeral ordinal, espaço antes de pontuação, espaço duplo.
3. **Zoom 200–400%** nos títulos: confira pares de kerning, alinhamento óptico das letras redondas e das margens.
4. Percorra a última linha de cada parágrafo e o topo/pé de cada coluna ou página.
5. Inverta a imagem ou vire de cabeça para baixo um título display: o espaçamento irregular salta à vista quando a leitura sai do caminho.
6. Vídeo: pause no quadro em que um número muda; os dígitos vizinhos não podem se mover.
7. Web: aplique as sobrescritas do WCAG 1.4.12 (0,12em de letras, 0,16em de palavras) e confirme que nada corta.

## Quando quebrar a regra

- **Tracking negativo forte** (abaixo de −0,04 em) pode funcionar em logotipos e palavras únicas gigantes, desde que revisado par a par; nunca em texto que o usuário pode ampliar.
- **Caixa alta sem tracking** é aceitável em fontes desenhadas só em maiúsculas com espaçamento próprio para isso.
- **Travessão fechado (sem espaços)** é convenção de algumas casas editoriais; o inciso com espaços é o mais comum no Brasil. Escolha uma e não misture.
- **Terminologia de viúva/órfã** é invertida entre autores e entre inglês e português; descreva o problema em vez de discutir o nome.
- **Legibilidade vence correção pontual:** se o caractere correto não existe na fonte da marca (ex.: sem º verdadeiro, sem tabulares), troque o corte ou a fonte de apoio, não improvise com sobrescrito escalonado sem revisar o peso.
