---
titulo: Escala tipográfica e hierarquia
quando_consultar: Ao definir ou corrigir a escala de tamanhos de um projeto, ou quando uma peça não deixa claro o que ler primeiro (tudo com o mesmo peso, títulos competindo, tamanhos avulsos).
fontes:
  - jpoindexter/typography-skills — skills hierarchy-and-scale, typography-critique, responsive-typography (MIT); destilam Lupton (Thinking with Type), Rutter (Web Typography), Brown (Flexible Typesetting), Latin (Better Web Typography), Stocks (Universal Principles of Typography)
  - educlopez/ui-craft — references/typography.md (MIT)
  - pbakaus/impeccable — skill/reference/typeset.md e craft-floor.md (Apache-2.0)
---
# Escala tipográfica e hierarquia

## Princípios

1. **Hierarquia é relação, não valor absoluto.** Um título de 20 px só é título porque o texto tem 16 px. Defina proporções a partir do corpo de texto.
2. **Tamanho é a alavanca mais fraca e a mais usada.** Espaço, peso, cor/valor, caixa e posição também ordenam a leitura, e costumam fazê-lo com menos ruído.
3. **A escala vale pelo que proíbe.** Nas palavras do repositório jpoindexter (MIT): *"A scale is a constraint, not a menu."* Se qualquer tamanho é permitido, não há escala.
4. **Menos níveis leem mais rápido.** Se dois níveis são difíceis de distinguir, existe um nível só, com problema de espaçamento.
5. **Proximidade vence tamanho.** Um rótulo colado ao valor se liga a ele mais do que qualquer diferença de corpo consegue expressar.

## Regras operacionais

### Razões por contexto

| Razão | Nome | Contexto típico |
|---|---|---|
| 1,125 | segunda maior | interface densa, tabelas, painéis |
| 1,2 | terça menor | apps, formulários |
| 1,25 | terça maior | produto + marketing equilibrados |
| 1,333 | quarta justa | sites de conteúdo, documentação, revista |
| 1,414–1,5 | quarta aumentada / quinta | editorial, landing page, capa |
| 1,618 | áurea | peças guiadas por display (pôster, slide); grossa demais para UI |

- Razão pequena = muitos tamanhos intermediários, distinção fraca. Razão grande = hierarquia óbvia, poucos tamanhos úteis.
- Produto com UI e marketing: uma razão pequena para a interface + 2–3 tamanhos de display explícitos fora dela, com nome próprio (display-1, display-2) para não vazarem para a interface.
- **Escala clássica** (6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 21, 24, 36, 48, 60, 72) é alternativa legítima, sobretudo no impresso em pt: densa onde se precisa de opções, espaçada onde não se precisa.

### Ancorar e arredondar

1. Fixe o corpo de texto pela mídia (ver medida-entrelinha-e-leitura.md). Referências de partida: web 16–18 px; impresso de leitura 9–12 pt; vídeo 1080×1920 texto de apoio 40–56 px.
2. Multiplique para cima e divida para baixo pela razão.
3. **Arredonde** para inteiros (px) ou meio ponto (pt). 16 × 1,25³ = 31,25 → 31 ou 32. O valor arredondado vira o token; não se usa o bruto.
4. Corte os passos que o conteúdo não usa. A escala é a paleta; a "escada" que aparece na peça costuma ter 4–6 degraus.
5. Na web fluida, defina mínimo e máximo de cada degrau (clamp) e verifique nas larguras extremas.

### Contar os níveis reais

- Nomeie os níveis por função (título de página, seção, rótulo, metadado), não por número.
- Interface: 3–4 níveis acima do corpo bastam. Pôster: 3 níveis (chamada, apoio, informação/rodapé). Vídeo vertical: 2–3 por tela (gancho, apoio, legenda/crédito).
- Nível semântico (h1…h6) é estrutura do documento; o estilo visual é separado.

### Alavancas de hierarquia

| Alavanca | Força | Observação |
|---|---|---|
| Espaço (acima/abaixo, isolamento) | alta | o título pertence ao que vem depois: espaço acima > espaço abaixo (proporção de partida 2:1) |
| Peso | alta | diferença mínima útil de 200 (400 → 600) |
| Cor / valor (contraste com o fundo) | média | reforça; nunca carrega a hierarquia sozinha (falha em escala de cinza e para daltônicos) |
| Caixa (alta, versalete) | média | exige tracking positivo; bom para rótulos e sobretítulos curtos |
| Posição (topo, esquerda, centro óptico) | média | ordem de leitura em Z/F na web; em vídeo, o terço superior lê primeiro |
| Tamanho | a mais fraca por passo | resolve saltos grandes, não pequenos |

