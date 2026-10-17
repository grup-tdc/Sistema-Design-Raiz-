---
titulo: Skeuomorfismo, flat e sucessores (Material, neumorfismo, glassmorphism)
periodo: c. 2000–hoje · interfaces de sistemas operacionais, apps e web (Apple, Microsoft, Google, comunidades Dribbble)
palavras_de_carater: tátil, realista, plano, limpo, material, suave, translúcido, profundo, sistemático, familiar
quando_consultar: Quando é preciso decidir quanto de profundidade, realismo ou planicidade uma interface ou peça digital deve ter — e por quê.
fontes: Google, Material Design, https://m3.material.io/ ; Apple, Human Interface Guidelines — Materials, https://developer.apple.com/design/human-interface-guidelines/materials ; Michal Malewicz, "Neumorphism in user interfaces", UX Collective, c. 2019–2020; "Neumorphism will not kill the skeuomorphism star", UX Collective, https://uxdesign.cc/neumorphism-will-not-kill-the-skeuomorphism-star-bbbdafe1905e ; Built In, "Neumorphism shows accessibility is still a UI afterthought for some", https://builtin.com/design-ux/neumorphism-accessibility
---
# Skeuomorfismo, flat e sucessores

## Ideia e contexto
É uma linhagem de respostas à mesma pergunta: **quanto a tela deve imitar o mundo físico?** Cada estilo resolve um problema e cria outro.

- **Skeuomorfismo (auge c. 2007–2012):** interface que imita objetos — couro no calendário, feltro no jogo, botões de metal, sombras e brilhos (iOS até a versão 6). *Resolve:* ensina o novo pelo conhecido; affordance óbvia (parece apertável, é apertável). *Custa:* ruído visual, inconsistência, metáforas que envelhecem (quem ainda usa fita cassete?).
- **Flat (c. 2010–2014):** Metro/Windows Phone 7 (2010) e iOS 7 (2013) cortam textura, sombra e brilho; sobram cor, tipografia e ícones de traço. *Resolve:* clareza, escala para muitas telas, performance, foco no conteúdo. *Custa:* perda de affordance — botão parece texto, texto parece botão.
- **Material Design (Google, 2014):** "flat com física". Superfícies de papel com elevação (sombra que indica camada), movimento com significado, grade de 8 dp. Material You (2021) adiciona cor extraída do papel de parede; Material 3 Expressive (2025) traz forma e movimento mais elásticos. *Resolve:* devolve hierarquia de profundidade ao flat, como sistema documentado.
- **Neumorfismo (2019–2020):** nasceu de uma imagem viral de Alexander Plyuto no Dribbble; Michal Malewicz difundiu o nome. Elementos em relevo ou baixo-relevo da mesma cor do fundo, com sombra clara e escura. *Resolve:* uma volta do tátil com aparência suave. *Custa:* contraste baixíssimo, estados indistintos — o próprio Malewicz apontou a acessibilidade como o problema principal. Ficou mais como estudo do que como padrão.
- **Glassmorphism (nome de 2020, Malewicz):** painéis de vidro fosco — desfoque do fundo, borda clara, transparência. A aparência é mais antiga (Aqua, 2000; iOS 7; Acrylic do Fluent Design da Microsoft, 2017). Em 2025 a Apple lançou o **Liquid Glass** (iOS 26 e demais sistemas), material que refrata e reage ao movimento. *Resolve:* camadas legíveis sem esconder o contexto. *Custa:* legibilidade depende do que está atrás.

## Princípios formais
- **Composição/grade:** skeuo — composição de "objeto" (o app é uma agenda); flat/Material — grade de 4/8 px, cards, listas; vidro — camadas empilhadas sobre fundo rico.
- **Tipografia:** skeuo usava fontes temáticas; flat e Material dependem de sans de sistema com escala clara (SF Pro, Roboto, Segoe).
- **Cor:** skeuo — cores de material (madeira, couro); flat — chapadas saturadas; Material — paletas tonais por papel; neumorfismo — monocromia; vidro — neutros translúcidos sobre fundo colorido.
- **Forma e profundidade:** skeuo — textura e luz realista; flat — zero; Material — elevação por sombra difusa padronizada; neumorfismo — luz de canto superior esquerdo em dupla sombra; vidro — desfoque + borda de 1 px clara.
- **Imagem:** ícones skeuo hiper-realistas → glifos de traço/preenchidos no flat.
- **Interação/motion:** skeuo — animações físicas (página virando); Material — *ripple*, transições contínuas entre estados; vidro — paralaxe e refração com o movimento.

