---
titulo: Grades — construção com cálculo
quando_consultar: Antes de posicionar qualquer elemento em uma peça nova ou ao auditar uma peça em que as coisas "flutuam" sem relação entre si.
fontes:
  - jpoindexter/typography-skills — typography-layout-systems (MIT): grade composta colunas + hierárquica, preferência por número ímpar de colunas
  - jsonmaster555-ai/Design-skills- — alignment-and-grid-structures.md (sem licença: só ideias, nenhum texto reproduzido)
  - Conhecimento canônico: Müller-Brockmann (Grid Systems), Karl Gerstner (grade móvel), Jan Tschichold e cânone Van de Graaf, Timothy Samara (tipos de grade)
---
# Grades — construção com cálculo

## Princípios

- Uma grade é uma decisão sobre **medidas repetidas**: margem, coluna, gutter, linha de base. Se você não consegue escrever os números, não há grade, há palpite.
- A grade nasce do **formato + conteúdo**, nunca de um template. Pouco conteúdo pede poucas divisões; muito conteúdo variado pede mais divisões (que podem ser combinadas).
- Toda distância vertical deve ser múltiplo da **unidade base** (linha de base no impresso, 4 ou 8 px na tela). Isso é o que faz alturas de módulos, espaços e blocos de texto "baterem".
- Margem não é sobra: é a moldura que define a área útil e o tom (margens amplas = calma/editorial; margens apertadas = urgência/densidade).
- A grade é invisível no resultado, mas visível no **alinhamento**: bordas de blocos, linhas de base e eixos coincidindo.

## Regras operacionais

### Fórmulas

```
Largura útil         L = largura − margem_esq − margem_dir
Coluna               c = (L − (n − 1) · g) / n          n = nº de colunas, g = gutter
Altura útil          H = altura − margem_sup − margem_inf
Módulo (altura)      m = (H − (r − 1) · g_v) / r         r = nº de linhas de módulos
Com linha de base    m = k · LB  e  g_v = j · LB          (k, j inteiros; LB = entrelinha ou unidade base)
Vão de colunas       largura de um bloco que ocupa s colunas = s·c + (s−1)·g
```

Regra de arredondamento: escolha valores inteiros para `c` e `g` e **devolva o resto para as margens** (de preferência para a inferior, que pode ser maior).

### Procedimento (10 passos)

1. **Formato e meio**: dimensão final, sangria (impresso: 3 mm; tela: nenhuma), zonas de segurança de interface (stories/reels).
2. **Inventário de conteúdo**: quantos blocos de texto, comprimentos, quantas imagens, quantos níveis de hierarquia. Isso define a densidade.
3. **Unidade base**: impresso = entrelinha do texto principal (ex.: 10/13 pt → LB = 13 pt = 4,586 mm). Tela = 8 px (ou 4 px para UI densa).
4. **Margens**: impresso pelas proporções clássicas (abaixo); tela em % do lado curto.
5. **Área útil**: calcule L e H.
6. **Número de colunas pelo conteúdo**: texto corrido precisa de 45–75 caracteres por linha; conte quantas colunas cabem para essa medida. Peças de exibição (pôster, post) raramente precisam de mais de 4–6.
7. **Gutter**: impresso 4–6 mm (≈ 1 entrelinha); tela 16–32 px conforme largura. Gutter menor que a entrelinha faz colunas de texto vazarem uma na outra.
8. **Colunas**: aplique a fórmula, ajuste para inteiros.
9. **Linhas de módulos**: escolha `r` tal que `H` seja inteiramente divisível em linhas de base (passo 3).
10. **Teste com o conteúdo real** mais longo e mais curto. Se o título mais longo quebra mal em todas as larguras de vão possíveis, volte ao passo 6.

### Margens clássicas (impresso)

| Sistema | Proporção interna:superior:externa:inferior | Contexto |
|---|---|---|
| Van de Graaf / Tschichold (divisão em 9) | L/9 : A/9 : 2L/9 : 2A/9 (em página 2:3 vira 2:3:4:6) | livros, publicações em spread; mancha ocupa 2/3 de cada lado |
| Progressão "livro moderno" | 1 : 1,2 : 1,5 : 2 | catálogos, revistas; mais área útil |
| Folha avulsa simétrica | lat. iguais, inferior ≈ 1,2–1,5× superior | relatórios, cartazes A3/A4 sem lombada |

A inferior maior compensa o centro óptico, que fica ligeiramente acima do centro geométrico.

### Margens para telas (% do lado curto)

| Formato | Margem lateral | Observação |
|---|---|---|
| Post 1080×1080 / 1080×1350 | 5–8% (54–86 px) | 6,67% = 72 px é ponto de partida seguro |
| Quadro 1080×1920 (stories/reels) | 6–8% laterais + zonas de interface | topo ≈ 220–250 px, base ≈ 340–420 px livres de texto crítico; coluna direita (≈ 120 px) disputada por ícones — confirme a especificação vigente da plataforma |
| Slide 1920×1080 | 5–7% (54–76 px) | apresentações projetadas: suba para 7–8% |
| Web desktop | container máx. + `clamp(16px, 5vw, 120px)` | margem é consequência do container |

### Exemplo 1 — A4 retrato (210×297 mm), relatório

