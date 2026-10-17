---
titulo: Op Art (Arte Óptica) e Cinetismo
periodo: c. 1955–1975 · Paris, Londres, Caracas, São Paulo; consagração em Nova York (1965)
palavras_de_carater: vibrante, hipnótico, preciso, geométrico, ilusório, rítmico, cinético, perceptivo, preto-e-branco
quando_consultar: Quando a peça precisa de impacto perceptivo com geometria pura (movimento, vibração, profundidade ilusória) sem imagem figurativa, sobretudo em motion.
fontes: William C. Seitz, The Responsive Eye (catálogo, MoMA, 1965, PDF em moma.org); Bridget Riley, The Eye's Mind: Collected Writings 1965–1999 (Thames & Hudson, 1999); Philip B. Meggs e Alston Purvis, História do Design Gráfico (Cosac Naify, 2009); moma.org/collection; cruz-diez.com; bridgetrileyartfoundation.org
---
# Op Art (Arte Óptica) e Cinetismo

## Ideia e contexto
A Op Art transformou a percepção no próprio tema. Victor Vasarely, em Paris, já explorava padrões ilusórios desde os anos 1930 (as zebras) e sistematizou nos anos 1950–60 uma "unidade plástica" de quadrados e círculos modulares e coloridos. Bridget Riley, em Londres, levou o preto e branco ao limite: ondas e grades que tremem na retina. Na América Latina, Jesús Rafael Soto e Carlos Cruz-Diez (Venezuela) e Abraham Palatnik (Brasil) fizeram o movimento real e a cor mudarem com o espectador. A exposição *The Responsive Eye* (MoMA, 1965, curadoria de William C. Seitz) consagrou o termo, e a moda e a publicidade se apropriaram dele quase de imediato. No design gráfico, o grande exemplo é a identidade dos Jogos do México 1968 (Lance Wyman, Eduardo Terrazas, Pedro Ramírez Vázquez), com linhas concêntricas que irradiam do logotipo para a cidade.

O princípio que se traduz: **um sistema geométrico simples e repetido que, variando passo a passo, produz no olho movimento, profundidade ou cor que não estão lá**.

## Princípios formais
- **Composição:** campo todo coberto por um padrão (*all-over*), sem figura e fundo tradicionais. O ponto focal surge da deformação do padrão (uma bolha, uma torção).
- **Forma:** linhas paralelas, círculos concêntricos, quadrados em grade, xadrez e ondas. A variação é progressiva: espessura, espaçamento, curvatura ou rotação mudam gradualmente.
- **Cor:** preto e branco puro (Riley, primeira fase) para contraste máximo, ou escalas cromáticas progressivas (Vasarely). Em Cruz-Diez, faixas finas de cor geram uma terceira cor no olho.
- **Tipografia:** pouca na arte. No design, letras construídas com linhas paralelas que continuam o padrão (México 68).
- **Imagem:** nenhuma figurativa. A "imagem" é o efeito.
- **Textura:** zero, porque a precisão é essencial e qualquer ruído quebra a ilusão.

## Vocabulário visual
Moiré; linhas que ondulam; esfera que "estufa" uma grade; xadrez deformado; círculos concêntricos irradiantes; listras de espessura variável; cor que vibra nas bordas; letra-linha (multilinear).

## Tipografia
- **Histórico:** letreiramento multilinear desenhado (México 68); grotescas geométricas neutras para textos de apoio.
- **Equivalentes gratuitos:** Monoton (letras de linhas paralelas, bom para títulos); Bungee Outline/Bungee Inline (camadas de contorno). Para textos de apoio, Jost ou Inter.
- O melhor caminho é **construir** a letra com o mesmo sistema de linhas do padrão (offset path repetido), para a tipografia continuar a ilusão.

## Paleta típica
Valores aproximados.
- Preto puro `#000000` + branco `#FFFFFF`: o núcleo, com contraste máximo.
- Escala Vasarely: azul `#1D3FBB` → violeta `#7B2FBE` → magenta `#E0218A`, em passos regulares.
- Vermelho `#E63B2E` + verde `#1FA35B`: faixas finas de mistura óptica (Cruz-Diez).
- Amarelo `#FFD23F`: acento de energia.

## Tradução para hoje
- **Post 1080:** padrão preto e branco com deformação que "salta" no centro, onde fica a mensagem curta. Atenção: compressão de imagem (JPEG no Instagram) gera artefatos em linhas finas. Use linhas com no mínimo 4–6 px e exporte em PNG.
- **Landing page:** padrão como fundo do herói (SVG gerado por código, leve e preciso) com o texto sobre um campo calmo. Evite padrão atrás de texto corrido. Respeite `prefers-reduced-motion` se o padrão se mover.
- **Motion/vídeo:** território ideal. Linhas que ondulam em loop, grades que se deformam, rotação de círculos concêntricos, transições por padrão (wipe de listras). Evite flicker de alto contraste acima de 3 vezes por segundo (WCAG 2.3.1).
- **Impresso:** é onde funciona melhor, com precisão total. Serigrafia ou offset com preto chapado, sem retícula nas linhas. Sinalização e grafismo ambiental (como no México 68).

## Combina / não combina
- **Combina:** tecnologia, música eletrônica, moda, arquitetura, eventos de ciência e arte, marcas que querem energia sem ilustração, identidades com grafismo de sistema.
- **Não combina:** texto longo, públicos sensíveis a estímulos visuais, peças que precisam de calor humano ou narrativa figurativa.

## Armadilhas
- Moiré acidental: linhas finas em tela ou em compressão de vídeo criam padrões indesejados. Teste no dispositivo final.
- Desconforto real: padrões de alto contraste podem causar enjoo e, em movimento, risco de crise fotossensível. Dose em área e tempo.
- Usar filtro "op" pronto em vez de um sistema com regra de progressão. O efeito vem da precisão matemática.
- Texto sobre padrão: a ilusão engole a leitura. Reserve um campo calmo.

## Referências
- **Victor Vasarely:** *Zebra* (1937), série *Vega* (anos 1960–70), sistema de unidades plásticas.
- **Bridget Riley:** *Movement in Squares* (1961), *Current* (1964, MoMA). Livro *The Eye's Mind* (Thames & Hudson, 1999).
- **Carlos Cruz-Diez:** série *Physichromie*. **Jesús Rafael Soto:** penetráveis e vibrações.
- **Abraham Palatnik (Brasil):** aparelhos cinecromáticos e objetos cinéticos.
- **Lance Wyman, Eduardo Terrazas e Pedro Ramírez Vázquez:** identidade dos Jogos do México 1968.
- **Catálogo:** Seitz, *The Responsive Eye* (MoMA, 1965).
- **Acervos online:**
  - https://www.moma.org/documents/moma_catalogue_2914_300190234.pdf: catálogo de *The Responsive Eye*.
  - https://www.moma.org/collection
  - https://cruz-diez.com
  - https://bridgetrileyartfoundation.org
  - https://collection.cooperhewitt.org