**Regra dos níveis adjacentes:** entre dois níveis vizinhos, varie 1–2 alavancas de forma clara. Variar uma só de forma tímida (16 → 17 px) não é percebido; variar quatro ao mesmo tempo (maior + mais pesado + outra cor + caixa alta) cria gritaria e esgota as alavancas para os outros níveis.

### Salto do display

- O maior título (herói de página, chamada de pôster, gancho de vídeo) costuma ficar a **2,5–4×** o corpo de texto. Abaixo de ~2× ele se confunde com subtítulo; acima de ~5× (exceto pôster com uma palavra) ele esmaga o resto.
- Exemplos: web, corpo 18 px → display 48–72 px. Impresso A4, corpo 10 pt → título 28–40 pt. Vídeo 1080×1920, apoio 48 px → gancho 120–190 px.
- Entrelinha do display: 1,0–1,2 (ver medida-entrelinha-e-leitura.md). Tracking do display: ver microtipografia.md.
- Limite superior de segurança na web: em torno de 6rem (96 px) para títulos que quebram em várias linhas; acima disso, só palavras curtas.

### Grid de linha de base

- Vale no impresso, editorial e multicolunas (alinhamento entre colunas é visível). Unidade = entrelinha do corpo (ex.: 10/14 pt → grid de 14 pt; 16/24 px → 24 px, com subgrid de 12).
- Em UI densa costuma atrapalhar; use escala de espaçamento de 4/8 px. Se o grid exigir entrelinha ruim para leitura, a leitura vence.

## Falhas comuns

| Sintoma visível | Causa | Correção |
|---|---|---|
| Tudo parece igualmente importante | só o tamanho varia, e pouco | adicionar contraste de peso e espaço |
| Título parece pertencer ao parágrafo de cima | margens simétricas | espaço acima ≈ 2× espaço abaixo |
| Seis níveis de título indistinguíveis | escala gerada, não desenhada | reduzir aos níveis que o conteúdo tem |
| 13, 15, 17, 22 px espalhados | tamanhos avulsos | tokenizar e remover fora da escala |
| Herói e painel não cabem na mesma escala | uma razão forçada nos dois | razão pequena + degraus de display nomeados |
| Hierarquia some em escala de cinza | dependia só de cor | adicionar peso ou espaço |
| Pôster "gritando" | todas as alavancas no máximo em todo nível | uma chamada dominante; o resto recua |
| Gancho do vídeo pequeno no celular | salto < 2× o apoio | levar a 2,5–4× |
| Título quebra feio no idioma/texto real | testado com texto curto | testar a maior string real |

## Como verificar

1. **Squint test:** semicerre os olhos ou desfoque a captura (blur gaussiano ~4–8 px). A ordem de leitura pretendida aparece?
2. **Escala de cinza:** converta a captura. A hierarquia se mantém sem cor?
3. **Contar tamanhos:** liste todos os corpos usados no arquivo (inspecionar CSS, painel de estilos, camadas). Cada um precisa estar na escala; anote os que não estão.
4. **Maior string real** em cada nível: título mais longo, nome mais comprido, número com mais dígitos.
5. **Zoom 200%** (web): os níveis continuam distinguíveis e nada se sobrepõe.
6. **Miniatura:** reduza a peça a ~15% (grade de feed, thumbnail). O nível 1 ainda se lê? O resto vira textura organizada?
7. Vídeo: pause em cada tela e confira que só há um elemento dominante por vez.

## Quando quebrar a regra

- **Pôster tipográfico** pode usar um salto de 8–10× com uma palavra só; a regra de 2,5–4× é para composições com texto de apoio relevante.
- **Interface de dados** pode viver com quase nenhum salto de tamanho, apoiando-se em peso, cor e posição.
- **Escala modular vs. olho:** autores como Brown e Santa Maria aceitam ajustar à mão ("eyeballers"); outros defendem só valores da escala. Consenso prático: ajuste óptico pontual é aceitável se for registrado como token, não improvisado por peça.
- **Caixa alta como nível** contraria quem a considera menos legível; é aceitável em textos de até ~5 palavras com tracking.
