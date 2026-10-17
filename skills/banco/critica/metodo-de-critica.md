---
titulo: Método de crítica
quando_consultar: Sempre que for avaliar um render (imagem, quadro de vídeo, captura de página) próprio ou de outro agente, antes de dar qualquer opinião.
fontes:
  - pbakaus/impeccable, skill/reference/critique.md (Apache-2.0)
  - Dragoon0x/taste-skills, perception/screenshot-surgery, analysis/absence-audit, visual-language/craft-signals, articulation/critique-vocabulary (MIT)
  - owl-listener/designer-skills, visual-critique (MIT)
  - educlopez/ui-craft, references/review.md (MIT)
  - wondelai/skills, steve-jobs-design-review (MIT)
  - jpoindexter/typography-skills, skills/typography-critique (MIT)
---
# Método de crítica

## Princípios

1. **Sem intenção declarada não há crítica, só preferência.** O render é julgado contra o contrato de direção e o DESIGN.md, não contra o gosto do crítico.
2. **Olhar antes de opinar.** Primeiro se descreve o que está lá (posição, tamanho, cor, espaço). Opinião misturada à observação esconde o problema real.
3. **Só vale o que foi visto no render.** Código, intenção ou descrição do autor não substituem a imagem. Se não houve render, não houve crítica.
4. **Estrutura antes de acabamento.** Ajustar kerning numa peça cuja hierarquia está errada é desperdício.
5. **Toda observação termina em uma correção executável.** "Melhorar o equilíbrio" não é correção; "mover o selo 40 px para a direita, alinhando à coluna 3" é.

## Regras operacionais

### Passo 0 — Ler a intenção

Antes de abrir a imagem, leia o contrato de direção: objetivo, ação desejada, hierarquia pretendida 1–5, palavras de caráter, itens travados pela marca. Se não existir contrato, escreva a intenção presumida em três linhas e marque o relatório como "intenção presumida".

### Passo 1 — Primeira impressão fria (5 segundos)

Olhe por cinco segundos e anote: o que viu primeiro, o que entendeu que é a peça, o que faria em seguida. Compare com a ação desejada. Essa leitura não se repete; faça antes de analisar.

### Passo 2 — Mapa de peso

Numere de 1 a 5 os elementos por peso visual real (o que puxa o olho primeiro, segundo...). Para cada um, diga o que cria o peso: escala, peso da fonte, contraste de valor, saturação, posição, isolamento por espaço. Depois compare lado a lado:

```
Pretendido: 1 título  2 imagem  3 CTA  4 data  5 logo
Observado:  1 imagem  2 logo    3 título 4 CTA 5 data
```

Cada divergência é um achado P1. Dois elementos com o mesmo peso disputando a posição 1 também é P1.

### Passo 3 — Testes de percepção

- **Desfoque/olhar semicerrado** (blur de 8–12 px na imagem): sobram manchas. A mancha mais forte deve ser o elemento 1; os grupos devem continuar legíveis como grupos.
- **Escala de cinza**: remove a cor. Se a hierarquia desaparece, ela dependia só de matiz (problema para daltonismo e para impressão). Valores próximos entre texto e fundo aparecem aqui.
- **Miniatura** (reduza para ~15% ou ao tamanho real no feed): o que ainda se lê? A ação desejada ainda é identificável?
- **Espelhar horizontalmente**: o olho perde o costume e revela desequilíbrios, alinhamentos quase-certos e pesos acumulados num lado.
- **Inverter valores** (negativo): ajuda a ver espaços e contraformas, e manchas que competem.

### Passo 4 — Anatomia

- **Grade e alinhamento**: existe um eixo ou grade? Liste os quase-alinhamentos (2–6 px fora), que são piores que desalinhamentos francos.
- **Espaçamento**: há uma unidade base? Grupos relacionados estão mais próximos entre si do que de outros grupos?
- **Cor por papel**: para cada cor, diga se é estrutural, semântica, acento ou decorativa. Uma cor com dois papéis conflitantes é achado.
- **Tipografia**: quantas famílias e pesos, escala, entrelinha, medida (caracteres por linha), microtipografia.
- **Tensões**: onde há conflito visual, distinguir tensão intencional (energia) de acidental (confusão).

### Passo 5 — Auditoria de ausência

