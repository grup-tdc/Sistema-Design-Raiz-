---
titulo: Construção de paleta, rampas e tokens
quando_consultar: Ao transformar cores de marca em um sistema utilizável (rampas, neutros, modo escuro, tokens) ou ao auditar uma paleta que cresceu sem controle.
fontes:
  - jakubkrehel/skills, better-colors (palette-structure.md, palette-generation.md, token-naming.md, color-formats.md) (MIT)
  - educlopez/ui-craft, references/color.md (MIT) — OKLCH, neutros matizados, P3
  - wondelai/skills, refactoring-ui e theming-dark-mode.md (MIT) — saturação nas pontas, cinzas com matiz, elevação por luminosidade
  - pbakaus/impeccable, skill/reference/colorize.md (Apache-2.0)
  - Conhecimento canônico: espaço OKLab/OKLCH (Björn Ottosson, 2020); CSS Color Level 4
---
# Construção de paleta, rampas e tokens

## Princípios

1. **Um sistema é feito de rampas, não de cores soltas.** Na maioria dos projetos bastam: uma rampa neutra (carrega 80–90% da interface ou da peça), uma rampa de acento e só as rampas semânticas que algo realmente usa.

2. **Trabalhe num espaço perceptual.** Em HSL, "50% de luminosidade" significa coisas muito diferentes: amarelo HSL 50% é claríssimo, azul HSL 50% é escuro. Em **OKLCH** (`L` luminosidade percebida de 0 a 1, `C` croma, `H` matiz em graus), mudar só `L` muda só a claridade percebida, o que torna rampas previsíveis e contraste ajustável. HSL continua útil para quem pensa em Figma/Photoshop, mas a conta final se faz em OKLCH/OKLab, com biblioteca (culori, colorjs.io, chroma.js), não a olho.

3. **Cada degrau tem uma função.** A escala 50–950 (convenção Tailwind) ou 1–12 (Radix) só faz sentido se cada passo corresponder a um papel:

| Papel | 50–950 (tema claro) |
|---|---|
| Fundo de página / fundo sutil | 50 |
| Fundo de componente | 100 |
| Hover, selecionado, divisor sutil | 200 |
| Borda, anel de foco | 300 |
| Borda em hover | 400 |
| Preenchimento sólido (botão, faixa) | 600 |
| Preenchimento em hover / texto de baixo contraste | 700 |
| Texto de alto contraste | 900 |
| Superfície mais escura / fundo do tema escuro | 950 |

   Degrau que nenhum papel consome não precisa existir.

4. **Saturação morre nas pontas.** Uma rampa bem feita tem matiz constante, croma máximo no meio e croma baixo nas duas extremidades. Croma alto num tom claro faz o 50 "brilhar"; croma alto num tom escuro deixa o 950 com cara de tinta derramada. As pontas também não chegam ao branco ou preto puros.

5. **Cinzas podem ter matiz.** Neutro puro é um padrão válido e nunca briga com o acento. Neutros levemente puxados para o matiz da marca (croma OKLCH ≈ 0,005–0,02) dão coesão — perceptível, mas sem nome. Puxar para quente lê mais editorial/acolhedor; para frio, mais técnico. Escolhido o rumo, mantenha-o na rampa inteira: borda quente sobre fundo frio aparece como sujeira.

## Regras operacionais

- **Posicione a cor da marca na rampa.** Se ela serve a botões e faixas, entra no degrau de preenchimento (600). Se ela é contratual, **fixe** o valor exato e construa a rampa ao redor (o espaçamento fica um pouco irregular naquele ponto); se não, **encaixe** num valor próximo que mantenha a rampa regular.
- **Espaçamento de luminosidade:** passos finos na parte clara (≈ 0,04–0,05 em L entre 50, 100 e 200) e passos maiores no meio (≈ 0,07–0,10). Degraus vizinhos a menos de 0,03 em L são indistinguíveis: elimine um.
- **Várias rampas concordam degrau a degrau.** O 500 do vermelho e o 500 do azul devem ter a mesma luminosidade percebida. Croma se iguala em *proporção* do máximo de cada matiz (amarelos e cianos atingem croma bem menor que vermelhos e azuis), não em número absoluto.
- **Semântica longe do acento:** pelo menos ~15° de matiz de distância.
- **Interpole em OKLab** ao gerar rampas e gradientes: sRGB produz meios-tons sujos. Em gradiente decorativo entre dois matizes distantes que acinzenta no meio, teste interpolação em OKLCH.
- **Gamut:** OKLCH permite valores fora do sRGB. Para web, declare primeiro um valor sRGB e só depois a versão mais viva dentro de `@media (color-gamut: p3)`. Para peças exportadas como imagem ou vídeo, mantenha tudo dentro do sRGB (ver `cor-para-impresso-e-video.md`).
- **Modo escuro não é inversão.**
  - Comece trocando os papéis (fundo passa a vir da ponta escura, texto da ponta clara) e depois **reajuste valores**.
  - **Elevação por luminosidade:** superfícies mais altas ficam *mais claras* (fundo L ≈ 0,15–0,2; cartão um degrau acima; modal mais um). Sombra quase não aparece no escuro.
  - Evite preto puro no fundo e branco puro no texto longo: o contraste extremo causa halo e cansaço; texto em L ≈ 0,9–0,95 sobre fundo ≈ 0,15–0,2 ainda passa com folga.
  - **Dessature acentos** (menos croma, às vezes um pouco mais de L): cores saturadas vibram sobre fundo escuro.
  - Remeça todos os pares depois.
