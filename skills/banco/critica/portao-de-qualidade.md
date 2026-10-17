---
titulo: Portão de qualidade
quando_consultar: Quando o agente crítico precisar decidir se uma peça pode ser entregue, depois de aplicar o método de crítica.
fontes:
  - pbakaus/impeccable, skill/reference/craft-floor.md e critique.md (Apache-2.0)
  - wondelai/skills, steve-jobs-design-review (MIT)
  - educlopez/ui-craft, references/review.md (MIT)
  - owl-listener/designer-skills, visual-critique (MIT)
  - jsonmaster555-ai/Design-skills-, interface-quality-gate.md (sem licença; só ideias, nenhum texto aproveitado)
---
# Portão de qualidade

## Princípios

1. **Critério binário ou não é critério.** Cada item responde sim ou não com base em algo visto ou medido. "Bom contraste" não passa no portão; "texto ≥ 4,5:1 medido" passa.
2. **Medir, não estimar.** Contraste se calcula com os hex reais. Tamanho de texto se lê em px no formato final. Zona segura se confere sobre o render com a máscara da plataforma.
3. **O portão não decide estilo.** Ele confere se a peça cumpre o contrato de direção, o DESIGN.md e o piso técnico. Gosto fica no método de crítica.
4. **O que não foi verificado é declarado.** Um item não conferido nunca conta como aprovado.
5. **Veredito com caminho.** Toda reprovação vem com a lista exata do que corrigir.

## Regras operacionais

### Pré-condições

Sem estas, o portão não abre e o veredito é REPROVADO:
- Pelo menos um render no formato final foi aberto e olhado pelo crítico (imagem, quadro ou captura).
- O contrato de direção existe, ou a intenção presumida foi escrita.
- O DESIGN.md do projeto foi lido (ou foi registrado que o projeto não tem um).

### Checklist

Marque cada item: ✔ passa · ✘ falha · — não se aplica · ? não verificado.

**A. Intenção e conceito**
- A1. A ação desejada do contrato é identificável em até 5 segundos no render.
- A2. O elemento memorável definido no contrato está presente.
- A3. Nenhum item da lista "proibido nesta peça" aparece.

**B. Hierarquia**
- B1. O elemento observado em 1º lugar é o 1º pretendido.
- B2. Não há dois elementos com o mesmo peso disputando a posição 1.
- B3. No teste de desfoque, a mancha dominante é o elemento 1.
- B4. Na escala de cinza, a ordem 1–3 se mantém.

**C. Grade e alinhamento**
- C1. Existe grade ou eixo identificável e todos os blocos de texto se alinham a ele.
- C2. Nenhum quase-alinhamento (desvio de 1–6 px entre elementos que deveriam alinhar).
- C3. Espaçamentos usam a unidade base do sistema (múltiplos registrados).
- C4. Espaço entre grupos é maior que o espaço dentro dos grupos.

**D. Tipografia**
- D1. Famílias e pesos usados constam no DESIGN.md (ou no contrato).
- D2. No máximo 2 famílias e 3 pesos, salvo regra de marca.
- D3. Corpo de texto no tamanho mínimo da mídia (referência: tela ≥ 16 px; feed 1080 px de largura ≥ 28 px; impresso ≥ 9 pt; legenda de vídeo vertical ≥ 42 px em 1080×1920).
- D4. Medida de texto corrido entre 45 e 75 caracteres por linha (impressos e telas largas).
- D5. Microtipografia: aspas curvas, travessão/meia-risca corretos, sem viúva em título, caixa alta com tracking positivo.
- D6. Nenhum texto cortado, transbordando ou com hifenização quebrando nome próprio.

**E. Cor e contraste (medido)**
- E1. Todas as cores usadas estão no DESIGN.md ou no contrato.
- E2. Texto normal ≥ 4,5:1 contra o fundo real (incluindo sobre foto, medir no ponto mais claro sob o texto).
- E3. Texto grande (≥ 24 px, ou ≥ 18,5 px em negrito) e ícones funcionais ≥ 3:1.
- E4. Nenhuma informação depende só de matiz (confirma-se na escala de cinza).
- E5. Cada cor tem um papel único (estrutura, semântica, acento).

**F. Coerência com o DESIGN.md**
- F1. Logo na versão, tamanho mínimo e área de proteção previstos.
- F2. Raio, sombra, estilo de ícone e tratamento de imagem seguem o sistema.
- F3. Tom de texto e regras de conteúdo da marca respeitados.

**G. Formato e zona segura**
- G1. Dimensões e proporção exatas do pedido.
- G2. Nenhum texto ou elemento essencial nas zonas cobertas pela interface da plataforma (conferir com máscara: barra de perfil, legenda, botões laterais, corte de grade de perfil).
- G3. Margem de segurança respeitada em impressos (sangria e área de corte).
- G4. Exportação no formato, perfil de cor e peso exigidos.

**H. Acessibilidade**
- H1. Texto alternativo ou descrição entregue quando a mídia permite.
- H2. Vídeo com legenda queimada ou arquivo de legenda; nada essencial só em áudio.
- H3. Movimento sem piscadas acima de 3 por segundo; em web, respeita redução de movimento.
- H4. Em interfaces: foco visível, alvos ≥ 44 px, estados (hover, desabilitado, erro, vazio) desenhados.

**I. Anti-genérico**
- I1. Cada tique do catálogo presente está justificado por regra de marca ou pelo contrato.
- I2. Teste "tire o logo": o assunto ou a marca continua reconhecível.
- I3. Passada de subtração registrada.

