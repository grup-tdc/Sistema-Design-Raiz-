---
titulo: Interface e componentes
quando_consultar: Ao desenhar ou revisar componentes, formulários, tabelas e microinterações de uma interface e precisar decidir hierarquia, estados e comportamento.
fontes:
  - wondelai/skills — refactoring-ui, microinteractions (MIT)
  - jakubkrehel/skills — better-ui, better-layout (MIT)
  - educlopez/ui-craft — references/forms.md, state-design.md, components.md (MIT)
  - pbakaus/impeccable — reference/craft-floor.md (Apache-2.0)
  - Referências primárias: Wathan & Schoger "Refactoring UI", Dan Saffer "Microinteractions"
---
# Interface e componentes

Regras de construção de interface que valem para qualquer marca. Cores, tipos, raios e sombras concretos vêm do DESIGN.md; aqui está como usá-los para criar hierarquia e comportamento.

## Princípios

### Hierarquia (Refactoring UI destilado)

- **Hierarquia nasce de contraste relativo, não de tamanho absoluto.** As alavancas são tamanho, peso, cor/tom, espaço e posição. Use uma ou duas para diferenciar um nível; empilhar todas (maior, mais negrito, colorido e com fundo) gera gritaria e apaga o resto.
- **Enfraqueça os concorrentes em vez de reforçar o principal.** Se o título não se destaca, clareie o texto de apoio, reduza o peso dos rótulos, rebaixe a ação secundária para estilo fantasma ou link. Rótulos de dados ("E-mail:") quase sempre podem sumir ou ficar discretos; o dado é o que importa.
- **Comece em tons de cinza.** Construa a tela sem cor de marca; se a hierarquia funcionar só com tons e espaço, a cor depois serve para significado (ação, estado, destaque), não para salvar o layout.
- **Profundidade comunica elevação.** Sombra pequena e nítida para elementos levemente elevados (botão, cartão); sombra grande e difusa para camadas sobrepostas (menu, modal). Use uma escala curta e fixa (3 a 5 níveis) e uma única direção de luz. Elevação maior significa camada mais próxima e mais importante no momento.
- **Separação por espaço antes de borda.** Bordas em excesso fragmentam. Para separar grupos, primeiro aumente o espaço, depois use diferença de fundo, e só então borda fina. Elementos relacionados ficam mais próximos entre si do que de elementos de outro grupo (o espaço interno de um grupo é menor que o espaço entre grupos).
- **Escalas fechadas.** Espaçamento, tamanhos de texto e sombras saem de escalas definidas no DESIGN.md. Valor solto ("17 px aqui, porque ficou bom") é dívida.

### Estados obrigatórios

Todo componente interativo ou que exibe dados tem estados desenhados, não implícitos:

| Estado | O que comunica | Requisito mínimo |
|---|---|---|
| Vazio | Nada aqui ainda | Explica por quê e oferece a ação para preencher |
| Carregando | Está vindo | Esqueleto com o formato do conteúdo; indicador só se >400 ms |
| Erro | Algo falhou | O que aconteceu, por quê se souber, e como tentar de novo |
| Sucesso | Deu certo | Confirmação proporcional (inline para ação pequena, tela para conclusão de fluxo) |
| Desabilitado | Não disponível agora | Visivelmente inativo e, quando possível, o motivo (dica ou texto) |
| Foco | Onde está o teclado | Anel visível com contraste ≥3:1 contra o fundo adjacente |
| Hover | Isto é interativo | Mudança sutil; nunca a única pista de interatividade |
| Ativo/pressionado | Recebi o toque | Resposta imediata ao pressionar |

Acrescente quando couber: selecionado, parcialmente carregado, offline, sem permissão, lista muito longa, texto muito longo.

### Formulários

- **Rótulo acima do campo**, sempre visível. Leitura vertical única, funciona em telas estreitas e com tradução.
- **Placeholder não é rótulo.** Some ao digitar, tem contraste baixo e confunde com valor preenchido. Use-o apenas para exemplo de formato, se necessário.
- **Erros inline**, junto ao campo, validados ao sair do campo (não a cada tecla) e reavaliados ao corrigir. Mensagem diz o problema e a solução. Cor nunca sozinha: ícone ou texto acompanha.
- **Agrupamento por espaço 4/16/48:** cerca de 4 px entre rótulo e campo (pertencem juntos), 16 px entre campos, 48 px entre grupos temáticos. Os números exatos seguem a escala do projeto; a proporção é o que importa.
- Uma coluna. Campos lado a lado só quando formam uma unidade (cidade/UF, validade/CVV).
- Peça só o necessário. Marque o que for opcional em vez de pôr asterisco em tudo.
- Tipo de campo correto (`email`, `tel`, `numeric`) para abrir o teclado certo no celular; autocompletar ligado.
- Botão de envio nomeia o resultado ("Criar conta"), não "Enviar".

### Alvos e densidade

- **Alvos de toque ≥44×44 px** (WCAG 2.2 AA pede no mínimo 24×24 com espaçamento; 44 é a meta para toque). A área clicável pode ser maior que o desenho visível via padding.
- Pelo menos 8 px entre alvos adjacentes no toque.
- **Densidade segue o uso:** ferramenta de trabalho diário aceita linhas compactas; produto de uso esporádico pede espaço generoso. Defina uma densidade por produto e mantenha.

### Tabelas

- Texto alinhado à esquerda, números à direita, com algarismos tabulares e mesma quantidade de casas decimais.
- Cabeçalho alinhado como o conteúdo da coluna.
- Linhas separadas por espaço ou filete muito leve; zebra só em tabelas largas.
- Cabeçalho fixo em tabelas longas; primeira coluna fixa em tabelas largas.
- No celular, transforme linhas em cartões ou mostre colunas prioritárias com detalhe expansível. Rolagem horizontal só dentro do contêiner da tabela, nunca na página.
- Estado vazio e "nenhum resultado para o filtro" são diferentes e têm textos diferentes.

