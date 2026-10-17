---
titulo: Sistemas de composição
quando_consultar: Ao escolher a estrutura de uma peça (antes da grade e dos tamanhos), ao compor pôster/post/capa com elemento dramático, ou quando texto crítico disputa espaço com imagem.
fontes:
  - jpoindexter/typography-skills — typography-layout-systems (MIT): os 8 sistemas de Kimberly Elam, elementos não-objetivos, círculo como coringa
  - adewale/swiss-poster-skill — SKILL.md e references/ (MIT): evento dominante 35–70%, pressão de borda, camada de microtexto, zona de leitura protegida, disciplina de canais de contraste
  - owl-listener/designer-skills — visual-critique/critique-composition (MIT)
  - Conhecimento canônico: Kimberly Elam (Typographic Systems), Müller-Brockmann, Armin Hofmann, Wolfgang Weingart, Josef Müller-Brockmann
---
# Sistemas de composição

## Princípios

- Toda peça tem um sistema estrutural, escolhido ou não. Escolher por hábito (grade de 12 colunas para tudo) ainda é escolher — mal.
- O sistema **define a ordem de leitura**. Se a ordem não está controlada, a composição não terminou.
- Estrutura e conteúdo devem concordar: conteúdo simétrico em sistema assimétrico briga consigo mesmo.
- Sistemas podem ser combinados, mas um deles **manda**; a combinação deve ser descritível em uma frase.
- Drama e legibilidade não se opõem: **o drama vai para a camada gráfica, a legibilidade é protegida na camada de leitura**.

## Regras operacionais

### Os 8 sistemas (Elam)

| Sistema | Estrutura | Leitura | Pôster | Post | Capa/impresso | Fluido (web)? |
|---|---|---|---|---|---|---|
| **Axial** | elementos à esquerda/direita de um eixo único (vertical, horizontal ou diagonal) | ordenada, direcional | programação, cronologia | lista de passos | sumário, agenda | sim |
| **Radial** | elementos irradiam de um ponto focal | dinâmica, energética | evento, festival, lançamento | anúncio com produto central | capa conceitual | só em canvas fixo |
| **Dilatacional** | círculos concêntricos se expandem de um centro | ondulação, foco | som, alcance, impacto | dado com "centro" | capa expressiva | só em canvas fixo |
| **Aleatório** | sem eixo, padrão ou regra aparentes | espontânea | cultura, música, zine | colagem | arte, editorial ousado | difícil |
| **Grade** | divisões horizontais e verticais | formal, econômica | informativo, científico | carrossel informativo | publicação, relatório | sim (padrão) |
| **Transicional** | faixas soltas, deslocadas, sem alinhamento de borda | casual, à deriva | editorial, cultural | citação, texto poético | matéria especial | parcialmente |
| **Modular** | unidades padronizadas contêm o conteúdo | sistemática | catálogo, grade de produtos | série de posts com o mesmo módulo | catálogo | sim (cards) |
| **Bilateral** | eixo central, texto centralizado | formal, clássica, estática | solenidade | anúncio curto | convite, certificado, capa de livro clássica | sim |

Notas de uso:

- **Bilateral** é o mais simétrico e por isso o mais difícil de tornar interessante; use para **um bloco curto** e quebre a estaticidade com escala extrema ou um único elemento fora do eixo. Texto corrido centralizado é difícil de ler (cada linha começa num lugar).
- **Aleatório** parece simples, mas o leitor impõe ordem sozinho; ainda exige controle de densidade, equilíbrio e uma zona de leitura protegida.
- **Modular** exige um módulo que tolere o conteúdo mais longo e o mais curto. Teste os dois extremos.
- **Radial e dilatacional** dependem de geometria fixa; não sobrevivem a reflow. Na web, só como fundo ou ilustração de proporção fixa.
- **Elementos não-objetivos** (fios, barras, blocos, pontos, círculos) têm que cumprir uma de quatro funções: ênfase, organização, equilíbrio ou direção. Se não cumprem, saem. O significado vem da posição: círculo espremido entre linhas = tensão; isolado no vazio = ponto de entrada; na interseção de eixos = pivô; contrapondo massa = equilíbrio.

### Escolha do sistema (procedimento)

1. Inventário: quantos grupos de texto, comprimentos, imagens.
2. Meio: fixo (pôster, post, quadro) ou fluido (web)?
3. Repetição: peça única ou série/sistema?
4. Tom: formal, direcional, energético, casual?
5. Escolha **um** sistema principal; escreva: "Sistema X porque [conteúdo + meio]". Opcionalmente um secundário: "com Y no elemento Z".
6. Trace a ordem de leitura sobre o rascunho; ela deve seguir o sistema.

### Composição de pôster (e post de impacto, capa, quadro de abertura)

Cinco portadores, todos presentes:

1. **Evento dominante com significado** — uma palavra cortada, número/data gigante, forma, campo de cor ou fragmento de foto ocupando **~35–70% da área**. Abaixo de ~35% vira ilustração; acima de ~70% esmaga a camada de leitura. Precisa ter relação com o conteúdo.
2. **Pressão de borda** — o evento encosta, é cortado ou sangra em pelo menos uma borda. Corte deliberado: ≥ 10–15% do elemento fora do quadro, não 2%.
3. **Camada de microtexto** — 2–4 grupos pequenos de informação **real** (data, local, índice, horário, créditos) alinhados à grade. Eles dão escala ao evento e provam intenção. Nada de rótulos inventados ("fig. 01", "index") sem conteúdo.
4. **Figura-fundo forte** — massas claras/escuras grandes, campos divididos, blocos de cor.
5. **Sistema gráfico** — repetição, ritmo ou geometria além de um fio decorativo.