**J. Acabamento**
- J1. Ícones de uma única família, mesmo traço e grade.
- J2. Imagens sem pixelização no tamanho final, sem marca d'água, sem artefatos de geração (mãos, texto falso, bordas derretidas).
- J3. Nenhum texto de preenchimento (lorem ipsum, "Título aqui") e nenhum dado inventado apresentado como real.
- J4. Ortografia e acentuação revisadas.

**K. Coerência com a série (projeto com `design/sistema.md` ou peças anteriores)**
- K1. Grade, margens e escala tipográfica são as registradas em `sistema.md` para este formato (ou a diferença está registrada em `decisoes.md`).
- K2. Posta lado a lado com as 2–3 peças aprovadas mais recentes do mesmo formato (renders em `design/pecas/*/renders/`), a peça parece da mesma família: mesma posição de logo e assinatura, mesmo tratamento de imagem, mesma lógica de cor e de destaque.
- K3. O que varia entre as peças é o que o `sistema.md` permite variar (conteúdo, imagem, cor de destaque da série), não a estrutura.
- K4. Elementos recorrentes (rótulos, CTA, numeração, assinatura) têm o mesmo tamanho, peso e distância das bordas que nas peças anteriores; medir no render, não estimar.

### Reprovação automática

Qualquer um destes leva a REPROVADO, independentemente do restante:
- Nenhum render foi olhado.
- Contraste de texto abaixo de 4,5:1 (normal) ou 3:1 (grande) em conteúdo essencial.
- Texto ou elemento essencial em zona proibida da plataforma, ou fora da área de corte.
- Fonte ou cor fora do DESIGN.md sem decisão registrada.
- Grade, margens ou escala diferentes das do `design/sistema.md` para o mesmo formato, sem decisão registrada em `decisoes.md`.
- Texto cortado, transbordando ou com erro de ortografia em título ou CTA.
- Dimensão do arquivo diferente da pedida.
- Hierarquia invertida (B1 falha) na ação desejada.
- Placeholder ou dado inventado visível.

### Vereditos

- **APROVADO**: nenhuma reprovação automática, nenhum ✘ em A, B, E, F, G, K; no máximo dois ✘ de nível P3.
- **APROVADO COM CORREÇÕES**: nenhuma reprovação automática; existem ✘ em C, D, I ou J que não comprometem a ação desejada. As correções são listadas e devem ser aplicadas antes da entrega, sem nova rodada completa de portão (só reconferir os itens corrigidos).
- **REPROVADO**: qualquer reprovação automática, ou ✘ em A ou B, ou mais de cinco ✘ no total.

Itens marcados "?" não são ignorados: se um item "?" for de reprovação automática (ex.: contraste não medido), o veredito máximo é APROVADO COM CORREÇÕES e a verificação pendente vira a primeira correção.

### Formato do relatório

```
PORTÃO DE QUALIDADE — [peça] — [data]
Render(s) olhado(s): [arquivos/quadros, dimensões]
Base: contrato [sim/presumido] · DESIGN.md [lido/inexistente] · sistema.md [lido/inexistente] · peças comparadas: [lista]

VEREDITO: APROVADO | APROVADO COM CORREÇÕES | REPROVADO
Motivo em uma frase: ...

Reprovações automáticas: [nenhuma | lista]
Checklist: A ✔✔✔ · B ✔✘✔✔ · C ... (com códigos dos ✘)

Hierarquia: pretendida 1..5 / observada 1..5
Contrastes medidos: [par de cores → razão] ...

Lista de corte (remover): ...
Lista de correção (P1→P3, cada uma com valor concreto):
1. [código] observação → correção
2. ...

Mantido por regra de marca: [item do catálogo → regra do DESIGN.md]
O que não foi verificado: [itens "?" e por quê: sem máscara da plataforma, sem arquivo final, sem áudio...]
Correção de maior retorno: ...
```

## Falhas comuns

| Sintoma | Causa | Correção |
|---|---|---|
| Aprovado sem render | Crítico avaliou código ou descrição | Pré-condição obrigatória; sem render, REPROVADO |
| Contraste "parece ok" | Não foi medido | Calcular razão com os hex reais; sobre foto, no ponto mais claro |
| Relatório omite o que não checou | Pressão para concluir | Seção "o que não foi verificado" obrigatória, mesmo vazia |
| Peça reprovada por usar item de marca | Catálogo anti-genérico aplicado acima do DESIGN.md | Seção "mantido por regra de marca" e checar F antes de I |
| Correções vagas | Faltou valor concreto | Cada item da lista de correção com px, hex, peso ou ação de remover |
| Reprovações em loop | Correções não priorizadas | Ordenar P1→P3 e reconferir só os itens tocados |

## Como verificar

- O relatório tem todas as seções do formato, incluindo "o que não foi verificado".
- Cada ✘ tem código e correção correspondente.
- Os contrastes listados trazem os dois hex e a razão numérica.
- O veredito é coerente com as regras: nenhuma reprovação automática num APROVADO.
- Os renders citados existem e estão no formato final.

## Quando quebrar a regra

- **Rascunho de exploração** (direções para escolher): aplique só A, B e I; declare "portão parcial — exploração".
- **Mídia sem texto** (ilustração pura, textura): D e partes de E não se aplicam; marque "—".
- **DESIGN.md em conflito com acessibilidade** (cor de marca abaixo do contraste mínimo em texto): não aprove silenciosamente; reporte o conflito, proponha uso da cor só em elementos não textuais ou em texto grande, e deixe a decisão para a pessoa.
- **Limiares da plataforma diferentes** dos de referência: use os da plataforma ou do DESIGN.md e cite a fonte no relatório.
