---
titulo: Anti-genérico e catálogo de tiques de IA
quando_consultar: Ao montar tokens e layout de uma peça e ao revisá-la, para reconhecer escolhas feitas por inércia que denunciam design gerado.
fontes:
  - pbakaus/impeccable, skill/reference/craft-floor.md e nomes de regras em crates/core/src/checks (Apache-2.0)
  - anthropics/skills, skills/frontend-design/SKILL.md (Apache-2.0)
  - jpoindexter/typography-skills, skills/typography-critique (MIT)
  - educlopez/ui-craft, skills/ui-craft/SKILL.md (MIT)
  - jsonmaster555-ai/Design-skills-, anti-ai-slop.md (sem licença; só ideias, nenhum texto aproveitado)
---
# Anti-genérico e catálogo de tiques de IA

## Princípios

1. **Por que modelos convergem para a média.** Um modelo escolhe, em cada eixo livre, a opção mais provável dado tudo o que viu. A opção mais provável é, por definição, a mais comum: Inter, cards arredondados, sombra cinza suave, gradiente roxo. Cada escolha isolada é "segura"; somadas, produzem a peça que qualquer um geraria. Genérico não é um erro grande, é a soma de vinte decisões não tomadas.
2. **O tique é sintoma de eixo não decidido.** Nenhum item do catálogo é proibido em si. O problema é aparecer porque ninguém decidiu nada naquele eixo.
3. **A marca vence o catálogo.** Se o DESIGN.md do projeto define algo que aparece aqui (a marca usa caixa alta em rótulos, uma faixa lateral colorida, gradiente de identidade, numeração de módulos), isso é decisão de marca e deve ser aplicado. O catálogo combate escolhas por inércia, não decisões documentadas. Na dúvida, o DESIGN.md manda; registre no relatório que o item foi mantido por regra de marca.
4. **Ousadia em um lugar só.** Um elemento memorável e o resto disciplinado. Tiques costumam aparecer como enfeite espalhado.
5. **Subtrair é a correção mais barata.** A maior parte dos tiques some removendo, não adicionando.

## Regras operacionais

### Catálogo de tiques

| Tique | Por que denuncia | O que fazer em vez |
|---|---|---|
| Gradiente roxo→ciano/azul (fundo, botão, texto) | É a paleta padrão de produto de tecnologia gerado; não vem de nenhum assunto | Derivar a cor do território do público; gradiente só se for da marca ou descrever algo (luz, temperatura) |
| Texto com gradiente | Enfeite que reduz legibilidade e contraste mensurável | Ênfase por peso, tamanho ou posição |
| Hero centralizado + 3 cards iguais (ícone, título, texto) | Esqueleto de template; serve para qualquer assunto | Estrutura vinda do conteúdo: lista, comparação, sequência, imagem dominante, tabela |
| Eyebrow/kicker em caixa alta acima de todo título | Rótulo que repete o título e enche a peça de ruído | Título forte sozinho; rótulo só se carrega informação nova (data, categoria real) |
| Ícone dentro de quadradinho arredondado colorido | Decoração padrão de kit de UI, ícone vira carimbo | Ícone solto no traço do sistema, ou nenhum ícone se o texto basta |
| Sombra suave em tudo | Ninguém decidiu o que está acima de quê | Um sistema de elevação: borda OU sombra, só onde há sobreposição real |
| Cards dentro de cards | Contêiner usado como reflexo; hierarquia vira caixa de caixa | Agrupar por espaço e alinhamento; um nível de contêiner no máximo |
| Espaçamento uniforme entre tudo | Nada se agrupa, nada se destaca | Espaço curto dentro de grupos, longo entre grupos; mais espaço acima do título que abaixo |
| Hierarquia só por tamanho, em degraus iguais | Sem contraste de peso, cor ou espaço, os níveis se confundem | Combinar pelo menos dois meios: tamanho + peso, ou tamanho + espaço |
| Texto cinza sobre fundo colorido | Cinza neutro fica sujo e baixa o contraste | Texto secundário tingido do próprio matiz do fundo, com contraste medido |
| Glow neon em fundo escuro | Halo sem deslocamento não é profundidade, é efeito | Profundidade por valor e sobreposição; brilho só se a fonte de luz existe no assunto |
| Emoji ou glifo Unicode como ícone | Peso, cor e alinhamento inconsistentes; parece rascunho | Biblioteca de ícones única, traço e grade iguais |
| Fonte padrão por inércia (Inter, Roboto, Poppins, Montserrat, Arial) | Escolha que não diz nada sobre o assunto | Escolher pela palavra de caráter; justificar em uma frase |
| Números 01 / 02 / 03 sem sequência real | Simula processo onde só existe uma lista | Numerar só passos, etapas ou ordem que o leitor precisa seguir |
| Borda lateral colorida grossa em card arredondado | Atalho de "destaque" que briga com o raio | Destaque por fundo, peso do título ou posição |
| Uma palavra do título em outra cor ou itálico | Fórmula de ênfase gerada | Título inteiro com voz própria; ênfase só se mudar o sentido |
| Pílulas e raio grande em tudo | Um raio só para qualquer hierarquia | Raio por papel: controles pequenos podem ser pílula; blocos, não |
| Monoespaçada como fantasia de "tecnológico" | Uso decorativo de fonte de código | Mono só para código, dado ou medida |
| Métrica gigante + rótulo pequeno + mini-estatísticas | Molde de dashboard aplicado a qualquer peça | Mostrar o número só se ele for a mensagem; senão, o conteúdo |
| Separadores "A · B · C", "PALAVRA — frase", "→" em todo link | Ornamento de template | Pontuação normal; seta só onde há deslocamento |
| Fundo creme + serifa display + acento terracota; ou preto + um verde-ácido | Os dois "estilos de bom gosto" mais repetidos por modelos | Só se o território do público pedir; se escolher, justificar |
| Animação de entrada igual em todas as seções | Movimento que não diz nada | Um momento de movimento autoral; o resto estático ou em resposta à ação |
| Microtipografia ausente: aspas retas, hífen no lugar de travessão, caixa alta sem espacejamento, viúvas | O sinal mais forte de que ninguém revisou | Aspas curvas, travessão/meia-risca corretos, caixa alta com +5 a +10% de tracking, quebras ajustadas |

