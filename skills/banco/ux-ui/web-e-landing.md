---
titulo: Web e landing pages
quando_consultar: Ao estruturar, diagramar ou revisar uma página web ou landing page, incluindo responsividade, desempenho percebido, acessibilidade e textos de interface.
fontes:
  - educlopez/ui-craft — references/recipe-landing.md, layout.md, responsive.md, copy.md, accessibility.md (MIT)
  - jakubkrehel/skills — better-layout, better-accessibility (MIT)
  - pbakaus/impeccable — reference/layout.md, craft-floor.md (Apache-2.0)
  - wondelai/skills — ux-heuristics (MIT)
  - Referência normativa: W3C WCAG 2.2
---
# Web e landing pages

Estrutura e verificação de páginas. A linguagem visual (tipos, cores, imagens, tom) vem do DESIGN.md do projeto; este arquivo define o que cada parte precisa fazer e como checar que faz.

## Princípios

### Estrutura de landing

Cada seção responde a **uma** pergunta do visitante, na ordem em que ela surge. Se uma seção responde a duas, divida; se não responde a nenhuma, corte.

| Seção | Pergunta que responde | Função e critério |
|---|---|---|
| Dobra (hero) | "O que é e é para mim?" | Promessa específica em até 2 linhas, apoio em até ~20 palavras, 1 CTA principal e no máximo 1 secundário. Imagem real do produto/serviço ou nenhuma |
| Prova | "Gente como eu confia?" | Logos, número específico, depoimento com nome e contexto. "Ajudou 312 alunos a passar na OAB" vence "milhares de clientes satisfeitos" |
| Problema/benefício | "O que isso resolve para mim?" | Benefícios em linguagem do resultado, com visual concreto de cada um |
| Como funciona | "É difícil?" | 3 a 4 passos; só numere se a sequência importar |
| Oferta | "O que eu recebo e quanto custa?" | Conteúdo, preço, condições e garantia sem letras miúdas escondidas; plano recomendado destacado sem apagar os outros |
| Objeções / FAQ | "E se…?" | Respostas às dúvidas reais de vendas e atendimento, não perguntas inventadas |
| CTA final | "Ok, como começo?" | Repete o mesmo rótulo do CTA da dobra; reduz o risco (garantia, sem cartão, cancelamento) |
| Rodapé | "Quem está por trás?" | Contato, dados legais, políticas |

Regras de composição: cada família de layout (grade de cartões, texto+imagem lado a lado, citação larga, faixa de logos) aparece de preferência uma vez; no máximo duas seções texto+imagem seguidas; nada de grade uniforme de 3 ícones como estrutura principal. Indicadores de escassez só se forem verdadeiros.

**Eyebrow budget:** rótulos pequenos em caixa alta acima de títulos (eyebrows/kickers) no máximo 1 a cada 3 seções, contando a dobra. Conta mecânica: se eyebrows > teto(seções ÷ 3), apague até passar. Títulos numerados ("01 / 02") só quando a ordem informa algo.

### Responsivo

- **Mobile primeiro:** escreva o estilo base para a tela estreita e acrescente regras para telas maiores. Força a priorizar conteúdo.
- **Breakpoints pelo conteúdo, não pelo aparelho:** alargue a janela até o layout quebrar (linha longa demais, cartão espremido) e coloque o ponto de quebra ali. Prefira layouts intrínsecos (`grid` com `auto-fit/minmax`, `clamp()`, consultas de contêiner) que dispensam a maioria dos breakpoints.
- **Piso de 320 px** de largura sem rolagem horizontal (WCAG 1.4.10, refluxo) e **zoom de 200%** sem perda de conteúdo ou função (1.4.4).
- Linha de leitura entre ~45 e 75 caracteres; limite com `max-width` em `ch`.
- Imagens com `width`/`height` ou `aspect-ratio` declarados para não deslocar o layout.

### Grade web e contêineres

