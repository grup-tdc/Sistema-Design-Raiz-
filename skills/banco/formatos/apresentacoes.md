---
titulo: Apresentações em slides
quando_consultar: Ao montar um modelo mestre, diagramar slides 16:9 ou revisar uma apresentação que será projetada, compartilhada em tela ou enviada como PDF.
fontes:
  - https://www.pptfaq.com/FAQ00125_How_big_should_text_be-_What-s_the_ideal_font_size-.htm (regra 8H; ~22 pt calculado, 24 pt recomendado para projeção)
  - https://conference.ifas.ufl.edu/nwwws/ppt.html (24–28 pt corpo, 32–36 pt subtítulo, 40 pt título)
  - https://andrewpwheeler.com/tag/poster/ (ângulo visual mínimo ~0,007 rad para material projetado)
  - Conhecimento canônico: Edward Tufte, The Visual Display of Quantitative Information (razão dados/tinta); Nancy Duarte, slide:ology; Garr Reynolds, Presentation Zen (uma ideia por slide)
  - Observação: slide widescreen do PowerPoint/Keynote/Google tem 13,333 × 7,5 pol. = 960 × 540 pt; em 1920×1080 px, 1 pt = 2 px.
---
# Apresentações em slides

## Princípios

1. **Uma ideia por slide.** O título do slide é a ideia escrita como frase ("A receita caiu 12% no 2º trimestre"), não um rótulo ("Receita"). Se o slide tem duas conclusões, são dois slides.
2. **O slide acompanha a fala, não a substitui.** Projetado com apresentador: pouco texto, imagem e número grandes. Enviado como PDF para leitura: pode ter mais texto, mas então é um documento diagramado em 16:9, e precisa ser tratado como tal. Decida qual dos dois está sendo feito antes de começar.
3. **A sala é pior que a tela do notebook.** Projetor reduz contraste, lava cores claras e corta bordas; a última fileira lê muito menos que você. Desenhe para a última fileira.
4. **Hierarquia visível em 3 segundos.** Quem olha o slide entende em 3 s o que é principal. Mais que três níveis de texto num slide indica que o conteúdo precisa ser dividido.
5. **O modelo mestre é o sistema da marca em forma de slide.** Grade, posições e estilos vêm do DESIGN.md do projeto; o mestre só garante que todos os slides obedeçam.

## Regras operacionais

### Quadro e grade (1920×1080 px, 16:9)

| Item | Valor recomendado | Observação |
|---|---|---|
| Tamanho | 1920×1080 px (13,333×7,5 pol.) | 4:3 (1440×1080) só se o local exigir |
| Margem externa | 96–120 px laterais; 72–96 px topo/base | Projetores podem cortar 2–5% da borda |
| Zona de texto crítico | x 120–1800, y 90–990 | Nada essencial fora dela |
| Grade | 12 colunas, calha 24–32 px; ou 6 colunas para slides simples | Mesma grade em todos os layouts |
| Linha de base | Múltiplos de 8 px | Facilita alinhar texto entre slides |
| Posição do título | Fixa em todos os layouts de conteúdo (mesma altura y) | Evita "pulo" ao passar de slide |
| Elementos fixos (logo, número, rodapé) | Faixa de 40–60 px na base, discretos | Fora dos slides de abertura e transição, se o DESIGN.md permitir |

```
 0    120                                        1800  1920
   0 ┌─────────────────────────────────────────────────┐
  90 │    ┌──────────────────────────────────────┐     │
     │    │ TÍTULO = a ideia (frase)  64–96 px   │     │
     │    ├──────────────────────────────────────┤     │
     │    │                                      │     │
     │    │  conteúdo: 1 gráfico OU 1 imagem     │     │
     │    │  OU até ~5 tópicos curtos  ≥ 48 px   │     │
     │    │                                      │     │
 990 │    └──────────────────────────────────────┘     │
     │    fonte · logo · nº (faixa de rodapé)  24–28px│
1080 └─────────────────────────────────────────────────┘
```

### Tamanho mínimo de texto

| Nível | Projetado (sala) | Tela compartilhada / PDF de leitura |
|---|---|---|
| Título do slide | 64–96 px (32–48 pt) | 56–80 px |
| Número ou frase de destaque | 120–240 px | 96–200 px |
| Corpo / tópicos | ≥ 48 px (24 pt); 56 px (28 pt) em sala grande | ≥ 36 px (18 pt) |
| Rótulo de gráfico, eixo, legenda | ≥ 36 px (18 pt) | ≥ 28 px (14 pt) |
| Fonte / nota de rodapé | ≥ 24 px (12 pt) — não é para ser lido da plateia | ≥ 22 px |

Regra de distância: a altura da letra minúscula precisa ser cerca de 1/50 da altura da tela vista da última fileira, quando a distância até ela é de até 8 vezes a altura da tela. Se a sala é mais funda, aumente tudo.

