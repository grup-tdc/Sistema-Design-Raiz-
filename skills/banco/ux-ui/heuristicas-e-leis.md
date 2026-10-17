---
titulo: Heurísticas de usabilidade e leis de UX
quando_consultar: Ao avaliar, criticar ou justificar decisões de uma interface (site, app, landing, formulário) antes de entregar ou ao revisar o trabalho de outra pessoa.
fontes:
  - wondelai/skills — ux-heuristics, design-everyday-things (MIT)
  - owl-listener/designer-skills — interaction-design (MIT)
  - educlopez/ui-craft — references/heuristics.md (MIT)
  - pbakaus/impeccable — reference/critique.md (Apache-2.0)
  - Referências primárias: Nielsen (1994), Krug "Don't Make Me Think", Norman "The Design of Everyday Things"
---
# Heurísticas de usabilidade e leis de UX

Ferramentas de diagnóstico, não de estilo. Nenhuma delas diz qual cor, fonte ou composição usar; a identidade vem do DESIGN.md do projeto. Elas dizem se a pessoa consegue entender, agir e se recuperar.

## Princípios

### As 10 heurísticas de Nielsen

| # | Heurística | Exemplo bom | Falha típica |
|---|---|---|---|
| 1 | Visibilidade do status do sistema | Botão "Enviar" vira "Enviando…" e depois "Enviado" | Clique sem resposta; a pessoa clica de novo e duplica o pedido |
| 2 | Correspondência com o mundo real | "Carrinho", "Finalizar compra", datas em dd/mm/aaaa | "Erro 500", "Payload inválido", jargão interno da empresa |
| 3 | Controle e liberdade | "Desfazer" após arquivar; fechar modal com Esc | Fluxo de cadastro sem voltar; exclusão sem desfazer |
| 4 | Consistência e padrões | O mesmo verbo para a mesma ação em todas as telas | "Salvar" numa tela, "Confirmar" noutra, "OK" numa terceira para a mesma coisa |
| 5 | Prevenção de erros | Seletor de data que bloqueia datas passadas; confirmação só em ação destrutiva | Campo livre aceitando qualquer formato e reclamando só no envio |
| 6 | Reconhecer em vez de lembrar | Busca com sugestões recentes; opções visíveis | Pedir que a pessoa digite um código que viu duas telas atrás |
| 7 | Flexibilidade e eficiência | Atalhos de teclado e ações em lote para quem usa muito | Única via é um caminho de cinco cliques para tarefa diária |
| 8 | Estética e design minimalista | Cada elemento da tela serve a tarefa atual | Banners, selos e textos concorrendo com a ação principal |
| 9 | Ajudar a reconhecer, diagnosticar e recuperar erros | "CPF incompleto: faltam 2 dígitos" ao lado do campo | "Dados inválidos" no topo, sem dizer qual campo |
| 10 | Ajuda e documentação | Dica contextual no ponto da dúvida | Central de ajuda genérica como única saída |

A 8 significa nada irrelevante, não "pouca coisa".

### Severidade 0–4

Cada problema recebe nota considerando três fatores: **frequência** (quantas pessoas topam com ele), **impacto** (o quanto atrapalha quando acontece) e **persistência** (se a pessoa aprende a contornar ou tropeça sempre).

| Nota | Significado | Ação |
|---|---|---|
| 0 | Não é problema de usabilidade | Ignorar |
| 1 | Cosmético | Corrigir se sobrar tempo |
| 2 | Menor: atrasa, mas a pessoa conclui | Baixa prioridade |
| 3 | Maior: causa erro ou abandono frequente | Corrigir antes de entregar |
| 4 | Catástrofe: impede a tarefa | Bloqueia a entrega |

Raro mas impede o pagamento: 4. Incômodo constante aprendido em um minuto: 2.

### Krug: não me faça pensar

