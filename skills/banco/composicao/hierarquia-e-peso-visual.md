---
titulo: Hierarquia e peso visual
quando_consultar: Ao decidir o que o olho vê primeiro, segundo e terceiro, ou quando uma peça "grita tudo ao mesmo tempo" ou parece plana.
fontes:
  - adewale/swiss-poster-skill — SKILL.md (MIT): evento dominante, teste de rua de três segundos
  - owl-listener/designer-skills — visual-critique/critique-hierarchy e critique-composition (MIT)
  - jpoindexter/typography-skills — typography-critique e typography-layout-systems (MIT): diagnóstico "um tamanho, um peso"
  - jsonmaster555-ai/Design-skills- — visual-hierarchy.md, reading-patterns.md, contrast-and-scale.md (sem licença: só ideias)
  - Conhecimento canônico: Rudolf Arnheim (peso visual e equilíbrio), Jan White, pesquisas de rastreamento ocular do Nielsen Norman Group (padrões F e layer-cake)
---
# Hierarquia e peso visual

## Princípios

- Hierarquia é **ordem de leitura projetada**. Se você não consegue dizer a sequência 1→2→3, o leitor também não vai conseguir.
- **Um evento dominante** por peça (ou por tela/seção). Dois dominantes dividem a atenção e nenhum vence.
- Peso visual é relativo: um elemento só pesa mais **em comparação** com os vizinhos. Por isso a ferramenta principal é **enfraquecer os concorrentes**, não inflar o principal.
- Cada nível de hierarquia precisa de diferença perceptível — **uma alavanca forte ou duas combinadas**. Diferenças tímidas (16 vs 18 px, regular vs medium) geram ruído, não hierarquia.
- A estrutura (posição, agrupamento, espaço) carrega a hierarquia antes do estilo. Se só funciona com cor e negrito, a base está fraca.

## Regras operacionais

### Fatores de peso (do mais ao menos potente, em geral)

| Fator | Aumenta o peso quando… | Observação |
|---|---|---|
| Tamanho/escala | maior área | a alavanca mais forte; cresce com a área, não com a altura |
| Contraste de valor | mais distante do tom do fundo | teste em escala de cinza |
| Isolamento | mais espaço vazio ao redor | um elemento pequeno isolado vence um grande no meio da multidão |
| Cor/saturação | mais saturado ou cor única na peça | cor de destaque funciona por raridade: ≤ 10–15% da área |
| Posição | alto-esquerda (leitura ocidental), centro óptico, eixo da grade | o topo é lido antes; o canto inferior direito é ponto de saída |
| Forma | irregular entre regulares, diagonal entre ortogonais | figura humana e rosto atraem antes de qualquer forma |
| Complexidade/textura | mais detalhe interno | detalhe atrai, mas cansa se espalhado |
| Direção | elementos que apontam (olhar, seta, linha) | transferem peso para onde apontam |

Pela alavanca de Arnheim, peso × distância do centro: um elemento pequeno longe do centro equilibra um grande perto dele.

### Procedimento de numeração (1–5)

1. Liste todos os elementos da peça.
2. Atribua a cada um um número de **1 (domina) a 5 (fundo/apoio)** segundo a *intenção* (o que deve ser lido primeiro).
3. Regras: exatamente **um 1**; no máximo **dois ou três 2**; o resto 3–5.
4. Agora numere o *render* como ele realmente é percebido (squint, miniatura).
5. Onde as duas numerações divergem, corrija preferencialmente **rebaixando** o que subiu demais (menor, mais claro, menos saturado, mais próximo dos vizinhos) antes de aumentar o que deveria dominar.

### Escala entre o maior e o menor texto

| Contexto | Razão maior÷menor | Exemplo |
|---|---|---|
| Pôster, capa, post de impacto | ≥ ~10× | título 320 px, microtexto 28 px (11,4×) |
| Post informativo, slide | 5–8× | título 96 px, apoio 16 px no slide de 1080 |
| Landing (hero) | 4–8× | h1 64–72 px, legenda 12–14 px |
| UI de produto | 2,5–4× | título 32 px, rótulo 12 px |

