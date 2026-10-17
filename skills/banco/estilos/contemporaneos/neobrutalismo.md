---
titulo: Neobrutalismo (neubrutalism)
periodo: c. 2020–hoje · interfaces web e apps, SaaS, marcas digitais, redes sociais
palavras_de_carater: chapado, contornado, lúdico, direto, gráfico, atrevido, tátil, legível, pop
quando_consultar: Quando a interface precisa de personalidade forte e leitura imediata sem cair no SaaS genérico de gradiente e sombra difusa.
fontes: "Neubrutalism is taking over the web", UX Collective, 29 mar. 2022, https://uxdesign.cc/neubrutalism-is-taking-over-the-web-e9d09e0fe441 ; neobrutalism.dev (componentes React/Tailwind sobre shadcn/ui, MIT), https://www.neobrutalism.dev/ ; Nielsen Norman Group, "Neobrutalism: Definition and Best Practices", https://www.nngroup.com/articles/neobrutalism/ ; Nielsen Norman Group, "Brutalism and Antidesign", https://www.nngroup.com/articles/brutalism-antidesign/ ; https://brutalistwebsites.com/
---
# Neobrutalismo

## Ideia e contexto
Neobrutalismo é o web brutalism domesticado para produto. Pega do brutalismo a franqueza — contorno preto, cantos vivos, nada de sombra realista — e junta tipografia moderna, ilustração e cor chapada saturada. Ganhou corpo por volta de 2021–2022, com o redesenho da Gumroad e peças ligadas à Figma circulando como exemplo, e foi nomeado em artigos como o do UX Collective (2022). É reação ao "SaaS azul": gradiente suave, glassmorphism, sombra de 40 px desfocada, ilustração corporativa.

Diferença essencial para o brutalismo (ver `brutalismo.md`): o brutalismo expõe a estrutura e aceita o desconforto; o neobrutalismo é *amigável* — usa a linguagem dura como estilo, com usabilidade convencional por baixo. É um estilo de superfície sobre componentes normais.

## Princípios formais
- **Composição/grade:** grade de cards bem ordenada; blocos retangulares com borda; muito espaço entre blocos; leve rotação (-2° a 3°) em selos e adesivos para quebrar a rigidez.
- **Tipografia:** grotescas geométricas ou display pesadas em títulos (peso 700–900), sans neutra no corpo. Escala alta, entrelinha apertada nos títulos.
- **Cor:** fundo creme ou branco; 2–4 cores chapadas saturadas (amarelo, rosa, lilás, verde-limão, azul) com preto como estrutura. Sem gradiente.
- **Forma:** borda preta de 2–4 px em tudo que é clicável ou agrupado; raio 0–12 px; **sombra dura deslocada** sem desfoque (`box-shadow: 4px 4px 0 #000`).
- **Imagem:** ilustração plana contornada, emoji, ícone de traço grosso, foto recortada com contorno.
- **Textura:** quase nenhuma; às vezes grão ou padrão de pontos chapado.
- **Interação/motion:** o botão "afunda" no clique (translada 4 px e a sombra zera); hover troca cor de fundo; transições curtas (80–150 ms), com leve *overshoot* opcional.

## Vocabulário visual
Card com borda preta, sombra sólida deslocada, botão-pílula contornado, adesivo rotacionado, marca-texto atrás da palavra, tag colorida, setas desenhadas, estrelas/burst, fundo creme, ilustração com contorno.

## Tipografia
- Referências comerciais frequentes: grotescas display de fundições independentes.
- Gratuitas (Google Fonts, existem): **Space Grotesk**, **Archivo Black**, **Lexend Mega**, **Syne**, **Unbounded**, **Bricolage Grotesque**, **DM Sans** e **Public Sans** para corpo, **Space Mono** para rótulos.

## Paleta típica
Aproximação; o papel importa mais que o valor:
- Preto `#000000` — bordas, sombras, texto
- Creme `#FFF4E0` — fundo
- Amarelo `#FFD23F` — destaque principal/CTA
- Rosa `#FF90E8` — acento (aproximação do rosa associado à Gumroad)
- Lilás `#A388EE` / verde `#7FE7A3` / azul `#74B9FF` — categorias e estados

## Tradução para hoje
- **Post 1080:** um card central contornado com sombra dura, título enorme, 1 adesivo rotacionado com dado-chave; fundo de cor chapada. Carrossel: cada lâmina uma cor de fundo da paleta, mesma estrutura.
- **Landing page:** hero com título em display pesado e botão contornado com sombra; seções em cards; FAQ como acordeões com borda; tabela de preços em cards de cores diferentes.
- **Motion/vídeo:** elementos entram com *pop* (escala 0,9 → 1,02 → 1) e sombra que "cai"; cortes no beat; legendas em caixa com borda preta.
- **Impresso:** funciona em adesivos, embalagem, cardápio informal; traço preto grosso imprime bem; prefira cores especiais ou CMYK chapado.
- **Acessibilidade:** a borda preta ajuda a delimitar alvos (bom para baixa visão). Mas: texto preto sobre rosa/lilás claro passa; texto branco sobre amarelo, verde-limão ou rosa **não passa** — meça. O foco precisa ser diferente do hover e da sombra (ex.: contorno duplo ou cor de foco própria, 3:1 contra o vizinho). A sombra deslocada não pode ser o único indicador de estado.

## Combina / não combina
**Combina:** produtos digitais jovens, ferramentas criativas, educação descontraída, comunidade, eventos, marcas de criadores.
**Não combina:** jurídico tradicional, saúde séria, luxo, finanças conservadoras — a menos que a marca queira de propósito quebrar o setor. Mal em telas muito densas de dados (borda em tudo vira ruído).

## Armadilhas
- Borda e sombra em *todos* os elementos: some a hierarquia. Reserve para o clicável e os grupos principais.
- Paleta arco-íris sem papel: cada cor precisa significar algo.
- **Tendência gasta e template de IA:** desde 2023 há kits prontos (neobrutalism.dev e similares) e geradores; "fundo creme + amarelo + sombra 4px + Space Grotesk" virou o padrão de landing de IA. Se o conceito é só esse kit, é genérico. Puxe uma regra própria da marca (espessura, ângulo, cor única, ilustração autoral).
- Chamar de "brutalismo" na apresentação ao cliente — é outro princípio.
- Fazer só a casca e esquecer estados (desabilitado, erro, carregando).

## Referências
- Artigo "Neubrutalism is taking over the web", UX Collective (2022): https://uxdesign.cc/neubrutalism-is-taking-over-the-web-e9d09e0fe441
- Gumroad (https://gumroad.com) — redesenho citado como marco; o site atual pode ter mudado.
- Hype4 (agência), citada como exemplo do estilo.
- neobrutalism.dev — biblioteca de componentes: https://www.neobrutalism.dev/
- Pascal Deville, https://brutalistwebsites.com/ — para ver a raiz menos domesticada.
- NN/g, "Neobrutalism: Definition and Best Practices": https://www.nngroup.com/articles/neobrutalism/ e "Brutalism and Antidesign": https://www.nngroup.com/articles/brutalism-antidesign/
- A ficha é repertório; a marca do projeto vence.
