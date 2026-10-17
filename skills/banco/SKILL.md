---
name: banco
description: Índice do banco de conhecimento de design do Design-Raiz — fundamentos que um designer sênior carrega: grades com cálculo, hierarquia e peso visual, Gestalt, espaço e ritmo, sistemas de composição, tipografia (escala, medida, microtipografia), cor (estratégia, contraste medido, paleta, impresso/vídeo), UX/UI (heurísticas de Nielsen, leis de UX, affordance, componentes, landing), formatos (post, pôster, vídeo/motion e zonas seguras, impresso, identidade, slides), conceito, anti-genérico e crítica; repertório de 37 estilos e movimentos (históricos, brasileiros e contemporâneos: Bauhaus, Suíço, construtivismo, surrealismo, brutalismo, concretismo, Tropicália, cordel...) e bibliografia com acervos. Pré-carregado nos agentes diretor-de-arte e critico; consulte para explicar POR QUE um layout funciona ou falha.
---

# Banco de conhecimento — índice

Arquivos em `${CLAUDE_PLUGIN_ROOT}/skills/banco/<pasta>/<arquivo>.md`. **Leia só o que a tarefa pede (2–5 arquivos).**
Todos seguem: Princípios · Regras operacionais · Falhas comuns · Como verificar · Quando quebrar a regra.
O banco ensina a pensar e executar; **a estética e a marca vêm do `DESIGN.md` do projeto**, que vence qualquer regra daqui.

## Por tarefa (rotas rápidas)

| Tarefa | Leia |
|---|---|
| Peça nova de qualquer tipo | `conceito/do-brief-ao-conceito` → `composicao/grades` → `composicao/hierarquia-e-peso-visual` → arquivo do formato |
| Post, carrossel, capa, pôster, flyer | `formatos/post-e-poster`, `composicao/sistemas-de-composicao`, `tipografia/escala-e-hierarquia` |
| Reels/Stories/TikTok/Shorts, motion, legenda | `formatos/video-e-motion`, `tipografia/medida-entrelinha-e-leitura`, `cor/contraste-e-acessibilidade` |
| Landing page, site | `ux-ui/web-e-landing`, `composicao/grades`, `tipografia/escala-e-hierarquia`, `ux-ui/heuristicas-e-leis` |
| Interface, app, formulário, dashboard | `ux-ui/interface-e-componentes`, `ux-ui/heuristicas-e-leis`, `composicao/gestalt-e-agrupamento` |
| Impresso (cartão, folder, cartaz, papelaria) | `formatos/impresso`, `cor/cor-para-impresso-e-video`, `composicao/grades` |
| Livro, apostila, relatório, e-book PDF | `formatos/editorial-e-documentos`, `composicao/grades`, `tipografia/medida-entrelinha-e-leitura`, `formatos/impresso` |
| Certificado, crachá, convite nominal (dados variáveis) | `formatos/editorial-e-documentos`, `composicao/hierarquia-e-peso-visual`, `formatos/impresso` |
| Logotipo, identidade, manual, DESIGN.md | `formatos/identidade-visual`, `tipografia/escolha-e-pareamento`, `cor/estrategia-e-papeis`, `cor/construcao-de-paleta` |
| Slides | `formatos/apresentacoes`, `composicao/hierarquia-e-peso-visual` |
| Escolher/corrigir fontes | `tipografia/escolha-e-pareamento`, `tipografia/escala-e-hierarquia` |
| Escolher/corrigir cores | `cor/estrategia-e-papeis`, `cor/construcao-de-paleta`, `cor/contraste-e-acessibilidade` |
| "Está genérico / com cara de IA" | `conceito/anti-generico`, `composicao/espaco-ritmo-e-equilibrio`, `tipografia/microtipografia` |
| "Está confuso / tudo grita" | `composicao/hierarquia-e-peso-visual`, `composicao/gestalt-e-agrupamento` |
| Revisar / criticar / aprovar | `critica/metodo-de-critica`, `critica/portao-de-qualidade` + arquivos do formato |
| Escolher uma linguagem/estilo, "algo Bauhaus/brutalista/surrealista" | `conceito/estilo-e-referencia`, seção Estilos abaixo, fichas de 2–3 candidatos, `referencias/acervos-e-fontes-visuais` |
| Acabamento antes de entregar | `tipografia/microtipografia`, `conceito/anti-generico` |

## Catálogo

