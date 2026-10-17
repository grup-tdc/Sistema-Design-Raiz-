---
titulo: Medida, entrelinha e leitura
quando_consultar: Ao compor qualquer texto que precise ser lido (parágrafos, legendas, texto sobre foto ou vídeo, impresso), ou quando a leitura cansa, a linha se perde ou o texto "pesa".
fontes:
  - jpoindexter/typography-skills — skills body-text-and-reading, responsive-typography, editorial-web-typography (MIT); destilam Hochuli (Detail in Typography), Lupton, Rutter, Brown, Latin, Santa Maria, Elam
  - wondelai/skills — web-typography (MIT)
  - educlopez/ui-craft — references/typography.md (MIT)
  - pbakaus/impeccable — skill/reference/typeset.md e craft-floor.md (Apache-2.0)
  - WCAG 2.2, critérios 1.4.3, 1.4.4, 1.4.12
---
# Medida, entrelinha e leitura

## Princípios

1. **Lemos em saltos.** O olho alterna saltos de ~1–2 palavras com fixações curtas; só 3–4 letras ficam nítidas por vez. Texto confuso provoca regressões (o olho volta). Todas as regras abaixo servem a esse movimento.
2. **Corpo, entrelinha e medida são um triângulo.** Mexeu num, revise os outros dois. Linha longa pede mais entrelinha; linha curta, menos.
3. **O retorno de linha precisa ser inequívoco.** Se o olho não encontra com segurança o início da linha seguinte, a composição falhou, por mais "corretos" que sejam os números.
4. **Distância de leitura escala tudo.** Celular (~30–40 cm), notebook (50–70 cm), pôster (1–5 m), telão (3 m+) exigem tamanhos diferentes para o mesmo efeito.
5. **Tamanho aparente, não nominal.** Fontes com x-height alta parecem maiores no mesmo corpo. Ao trocar de fonte, iguale a aparência e reavalie a medida.

## Regras operacionais

### Medida (caracteres por linha, com espaços)

| Situação | Faixa | Observação |
|---|---|---|
| Texto corrido, coluna única (web desktop, livro) | 60–75 | confortável; 45–75 é a faixa diagnóstica geral |
| Celular, corpo padrão | 35–45 | o limite físico do aparelho vence; aceitável |
| Colunas de jornal/revista | 35–50 | só com bandeira, ou justificado com hifenização |
| Legenda de vídeo | até ~32–42 por linha, máx. 2 linhas | mais curto é melhor no 1080×1920 |
| Abaixo de ~35 | defeito | retornos demais, textura irregular |
| Acima de ~85 | defeito | olho se perde no retorno |

Dentro da faixa, julgue com o olho; não force um número exato. Truque de campo: marque o 45º e o 75º caractere numa linha e veja onde as quebras caem. Na web, `max-width` em `ch` aproxima (o `ch` é a largura do "0" e varia por fonte).

### Entrelinha

| Contexto | Entrelinha (múltiplo do corpo) |
|---|---|
| Texto corrido em tela | 1,4–1,6 (faixa ampla 1,3–1,7) |
| Texto corrido impresso | ~1,2–1,45 (ex.: 10/13, 10/14, 11/15 pt) |
| Medida longa (70+ car.) | lado alto da faixa |
| Medida curta (≤45 car.), legenda | lado baixo (1,25–1,4) |
| Subtítulos 20–32 px | 1,2–1,35 |
| Display (≥ 2,5× o corpo) | 1,0–1,2; caixa alta pode ir a 0,9–1,0 |
| Texto claro sobre escuro | +0,05 a +0,1 em relação ao equivalente escuro sobre claro |
| Fonte de x-height alta ou larga | mais entrelinha |

- Na web, entrelinha sem unidade (1.5), nunca em px fixo.
- O padrão do software (~1,2) num parágrafo é sinal de que ninguém decidiu.
- Em display com itálico ou descendentes (g j p q y), entrelinha abaixo de 1,1 pode cortar letras dentro de caixas com overflow; verifique.

### Espaço vertical

- Espaço acima do título > espaço abaixo (partida 2:1), para que o título se ligue ao bloco que inicia.
- Entre parágrafos: um único sinal — espaço (web, telas, UI) ou recuo (livro, impresso paginado). Nunca os dois.
- Espaço entre parágrafos na tela: 0,75–1× a entrelinha. Recuo no impresso: 1 eme ou 1 entrelinha; sem recuo no primeiro parágrafo após título.

### Alinhamento

| Opção | Use quando | Evite quando |
|---|---|---|
| Bandeira à esquerda | padrão para tela, UI, vídeo, qualquer texto sem controle fino de quebra | — |
| Justificado | impresso ou ebook com hifenização ativa e medida ≥ ~50 car. | web sem hifenização, colunas estreitas, legendas, texto gerado pelo usuário |
| Centralizado | 1–3 linhas curtas: chamada, convite, legenda de vídeo | parágrafos (cada linha começa num lugar diferente) |
| Bandeira à direita | rótulos pareados com um eixo, números | texto corrido |

### Corpo por mídia (pontos de partida, ajuste ao tamanho aparente)

| Mídia | Texto corrido | Mínimo absoluto |
|---|---|---|
| Web desktop/celular | 16–20 px | 16 px para leitura; 12–13 px só para metadado curto |
| Impresso de leitura (livro, revista) | 9–12 pt | 6–7 pt para notas legais, com fonte apropriada |
| Folheto/cartaz A3–A2 lido a 1–2 m | 14–24 pt informação | — |
| Pôster lido de longe | altura de maiúscula ≈ 1 cm para cada 3–4 m de distância de leitura confortável (heurística; teste em escala real) | — |
| Slide projetado | 24–32 pt apoio, 36+ título | 18 pt |