Liste de 5 a 10 coisas que **não** estão na peça e poderiam estar: CTA, data, local, preço, logo, legenda, estado de erro, fonte da informação, contraste em modo escuro, versão sem som. Para cada uma: foi omissão intencional ou esquecimento? A ausência fortalece ou enfraquece? Restrição intencional é sinal de qualidade; falta acidental é defeito.

### Passo 6 — Escrever os achados

Formato obrigatório de cada achado:

```
[P1|P2|P3] Observação: o que se vê, onde, com medida.
Princípio violado: qual regra (hierarquia, proximidade, contraste, contrato item X, DESIGN.md §Y).
Correção concreta: ação com valor (px, hex, peso, posição, remover).
```

Exemplo: "[P1] Observação: o logo (canto superior direito, 22% da largura) tem mais contraste que o título (texto #8A8A8A sobre #F2F2F2). Princípio: o elemento 1 pretendido é o título. Correção: reduzir o logo para 12% da largura e escurecer o título para o token texto-forte."

### Prioridades

- **P1 Estrutura**: a peça não cumpre a intenção. Hierarquia invertida, ação desejada invisível, texto ilegível, formato ou zona segura errados, fora da marca.
- **P2 Composição, tipo e cor**: cumpre a intenção, mas com ruído. Grade frouxa, espaçamento uniforme, escala tipográfica fraca, cor com papel confuso, tiques do catálogo anti-genérico.
- **P3 Acabamento**: microtipografia, quase-alinhamentos pequenos, consistência de ícones, viúvas, detalhes de borda.

Ordene os achados por prioridade e limite-se aos que mudam o resultado. Termine com **a correção de maior retorno**: a única mudança que mais melhora a peça.

### Vocabulário

Proibido usar sem dizer o que se vê: "limpo", "moderno", "bonito", "elegante", "clean", "profissional", "impactante", "harmonioso", "equilibrado", "poluído", "chama atenção". Cada um deve ser substituído pela observação que o motivou:

| Em vez de | Diga |
|---|---|
| "Está poluído" | "Há 7 elementos com peso parecido no terço superior; nenhum domina" |
| "Falta equilíbrio" | "80% da massa escura está na metade esquerda; a direita só tem texto de 14 px" |
| "Não está elegante" | "Três pesos de fonte e duas famílias em um bloco de 40 palavras; entrelinha 1,2 em texto corrido" |
| "Moderno" | "Grotesca de contraste baixo, raio 0, grade de 12 colunas visível" |

## Falhas comuns

| Sintoma | Causa | Correção |
|---|---|---|
| Crítica cheia de adjetivos e sem ação | Vocabulário vago | Aplicar a tabela de vocabulário e o formato de três partes |
| Lista longa de detalhes, hierarquia errada ignorada | Começou pelo acabamento | Fazer o mapa de peso antes de qualquer outra coisa |
| Crítica do código, não da imagem | Render não foi gerado ou não foi aberto | Exigir render; sem ele, relatório diz "não verificado" |
| Crítico impõe seu estilo | Faltou ler o contrato | Passo 0 obrigatório; achados citam contrato ou princípio |
| Tudo vira problema | Ausência tratada sempre como falha | Na auditoria de ausência, classificar intencional × acidental |
| Correções conflitantes | Achados não priorizados | Ordenar P1→P3 e indicar a de maior retorno |

## Como verificar

- O relatório cita o contrato (ou declara "intenção presumida").
- Existe a comparação pretendido × observado da hierarquia 1–5.
- Pelo menos três testes de percepção foram feitos e o resultado de cada um está anotado.
- A auditoria de ausência tem 5 ou mais itens classificados.
- Todo achado segue observação → princípio → correção, com pelo menos um valor concreto.
- Nenhuma palavra da lista proibida aparece sem a observação que a sustenta.
- Há uma correção de maior retorno destacada.

## Quando quebrar a regra

- **Revisão rápida de variação mínima** (troca de texto numa peça aprovada): faça só passos 2 e 3 sobre a área alterada.
- **Peça expressiva com tensão intencional** declarada no contrato: hierarquia ambígua pode ser o objetivo; julgue se a ambiguidade é controlada.
- **Sem render possível** (ferramenta indisponível): a crítica pode ser feita sobre especificação, mas o relatório deve dizer explicitamente que nada foi verificado visualmente.
