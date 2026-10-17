---
titulo: Contraste e acessibilidade de cor
quando_consultar: Sempre que houver texto, ícone ou controle sobre uma cor, imagem ou vídeo, e antes de afirmar que uma peça "passa" em contraste.
fontes:
  - W3C, WCAG 2.2 — critérios 1.4.1, 1.4.3, 1.4.6 e 1.4.11; definição de luminância relativa (padrão W3C, citado como norma)
  - jakubkrehel/skills, better-colors/contrast.md e SKILL.md (MIT) — medir o par renderizado, ajustar luminosidade primeiro, "nunca reporte contraste que não mediu"
  - pbakaus/impeccable, skill/reference/colorize.md (Apache-2.0) — tabela de mínimos, simulação de deficiência
  - wondelai/skills, refactoring-ui (MIT)
  - APCA (Accessible Perceptual Contrast Algorithm), mencionado como alternativa perceptual
---
# Contraste e acessibilidade de cor

## Princípios

1. **Contraste é número, não impressão.** O olho de quem desenhou se acostuma ao próprio layout, e monitores calibrados de designer mentem a favor. Nenhum par é declarado aprovado sem medição. Valor não medido é reportado como "não verificado".

2. **A fórmula WCAG 2, em linguagem direta.**
   - Cada canal sRGB (0–255) vira fração: `c = valor / 255`.
   - Linearize (desfaz a curva gama): se `c ≤ 0,04045`, `c_lin = c / 12,92`; senão `c_lin = ((c + 0,055) / 1,055)^2,4`.
   - **Luminância relativa:** `L = 0,2126·R + 0,7152·G + 0,0722·B` (com os canais linearizados). O verde pesa mais porque o olho é mais sensível a ele; o azul quase não conta. Por isso um azul saturado é "escuro" e um amarelo saturado é "claro", mesmo com saturação parecida.
   - **Razão de contraste:** `(L_clara + 0,05) / (L_escura + 0,05)`. Vai de 1:1 (iguais) a 21:1 (preto no branco). O `0,05` modela o reflexo da tela.
   - Exemplos medidos: branco sobre `#767676` = 4,54:1 (passa no limite); branco sobre `#777777` = 4,48:1 (reprova). Branco sobre `#3B82F6` = 3,68:1; sobre `#2563EB` = 5,17:1.

3. **Limiares WCAG 2.2.**

| Conteúdo | AA | AAA |
|---|---|---|
| Texto normal | 4,5:1 | 7:1 |
| Texto grande (≥ 24 px regular, ou ≥ 18,66 px / 14 pt em negrito) | 3:1 | 4,5:1 |
| Componentes de interface e gráficos necessários para entender (borda de campo, ícone sem rótulo, anel de foco, linha de gráfico) | 3:1 | — |
| Logotipos, texto decorativo, controles desativados | isentos | isentos |

   Para vídeo e peça social, "texto grande" é relativo ao tamanho exibido no celular, não ao canvas: 48 px num quadro 1080×1920 vira algo como 17 px numa tela típica. Trate legenda como texto normal.

4. **APCA como segunda opinião.** O APCA mede contraste perceptual (valor Lc), considera polaridade (claro sobre escuro difere de escuro sobre claro) e peso/tamanho da fonte. Referência aproximada: Lc 75+ para texto corrido, Lc 60 para rótulos e títulos, Lc 45 para texto muito grande. Ainda não é a norma de conformidade; quando houver exigência legal ou contratual, reporte WCAG 2 e, se útil, acrescente o Lc.

5. **Cor nunca é o único sinal** (WCAG 1.4.1). Erro, status, categoria, link no meio de texto, item selecionado: cada um precisa de um segundo canal — ícone, rótulo, padrão, posição, sublinhado, espessura.

## Regras operacionais