## Vocabulário visual
Couro costurado, linho, botão de vidro (skeuo) · ícone chapado, cor sólida, sombra longa (flat) · card elevado, FAB, *ripple*, chip (Material) · relevo suave mono (neumorfismo) · painel fosco, `backdrop-filter: blur()`, borda brilhante (vidro).

## Tipografia
- Sistemas: SF Pro (Apple, uso restrito às plataformas Apple), Segoe UI (Microsoft), Roboto (Google, livre).
- Gratuitas (Google Fonts, existem): **Roboto**, **Inter**, **DM Sans**, **Public Sans**, **Work Sans**. Para skeuo citacional, combine com serifas de material impresso, ex. **Libre Caslon Text**.

## Paleta típica
Aproximação, por estilo:
- Skeuo: couro `#6B4423`, linho `#E9E2D3`, metal `#B8BCC2`
- Flat: azul `#3498DB`, verde `#2ECC71`, vermelho `#E74C3C` (paleta "Flat UI" muito difundida)
- Material 3 (base): primário `#6750A4`, superfície `#FEF7FF`
- Neumorfismo: fundo `#E0E5EC`, sombra clara `#FFFFFF`, sombra escura `#A3B1C6`
- Vidro: branco a 15–30% de opacidade sobre fundo saturado, borda `rgba(255,255,255,.4)`

## Tradução para hoje
- **Post 1080:** um card de vidro ou elevado sobre foto/gradiente da marca segura a mensagem — mas o texto precisa de fundo sólido o bastante. Neumorfismo só como textura de detalhe.
- **Landing page:** base flat/Material (rápida, clara); profundidade só onde ajuda a hierarquia (modal, menu, card em foco). Vidro em navegação fixa sobre conteúdo.
- **Motion/vídeo:** elevação animada (card sobe ao foco), desfoque progressivo para abrir camadas; skeuo como metáfora narrativa (objeto que vira interface).
- **Impresso:** flat é o que imprime melhor; vidro e neumorfismo dependem de luz de tela — traduza em sobreposição de cor e verniz localizado.
- **Acessibilidade:** neumorfismo raramente atinge 3:1 nas bordas de componentes (WCAG 1.4.11) — exija contorno ou cor. Vidro: meça o contraste contra o pior trecho do fundo; aumente opacidade ou use o ajuste de "reduzir transparência". Flat puro: garanta sinal de clicável (cor + sublinhado/forma), foco visível próprio.

## Combina / não combina
**Combina:** flat/Material — produtos, serviços, dados; vidro — apps de mídia, sobreposições, dashboards sobre imagem; skeuo — produtos lúdicos, instrumentos musicais virtuais, nostalgia; neumorfismo — controles isolados (um botão-herói), conceito.
**Não combina:** neumorfismo em formulários e interfaces densas; vidro sobre fundos com muito detalhe; skeuo em sistemas grandes de manutenção longa.

## Armadilhas
- Escolher por moda, não pelo problema (affordance? camadas? velocidade?).
- Misturar níveis de profundidade sem regra (sombra difusa + sombra dura + vidro).
- **Tendência gasta/template de IA:** "glass card sobre blob de gradiente roxo-azul" é a imagem-padrão de SaaS e de geradores desde 2021; neumorfismo virou sinônimo de *shot* de Dribbble sem uso real. Com o Liquid Glass, espere uma nova onda de cópias rasas.
- Copiar a linguagem de uma plataforma (Liquid Glass, Material) num produto que roda em outra.

## Referências
- Material Design: https://m3.material.io/
- Apple HIG — Materials: https://developer.apple.com/design/human-interface-guidelines/materials
- Microsoft Fluent Design (Acrylic, 2017).
- UX Collective, "Neumorphism will not kill the skeuomorphism star": https://uxdesign.cc/neumorphism-will-not-kill-the-skeuomorphism-star-bbbdafe1905e
- Built In sobre neumorfismo e acessibilidade: https://builtin.com/design-ux/neumorphism-accessibility
- Alexander Plyuto (Dribbble), imagem que originou o neumorfismo; Michal Malewicz / Hype4.
- A ficha é repertório; a marca do projeto vence.