- Cada tela deve ser autoexplicativa.
- As pessoas escaneiam, não leem, e escolhem a primeira opção razoável (satisficing).
- Escaneabilidade: hierarquia visual clara (o mais importante é o mais proeminente), blocos bem delimitados, títulos que dizem o conteúdo, texto cortado pela metade e depois pela metade de novo.
- Convenções são aliadas: logo no canto leva à home, ícone de lupa é busca, texto sublinhado é link. Inventar só quando a nova solução for claramente melhor e aprendida em segundos.
- Teste do porta-malas: em qualquer página, a pessoa deve saber em que site está, em que página, quais são as seções principais, onde está e como buscar.

### Leis de UX

- **Fitts:** o tempo para atingir um alvo cresce com a distância e diminui com o tamanho. Ação principal grande e perto de onde o olhar/polegar já está; bordas e cantos da tela são alvos "infinitos" no desktop. Ação destrutiva longe da ação frequente.
- **Hick:** o tempo de decisão cresce com o número e a complexidade das opções. Reduzir opções visíveis, agrupar, destacar a recomendada, revelar o avançado progressivamente. Não vale para listas que a pessoa já conhece (lista de países ordenada é busca, não decisão).
- **Jakob:** as pessoas passam a maior parte do tempo em outros sites e esperam que o seu funcione igual. Siga os modelos mentais estabelecidos para checkout, login, navegação e busca.
- **Miller:** a memória de trabalho segura poucos itens ao mesmo tempo (o "7±2" original foi revisto para cerca de 4 blocos). **Ressalva:** a lei fala de memória, não de quantos itens um menu pode ter. Um menu visível não exige memorização. Use-a para agrupar informação que precisa ser lembrada (telefone em blocos, código em grupos de 3–4), não para cortar menus em 7.
- **Tesler (conservação da complexidade):** toda tarefa tem uma complexidade que não some; ela fica com o sistema ou com a pessoa. Mova para o sistema: preencher cidade pelo CEP, detectar bandeira do cartão, lembrar escolhas.
- **Doherty:** abaixo de ~400 ms de resposta a interação parece fluida e a produtividade sobe. Acima disso, mostre progresso ou resposta otimista.
- **Pico-fim:** a experiência é lembrada pelo momento mais intenso e pelo final. Cuide do pior momento (erro, espera) e da tela de conclusão; um final confuso apaga um fluxo bom.

### Norman

- **Affordance:** a relação entre o objeto e o que a pessoa pode fazer com ele (um botão permite apertar).
- **Significante:** o sinal perceptível que comunica a affordance. Na tela, quase tudo é significante: borda, preenchimento, sublinhado, cursor, ícone. Texto que parece botão e não é, ou botão que parece texto, é falha de significante.
- **Mapeamento:** relação entre controle e efeito. Controles dispostos como o que eles afetam (seletor de alinhamento na ordem esquerda-centro-direita; controle ao lado do conteúdo que altera).
- **Feedback:** toda ação produz resultado perceptível, imediato e proporcional.
- **Restrições:** limitar ações possíveis para evitar erro (desabilitar opções impossíveis, máscaras de entrada, tipos de campo corretos).
- **Golfo de execução:** a distância entre o que a pessoa quer e o que a interface permite fazer ("como eu faço isso?"). Diminui com significantes e mapeamento.
- **Golfo de avaliação:** a distância entre o que aconteceu e o que a pessoa entende que aconteceu ("deu certo?"). Diminui com feedback e status visível.

## Regras operacionais