Quantidade: até ~5 tópicos de até ~8 palavras cada, ou um parágrafo de no máximo ~30 palavras. Passou disso, divida o slide ou leve para material de apoio.

### Gráficos em slides

| Regra | Aplicação |
|---|---|
| Um gráfico, uma mensagem | O título do slide diz o que o gráfico prova |
| Destaque em vez de legenda | Série principal na cor de destaque da marca; demais em cinza; rótulo direto na linha/barra em vez de legenda separada |
| Menos tinta | Sem grade pesada, sem 3D, sem sombra; eixo só se necessário; números arredondados |
| Tipo certo | Comparação: barras. Evolução: linha. Parte do todo com até 3 partes: barra empilhada ou rosca; mais que isso, barras ordenadas |
| Tabelas | No máximo ~5×5 células legíveis; destaque a linha ou célula que importa |
| Revelação progressiva | Construir o gráfico em passos (eixo → série de referência → série principal) quando a história tem etapas |
| Cor e projeção | Diferenças sutis de tom somem no projetor: contraste de luminosidade entre série principal e secundárias |

Para escolha de forma e paleta de gráfico, consulte também o banco de visualização de dados do plugin.

### Modelo mestre

| Layout | Conteúdo |
|---|---|
| Capa | Título, subtítulo, autor/data, logo |
| Abertura de seção | Número e nome da seção; cor de fundo diferenciada se o DESIGN.md prever |
| Título + conteúdo | O padrão; título fixo, área de corpo na grade |
| Título + 2 colunas | Comparação, antes/depois |
| Destaque | Uma frase ou número grande, centralizado ou na grade |
| Imagem cheia | Foto sangrando, com área para legenda curta em zona calma |
| Gráfico | Título + área de gráfico + linha de fonte |
| Encerramento | Contato, chamada, logo |

Configure no mestre: estilos de título e corpo (não formatação manual), cores do tema com os HEX do DESIGN.md, fontes do tema com substituta segura, espaços reservados nas posições da grade, rodapé e numeração automáticos. Incorpore as fontes ou exporte PDF quando o arquivo for aberto em outro computador.

### Animação em slide

Use para revelar em ordem (um tópico por vez, um gráfico em etapas). Entradas de 200–400 ms, sem efeitos de rotação ou salto. Transição entre slides: corte ou dissolve curto (≤ 300 ms); transição de "movimento contínuo" (morph) só quando o mesmo objeto muda de lugar ou tamanho entre slides.

## Falhas comuns

| Sintoma | Causa | Correção |
|---|---|---|
| Plateia lê em vez de ouvir | Slide é o roteiro da fala | Mover texto para as notas; manter frase-título e imagem |
| Texto ilegível no fundo da sala | Corpo de 14–18 pt | ≥ 24 pt (48 px) no corpo |
| Título "pula" entre slides | Caixas de texto soltas em vez de espaços reservados do mestre | Usar layouts do mestre |
| Gráfico não diz nada | Título genérico, todas as séries com mesmo peso | Título-conclusão + uma série em destaque |
| Cores somem no projetor | Contraste baixo, tons pastel | Testar em projetor ou com contraste reduzido; aumentar diferença de luminosidade |
| Bordas cortadas | Elementos encostados na borda | Margem ≥ 96 px |
| Fonte trocada em outro computador | Fonte não instalada/incorporada | Incorporar ou exportar PDF |
| Cada slide com um visual | Formatação manual por slide | Restringir aos layouts do mestre |
| Tabela gigante ilegível | Planilha colada no slide | Resumir; levar o detalhe para anexo |

## Como verificar

1. **Teste dos 3 segundos:** mostre cada slide por 3 s a alguém (ou a si, depois de um tempo); a pessoa deve repetir a ideia principal.
2. **Miniatura:** veja a apresentação no modo de classificação com miniaturas de ~200 px; títulos devem continuar legíveis e a sequência deve contar a história só pelos títulos.
3. **Distância:** com o slide em tela cheia num notebook, afaste-se ~2,5 m (simula a última fileira de uma sala média). O corpo precisa ser lido.
4. **Projeção ou simulação:** projete se possível; senão, reduza contraste e saturação do render em ~30% e confira se gráficos e textos claros sobrevivem.
5. **Grade:** ative as guias do mestre e passe slide a slide procurando elementos fora da zona de texto e títulos fora de posição.
6. **PDF:** exporte e abra em outro dispositivo para conferir fontes e imagens.

## Quando quebrar a regra

- **Documento para leitura (não projetado):** densidade maior é aceitável; trate como página editorial em 16:9 e aplique as regras de tipografia de texto corrido.
- **Palestra de imagem ou frase única** (estilo keynote): slides só com uma palavra ou foto podem ficar sem título.
- **Tela grande de evento (LED):** margens e tamanhos mudam conforme a proporção real do painel; peça as especificações técnicas e refaça a grade.
- **Material técnico** (código, fórmulas, diagramas detalhados) que exige leitura de perto: distribuir junto como PDF e manter no slide só o trecho comentado em tamanho legível.
