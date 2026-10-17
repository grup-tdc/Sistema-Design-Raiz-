---
titulo: Post de rede social e pôster
quando_consultar: Ao montar ou revisar qualquer peça estática para feed, carrossel, capa, flyer ou pôster, antes de fixar o tamanho do quadro e a posição do texto.
fontes:
  - https://www.inro.social/blog/instagram-post-size (grade 3:4, recorte de ~67 px na largura de posts 4:5; consultado out/2026)
  - https://help.hopperhq.com/en/articles/10907941-instagram-s-vertical-grid (grade vertical do perfil)
  - https://www.hopperhq.com/blog/instagram-reel-size/ (capa de Reel recortada para 1080×1440 na grade)
  - https://www.krumzi.com/blog/instagram-carousel-size-guide (primeiro card define a proporção; até 20 cards)
  - https://postiz.com/blog/linkedin-post-dimensions e https://recurpost.com/blog/linkedin-post-size/ (LinkedIn 1200×627, 1080×1350, documento PDF)
  - https://banners.com/c/how-far-away-can-someone-read-a-banner-complete-banner-font-size-guide e https://www.signs.com/blog/?p=16381 (altura de letra × distância; regra prática de fornecedores, não norma)
  - https://andrewpwheeler.com/tag/poster/ (ângulo visual mínimo de ~0,007 rad)
  - adewale/swiss-poster-skill, swiss-poster/SKILL.md (MIT) — ideia de que o pôster precisa funcionar em miniatura e em escala cheia
  - Observação: Instagram, TikTok e LinkedIn não publicam zonas seguras orgânicas oficiais; os números abaixo são consenso de ferramentas de terceiros e das especificações de anúncios da Meta, com margem conservadora.
---
# Post de rede social e pôster

## Princípios

1. **O quadro tem duas vidas.** Um post aparece no feed (quadro inteiro, ~390 pt de largura no celular) e na grade do perfil (recortado e minúsculo). Um pôster aparece de longe (3 a 10 m) e de perto (50 cm). Cada peça é desenhada para a pior das suas vidas, não para a tela do editor.
2. **Hierarquia em três níveis, no máximo.** Nível 1 é o que se lê sem querer (uma frase ou uma imagem). Nível 2 é o que convence (2 a 3 linhas). Nível 3 é o que se consulta (data, local, endereço, @). Se houver um quarto nível disputando atenção, ele vai para a legenda do post ou para outra peça.
3. **Zona segura é um contrato com a plataforma, não uma margem estética.** A margem visual vem do DESIGN.md do projeto; a zona segura é o limite mínimo abaixo do qual a interface ou o recorte destroem a informação. As duas coexistem: use a maior.
4. **Carrossel é sequência, não pilha.** Cada card precisa justificar o deslize seguinte. O primeiro card funciona como capa e gancho; o último fecha (síntese, chamada ou assinatura).
5. **A miniatura decide.** Se o post não comunica a ~110 px de largura (tamanho aproximado de uma célula da grade do perfil num celular), o nível 1 está fraco ou pequeno demais.

## Regras operacionais

### Formatos de feed (2026)

| Plataforma / uso | Tamanho de exportação | Proporção | Observação |
|---|---|---|---|
| Instagram feed retrato (padrão recomendado) | 1080×1350 px | 4:5 | Maior área ocupada no feed |
| Instagram feed quadrado | 1080×1080 px | 1:1 | Perde altura no feed; útil para conteúdo antigo ou grade quadrada |
| Instagram paisagem | 1080×566 px | 1,91:1 | Evitar para conteúdo com texto |
| Instagram carrossel | igual ao primeiro card (use 1080×1350) | 4:5 | Até 20 cards; todos herdam a proporção do primeiro |
| Grade do perfil Instagram | exibe recorte 3:4 | 3:4 | Post 4:5 perde ~34 px de cada lado; post 1:1 perde ~135 px de cada lado (fica 810 px de largura visível) |
| Capa de Reel | 1080×1920 px | 9:16 | Na grade só aparece o miolo 1080×1440 (y = 240 a 1680) |
| LinkedIn imagem única | 1080×1350 ou 1200×1200 px | 4:5 / 1:1 | 4:5 ocupa mais tela |
| LinkedIn link / artigo | 1200×627 px | 1,91:1 | Menor que isso pode virar miniatura pequena |
| LinkedIn documento (PDF carrossel) | 1080×1350 px por página (fontes citam até 1200×1500) | 4:5 | Todas as páginas no mesmo tamanho |