1. Toda crítica lista o problema, a heurística ou lei violada, a severidade 0–4 e a correção concreta. Sem nota, não é crítica, é opinião.
2. Ordene a lista por severidade; problemas 3 e 4 vêm primeiro e bloqueiam a entrega.
3. Toda ação do usuário tem resposta visível em até 100 ms; operações acima de 400 ms ganham indicador; acima de ~1 s, progresso ou esqueleto; acima de ~10 s, porcentagem ou etapa e opção de cancelar.
4. Ação destrutiva: preferir desfazer a confirmar. Confirmação só quando não há como desfazer, e o botão do diálogo nomeia a ação ("Excluir projeto"), não "OK".
5. Uma ação principal por tela ou seção. Se houver duas de mesmo peso, a decisão ainda não foi tomada.
6. Rótulos usam o vocabulário do público, verificável lendo em voz alta para alguém de fora.
7. Antes de inventar um padrão de navegação, checkout ou formulário, verifique como 3 produtos conhecidos do mesmo segmento resolvem. Desviar exige motivo escrito.
8. Para cada elemento clicável, pergunte: o que indica que ele é clicável sem passar o mouse? Se a resposta for "nada", falta significante.
9. Agrupe dados para lembrar em blocos de 3–4; não use Miller para limitar itens de menu.

## Falhas comuns

| Sintoma | Causa | Correção |
|---|---|---|
| Pessoa clica duas vezes e gera pedido duplicado | Sem feedback de status (heurística 1, golfo de avaliação) | Estado "enviando", botão bloqueado durante o envio, confirmação ao final |
| "Não sei o que fazer nesta tela" | Ações concorrentes de mesmo peso (Hick, Krug) | Uma ação primária; demais como secundárias ou ocultas |
| Ícones sem rótulo mal interpretados | Significante ambíguo, depende de memória (heurística 6) | Rótulo de texto junto ao ícone; só ícone para convenções universais |
| Erro genérico no topo do formulário | Heurística 9 ignorada | Mensagem inline no campo, dizendo o problema e como resolver |
| Link "clique aqui" perdido no texto | Escaneabilidade e significante fracos | Texto do link descreve o destino; estilo de link reconhecível |
| Menu cortado para 7 itens "por causa de Miller" | Leitura errada da lei | Agrupar por sentido; manter o que for necessário visível |
| Fluxo bom lembrado como ruim | Final confuso ou erro no pior momento (pico-fim) | Tela de conclusão clara com próximo passo; tratar o erro mais provável |
| Checkout "criativo" com abandono | Violação de Jakob | Seguir o padrão do segmento |
| Botão pequeno no canto oposto à ação | Fitts | Aumentar alvo e aproximá-lo do conteúdo que ele afeta |

## Como verificar

- **Percurso cognitivo:** execute a tarefa principal fingindo ser alguém novo; em cada passo responda "a pessoa sabe o que fazer?", "vê o controle?", "entende o resultado?".
- **Teste dos 5 segundos:** mostre a tela por 5 s e pergunte o que é e o que dá para fazer. Se errar, a hierarquia falhou.
- **Teclado:** percorra com Tab e Shift+Tab; toda ação é alcançável, o foco é visível e a ordem segue a leitura. Esc fecha camadas.
- **320 px e zoom 200%:** a ação principal continua visível e acionável; nada se sobrepõe nem exige rolagem horizontal.
- **Contraste medido:** texto ≥4,5:1, texto grande e componentes ≥3:1, medido com ferramenta, não a olho.
- **Estados renderizados:** force e capture vazio, carregando, erro, sucesso, desabilitado, foco, hover e ativo de cada componente interativo. Estado não renderizado é estado não desenhado.
- **Tempos:** com rede limitada, confira se toda ação acima de 400 ms tem indicador.
- **Achados:** nenhum problema de severidade 3 ou 4 aberto.

## Quando quebrar a regra

- **Ferramentas especializadas** (editores, painéis de operação) podem sacrificar a descoberta em favor da eficiência (heurística 7 acima da 6), desde que exista um caminho para iniciantes.
- **Jakob cede** quando o padrão vigente é comprovadamente ruim ou quando o público é interno e treinado; documente e teste.
- **Fricção intencional** é válida para ações irreversíveis e caras (digitar o nome do item para excluir), contrariando a fluidez de Doherty de propósito.
- **Peças expressivas** (campanhas, portfólios) podem surpreender no conteúdo, nunca na navegação, no foco ou na recuperação de erro.
- A severidade sobe para público vulnerável (idosos, baixo letramento digital, uso sob estresse).