### Teste "tire o logo"

Cubra logotipo e nome. Pergunte: (a) dá para saber de que assunto é a peça? (b) dá para distinguir esta marca de uma concorrente? Se as duas respostas forem não, a identidade está só no logo. Corrija em ao menos um eixo forte: tipo, cor, composição ou imagem.

### Passada de subtração

Depois do primeiro render, antes de entregar:

1. Liste todos os elementos não textuais (ícones, sombras, bordas, fundos, divisores, selos, rótulos).
2. Para cada um, responda: **que informação ele carrega?** Sem resposta, remova.
3. Remova pelo menos um elemento decorativo e compare. Se ninguém sentir falta, ele não volta.
4. Conte cores e pesos de fonte. Acima de 3 cores funcionais (fora neutros) ou 3 pesos, justifique cada extra.

## Falhas comuns

| Sintoma | Causa | Correção |
|---|---|---|
| "Parece feito por IA" sem saber dizer por quê | Vários tiques pequenos somados | Passar a peça linha a linha pelo catálogo e marcar cada ocorrência |
| Peça trocável com a de outra marca | Identidade só no logo | Teste "tire o logo" e reforço em um eixo forte |
| Correção de tique gera outro tique | Trocou-se enfeite por enfeite | Corrigir por subtração primeiro |
| Item de marca removido como se fosse tique | Catálogo aplicado sem ler o DESIGN.md | Conferir o DESIGN.md antes de cortar; marca vence |
| Tudo "seguro" e sem vida | Nenhum elemento memorável escolhido | Definir a única ousadia no contrato de direção |
| Excesso de cards e caixas | Contêiner como unidade padrão de layout | Grade e espaço como estrutura; caixa só para conteúdo realmente separado |

## Como verificar

- Cada item do catálogo foi checado no render e marcado: ausente / presente por regra de marca (com a regra citada) / presente por decisão do contrato (com a justificativa).
- Fontes escolhidas têm justificativa escrita ligada ao caráter.
- Teste "tire o logo" feito e respondido.
- Passada de subtração feita, com pelo menos um elemento removido ou justificativa de por que nada saiu.
- Contagem de cores funcionais e pesos tipográficos registrada.

## Quando quebrar a regra

- **O DESIGN.md define o item**: aplique sem culpa e cite a regra.
- **O assunto pede**: neon numa peça de festa noturna, mono num material para programadores, números numa trilha de módulos de curso de fato sequenciais. O território justifica.
- **A pessoa pediu explicitamente** aquela linguagem: atenda e registre como decisão dela.
- **Convenção funcional da mídia**: um app pode ter cards porque o conteúdo é de fato uma coleção de itens independentes; isso não é tique, é estrutura.