```
+----------------------------+
|  micro 1          micro 2  |
|                            |
|  888888888888888888888888888  <- evento dominante sangrando
|  888888888888888888888888888     à direita (~50% da área)
|  888888888888888888888888888
|  +-----------+             |
|  | TÍTULO    |  <- zona de leitura protegida
|  | data, CTA |             |
|  +-----------+   micro 3   |
+----------------------------+
```

### Zona de leitura protegida

Classifique cada elemento em uma camada:

| Camada | Conteúdo | Pode ser cortada/encoberta? |
|---|---|---|
| Leitura crítica | título, data/hora, preço, CTA, aviso, afirmação central | **Não** |
| Leitura de apoio | metadados, legendas, créditos | levemente, se continuar legível |
| Imagem gráfica | palavra gigante, número, forma, foto, linha, textura | sim |

**Teste do campo calmo**: todo bloco crítico precisa de um retângulo ininterrupto de tom calmo atrás dele (com folga ≥ 0,5× a altura de corpo do texto em volta). Se algo atravessa esse retângulo, resolva com uma das quatro saídas:

1. **Desviar**: mova/corte o gráfico para não entrar no retângulo.
2. **Mandar para trás**: rebaixe o gráfico a textura (opacidade ~5–10%, baixa frequência, tom próximo do fundo).
3. **Abrir silêncio**: recorte um bloco sólido através do gráfico e ponha o texto nele.
4. **Fazer do campo o drama**: o próprio bloco de texto vira forma gráfica (texto escuro em placa de cor, claro em placa escura).

Texto corrido e CTA nunca ficam diretamente sobre foto de alto contraste, tipografia gigante ou linhas. Títulos podem colidir só se a colisão for o conceito e o título completo se ler em 3 segundos.

### Disciplina de canais de contraste

Não reduza o contraste da peça: **distribua-o**. Dois sinais de contraste máximo no mesmo retângulo se mascaram.

| Canal | O quê | Regra |
|---|---|---|
| Sinal crítico | título, data, CTA, informação central | vence localmente dentro da sua zona; nada de alto contraste atravessando as letras |
| Sinal dramático | evento dominante | pode ter contraste máximo, mas contorna, fica atrás ou vira o campo do texto crítico |
| Sinal de textura | retícula, grade, tipografia fantasma, padrões | só passa atrás do texto se rebaixado (opacidade baixa, tom próximo, baixa frequência) |

Em vídeo, o canal crítico também ganha **tempo**: a informação crítica fica parada e sozinha em cena tempo suficiente para ser lida (≈ 0,3–0,4 s por palavra curta como ponto de partida, mínimo ~1,5 s), enquanto o gráfico se move.

## Falhas comuns

| Sintoma visível | Causa | Correção |
|---|---|---|
| Hero centralizado + 3 cards iguais, sem personalidade | bilateral + modular por reflexo | escolha sistema pelo conteúdo; introduza evento dominante ou assimetria |
| Ordem de leitura ambígua | dois sistemas concorrendo | um sistema principal; o outro restrito a um elemento |
| Composição "orgânica" parece erro | aleatório sem controle | controle densidade, equilíbrio e proteja a zona de leitura |
| Pôster sem impacto | evento < 35% da área ou contido nas margens | escalar para 35–70% e cortar numa borda |
| Título ilegível sobre a imagem | gráfico atravessando a zona crítica | uma das quatro saídas do campo calmo |
| Microtexto que parece enfeite | rótulos inventados ou soltos da grade | só dados reais, alinhados à grade, 2–4 grupos |
| Layout de pôster quebra no celular | radial/dilatacional em mídia fluida | versão de geometria fixa por formato ou trocar para grade |
| Peça "educada" demais, sem força | legibilidade resolvida baixando o contraste geral | restaure contraste e distribua por canais |

## Como verificar

- **Nomeie o sistema** em uma frase. Se não conseguir, essa é a falha.
- **Trace a ordem de leitura** sobre o render e compare com a pretendida.
- **Meça a área** do evento dominante (bounding box ÷ área do formato): está entre ~35% e 70%? Toca ou sangra uma borda?
- **Desenhe o retângulo calmo** atrás de cada texto crítico; algo de alto contraste o atravessa?
- **Desfoque/escala de cinza**: o texto crítico ainda vence localmente o gráfico ao lado?
- **Teste de três segundos**: título, fato principal e ação são lidos antes de se admirar a forma?
- **Miniatura** no tamanho de feed e, na web, **resize** em 375/768/1440 px.
- **Diagnóstico um tamanho, um peso**: com toda a tipografia igual, a estrutura ainda organiza a leitura?

## Quando quebrar a regra

- **Peças de texto como imagem** (capa de disco, cartaz artístico) podem dispensar a zona protegida se não houver informação operacional — havendo data, local ou preço, ela volta a valer.
- **Sistemas combinados** são legítimos quando a combinação é observável e descritível (ex.: bilateral que ganha caráter radial pela forma central).
- **Evento dominante acima de 70%** funciona quando o próprio evento é a informação (data gigante que é a data do evento) e a camada crítica restante é mínima.
- **Sem evento dominante**: UI de produto, documentos e peças informativas densas não precisam dele; o sistema é grade/modular e a hierarquia faz o trabalho.
