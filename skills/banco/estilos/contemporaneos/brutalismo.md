---
titulo: Brutalismo (arquitetônico, gráfico e web)
periodo: 1950–1970 na arquitetura (Europa, Brasil, Japão, bloco soviético) · anos 1990–2010 no design gráfico · 2014– na web (brutalistwebsites.com)
palavras_de_carater: cru, honesto, estrutural, áspero, direto, monumental, sem verniz, desconfortável, utilitário, franco
quando_consultar: Quando o brief pede franqueza, peso, recusa ao polido ou quer que a estrutura da peça apareça em vez de ser escondida.
fontes: Reyner Banham, "The New Brutalism", Architectural Review, dez. 1955; Reyner Banham, The New Brutalism: Ethic or Aesthetic?, 1966; Peter Chadwick, This Brutal World, Phaidon, 2016; Atlas of Brutalist Architecture, Phaidon, 2018; Oliver Elser, Philip Kurz e Peter Cachola Schmal (orgs.), SOS Brutalism: A Global Survey, Park Books, 2017; https://sosbrutalism.org/ ; https://brutalistwebsites.com/ (Pascal Deville, desde 2014); Nielsen Norman Group, "Brutalism and Antidesign", https://www.nngroup.com/articles/brutalism-antidesign/
---
# Brutalismo

## Ideia e contexto
São três coisas com o mesmo nome, e misturá-las gera conceito raso.

**Brutalismo arquitetônico.** O nome vem do *béton brut* (concreto bruto) de Le Corbusier — a Unité d'Habitation de Marselha (1952) deixa a marca das fôrmas de madeira no concreto. Alison e Peter Smithson usaram "New Brutalism" no início dos anos 1950 (a escola de Hunstanton, 1954, expõe aço, tijolo e tubulação). Reyner Banham deu corpo teórico no artigo de 1955 e no livro de 1966, cujo subtítulo — *ética ou estética?* — é a pergunta central: brutalismo era uma ética (verdade dos materiais, estrutura legível, programa social) ou só uma aparência? O próprio Banham concluiu que o movimento não escapou do quadro estético.

**A ponte brasileira** é decisiva para quem trabalha aqui. A chamada escola paulista — Vilanova Artigas (FAU-USP), Paulo Mendes da Rocha (Ginásio do Paulistano, MuBE, Pritzker 2006) e Lina Bo Bardi — fez do concreto aparente um gesto público e generoso, não frio. No SESC Pompeia (projeto a partir de 1977, concluído em 1986), Lina manteve a fábrica de tambores, somou torres de concreto ligadas por passarelas e janelas-"buracos" de contorno irregular pintadas de vermelho. Lição: cru não é o mesmo que hostil. A estrutura exposta pode acolher, ter humor e cor.

**Brutalismo gráfico.** Não é escola formal; é a tradução do princípio para o papel: grade visível, tipografia sem disfarce, materiais da produção (xerox, carimbo, fita, impressão em 1 cor) assumidos. Convive com o design suíço tardio, o punk e o *zine*. Hoje há também um "brutalismo gráfico" de fotos de prédios de concreto (o projeto This Brutal World nasceu em contas de Twitter/Instagram de Peter Chadwick) — isso é tema, não método.

**Web brutalism.** Pascal Deville, então diretor de criação em Zurique, abriu o brutalistwebsites.com em 2014, reunindo sites que recusavam o template polido. Ele o descreve como reação à leveza e ao otimismo frívolo do web design. Os traços: HTML quase padrão, links azuis sublinhados, fonte do sistema, tabelas, nenhum "card" arredondado. O NN/g separa brutalismo (franqueza, utilidade, feiura como efeito colateral) de antidesign (feiura como objetivo) — distinção útil para o critico.

## Princípios formais
- **Composição/grade:** a estrutura aparece. Linhas de grade, réguas e bordas viram elemento. Blocos empilhados em coluna única ou tabela rígida; ou, ao contrário, sobreposição seca sem alinhamento óptico. Nada de "respiro de luxo" decorativo.
- **Tipografia:** fonte de sistema, monoespaçada ou grotesca pesada, sem ajuste fino de vitrine. Tamanhos com saltos bruscos (14 → 160 px). Caixa-alta dura, kerning padrão.
- **Cor:** monocromia ou o padrão do meio (preto, branco, azul de link, vermelho de alerta). Um acento saturado no máximo. Na arquitetura, o cinza do concreto com um único gesto de cor (o vermelho de Lina).
- **Forma:** retângulos, cantos vivos, bordas de 1–4 px, massa pesada contra vazio. Peso por *bloco*, não por sombra.
- **Imagem:** foto sem tratamento, flash direto, recorte cru, *dithering*, *screenshot*, escaneado.
- **Textura:** a do processo — marca da fôrma, grão de fotocópia, pixel, linha de varredura.
- **Interação/motion:** sem easing suave; cortes secos, troca de estado instantânea, hover que inverte cor. Cursor e foco padrão do navegador valem como estética.

