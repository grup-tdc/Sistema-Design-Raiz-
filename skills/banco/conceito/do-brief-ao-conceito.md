---
titulo: Do brief ao conceito
quando_consultar: Antes de produzir qualquer peça nova, quando ainda não existe um contrato de direção escrito para ela.
fontes:
  - pbakaus/impeccable, skill/reference/new-work.md (Apache-2.0)
  - anthropics/skills, skills/frontend-design/SKILL.md (Apache-2.0)
  - educlopez/ui-craft, references/inspiration.md (MIT)
  - jsonmaster555-ai/Design-skills-, visual-art-direction.md e design-orchestrator.md (sem licença; só ideias, nenhum texto aproveitado)
---
# Do brief ao conceito

## Princípios

1. **Conceito é uma decisão, não um adjetivo.** "Moderno e elegante" não decide nada. Um conceito só existe quando dá para derivar dele um raio de canto, uma escala tipográfica e uma regra de cor que outra pessoa conseguiria aplicar sem perguntar.
2. **O que já é verdade vem antes do que é escolha.** Marca existente, DESIGN.md do projeto, formato obrigatório, peças anteriores da mesma série: isso não se reinventa. A invenção vai só para os eixos que ficaram livres.
3. **A matéria-prima vem do mundo do público, não da categoria.** Um curso para contadores não precisa parecer "site de curso". Pode parecer o que contadores manuseiam: planilha impressa, carimbo, calendário de vencimentos. A categoria produz a média; o mundo do público produz identidade.
4. **Uma direção, comprometida.** Misturar duas direções boas gera uma ruim. Escolhe-se uma e ela é levada até o fim.
5. **Escrever antes de desenhar.** O contrato de direção é o documento que o crítico usa depois. Sem ele, a crítica vira gosto pessoal.

## Regras operacionais

### 1. Perguntas de brief

Responda (ou peça) estas sete. Se a pessoa não souber, proponha uma resposta e marque como hipótese.

| Pergunta | O que ela decide |
|---|---|
| **Objetivo**: o que precisa mudar no mundo depois que a peça for vista? | Se a peça informa, vende, convoca ou lembra |
| **Público**: quem, com que repertório visual, em que momento de vida? | Registro (formal, íntimo, técnico, festivo) |
| **Contexto de uso**: onde, com que luz, com quanta atenção, por quanto tempo? | Contraste, tamanho mínimo de texto, densidade |
| **Mídia e formato**: feed 4:5, story 9:16, A4, tela 1440, outdoor? | Grade, zonas seguras, peso do texto |
| **Uma ação desejada**: qual é a única coisa que a pessoa deve fazer? | O elemento número 1 da hierarquia |
| **Restrições**: prazo, peças obrigatórias, textos fixos, legais, acessibilidade | O que não entra em negociação |
| **Marca existente**: há DESIGN.md, manual, peças anteriores? | Quais eixos estão travados |

Se a resposta da "uma ação" tiver duas ações, a peça tem dois objetivos e vai falhar nos dois. Volte e escolha.

### 2. De palavras de caráter a consequências visuais

Escolha **3 ou 4 palavras de caráter**, concretas e em tensão entre si (ex.: "preciso, caloroso, sem pressa"). Proíba palavras que não excluem nada: "moderno", "limpo", "profissional", "bonito". Depois traduza cada palavra em parâmetros:

| Palavra | Raio | Densidade | Contraste | Ritmo | Tipo | Cor | Movimento |
|---|---|---|---|---|---|---|---|
| Preciso | 0–2 px | média-alta, grade visível | alto em valor | regular, módulo fixo | grotesca ou mono só para dados; tabular nos números | poucos tons, um acento funcional | curto (120–200 ms), linear-saída, sem elástico |
| Caloroso | 6–12 px | média | médio, sem preto puro | respirado | humanista ou serifa de texto suave | quentes dessaturados, papel em vez de branco | suave, entradas por opacidade |
| Urgente | 0 px | alta | máximo | quebrado, blocos colados | condensada pesada, caixa alta se a marca permitir | 1 cor saturada + neutro | cortes secos, sem easing longo |
| Sereno | 2–4 px ou nenhum | baixa | baixo-médio | lento, muito espaço vertical | serifa de texto ou grotesca leve, entrelinha aberta | quase monocromático | lento (400–700 ms), poucos elementos se movendo |
| Lúdico | variado, intencional | média | alto em matiz | irregular controlado | display com personagem, 1 família | 2–3 matizes vivos com papel definido | com antecipação e assentamento, nunca em tudo |
| Autoridade | 0–4 px | média | alto | simétrico ou eixo forte | serifa de títulos com corpo grande; texto sóbrio | escuro + 1 metal ou neutro | quase nenhum |
| Artesanal | irregular (recorte, papel) | média | médio | orgânico | serifa com textura ou letra desenhada | pigmentos, nada de neon | stop-motion, passos discretos |

Onde duas palavras puxam o mesmo eixo em sentidos opostos, decida qual manda naquele eixo e registre. Essa tensão resolvida é o que torna a peça específica.