- **Meça o par realmente renderizado.** O fundo que conta é o que está imediatamente atrás do texto (o cartão, a faixa, o quadro do vídeo), não o fundo da página. Transparências (`rgba`, opacidade, `color-mix` com transparente, overlay) só se medem depois de compostas.
- **Corrija pela luminosidade, mantendo o matiz.** Contraste responde quase só a luminosidade. Escureça ou clareie o texto (ou o fundo) em OKLCH `L`, mantendo matiz e reduzindo croma só se sair do gamut. Trocar o matiz para "consertar" contraste vira mudança de paleta e quase não move o número.
- **Fundo de luminosidade média é armadilha.** Perto de OKLCH L ≈ 0,6–0,75, nem preto nem branco alcançam texto corrido confortável. Se o texto precisa ser longo, mova o fundo para uma das pontas.
- **Escolha a polaridade medindo.** O cruzamento neutro do WCAG fica perto de L ≈ 0,56 em OKLCH: acima, texto escuro tende a vencer; abaixo, texto claro. Em fundo colorido, meça preto e branco e escolha o maior, verificando se ele passa.
- **Cor da marca que reprova não é "escurecida em silêncio".** Ela continua sendo a marca em áreas grandes; o texto sobre ela usa outra cor, ou o preenchimento interativo usa um tom mais escuro da mesma rampa. Registre a decisão.
- **Estados também contam:** hover, foco, selecionado, erro, desativado-mas-legível, placeholder. O anel de foco precisa de 3:1 contra o fundo *e* ser visível sobre o componente.
- **Texto sobre imagem ou vídeo:** não existe "uma" cor de fundo. Garanta contraste com um destes recursos, nesta ordem de preferência:
  1. **Área calma:** posicione o texto na região de menor detalhe e luminosidade uniforme (céu, parede, desfoque de fundo). Na filmagem, combine isso com quem grava.
  2. **Scrim:** gradiente escuro (ou claro) sob o texto, ocupando a faixa necessária. Meça o texto contra o ponto *mais claro* da imagem sob o scrim.
  3. **Caixa/faixa sólida** ou semitransparente atrás do texto; o modo mais garantido para legenda.
  4. **Sombra ou contorno** suave no texto: ajuda em detalhes, mas não substitui scrim em imagem movimentada.
- **Vídeo muda a cada quadro.** Verifique o pior quadro do trecho em que o texto aparece, não o quadro de capa.
- **Meça os dois temas.** Um par aprovado no claro pode reprovar no escuro, principalmente no APCA.
- **Use o script de contraste do plugin** (`node ${CLAUDE_PLUGIN_ROOT}/skills/metodo/scripts/contraste.mjs "#texto" "#fundo"`; para a peça inteira, `auditar.mjs`) com os valores hex reais ou amostrados do render. Reporte: par, razão medida, limiar exigido, aprova/reprova.

## Falhas comuns

| Sintoma | Causa | Correção |
|---|---|---|
| Texto cinza claro "elegante" ilegível no celular | cinza secundário abaixo de 4,5:1 | escurecer o cinza em L até passar; manter o matiz |
| Branco sobre acento médio reprova | acento perto de L 0,6 (ex.: tom 500 de rampas) | usar o tom 600/700 da rampa para preenchimento com texto branco |
| Legenda some em parte do vídeo | medido só no quadro de capa | medir o pior quadro; adicionar caixa ou scrim |
| Overlay translúcido falha sobre conteúdo claro | contraste depende do que passa por trás | aumentar opacidade ou usar superfície sólida |
| Gráfico ilegível para daltônicos | séries diferenciadas só por vermelho/verde | variar luminosidade entre séries, acrescentar rótulo direto ou padrão |
| Link no meio do texto invisível | só a cor diferencia | sublinhado ou peso, além da cor |
| Correção de contraste mudou a identidade | matiz trocado em vez de luminosidade | voltar ao matiz original e ajustar só L |
| Relatório diz "passa" sem número | estimativa visual | medir com o script e citar a razão |

## Como verificar

1. **Script de contraste do plugin** para cada par de texto/ícone/controle, em cada tema e estado. Amostre a cor do render final (conta-gotas sobre PNG exportado), não do arquivo de origem, quando houver transparência, imagem ou compressão.
2. **Escala de cinza:** a peça dessaturada ainda separa texto de fundo e mantém os estados distinguíveis.
3. **Simulação de daltonismo:** protanopia, deuteranopia, tritanopia e acromatopsia (DevTools > Rendering, ou prova de cor em Photoshop/Illustrator). Informação deve sobreviver.
4. **Teste no aparelho:** abra no celular com brilho baixo (30–40%) e ao ar livre se possível. É o pior caso real de quem vê post e reel.
5. **Vídeo:** exporte quadros dos trechos com texto (os mais claros e mais movimentados) e meça.
6. **Relatório:** valores não medidos aparecem como "não verificado", nunca como aprovados.

## Quando quebrar a regra

- **Logotipo e texto puramente decorativo** (marca d'água, textura tipográfica) estão isentos, desde que nenhuma informação dependa deles.
- **Controles desativados** podem ficar abaixo de 4,5:1; mire perto de 3:1 para não sumirem.
- **Peça artística/pôster de impacto** pode usar contraste baixo de propósito em elementos secundários, desde que a informação essencial (data, local, chamada) passe.
- **APCA no lugar do WCAG** só quando o projeto declarar isso no `DESIGN.md`; caso contrário WCAG 2 é a referência de conformidade.
