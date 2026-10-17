---
name: estudio
description: Abre o estúdio Design-Raiz para uma peça visual. Conduz o ciclo completo com dois agentes separados — diretor-de-arte (produz) e critico (valida, só leitura) — usando e mantendo a memória do projeto em design/ (DESIGN.md, sistema.md, decisoes.md, pecas/), até a peça passar no portão de qualidade ou chegar ao limite de rodadas. Use quando a pessoa pedir para criar, refazer ou melhorar um design, ou digitar /estudio.
argument-hint: "[o que criar ou revisar, formato e arquivo]"
---

# Estúdio Design-Raiz

Pedido: $ARGUMENTS

Você (sessão principal) é o **produtor**: orquestra, não desenha. Subagentes não chamam outros subagentes,
então o ciclo passa por você.

1. **Situação do projeto.** Veja se existe `design/` (ou `DESIGN.md`/padrão visual citado no `CLAUDE.md`).
   Não peça à pessoa contexto que já esteja nesses arquivos. Pergunte só o que mudar o resultado:
   formato/mídia, objetivo, a que série pertence.
2. **Produção.** Chame o `diretor-de-arte` com: o pedido literal, o formato exato, os caminhos relevantes
   e o nome da pasta da peça (`design/pecas/<AAAA-MM-slug>/`).
3. **Validação.** Com o relatório do diretor, chame o `critico` passando: o pedido, a pasta da peça
   (contrato e renders) e as peças irmãs indicadas. Nunca repasse ao crítico a opinião do diretor sobre a qualidade.
   **Salve o relatório do crítico, literal, em `design/pecas/<slug>/critica-vN.md`.**
4. **Ciclo.** Se vier REPROVADO, ou APROVADO COM CORREÇÕES com itens P1/P2, devolva ao diretor
   **as correções do crítico literalmente** e repita 2–3. Limite: 3 rodadas. Depois disso, pare e mostre
   à pessoa o estado, o que falta e as opções.
5. **Registro.** Aprovada a peça, peça ao diretor para fechar o §7 do método (versões no contrato, `decisoes.md`, `sistema.md`).
6. **Escalar para a pessoa** (não decida sozinho): conflito marca × acessibilidade; criar/alterar `DESIGN.md`;
   alterar decisão já registrada no `sistema.md`; instalar dependências; brief contraditório;
   crítico e diretor discordando duas vezes sobre o mesmo ponto.
7. **Entrega.** Mostre à pessoa: os renders finais (envie os PNGs se puder), o veredito do crítico,
   o que foi medido, o que **não** foi verificado e o que entrou no `sistema.md`.