### 3. Gerar 2–3 direções distintas

Cada direção nasce de um **território do mundo do público**: um objeto, lugar, ofício, ritual ou material que o público reconhece. Para cada uma escreva:

- **Nome curto** (2–3 palavras) e **território** de origem.
- **Ideia em uma frase**: "A peça se comporta como ___".
- **Paleta**: 4–6 hex nomeados por papel (fundo, texto, acento, apoio).
- **Tipo**: família(s) e papel de cada uma.
- **Wireframe ASCII** do formato principal, com o elemento 1 marcado.
- **O elemento memorável**: a única ousadia da peça.
- **Risco**: o que pode dar errado nessa direção.

Teste de distinção: se trocar os nomes das direções e ninguém notar, elas não são distintas. Pelo menos dois eixos (layout, tipo, cor, densidade) devem diferir de forma visível entre quaisquer duas direções.

Teste de média: imagine o pedido feito por outra marca da mesma categoria. Se você chegaria na mesma direção, ela é a média. Reescreva o eixo que se repetiria.

### 4. Escolher com critério

Pontue cada direção de 1 a 3 em: serve à ação desejada; funciona no contexto de uso real (luz, distância, tempo); compatível com a marca existente; produzível no prazo e na ferramenta; distinta da categoria. Empate se decide pela ação desejada. Apresente a escolha com uma frase de porquê, e guarde as descartadas em uma linha cada.

### 5. Contrato de direção

Escreva antes de produzir. Formato:

```
CONTRATO DE DIREÇÃO — [peça]
Objetivo: [uma frase]
Público e contexto: [quem, onde, quanto tempo de atenção]
Ação desejada: [uma]
Formato(s): [dimensões, zonas seguras]
Travado pela marca: [itens do DESIGN.md que valem aqui]
Palavras de caráter: [3–4] — eixo de tensão resolvido: [qual manda onde]
Direção escolhida: [nome] — "a peça se comporta como ___"
Hierarquia pretendida: 1 ___ 2 ___ 3 ___ 4 ___ 5 ___
Tokens: cores [hex+papel] / tipo [família, pesos, escala] / raio / espaçamento-base
Layout: [wireframe ASCII + alinhamento]
Elemento memorável: [um]
Proibido nesta peça: [3–5 itens, incluindo tiques que esta direção atrai]
Critério de sucesso: [o que o crítico deve conseguir verificar]
```

### 6. Referências sem cópia

- Junte 3–6 referências e, para cada uma, escreva **o que exatamente** você está pegando: "a proporção entre título e margem", "a regra de um acento só". Nunca "a vibe".
- Pegue **princípios de pelo menos duas fontes diferentes** e de fora da categoria (cartaz, sinalização, embalagem, editorial, arquitetura). Uma única referência da mesma categoria vira cópia.
- Nunca reproduza logotipo, ilustração, foto, composição inteira ou combinação reconhecível de fonte+cor+layout de outra marca.
- Teste de cópia: se colocar a referência ao lado e alguém disser "é a mesma peça com outro texto", refaça.

## Falhas comuns

| Sintoma | Causa | Correção |
|---|---|---|
| Direções diferem só na cor | Variação feita no eixo mais barato | Exigir diferença em layout ou tipo entre direções |
| Conceito descrito só com adjetivos | Faltou a tradução para parâmetros | Preencher a tabela palavra → eixos antes de seguir |
| Peça parece "da categoria" | Território tirado do setor, não do público | Listar 10 objetos/rituais do dia do público e partir deles |
| Duas ações competindo no topo | Brief não fechou a ação única | Voltar à pergunta 5 e escolher uma; a outra vira secundária |
| Resultado ignora o manual da marca | DESIGN.md não foi lido antes | "Travado pela marca" é campo obrigatório do contrato |
| Peça final não bate com o contrato | Contrato escrito depois, para justificar | Contrato datado antes do primeiro render |
| Referência vira clone | Uma só fonte, pega inteira | Mínimo de duas fontes e cada empréstimo nomeado |

## Como verificar

- Existe contrato escrito com todos os campos, criado antes do primeiro render.
- As palavras de caráter não incluem termos vazios da lista proibida.
- Cada palavra tem pelo menos três eixos traduzidos em valores (px, ms, hex, família).
- Foram geradas pelo menos duas direções que diferem em dois eixos visíveis.
- A escolha tem justificativa ligada à ação desejada ou ao contexto de uso.
- A hierarquia pretendida (1–5) está escrita, para o crítico comparar com o render.
- Cada referência tem o empréstimo nomeado.

## Quando quebrar a regra

- **Peça de série já estabelecida** (o post 14 de uma campanha): pule a geração de direções; o contrato é o da série, só preencha formato e hierarquia.
- **Ajuste pequeno** em peça existente: sem novas direções; leia o contrato original e preserve-o.
- **Marca com sistema rígido**: as "direções" podem variar só em composição e escolha de imagem; isso é legítimo.
- **Pedido explícito da pessoa** por uma linguagem específica: ela vence; registre no contrato como decisão dela.