- Texto 10/13 pt → LB = 4,586 mm. Margens laterais 18 mm → L = 174 mm.
- 6 colunas, gutter 6 mm: c = (174 − 5·6)/6 = **24 mm**.
- Margem superior 20 mm. Altura disponível ≈ 252 mm → 252 / 4,586 = 54,95 → **55 linhas** = 252,2 mm. Margem inferior = 297 − 20 − 252,2 = **24,8 mm**.
- Módulos: 55 = 8·6 + 7·1 → **8 linhas de módulos de 6 linhas de base** (27,5 mm), gutter vertical de 1 linha (4,6 mm). Módulo = 24 × 27,5 mm.
- Referência canônica (Van de Graaf no A4, para comparação): interna 23,3 / superior 33 / externa 46,7 / inferior 66 mm; mancha 140 × 198 mm — adequada a livro, generosa demais para relatório.

### Exemplo 2 — Post 1080×1350

```
+------------------------------------------------------+
| 72 |136|24|136|24|136|24|136|24|136|24|136| 72 |
|      6 colunas x 136 + 5 gutters x 24 = 936          |
|      8 linhas  x 129 + 7 gutters x 24 = 1200         |
+------------------------------------------------------+
  margens: laterais 72 (6,67%), superior 72, inferior 78
```

- L = 1080 − 144 = 936 → (936 − 5·24)/6 = **136 px**.
- Altura: 8 linhas com gutter 24 → 8·129 + 7·24 = 1200 → sup 72, inf **78** (resto vai para baixo).
- Splits úteis: 4+2 col (616 + 296 px), 3+3, 2+4.
- Se a plataforma recortar a prévia do perfil para 3:4, mantenha texto crítico dentro da largura central de ≈ 1012 px.

### Exemplo 3 — Quadro 1080×1920

- Laterais 80 px → L = 920. 4 colunas gutter 24 → **212 px**; ou 6 colunas gutter 16 → **140 px**.
- Faixa segura de texto crítico: y 240 → 1520 (H = 1280). 8 linhas, gutter 16 → (1280 − 112)/8 = **146 px**.
- Topo (0–240) e base (1520–1920) aceitam imagem, cor e sangria, nunca legenda, preço ou CTA.

### Exemplo 4 — Landing 1440 px, 12 colunas

- Container 1200 → margens 120. Gutter 24: c = (1200 − 11·24)/12 = **78 px**.
- Tablet 768: 8 col, margem 32, gutter 24 → c = (704 − 168)/8 = 67. Mobile 375: 4 col, margem 16, gutter 16 → c ≈ 73,75 (colunas fluidas, aceite fração).
- Verticais em múltiplos de 8; seções separadas por 96–160 px.

### Tipos de grade

| Tipo | Quando | Risco |
|---|---|---|
| Manuscrito (1 bloco) | texto longo contínuo, livro, artigo | monotonia; resolva com margens assimétricas e notas na margem larga |
| Colunas | revistas, sites, posts com texto + imagem | colunas pares convidam a dividir tudo ao meio; prefira 5, 7, 9 ou combine |
| Modular (colunas × linhas) | catálogos, tabelas, pôsteres informativos, grades de cards | módulos que não toleram variação de conteúdo |
| Hierárquica | página única com poucos elementos de pesos muito diferentes (hero, capa) | parecer arbitrária se as zonas não forem medidas |
| Composta | web com galeria de 12 e artigo de 2 na mesma página | sobrepor sistemas sem que um mande |

Grade de Gerstner (ex.: 58 unidades permitindo 2, 3, 4, 5 e 6 colunas na mesma área) serve quando um sistema editorial precisa de muitas combinações.

## Falhas comuns

| Sintoma visível | Causa | Correção |
|---|---|---|
| Blocos com bordas a 3–10 px um do outro | sem grade ou grade "de olho" | redefina c/g inteiros e encaixe toda borda em início/fim de coluna |
| Texto de colunas vizinhas não se alinha horizontalmente | espaços verticais fora da linha de base | todo espaço, imagem e título como múltiplo de LB |
| Linha de texto corrido longa demais (> 80 caracteres) | bloco ocupando largura cheia | limite a 45–75 caracteres; use vão de colunas |
| Grade de 12 colunas num post com 3 elementos | grade por reflexo | 4–6 colunas ou grade hierárquica |
| Legenda/CTA cortado por ícones no reels | ignorou zonas de interface | texto crítico só dentro de y 240–1520 e fora da faixa direita |
| Margem inferior visualmente menor que a superior | margens geometricamente iguais | inferior 1,1–1,5× superior |

## Como verificar

- **Sobrepor a grade** no render (guias ou overlay CSS) e conferir: cada borda de bloco cai em início/fim de coluna? Conte as exceções; mais de 1–2 sem intenção = refazer.
- **Medir** distâncias entre bordas com régua do software/DevTools: todas devem ser múltiplos da unidade base.
- **Linha de base**: ative a grade de linha de base e veja se o texto de colunas vizinhas se alinha.
- **Contar caracteres** por linha no texto corrido.
- **Zonas de segurança**: sobrepor a máscara de interface da plataforma no quadro 1080×1920.
- **Resize** (web): 375, 768, 1440 px; a grade continua coerente em cada ponto de quebra?

## Quando quebrar a regra

- **Evento dominante**: uma imagem, palavra ou número que sangra, cruza colunas ou sai da área útil para criar tensão — só um por peça, e o resto permanece rigorosamente na grade (é o contraste com a ordem que dá força à quebra).
- **Deslocamento deliberado**: se for sair da grade, saia por pelo menos meia coluna ou 2× o gutter; desvios pequenos parecem erro.
- **Alinhamento óptico** prevalece sobre o matemático: letras redondas, pontas e aspas podem ultrapassar a guia alguns px para *parecerem* alinhadas.
- **Conteúdo que não cabe**: se o conteúdo real luta com a grade em todas as combinações, a grade está errada, não o conteúdo — refaça a partir do passo 6.