**composicao/** — diagramação
- `grades` — construir grade com números: margens clássicas e de tela, colunas, gutter, módulos, linha de base; exemplos A4, post 1080×1350, quadro 1080×1920, web.
- `hierarquia-e-peso-visual` — ordem de leitura, fatores de peso, um evento dominante, enfraquecer concorrentes, padrões Z/F.
- `gestalt-e-agrupamento` — proximidade, similaridade, região comum, continuidade, fechamento, figura-fundo, Von Restorff.
- `espaco-ritmo-e-equilibrio` — espaço ativo, escala de espaçamento, ritmo, simetria/assimetria, tensão intencional vs acidental.
- `sistemas-de-composicao` — os 8 sistemas de Elam, composição de pôster, zona de leitura protegida, disciplina de contraste.

**tipografia/**
- `escolha-e-pareamento` — classificar, escolher por função e mídia, parear, quantas famílias, licenças.
- `escala-e-hierarquia` — razões de escala por contexto, alavancas de hierarquia, salto do display.
- `medida-entrelinha-e-leitura` — medida, entrelinha, alinhamento, texto sobre imagem/vídeo, tamanhos mínimos.
- `microtipografia` — rios, viúvas, hifenização e pontuação PT-BR, tracking, numerais, alinhamento óptico.

**cor/**
- `estrategia-e-papeis` — estratégia antes da paleta, papéis, proporções, derivar do conceito.
- `contraste-e-acessibilidade` — fórmula WCAG, limiares, texto sobre imagem, sempre medir (`contraste.mjs`/`auditar.mjs`).
- `construcao-de-paleta` — OKLCH, rampas, neutros matizados, modo escuro, tokens por papel.
- `cor-para-impresso-e-video` — CMYK, preto rico, cobertura de tinta, spot, compressão de redes.

**ux-ui/**
- `heuristicas-e-leis` — Nielsen + severidade, Krug, Fitts/Hick/Jakob/Miller/Tesler/Doherty, Norman (affordance, significantes, mapeamento, feedback).
- `interface-e-componentes` — Refactoring UI, estados obrigatórios, formulários, alvos de toque, microinterações.
- `web-e-landing` — estrutura de landing, responsivo, grade web, acessibilidade WCAG 2.2 AA, textos de interface.

**formatos/**
- `post-e-poster` — proporções, recorte da grade do perfil, carrossel, distância de leitura, miniatura.
- `video-e-motion` — zonas seguras por plataforma (as mesmas de `scripts/zonas.json`), texto e legenda, princípios de animação, gancho.
- `impresso` — sangria, segurança, resolução, CMYK, dobras, tamanhos ISO/BR, checklist de fechamento.
- `editorial-e-documentos` — livro/apostila (spread, linha de base e registro, medianiz por encadernação, lombada, cadernos, aberturas, fólios, figuras, notas), certificado, crachá, dados variáveis (pior caso).
- `identidade-visual` — construção de logo, proteção, redução mínima, versões, sistema de marca, coerência entre peças.
- `apresentacoes` — 16:9, uma ideia por slide, grade de slide, texto projetado, modelo mestre.

**conceito/**
- `do-brief-ao-conceito` — perguntas de brief, palavras de caráter → consequências visuais, direções, contrato de direção.
- `anti-generico` — por que modelos convergem para a média, catálogo de tiques de IA (a marca vence o catálogo), passada de subtração.
- `estilo-e-referencia` — usar movimentos e referências sem pastiche: palavras de caráter → estilos → princípios → tradução; teste de pastiche; mistura; direitos.

**critica/**
- `metodo-de-critica` — como olhar um render: intenção, pesos 1–5, squint, miniatura, ausência, vocabulário preciso.
- `portao-de-qualidade` — checklist binário, reprovações automáticas, veredito e formato do relatório.

## Estilos e movimentos (repertório)

Fichas em `estilos/`. Use na etapa de conceito, **sempre** com `conceito/estilo-e-referencia` (princípios, não aparência;
teste de pastiche). Formato das fichas: Ideia e contexto · Princípios formais · Vocabulário visual · Tipografia (com
equivalentes gratuitos) · Paleta típica (aproximada) · Tradução para hoje · Combina / não combina · Armadilhas · Referências.
Com `DESIGN.md` definido, o estilo atua em composição, ritmo e gesto: fontes e cores da marca ficam.

### Do conceito ao estilo (ponto de partida; confira as palavras de caráter na tabela completa)

| Se o brief pede… | Considere |
|---|---|
| ordem, clareza, rigor, informação | Estilo Tipográfico Internacional, Nova Tipografia, Bauhaus, Concretismo, Design moderno brasileiro, Minimalismo |
| confiança institucional, durabilidade | Modernismo americano, Design moderno brasileiro, Estilo Tipográfico Internacional, Minimalismo |
| energia, urgência, mobilização | Construtivismo russo, Futurismo, Punk e zine, Neobrutalismo |
| ruptura, provocação, crítica | Dadaísmo, Punk e zine, Brutalismo, Grunge e Ray Gun, Maximalismo contemporâneo |
| sonho, estranhamento, poesia | Surrealismo, Escola Polonesa do Cartaz, Neoconcretismo, Psicodelia |
| luxo, glamour, celebração | Art Déco, Secessão Vienense, Art Nouveau |
| natural, artesanal, feito à mão | Arts and Crafts, Art Nouveau, Cordel e xilogravura, Vernacular urbano |
| alegria, pop, juventude | Pop Art, Memphis, Neobrutalismo, Y2K, Tropicália |
| nostalgia, ironia digital | Vaporwave, Y2K, Skeuomorfismo e flat |
| brasilidade | Modernismo e Antropofagia, Concretismo, Neoconcretismo, Tropicália, Cordel e xilogravura, Vernacular urbano, Design moderno brasileiro |
| serenidade, silêncio, essencial | Minimalismo, Modernismo japonês, De Stijl |
| experimental, autoral, cultural | New Wave tipográfica, Desconstrutivismo (Cranbrook), Grunge e Ray Gun, Maximalismo contemporâneo, Bauhaus |
| movimento óptico, ritmo (motion) | Op Art, Futurismo, Psicodelia, Construtivismo russo |

### Tabela completa

**Históricos (mundo)**

| Ficha | Estilo | Período · lugar | Palavras de caráter |
|---|---|---|---|
| `estilos/historicos/art-deco` | Art Déco | c. 1920–1939 · Paris (Exposição de 1925), Nova York, Miami, Londres, também Rio de Janeiro, São Paulo e Goiânia | glamour, geometria, simetria, luxo, velocidade, escalonado, metálico, industrial, otimismo |
| `estilos/historicos/art-nouveau` | Art Nouveau | c. 1890–1910 · Paris, Bruxelas, Nancy, Munique (Jugendstil), Barcelona (Modernisme), Praga, Glasgow, também Brasil e Argentina | orgânico, curva, sinuoso, botânico, ornamental, sensual, fluido, decorativo, linha |
| `estilos/historicos/arts-and-crafts` | Arts and Crafts | c. 1860–1914 · Inglaterra (Londres, Kelmscott, Birmingham), depois Escócia, EUA e Europa Central | artesanal, honesto, natural, ornamento, ofício, livro, padrão, comunidade, matéria |
| `estilos/historicos/bauhaus` | Bauhaus | 1919–1933 · Weimar, Dessau e Berlim (Alemanha); diáspora depois de 1933 (Chicago, Harvard, Black Mountain College, Ulm) | oficina, elementar, construtivo, funcional, experimental, geométrico, didático, material, assimétrico, coletivo |
| `estilos/historicos/construtivismo-russo` | Construtivismo russo | c. 1915–1932 · Moscou, Petrogrado/Leningrado, Vitebsk (URSS); difusão em Berlim, Varsóvia, Holanda | agitação, diagonal, montagem, produtivo, revolucionário, urgente, industrial, tipográfico, contraste, manifesto |
| `estilos/historicos/dadaismo` | Dadaísmo | 1916–c. 1924 · Zurique (Cabaret Voltaire), Berlim, Colônia, Hannover, Paris, Nova York | acaso, absurdo, colagem, fotomontagem, ruptura, ironia, antiarte, caos, protesto, ready-made |
| `estilos/historicos/de-stijl` | De Stijl (Neoplasticismo) | 1917–1931 · Leiden, Amsterdã e Utrecht (Holanda); Paris e Weimar pela atuação de Van Doesburg | ortogonal, equilíbrio, assimetria, plano, primário, essencial, universal, ritmo, construção, harmonia |
| `estilos/historicos/desconstrutivismo-cranbrook` | Desconstrutivismo tipográfico (Cranbrook e Emigre) | c. 1978–1995 · Cranbrook Academy of Art (Bloomfield Hills, Michigan, EUA), Berkeley/Califórnia (Emigre), CalArts | teórico, em camadas, ambíguo, interrogativo, vernacular, textual, híbrido, autoral, polifônico |
| `estilos/historicos/escola-polonesa-do-cartaz` | Escola Polonesa do Cartaz | c. 1950–1980 · Varsóvia e Cracóvia (Polônia) | autoral, metafórico, pictórico, irônico, surreal, gestual, poético, inquietante, manual |
| `estilos/historicos/estilo-tipografico-internacional` | Estilo Tipográfico Internacional (Design Suíço) | c. 1950–1975 · Zurique e Basileia (Suíça); difusão para Ulm, Milão, Nova York, Tóquio e São Paulo | grade, objetivo, racional, sistemático, neutro, preciso, legível, modular, assimétrico, essencial |
| `estilos/historicos/futurismo` | Futurismo | 1909–c. 1944 · Itália (Milão, Roma, Rovereto), com ecos na Rússia (cubofuturismo) e em Portugal e Brasil | velocidade, dinamismo, ruído, diagonal, máquina, simultaneidade, explosão, onomatopeia, agressivo |
| `estilos/historicos/grunge-e-ray-gun` | Grunge tipográfico e Ray Gun | c. 1988–1998 · Califórnia (EUA) e Londres (Reino Unido) | expressivo, intuitivo, desgastado, sobreposto, ilegível-de-propósito, emocional, sensorial, rebelde, editorial, musical |
| `estilos/historicos/memphis` | Memphis | 1981–1987 · Milão (Itália), com eco internacional até o início dos anos 1990 | lúdico, irreverente, colorido, geométrico, padronizado, kitsch-assumido, ousado, pop, desequilibrado de propósito |
| `estilos/historicos/minimalismo` | Minimalismo (do modernismo ao contemporâneo) | anos 1950 até hoje · Alemanha (Braun/Ulm), Nova York (Vignelli), Japão (Muji), circulação global | essencial, silencioso, preciso, honesto, calmo, durável, claro, vazio-ativo, sóbrio, atemporal |
| `estilos/historicos/modernismo-americano` | Modernismo Americano e Identidade Corporativa | c. 1940–1980 · Nova York, Chicago, Los Angeles (EUA) | confiante, espirituoso, sintético, corporativo, claro, otimista, icônico, sistemático, simples, durável |
| `estilos/historicos/modernismo-japones` | Modernismo Japonês do Pós-Guerra | c. 1951–1990 · Tóquio e Osaka (Japão) | preciso, sereno, geométrico, simbólico, vazio, tradição-reinventada, luminoso, gráfico, contido |
| `estilos/historicos/new-wave-tipografica` | New Wave tipográfica (Swiss Punk) | c. 1968–1990 · Basileia (Suíça), Los Angeles e Nova York (EUA) | experimental, em camadas, espaçado, escalonado, tenso, intuitivo, técnico-rebelde, luminoso, fragmentado |
| `estilos/historicos/nova-tipografia` | Nova Tipografia (Die neue Typographie) | c. 1923–1933 · Alemanha (Leipzig, Munique, Berlim, Frankfurt), Holanda, Suíça, Polônia, Tchecoslováquia | assimétrico, funcional, elementar, sem serifa, padronizado, fio, contraste, objetivo, moderno, legível |
| `estilos/historicos/op-art` | Op Art (Arte Óptica) e Cinetismo | c. 1955–1975 · Paris, Londres, Caracas, São Paulo; consagração em Nova York (1965) | vibrante, hipnótico, preciso, geométrico, ilusório, rítmico, cinético, perceptivo, preto-e-branco |
| `estilos/historicos/pop-art` | Pop Art | c. 1956–1970 · Londres, Nova York; ecos em São Paulo e Rio de Janeiro | irreverente, massivo, colorido, repetitivo, comercial, irônico, direto, quadrinho, chapado, divertido |
| `estilos/historicos/psicodelia` | Psicodelia (cartaz de rock dos anos 1960) | c. 1965–1971 · São Francisco (EUA), Londres; ecos na Tropicália brasileira | vibrante, ondulante, alucinado, ornamental, líquido, contracultural, imersivo, enigmático, festivo |
| `estilos/historicos/punk-e-zine` | Punk e zine (faça-você-mesmo) | c. 1976–1985 · Londres e Manchester (Reino Unido), Nova York e Los Angeles (EUA), São Paulo (Brasil) e cenas locais | cru, urgente, recortado, xerocado, sujo, político, manual, barulhento, debochado, independente |
| `estilos/historicos/secessao-vienense` | Secessão Vienense (Wiener Secession) e Wiener Werkstätte | 1897–c. 1915 (Wiener Werkstätte até 1932) · Viena, Áustria | geométrico, quadrado, modular, ornamento contido, elegante, grade, ouro, monograma, rigor |
| `estilos/historicos/surrealismo` | Surrealismo | 1924–anos 1950 · Paris (centro), Bruxelas, Londres, Nova York, México; ecos no design editorial e na publicidade até hoje | onírico, estranho, deslocado, inconsciente, metamorfose, enigmático, poético, inquietante, colagem |

**Brasil**

| Ficha | Estilo | Período · lugar | Palavras de caráter |
|---|---|---|---|
| `estilos/brasil/concretismo` | Concretismo | 1952–1960 (ecos até os anos 1970) · São Paulo | racional, geométrico, sistemático, preciso, verbivocovisual, industrial, rigoroso, econômico, serial |
| `estilos/brasil/cordel-e-xilogravura` | Cordel e xilogravura | fim do séc. XIX até hoje · Nordeste (Pernambuco, Paraíba, Ceará), com circulação nacional | popular, narrativo, nordestino, gravado, contrastado, artesanal, sertanejo, direto, poético, ancestral |
| `estilos/brasil/design-moderno-brasileiro` | Design moderno brasileiro | 1954–1980 · São Paulo, Rio de Janeiro, Recife | institucional, sistemático, confiável, sintético, nacional, funcional, memorável, público, duradouro |
| `estilos/brasil/modernismo-e-antropofagia` | Modernismo e Antropofagia | 1917–1930 · São Paulo, Rio de Janeiro, Paris | antropofágico, ousado, tropical, irreverente, manifesto, colagem, caipira, sintético, brasileiro-moderno |
| `estilos/brasil/neoconcretismo` | Neoconcretismo | 1954–1961 · Rio de Janeiro | sensível, orgânico, participativo, corporal, poético, espacial, experimental, aberto, tátil |
| `estilos/brasil/tropicalia` | Tropicália | 1964–1972 · Salvador, Rio de Janeiro, São Paulo | tropical, psicodélico, marginal, irônico, saturado, político, sensual, kitsch, colagem, desbunde |
| `estilos/brasil/vernacular-urbano` | Vernacular urbano brasileiro | séc. XX até hoje · todo o Brasil; mapeado sobretudo em Pernambuco e no Pará | popular, pintado à mão, vibrante, comercial, de rua, sombreado, afetivo, improvisado, regional, gritante |

**Contemporâneos**

| Ficha | Estilo | Período · lugar | Palavras de caráter |
|---|---|---|---|
| `estilos/contemporaneos/brutalismo` | Brutalismo (arquitetônico, gráfico e web) | 1950–1970 na arquitetura (Europa, Brasil, Japão, bloco soviético) · anos 1990–2010 no design gráfico · 2014– na web (brutalistwebsites.com) | cru, honesto, estrutural, áspero, direto, monumental, sem verniz, desconfortável, utilitário, franco |
| `estilos/contemporaneos/maximalismo-contemporaneo` | Maximalismo contemporâneo (anti-design, colagem digital, tipografia expressiva variável) | c. 2010–hoje · editorial, cultura, música, moda, web experimental, redes sociais; raízes na Cranbrook/Emigre e em David Carson (anos 1980–90) | excessivo, ruidoso, expressivo, camadas, irreverente, vibrante, caótico-controlado, autoral, elástico, intenso |
| `estilos/contemporaneos/neobrutalismo` | Neobrutalismo (neubrutalism) | c. 2020–hoje · interfaces web e apps, SaaS, marcas digitais, redes sociais | chapado, contornado, lúdico, direto, gráfico, atrevido, tátil, legível, pop |
| `estilos/contemporaneos/skeuomorfismo-e-flat` | Skeuomorfismo, flat e sucessores (Material, neumorfismo, glassmorphism) | c. 2000–hoje · interfaces de sistemas operacionais, apps e web (Apple, Microsoft, Google, comunidades Dribbble) | tátil, realista, plano, limpo, material, suave, translúcido, profundo, sistemático, familiar |
| `estilos/contemporaneos/vaporwave` | Vaporwave | c. 2010–2016 (núcleo) · desdobramentos até hoje · internet (Bandcamp, Tumblr, Reddit), capas de álbum, GIF, vídeo | nostálgico, irônico, sonhador, artificial, melancólico, kitsch, digital, consumista, suspenso, lento |
| `estilos/contemporaneos/y2k` | Y2K (estética do ano 2000) | c. 1997–2004 (original) · revival 2019–hoje · videogames, eletrônicos de consumo, música eletrônica, moda, web inicial, MTV | futurista, cromado, translúcido, otimista, digital, brilhante, líquido, eletrônico, tecno, pop |

## Referências

- `referencias/bibliografia` — livros essenciais por área (fundamentos, tipografia, grade, cor, história, design brasileiro, identidade, UX/UI, editorial, motion, teoria), com edição brasileira quando confirmada e em qual arquivo do banco cada livro pesa.
- `referencias/acervos-e-fontes-visuais` — onde buscar referência visual real (museus, arquivos, Fonts In Use, acervos brasileiros), como pesquisar em cada um, como usar referência sem copiar e direitos de uso.