- **Tokens em duas camadas.**
  - **Primitivos** nomeiam o valor: `--azul-600`, `--neutro-100`. Nunca são usados direto em componente ou peça.
  - **Semânticos** nomeiam o papel e apontam para primitivos: `--cor-fundo`, `--cor-superficie`, `--cor-texto`, `--cor-texto-secundario`, `--cor-borda`, `--cor-acento`, `--cor-acento-texto`, `--cor-erro`. Tema claro/escuro e variações de marca trocam só o mapeamento semântico.
  - Nome semântico não contém matiz nem componente (`--cor-botao-azul` está errado; `--cor-acento` está certo).
  - Não use um token fora do papel porque "o valor bate hoje": borda usada como cor de texto quebra quando a borda clarear.
- **Fora da web**, o mesmo raciocínio vale: estilos de cor nomeados por papel no Figma, amostras globais no Illustrator/InDesign, paleta do projeto no After Effects/Premiere com nomes de papel.
- **Audite antes de reconstruir:** colete todas as cores literais, ordene por luminosidade dentro de cada família, junte quase-duplicatas (ΔE OKLab < 0,02), atribua papel a cada sobrevivente. Apresente o inventário como proposta antes de mudar o que ninguém pediu.

## Falhas comuns

| Sintoma | Causa | Correção |
|---|---|---|
| Rampa com "barriga" de tons parecidos numa ponta | passos iguais em HSL ou em L | recalcular em OKLCH, apertar a ponta clara |
| Matiz muda ao longo da rampa (azul vira roxo no escuro) | interpolação em sRGB/HSL | manter H constante em OKLCH |
| Fundo claro "fluorescente" | croma alto no 50/100 | reduzir croma nas pontas |
| Cinzas parecem sujos | neutros com matizes diferentes misturados | um único matiz (ou nenhum) na rampa neutra inteira |
| Botão vermelho pesa mais que azul no mesmo degrau | luminosidades diferentes entre rampas | igualar L por degrau |
| Aviso amarelo fraco ao lado do erro | mesmo croma absoluto em todos os matizes | croma proporcional ao máximo de cada matiz |
| Tema escuro estridente | acentos do claro reaproveitados | dessaturar e remedir |
| Tema escuro achatado | todas as superfícies no mesmo tom | elevar superfícies por L |
| Troca de tema exige editar componente | componente usando primitivo | introduzir camada semântica |
| Cores diferentes em navegadores/telas | valores fora do sRGB sem fallback | valor sRGB primeiro, P3 em media query |

## Como verificar

- **Plotar a rampa em L e C** (biblioteca de cor ou ferramentas como oklch.com): L deve descer de forma regular, C deve formar um arco com pico no meio.
- **Escala de cinza** da rampa: cada degrau se distingue do vizinho.
- **Script de contraste do plugin** sobre os pares previstos pelos papéis (texto/fundo, texto/superfície, branco/600, foco/fundo), nos dois temas.
- **Simulação de daltonismo** nas semânticas e categorias de dados.
- **Busca por literais:** em código, nenhum hex/`rgb(`/`oklch(` em componente onde existe token; em arquivo de design, nenhuma cor fora das amostras nomeadas.
- **Render real** dos dois temas lado a lado, olhado no celular e no monitor.

## Quando quebrar a regra

- **Projeto já em hex/HSL:** mantenha a notação existente; consistência vale mais que migrar um valor isolado para OKLCH.
- **Cor de marca fixa fora do arco ideal** (ex.: tom claríssimo e muito saturado): fixe-a e aceite a irregularidade local.
- **Peça única** (um pôster, um post isolado) não precisa de rampa completa nem tokens; precisa de papéis claros e contraste medido.
- **Neutro puro** é a escolha certa quando o acento muda por campanha ou quando fotografia colorida domina a peça.
