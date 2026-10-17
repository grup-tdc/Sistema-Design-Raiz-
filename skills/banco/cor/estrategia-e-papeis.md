---
titulo: Estratégia de cor e papéis
quando_consultar: Antes de escolher qualquer valor de cor numa peça nova ou ao diagnosticar por que uma peça existente parece sem rumo cromático.
fontes:
  - pbakaus/impeccable, skill/reference/colorize.md e new-work.md (Apache-2.0) — eixos Restrained/Committed/Full/Drenched
  - educlopez/ui-craft, references/color.md (MIT) — 60-30-10 versus interface de aplicativo
  - jakubkrehel/skills, better-colors (MIT) — sistema de rampas, uma cor um significado
  - wondelai/skills, refactoring-ui (MIT) — desenhar em escala de cinza primeiro
  - Conhecimento canônico: Josef Albers, Interaction of Color; Johannes Itten, A arte da cor
---
# Estratégia de cor e papéis

## Princípios

1. **Estratégia vem antes de matiz.** A primeira decisão não é "azul ou verde", é *quanto da superfície a cor ocupa*. Essa dosagem define o tom da peça mais do que o matiz escolhido. Quatro estratégias cobrem quase tudo:

| Estratégia | Como a superfície se divide | Onde costuma servir |
|---|---|---|
| **Contida** (restrained) | neutros (puros ou levemente matizados) + um acento raro | telas que a pessoa opera ou lê: painel, formulário, artigo, documento |
| **Comprometida** (committed) | uma cor saturada ocupa 30–60% da área | landing page, capa, pôster, abertura de vídeo |
| **Paleta plena** (full) | 3–4 cores com papéis nomeados, nenhuma dominante absoluta | identidade com sistema de categorias, infográfico, editorial ilustrado |
| **Encharcada** (drenched) | a superfície *é* a cor; texto e elementos são variações tonais dela | peça de campanha, reel de impacto, cartaz tipográfico |

2. **A marca decide, o banco orienta.** Se o projeto tem `DESIGN.md`, tokens ou manual, as cores e a estratégia já foram escolhidas; este arquivo serve para aplicá-las com coerência, não para substituí-las. Só proponha estratégia quando a peça for nova identidade ou o `DESIGN.md` for omisso.

3. **Cor é relação, não amostra.** Albers demonstrou que a mesma cor muda de aparência conforme o vizinho: um cinza parece quente sobre azul e frio sobre laranja; um tom médio parece mais claro sobre preto. Consequência prática: aprove cores *na composição*, nunca em amostras isoladas num quadradinho.

4. **Papéis, não sacola de cores.** Uma paleta útil é uma tabela de funções:
   - **fundo** (canvas) e **superfícies** elevadas (cartão, painel, faixa);
   - **texto primário** e **texto secundário** (e, se precisar, terciário/desativado);
   - **acento**: ação principal, seleção, foco, destaque editorial;
   - **bordas e divisores**;
   - **semânticas**: sucesso, alerta, erro, informação — só as que a peça realmente mostra;
   - **dados**: categorias ou escalas, quando houver gráfico.

5. **Hierarquia primeiro em cinza.** Se a peça não se lê em escala de cinza (tamanho, peso, espaço, valor tonal), a cor está tapando um problema de hierarquia. A cor reforça uma hierarquia que já existe.

## Regras operacionais