- Grade de 12 colunas no desktop (divide em 2, 3, 4 e 6), 8 no tablet, 4 no celular, com calhas fixas da escala do projeto.
- Contêiner com largura máxima e margens laterais mínimas (16 px no celular, crescendo com a tela). Defina 2 ou 3 larguras: texto corrido (estreito), conteúdo padrão, faixa larga/sangrada.
- Alinhe tudo a poucas linhas verticais; elementos que quase se alinham parecem erro.
- Espaço entre seções maior que espaço dentro delas; varie o ritmo entre seções em vez de repetir o mesmo intervalo.

### Desempenho percebido

- Conteúdo principal visível rápido: meta de LCP ≤2,5 s, INP ≤200 ms, CLS ≤0,1 (Core Web Vitals) em celular com rede limitada.
- Imagem da dobra carregada com prioridade e no tamanho certo (`srcset`, formatos modernos); demais imagens com carregamento tardio.
- Esqueleto com a forma do conteúdo em vez de spinner em página em branco.
- Respostas otimistas em ações com baixo risco de falha (curtir, salvar), revertendo se der erro.
- Fontes com `font-display: swap` e fallback de métricas próximas para não pular texto.

### Acessibilidade essencial (WCAG 2.2 AA)

- **Foco visível** em todo elemento interativo, com contraste ≥3:1 e sem ficar escondido sob cabeçalho fixo (2.4.7, 2.4.11).
- **Ordem** de foco e de leitura igual à visual; link "pular para o conteúdo" no início.
- **Alt**: imagem informativa descreve a informação; decorativa recebe `alt=""`; imagem com texto repete o texto.
- **Contraste**: texto ≥4,5:1, texto grande (≥24 px ou ≥18,5 px negrito) ≥3:1, componentes e gráficos ≥3:1.
- **Movimento reduzido**: respeitar `prefers-reduced-motion`; nada piscando mais de 3 vezes por segundo; autoplay com pausa.
- Estrutura semântica: um `h1`, títulos em ordem, `button` para ações e `a` para navegação, `lang="pt-BR"`, campos com `label`.
- Alvo mínimo de 24×24 px (2.5.8); meta de 44 px no toque.
- Cor nunca é o único portador de informação.

### Copy de interface

- **Rótulos**: verbo + objeto para ações ("Baixar certificado"), substantivo para navegação. O mesmo rótulo para a mesma ação em toda a página (nav, dobra e CTA final dizem a mesma coisa).
- **Erros**: o que houve + como resolver, sem culpar ("Este e-mail já tem conta. Entrar?"), nunca código técnico sozinho.
- **Estados vazios**: por que está vazio + a primeira ação ("Você ainda não tem cursos. Explorar catálogo").
- Botões cabem em uma linha no desktop; títulos dizem o conteúdo, não fazem charada.
- Números concretos em vez de adjetivos; frases curtas; nada de "Clique aqui".

## Regras operacionais

1. Antes de diagramar, escreva a lista de seções com a pergunta que cada uma responde. Seção sem pergunta sai.
2. Dobra com no máximo 4 elementos de texto (eyebrow opcional, título, apoio, CTAs) e uma linha de confiança sob os CTAs; o resto desce.
3. Hierarquia de CTA em três níveis distintos: CTA da navegação < CTA principal da dobra; CTAs de seção não competem com o principal.
4. Aplique o eyebrow budget contando no código ou no render.
5. Escreva CSS mobile primeiro; justifique cada breakpoint pelo ponto em que o conteúdo quebra.
6. Toda imagem tem dimensões ou proporção declaradas e `alt` decidido (informativo ou vazio).
7. Animações de entrada ≤400 ms, sem sequestro de rolagem, desligadas ou reduzidas com movimento reduzido.
8. Rode Lighthouse/PageSpeed em perfil celular e registre LCP, INP e CLS antes de entregar.
9. Use imagens reais ou marcadores claramente identificados com a lista do que falta; nunca telas falsas montadas com divs.