## Vocabulário visual
Concreto aparente, marca de fôrma, viga em balanço, passarela, link sublinhado azul, `<table>`, Times/Arial/Courier de sistema, bordas pretas, texto colado na borda, régua, numeração de seção, etiqueta técnica, xerox, 1 cor.

## Tipografia
- Clássicos: Helvetica, Arial, Times New Roman, Courier (de sistema), grotescas pesadas.
- Gratuitas que existem (Google Fonts): **Space Mono**, **IBM Plex Mono**, **Courier Prime**, **Archivo Black**, **Space Grotesk**, **Inter** (como "fonte de sistema" neutra), **Work Sans**. Em web, `font-family: system-ui, sans-serif` ou `monospace` é a escolha mais honesta.

## Paleta típica
Aproximação, não norma:
- Concreto `#8C8B86` — campo/fundo neutro (arquitetura, foto)
- Preto `#111111` — texto, bordas, massa
- Branco `#FFFFFF` — fundo web
- Azul de link `#0000EE` e visitado `#551A8B` — os padrões dos navegadores, usados como citação
- Vermelho `#E10600` — o único gesto (Lina, alerta)

## Tradução para hoje
- **Post 1080:** grade de 4–6 colunas desenhada à vista (fios de 2 px); manchete em grotesca pesada colada na margem; foto crua em bloco; legenda técnica em mono. Uma cor de acento.
- **Landing page:** HTML semântico com estilo mínimo; navegação como lista de links; seções separadas por fio e número; CTA como botão retangular de borda preta e fundo sólido. Carrega rápido — isso também é ética brutalista.
- **Motion/vídeo:** cortes secos no tempo, texto que entra sem fade, *hard cuts* sincronizados ao som, tela dividida por fios. Zero *ease-in-out* decorativo.
- **Impresso:** 1–2 cores, papel sem revestimento, risografia ou xerox, grampo aparente, formatos padrão (A4/A3).
- **Acessibilidade:** franqueza ajuda — links sublinhados e foco visível padrão são acessíveis. Cuidado: texto sobre concreto/foto exige faixa sólida (contraste ≥ 4,5:1); grades sobrepostas não podem quebrar a ordem de leitura; mono em texto longo cansa — limite a rótulos. Não remova `outline` de foco "porque fica cru"; ele já é cru.

## Combina / não combina
**Combina:** cultura, arquitetura, música independente, editorial, tecnologia honesta, marcas que querem dizer "sem enrolação", projetos de base comunitária (o espírito SESC).
**Não combina:** saúde que precisa acalmar, luxo delicado, público idoso pouco digital (a aparência "quebrada" pode passar por erro), quando a marca do projeto já define suavidade.

## Armadilhas
- Confundir brutalismo com bagunça. O original é rigoroso; a estrutura é *clara*.
- Usar foto de prédio de concreto como "conceito" — é papel de parede temático.
- Esquecer o lado social e generoso (Lina, Paulo Mendes) e produzir só frieza.
- Virou tendência gasta e template de IA: fundo bege, mono em tudo, bordas pretas e "RAW" escrito — isso é neobrutalismo de catálogo, não brutalismo. Pergunte: que estrutura real da peça estou expondo?
- Desculpar má usabilidade com "é brutalista".

## Referências
- Le Corbusier, Unité d'Habitation (Marselha, 1952); Alison e Peter Smithson, Hunstanton School (1954).
- Lina Bo Bardi, SESC Pompeia (São Paulo); Paulo Mendes da Rocha, MuBE e Ginásio do Club Athletico Paulistano (1958); Vilanova Artigas, FAU-USP.
- Reyner Banham, "The New Brutalism" (Architectural Review, 1955) e *The New Brutalism: Ethic or Aesthetic?* (1966).
- Peter Chadwick, *This Brutal World* (Phaidon, 2016); *Atlas of Brutalist Architecture* (Phaidon, 2018); *SOS Brutalism* (Park Books, 2017) e https://sosbrutalism.org/.
- Pascal Deville, https://brutalistwebsites.com/.
- NN/g, "Brutalism and Antidesign": https://www.nngroup.com/articles/brutalism-antidesign/.
- A ficha é repertório; a marca do projeto (`DESIGN.md`) vence.