Entre níveis consecutivos use razão ≥ 1,25 (UI) e ≥ 1,5 (peças de exibição). Menos que isso, os níveis se confundem.

### Padrões de leitura — quando cada um vale

| Padrão | Conteúdo típico | Como compor |
|---|---|---|
| **Z** | pouco texto: pôster, post, hero, anúncio | marca/título no alto, imagem ou argumento atravessando, CTA no fim do Z (baixo-direita) |
| **F** | texto denso e escaneável: resultados, listas, artigos sem estrutura | primeiras palavras de cada linha carregam o sentido; o lado esquerdo é lido, o direito é pulado |
| **Layer-cake** | documento longo com subtítulos fortes | subtítulos descritivos e espaçados; o leitor salta entre eles — escreva-os como resumo |
| **Spotted/pontilhado** | busca por item específico (preço, data, link) | elementos-alvo com tratamento consistente e distintivo |
| **Diagrama de Gutenberg** | campo homogêneo sem hierarquia forte | canto superior esquerdo = entrada, inferior direito = saída; os outros dois cantos são zonas fracas |
| **Vertical central** | quadro 1080×1920 | leitura de cima para baixo em uma coluna; um bloco de informação por vez |

O padrão F é sintoma de conteúdo sem hierarquia, não um objetivo. Se o leitor está lendo em F, dê-lhe subtítulos (layer-cake).

### Hierarquia em vídeo/motion

A ordem de leitura vira ordem **temporal**: o elemento 1 entra primeiro ou sozinho; nunca anime dois elementos de nível 1 ao mesmo tempo. Movimento é o fator de peso mais forte de todos — um elemento em movimento sobre um quadro estático é sempre o 1.

## Falhas comuns

| Sintoma visível | Causa | Correção |
|---|---|---|
| Nada se destaca; peça "plana" | níveis com diferença tímida | reduza para 3 níveis e aumente o salto entre eles (≥ 1,5×) |
| Tudo grita | vários elementos em negrito, cor e tamanho grande | escolha um 1; rebaixe o resto em valor, peso e saturação |
| CTA perdido | mesmo tratamento do texto de apoio, ou fora do fim do percurso | isolamento + contraste + posição no fim do Z |
| Imagem rouba o título | foto de alto contraste ao lado de título fraco | escureça/dessature a foto ou dê ao título zona calma e escala maior |
| Cor de destaque em todo lugar | acento usado como decoração | acento só no elemento 1 ou no CTA |
| Olho entra pelo logo | logo grande no topo | logo é nível 4–5 na maioria das peças: pequeno, canto, margem |

## Como verificar

- **Squint/desfoque**: aplique desfoque gaussiano de ~8–12 px (ou aperte os olhos). Deve sobrar uma mancha dominante e uma ordem clara.
- **Escala de cinza**: retire a cor. Se a hierarquia desaparece, ela dependia só de matiz (falha também para daltonismo).
- **Miniatura**: veja o post a ~150–200 px de largura e o quadro a ~180 px de altura, como no feed. O elemento 1 ainda é identificável e o título legível?
- **Teste de três segundos**: mostre por 3 s e pergunte o que foi visto — deve ser título, fato principal e ação, nessa ordem.
- **Numerar e comparar** (procedimento acima).
- **Diagnóstico de estrutura**: troque temporariamente todo texto para um tamanho e um peso. Se a ordem de leitura some por completo, reforce posição e agrupamento antes de reaplicar a escala.
- **Medir a razão** maior÷menor texto em px.

## Quando quebrar a regra

- **Peças-lista** (cardápio, programação, tabela de preços) podem ter muitos itens iguais de nível 3; o 1 é o título e o "sistema" da lista.
- **Mistério intencional**: campanha teaser pode esconder a informação principal; mesmo assim, algo deve ser o 1 (a imagem, o enigma).
- **Dois dominantes em diálogo** (antes/depois, comparação A×B) são válidos quando o conceito é o confronto — trate como um único evento composto, com eixo de simetria claro.
- **UI densa** (painéis, ferramentas) admite razão de escala baixa; a hierarquia passa para posição, agrupamento e valor.