### Microinterações (Saffer)

Quatro partes:

1. **Gatilho:** o que inicia (ação do usuário ou condição do sistema). Deve ser visível onde a pessoa espera.
2. **Regras:** o que acontece e em que ordem; o que pode e não pode.
3. **Feedback:** como a pessoa percebe as regras em ação (visual, texto, som, vibração).
4. **Loops e modos:** o que muda com repetição ou tempo (lembrar a última escolha, reduzir animação após a primeira vez).

Tempos: resposta inicial em menos de 100 ms; transições de interface entre ~150 e 300 ms; entradas de elementos até ~400 ms. **Feedback proporcional ao evento:** marcar uma caixa pede mudança discreta; concluir uma compra merece confirmação clara; erro de rede merece mensagem persistente, não um aviso que some em 2 s.

## Regras operacionais

1. Para diferenciar um nível hierárquico, mude no máximo duas alavancas. Se precisar de três, rebaixe os concorrentes.
2. Valide a hierarquia em tons de cinza antes de aplicar a cor da marca.
3. Cada componente entregue vem com a matriz de estados preenchida; estado faltando é bug.
4. Botões: uma primária por área; secundária com menos peso; ação destrutiva com cor de perigo só no ponto de confirmação.
5. Nenhum campo sem rótulo visível ou, em casos justificados (busca), sem rótulo acessível.
6. Mensagens de erro ficam até serem resolvidas; avisos temporários só para confirmações não críticas e com tempo de leitura suficiente.
7. Sombras e raios saem da escala do DESIGN.md; nunca mais de uma direção de luz na mesma tela.
8. Animações usam `transform` e `opacity`; respeitam `prefers-reduced-motion` reduzindo deslocamento a um simples esmaecer ou nada.
9. Alvos de toque medidos no render: nada interativo abaixo de 24 px e meta de 44 px em telas de toque.

## Falhas comuns

| Sintoma | Causa | Correção |
|---|---|---|
| Tudo parece importante | Alavancas empilhadas em vários elementos | Escolher um protagonista por área; clarear e diminuir o resto |
| Tela fragmentada em caixas | Borda em todo agrupamento | Separar por espaço e fundo; remover bordas redundantes |
| Cor "consertando" layout fraco | Hierarquia construída com cor | Refazer em cinza; usar cor só para significado |
| Formulário onde não se sabe o que preencher | Placeholder como rótulo | Rótulo acima, permanente |
| Erro descoberto só ao enviar | Validação tardia | Validação ao sair do campo e mensagem inline |
| Tela branca durante carregamento | Estado de carregamento ausente | Esqueleto com a forma do conteúdo |
| Lista vazia sem explicação | Estado vazio não desenhado | Texto do porquê e ação para começar |
| Botão desabilitado sem motivo | Restrição sem feedback | Informar o que falta ou manter habilitado e validar |
| Foco invisível ao usar Tab | `outline: none` sem substituto | Anel de foco com `:focus-visible` e contraste ≥3:1 |
| Números desalinhados na tabela | Alinhamento à esquerda, algarismos proporcionais | Alinhar à direita e usar algarismos tabulares |
| Animação que atrasa a tarefa | Transição longa em ação frequente | Reduzir para ≤200 ms ou remover em ações repetidas |
| Toast de erro que some antes de ler | Feedback desproporcional | Erro persistente, inline, com ação de tentar de novo |

## Como verificar

- **Teste em cinza:** dessature a captura; a ordem de leitura continua clara?
- **Teste do borrão:** desfoque a tela; o elemento principal ainda é o mais visível?
- **Teclado:** Tab por todos os controles; foco sempre visível, ordem lógica, Enter/Espaço acionam, Esc fecha menus e modais e devolve o foco a quem abriu.
- **320 px:** formulários em uma coluna, tabelas viram cartões ou rolam dentro do contêiner, nenhum alvo sobreposto.
- **Zoom 200%:** rótulos e mensagens de erro não cortam nem se sobrepõem.
- **Contraste medido:** texto ≥4,5:1; anel de foco, bordas de campo e ícones essenciais ≥3:1.
- **Estados todos renderizados:** monte uma página de referência com cada componente em vazio, carregando, erro, sucesso, desabilitado, foco, hover e ativo. Conferir também texto longo, nome sem sobrenome, valor zero e lista com 1 e com 500 itens.
- **Medida de alvos:** inspecione a caixa clicável real de cada botão e ícone no celular.
- **Movimento reduzido:** ligue a preferência no sistema e confira se nada essencial depende da animação.

## Quando quebrar a regra

- **Rótulo dentro do campo (flutuante)** é aceitável se continuar visível depois de preenchido e com contraste suficiente; placeholder puro, nunca.
- **Duas colunas em formulário** fazem sentido em telas largas de uso profissional repetitivo, se a ordem de tabulação seguir a leitura.
- **Alta densidade** (alvos de 32 px, linhas compactas) é válida em ferramentas de desktop com mouse para usuários treinados; mantenha 44 px nas versões de toque.
- **Validação a cada tecla** é útil quando ajuda em vez de punir: força da senha, contagem de caracteres, disponibilidade de nome de usuário.
- **Bordas em vez de espaço** quando o espaço é escasso (tabelas densas, painéis) ou quando o DESIGN.md as define como traço da linguagem.
- **Microinterações mais longas e expressivas** cabem em momentos raros e de pico (conclusão de onboarding, conquista), nunca em ações repetidas dezenas de vezes por dia.