Exporte em sRGB, JPG qualidade alta ou PNG para peças com muito texto chapado. O Instagram recomprime: texto fino e cor saturada em vermelho/azul puros sofrem mais.

### Zonas seguras do post 4:5 (1080×1350)

```
 0 ┌───────────────────────────────┐
   │ ░░ 34 px      (grade 3:4)  ░░ │  ░ = cortado na grade do perfil
   │░┌───────────────────────────┐░│
   │░│  margem mínima 60–80 px   │░│
   │░│                           │░│
   │░│   ZONA DE TEXTO CRÍTICO   │░│
   │░│   x 100–980 (~880 px)     │░│
   │░│   y 80–1270               │░│
   │░│                           │░│
   │░└───────────────────────────┘░│
1350└───────────────────────────────┘
     34                       1046
```

| Zona | Valor recomendado | Faixa encontrada | Motivo |
|---|---|---|---|
| Laterais (recorte da grade 3:4) | 100 px de cada lado para texto | 34 px é o corte real | Corte + respiro para não encostar na borda da célula |
| Topo e base | 80 px | 60–100 px | Cantos arredondados e ícones de "várias fotos" no feed |
| Área central "sempre visível" | 880×1190 px centrada | — | Serve feed, grade e pré-visualização do LinkedIn |

Para post 1:1 a grade 3:4 recorta ~135 px de cada lateral: texto crítico entre x = 180 e x = 900. Para a capa de Reel, coloque título e rosto entre y = 300 e y = 1380 (miolo 3:4 menos respiro).

### Carrossel

| Regra | Valor prático |
|---|---|
| Primeiro card | Nível 1 legível em miniatura; promete o que os próximos entregam |
| Continuidade | Um elemento atravessa a borda entre cards (fio, forma, foto) ou uma grade idêntica se repete em todos; posição do título fixa |
| Elementos que "vazam" para o próximo card | Desenhe numa prancheta contínua de N×1080 px e fatie; confira a junção a cada 1080 px |
| Ritmo | Alternar card denso / card de respiro; não mais que 2 cards de texto corrido seguidos |
| Indicador de progresso | Se usar (1/7), mesma posição e tamanho em todos |
| Último card | Fecha com síntese, chamada ou assinatura; nunca termina num card de transição |
| Texto por card | 1 ideia; até ~30 palavras no corpo |

### Texto mínimo legível no celular (quadro de 1080 px de largura)

O feed exibe o quadro a ~390 pt de largura, fator ≈ 0,36. Corpo de 11 pt na tela equivale a ~30 px no arquivo.

| Função | Mínimo no arquivo (1080 px) | Confortável |
|---|---|---|
| Título (nível 1) | 72 px | 90–160 px |
| Corpo (nível 2) | 32 px | 36–44 px |
| Rodapé / crédito / @ (nível 3) | 24 px | 28 px |
| Texto que precisa ler na grade (~110 px de célula, fator ≈ 0,1) | 100 px | 120 px+ |

Peso: abaixo de 32 px, evite pesos Light/Thin e serifas de contraste alto; a recompressão as apaga.

### Pôster e flyer: distância de leitura

Regra prática de sinalização: cerca de 2,5 cm de altura de maiúscula a cada 3 m de distância para leitura confortável (1 polegada a cada 10 pés). A conta por ângulo visual dá números parecidos (altura ≈ distância × 0,007).