## Falhas comuns

| Sintoma | Causa | Correção |
|---|---|---|
| Visitante não entende a oferta na dobra | Título genérico, excesso de elementos | Promessa específica, apoio curto, mover selos e listas para baixo |
| Página parece modelo pronto | Grade de 3 ícones e mesma estrutura em toda seção | Variar famílias de layout; visuais concretos por benefício |
| Eyebrow em toda seção | Rótulo usado como enfeite | Aplicar teto(seções ÷ 3); deixar o título trabalhar |
| CTAs com textos diferentes para a mesma ação | Copy escrita seção por seção | Um rótulo por intenção, repetido |
| Rolagem horizontal no celular | Largura fixa, tabela ou imagem sem limite | `max-width: 100%`, layouts intrínsecos, rolagem só dentro do componente |
| Texto cortado com zoom 200% | Alturas fixas em contêineres de texto | Alturas automáticas, `min-height` no lugar de `height` |
| Conteúdo "pula" ao carregar | Imagens e fontes sem dimensão/fallback | Declarar proporções; fallback de fonte ajustado |
| Foco some atrás do cabeçalho fixo | Âncoras sem compensação | `scroll-margin-top` igual à altura do cabeçalho |
| Leitor de tela lê "imagem123.jpg" | `alt` ausente | `alt` descritivo ou vazio conforme função |
| Página enjoa ou causa tontura | Paralaxe e entradas longas sem preferência | Respeitar movimento reduzido; encurtar e simplificar |
| Prova social não convence | Depoimentos vagos e sem identidade | Nome, contexto e resultado mensurável, com autorização |

## Como verificar

- **Teclado:** navegue a página inteira só com Tab, Shift+Tab, Enter e Esc. Foco sempre visível e não encoberto; ordem igual à visual; link de pular conteúdo funciona; menus e modais fecham com Esc.
- **320 px:** emule 320 px de largura; zero rolagem horizontal na página, CTA principal visível na primeira tela, textos sem quebras absurdas.
- **Zoom 200%:** em desktop a 1280 px, aplique zoom de 200%; todo conteúdo e função continuam acessíveis.
- **Contraste medido:** use ferramenta (DevTools, analisador de contraste) em texto sobre fundo, inclusive texto sobre imagem e estados hover/foco.
- **Estados todos renderizados:** formulários de captura em vazio, erro, carregando, sucesso; FAQ aberto e fechado; navegação móvel aberta; imagens que falham ao carregar.
- **Leitor de tela:** passe pela lista de títulos e de links (NVDA, VoiceOver); estrutura faz sentido fora de contexto.
- **Desempenho:** Lighthouse em modo celular; LCP, INP e CLS dentro das metas.
- **Movimento reduzido:** ative a preferência no sistema e recarregue.
- **Contagens mecânicas:** número de eyebrows ≤ teto(seções ÷ 3); elementos de texto da dobra ≤4; rótulos de CTA únicos por intenção.
- **Teste dos 5 segundos** com alguém do público: o que é, para quem é, o que fazer.

## Quando quebrar a regra

- **Páginas editoriais ou de campanha de marca** podem abrir com composição tipográfica ou imagem dominante sem CTA na dobra, se o objetivo for impacto e o CTA aparecer logo depois.
- **Eyebrows acima do budget** quando carregam informação real de navegação ou categoria (data, tipo de conteúdo, etapa), não decoração.
- **Seções numeradas** quando a sequência é o conteúdo (passos de inscrição, cronograma).
- **Landing longa com muitas seções** é legítima para ofertas caras ou complexas; o critério continua sendo uma pergunta por seção.
- **Animação mais rica** em peças de lançamento, desde que com fallback de movimento reduzido e sem afetar LCP e INP.
- **Grade diferente de 12 colunas** quando o DESIGN.md define outra; a regra é haver uma grade consistente, não um número específico.