- **Declare a estratégia por escrito** antes de pintar: "Contida, acento só no CTA e no número-chave" ou "Encharcada em vinho, texto em tons do mesmo matiz". Uma linha basta e torna a crítica verificável.
- **Conte as cores por papel.** Defaults razoáveis: 1 rampa neutra, 1 rampa de acento, 0–4 semânticas. Um segundo acento só entra quando duas coisas precisam ser distinguidas *num relance* (ex.: duas categorias num gráfico). Fora disso, use mais tons do mesmo acento.
- **Uma cor, um significado.** Se o acento marca "clicável", ele não pode também decorar ícones inertes. Trate matizes a menos de ~15° de distância (em OKLCH) como a mesma cor para efeito de significado.
- **Semântica longe do acento.** Se a marca é vermelha, "erro" não pode ser o mesmo vermelho; afaste o matiz ou diferencie o erro por ícone, contorno e texto.
- **Um preenchimento forte por vista.** Em interface, apenas a ação primária recebe fundo de acento; ações irmãs ficam neutras ou em contorno. Em peça gráfica, o equivalente é: um único ponto de máxima saturação por quadro.
- **Campo ou acento: escolha.** Cor como *campo* (grande área contínua) cria atmosfera e identidade imediata. Cor como *acento espalhado* (pontinhos em ícones, sublinhados, bordas) dilui e vira ruído. Se a cor importa, dê a ela uma região; se não importa, tire.
- **Regra 60-30-10 como ponto de partida, não lei.** Ela vem de decoração de interiores: 60% dominante, 30% secundária, 10% acento. Funciona para pôster, post, abertura de vídeo e página de marketing. Não descreve interface de aplicativo, onde neutros ocupam 80–90% da tela e o acento fica abaixo de 10%. Também não descreve estratégia encharcada (≈90% numa cor). Use os números para checar desequilíbrio, não para fixar proporção.
- **Temperatura com propósito.** Quente/frio altera distância percebida (quentes avançam, frios recuam, segundo Itten) e clima. Use isso como ferramenta de profundidade e ritmo — por exemplo, um acento quente sobre campo frio salta sem precisar de mais saturação.
- **Significado vem do conceito, não do dicionário.** Evite associações de catálogo ("azul = confiança", "verde = saúde", "laranja = energia"): todo concorrente já usou. Derive a paleta do mundo do assunto: materiais, lugar, época, objetos, luz. Uma escola de direito pode tirar cor de couro de encadernação, papel de processo e tinta de carimbo; um festival, das cores reais do lugar onde acontece. Escreva de onde cada cor veio.
- **Respeite convenções de domínio** onde elas protegem o usuário: vermelho para destrutivo/erro, verde para confirmação em fluxos financeiros. Convenção cultural varia (luto, sorte, política); confira o público antes de atribuir significado.
- **Peças em série compartilham a estratégia.** Carrossel, sequência de stories e cenas de um reel mantêm a mesma dosagem; variar a estratégia entre quadros soa como peças de marcas diferentes.

## Falhas comuns

| Sintoma | Causa | Correção |
|---|---|---|
| Peça "colorida mas sem graça" | acento espalhado em muitos elementos pequenos | concentrar a cor numa região ou num só elemento; neutralizar o resto |
| O olho não sabe onde ir | dois ou mais pontos de saturação máxima competindo | rebaixar todos menos um (menos croma ou menos área) |
| Botão primário some | acento usado também em decoração e ícones | reservar o acento para ação; decoração em neutro ou tom do acento bem mais claro |
| Paleta parece genérica | cores escolhidas por associação de catálogo | derivar do conceito/assunto e registrar a origem de cada cor |
| Erro confundido com marca | semântica no mesmo matiz do acento | afastar ≥15° de matiz ou reforçar com ícone e texto |
| Carrossel parece desconexo | cada lâmina com dosagem diferente | fixar a estratégia e variar só conteúdo e posição |
| Cor "certa" no swatch, errada na peça | aprovação fora de contexto (efeito Albers) | aprovar sempre no layout real, com vizinhos reais |
| Hierarquia depende da cor | estrutura tonal fraca | converter para cinza e corrigir tamanho/peso/valor antes de recolorir |

## Como verificar

- **Escala de cinza:** dessature o render (filtro no navegador, Photoshop/Figma, ou captura em P&B). A ordem de leitura deve se manter.
- **Teste do borrão:** desfoque o render (~10 px). Devem sobrar a mancha de cor dominante e um único ponto de acento.
- **Contagem:** liste cada cor visível e o papel dela. Cor sem papel é token faltando ou erro.
- **Proporção estimada:** some a área aproximada de cada cor e compare com a estratégia declarada.
- **Daltonismo:** simule protanopia e deuteranopia (DevTools > Rendering > Emulate vision deficiencies, ou filtro de prova no Photoshop/Illustrator). Significados codificados por cor devem sobreviver.
- **Contraste:** pares texto/fundo medidos pelo script de contraste do plugin (ver `contraste-e-acessibilidade.md`).

## Quando quebrar a regra

- **Acento espalhado** é legítimo quando é a linguagem da marca (padrão gráfico, confete, sistema de pontos) e foi definido no `DESIGN.md`.
- **Vários pontos saturados** funcionam em peças de celebração ou de mapa/infográfico, desde que a hierarquia venha de tamanho e posição.
- **Clichê de significado** é aceitável quando a convenção é o próprio conteúdo (sinalização, segurança, saúde pública), porque ali previsibilidade salva tempo e erro.
- **Abandonar 60-30-10** é o normal em interface e em peça encharcada; só não abandone a ideia de dominância.