| Distância de leitura | Nível 1 (altura da maiúscula) | Nível 2 | Nível 3 |
|---|---|---|---|
| 0,5 m (flyer na mão) | 8–12 mm | 3–4 mm (~14–18 pt) | 2 mm (~8–9 pt) |
| 1–2 m (mural, balcão) | 20–30 mm | 8–10 mm | 4–5 mm (~18–24 pt) |
| 3–5 m (corredor, parede) | 40–60 mm | 15–25 mm | 8–12 mm |
| 10 m (rua, fachada) | 100 mm+ | 40 mm | não use nível 3 |

Pôster A3 (297×420 mm) lido a 1–2 m: nível 1 ocupando 30–50% da largura; nível 3 a partir de 14 pt. Pôster A2/A1 escala proporcionalmente. Converta para impressão com `impresso.md` (sangria, margem, resolução).

## Falhas comuns

| Sintoma | Causa | Correção |
|---|---|---|
| Título cortado na grade do perfil | Texto encostado nas laterais de um 4:5 ou de um 1:1 | Respeitar 100 px laterais; testar recorte 3:4 |
| Capa de Reel sem título na grade | Título no topo do 9:16 | Título entre y 300 e 1380 |
| Carrossel com "degrau" na junção | Elemento contínuo desenhado card a card | Prancheta única e fatiamento exato a cada 1080 px |
| Cards seguintes mudam de proporção | Primeiro card exportado em 1:1 | Primeiro card define tudo: exportar todos em 4:5 |
| Post parece vazio na miniatura | Nível 1 pequeno, muitos elementos de mesmo peso | Aumentar nível 1 até ≥ 100 px; cortar um nível |
| Texto borrado depois de publicado | Fonte fina, vermelho puro, JPG muito comprimido | Peso maior, PNG ou JPG qualidade alta, cor menos saturada atrás do texto |
| Pôster lido só de perto | Hierarquia achatada (tudo entre 20 e 40 pt) | Escala de pelo menos 1:3 entre níveis |
| Flyer com informação prática ilegível | Endereço e data em 6 pt | Nível 3 nunca abaixo de 8 pt impresso |

## Como verificar

1. **Sobrepor a zona segura:** exporte uma camada-guia (retângulos semitransparentes nas faixas de recorte e margem) e aplique sobre o render final; nada de nível 1 ou 2 pode tocar a faixa.
2. **Miniatura:** reduza o render para 110 px de largura (e 1013×1350 → recorte 3:4 antes). O nível 1 deve continuar identificável; se não, a peça falha.
3. **Celular real:** envie o arquivo para o próprio telefone e olhe à distância do braço, com brilho médio.
4. **Carrossel:** monte os cards lado a lado numa tira e confira junções, alinhamento do título e o ritmo denso/respiro.
5. **Pôster:** imprima em A4 em escala e olhe a uma distância proporcional (pôster A1 lido a 4 m ≈ A4 lido a 1 m). Se o nível 1 não salta, aumente.
6. **Plataforma:** publique como rascunho/conta de teste quando houver dúvida sobre recorte; as interfaces mudam sem aviso.

## Quando quebrar a regra

- **Grade do perfil planejada como mosaico** (uma imagem dividida em vários posts): aceite que cada post isolado no feed perde sentido e trate a grade como peça principal.
- **Peça puramente fotográfica ou de textura**, sem texto: zonas seguras viram só cuidado com o rosto e o ponto focal.
- **Pôster de linguagem experimental** (tipografia como imagem, ruptura de grade): a hierarquia pode ser invertida de propósito, desde que a informação prática (nível 3) continue legível de perto.
- **Formato quadrado** quando a marca já tem uma grade 1:1 consolidada e a troca quebraria a coerência do perfil; registre a decisão no DESIGN.md.