### Texto em tela pequena

- Comece da largura mais estreita real (360–390 px); 20–24 px de margem lateral mínima.
- Títulos web encolhem mais que o corpo: o corpo quase não muda entre celular e desktop (16–18 px); o display pode cair de 72 para 36–40 px.
- Evite hifenização automática em títulos; use quebra balanceada.
- O texto precisa sobreviver a zoom de 200% e às sobrescritas do WCAG 1.4.12 (entrelinha 1,5; espaço entre parágrafos 2em; letras 0,12em; palavras 0,16em) sem cortar.

### Texto sobre imagem e vídeo (1080×1920)

**Conversão:** um quadro de 1080 px de largura aparece num celular com ~360–430 pt de largura lógica, ou seja, ~2,5–3 px do quadro por ponto da tela. 48 px no quadro ≈ 16–19 pt na tela.

| Elemento no 1080×1920 | Faixa de partida |
|---|---|
| Gancho / título | 96–190 px, peso médio a forte, 1–2 linhas (até ~3) |
| Texto de apoio | 48–64 px |
| Legenda falada | 52–72 px, máx. 2 linhas, até ~32–42 car./linha |
| Crédito, fonte, nota | 36–44 px |
| Mínimo absoluto | ~36 px (≈ 12–14 pt na tela); abaixo disso, não use para informação |

- **Áreas seguras (aproximadas, confirme na plataforma atual):** reserve ~250 px no topo, ~350–450 px na base e ~140–180 px na lateral direita para a interface do app (nome, legenda, botões). Texto essencial no miolo; legenda acima da faixa inferior.
- **Tempo de leitura:** ~15–17 caracteres por segundo é o teto confortável para legenda; cada tela de texto fica pelo menos ~1,5 s mais ~0,3 s por palavra (heurística). Se não cabe no tempo, corte texto, não acelere.
- **Legibilidade sobre imagem:** garanta contraste ≥ 4,5:1 medido no pior trecho do fundo que passa atrás do texto (todos os quadros, não só o primeiro). Ferramentas, em ordem de discrição: escolher área calma da imagem; escurecer/clarear o fundo (véu 30–60%); degradê local; sombra suave difusa; caixa sólida atrás da legenda. Contorno fino e sombra dura costumam parecer amadores e somem na compressão.
- Evite pesos finos (≤300) e hairlines em vídeo: a compressão e o movimento os apagam.
- Texto em movimento só deve ser lido quando parado; se a animação dura, adicione esse tempo ao tempo de leitura.

## Falhas comuns

| Sintoma visível | Causa | Correção |
|---|---|---|
| Leitor perde a linha no meio do parágrafo | medida longa para a entrelinha | encurtar medida ou aumentar entrelinha |
| Bloco denso, sem ar | entrelinha ~1,2 padrão, x-height alta | subir para 1,4–1,6 |
| Linhas "soltas", parágrafo não coeso | entrelinha grande demais para a medida curta | reduzir entrelinha |
| Buracos no justificado | medida < 50 car. ou sem hifenização | bandeira, ou hifenizar e alargar |
| Título preso ao parágrafo de cima | espaço simétrico | espaço acima ≈ 2× abaixo |
| Legenda do reel some sob os botões | fora da área segura | subir/encolher a área de texto |
| Texto legível no 1º quadro, ilegível depois | contraste medido num quadro só | medir no pior quadro; véu ou caixa |
| Letra fina tremendo no vídeo | peso leve + compressão | peso ≥ 500, corpo maior |
| Troca de fonte "estragou" o ritmo | igualou corpo nominal | igualar x-height e revisar medida |

## Como verificar

1. **Renderize.** Nunca avalie por valores no CSS ou no painel.
2. Conte caracteres em 3 linhas representativas e compare com a faixa da mídia.
3. Leia um parágrafo inteiro no tamanho e distância reais (celular na mão a 35 cm; impresso em 100%; pôster de longe ou com a tela reduzida para simular a distância). O retorno foi limpo em toda linha?
4. Web: zoom 200% e as sobrescritas do WCAG 1.4.12; nada corta nem sobrepõe.
5. Vídeo: sobreponha a máscara de área segura da plataforma; assista no celular, sem pausar, e confira se todo texto foi lido a tempo.
6. Meça contraste no pior ponto do fundo (conta-gotas em 3–5 quadros diferentes).
7. Squint test no bloco de texto: textura uniforme, sem faixas escuras ou claras.

## Quando quebrar a regra

- **Medida:** autores divergem (Lupton 55–70; Rutter 45–75; Material 40–60; Brown rejeita contar). Trate a faixa como diagnóstico, não como meta.
- **Entrelinha:** não existe valor ideal universal; uma legenda curta pendurada pode ser mais apertada que o texto ao lado.
- **Justificado na web** é aceitável com hifenização confiável, idioma declarado (`lang="pt-BR"`) e coluna larga; sem isso, não.
- **Centralizado em vídeo** é o padrão legítimo para legendas e chamadas curtas.
- **Recuo vs. espaço:** a tradição (Tschichold, via Hochuli) prefere recuo no papel; na tela, espaço é necessário para acessibilidade. A mídia decide.
