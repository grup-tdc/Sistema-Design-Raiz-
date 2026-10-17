# Design-Raiz

Estúdio de design para o Claude Code. Um plugin global com:

- **`diretor-de-arte`**: agente que cria e refaz peças (web/UI, posts, pôsteres, vídeo/motion, impresso, identidade, slides) com método: brief → conceito → estrutura → detalhe → render → verificação.
- **`critico`**: agente **só leitura** que renderiza, mede e julga com um portão de qualidade. Quem produz não aprova.
- **`/design-raiz:estudio`**: comando que orquestra o ciclo diretor ⇄ crítico (até 3 rodadas) e escala para você o que for decisão sua.
- **Banco de conhecimento** (`skills/banco/`): 25 referências sobre composição e grades, tipografia, cor, UX/UI, formatos, conceito e crítica, escritas a partir de livros e dos melhores repositórios avaliados (fontes citadas em cada arquivo).
- **Verificações determinísticas** (`skills/metodo/scripts/`), que não usam IA: render em PNG, auditoria de contraste, escala, fontes, paleta, espaçamento, alinhamento, transbordo e zona segura; quadros de vídeo; sobreposição de grade e zonas.

## Por que existe

Modelos produzem design genérico por três motivos: não veem o que geram, recebem instruções vagas ("faça uma obra-prima")
e acumulam skills de estética que se contradizem. Aqui o conhecimento é técnico e neutro em relação à marca,
o resultado é sempre renderizado e olhado, e a validação é feita por outro agente e por scripts.

## Instalação (global)

No Claude Code:

```
/plugin marketplace add gittdcadvogados/Design-Raiz
/plugin install design-raiz@design-raiz
```

Escolha o escopo **usuário** para valer em todos os projetos. Como o repositório é privado, a máquina precisa ter acesso
ao GitHub pelo git (ex.: `gh auth login` e `gh auth setup-git`).

### Dependências das verificações

| Ferramenta | Para quê | Instalar |
|---|---|---|
| Node ≥ 18 | todos os scripts | nodejs.org |
| Playwright + Chromium | `renderizar` (completo) e `auditar` | `npm i -g playwright && npx playwright install chromium` |
| ffmpeg | `quadros`, `sobrepor` | `brew install ffmpeg` |

Sem Playwright, `renderizar` usa o Chrome instalado (sem captura de página inteira) e `auditar` não roda. O agente
declara isso como **não verificado**; ele não finge o resultado.

## Uso

1. Peça normalmente (*"refaça este post"*, *"diagrame este folder A4 em 3 dobras"*) ou use `/design-raiz:estudio <pedido>`.
2. Na primeira vez num projeto, o agente cria a pasta `design/` (modelos em [`templates/design/`](templates/design/)).
   Se o projeto já tem um padrão visual citado no `CLAUDE.md`, ele aponta para esse arquivo. Se não tem marca nenhuma,
   ele propõe o `DESIGN.md` e você aprova.
3. Você recebe os renders, o veredito do crítico, o que foi medido, o que não pôde ser verificado e o que entrou no sistema do projeto.

## Memória do projeto: de onde vem a coerência

O agente não estrutura só a peça, estrutura o projeto. Em cada projeto ele mantém:

```
design/
├── DESIGN.md      quem a marca é (você aprova)
├── sistema.md     como a marca já foi diagramada, por formato: grade, escala, posições fixas, o que pode variar
├── decisoes.md    registro de decisões: data, decisão, motivo, origem, quem aprovou
└── pecas/<AAAA-MM-slug>/   brief, contrato de direção, renders v1..vN, relatórios do crítico
```

Antes de criar, o agente lê o `sistema.md` e olha as peças anteriores do mesmo formato. Depois que a peça é aprovada,
ele registra o que decidiu. O crítico compara cada peça nova com as irmãs. Assim, o post 7 de uma campanha sai da
mesma família que os posts 1 a 6. Mudar uma decisão já registrada no sistema exige a sua aprovação.

## Regras de autoridade

| Classe | Ações |
|---|---|
| Automático | ler o projeto e o banco, criar `design/` e os arquivos de peça, renderizar, auditar, criticar, registrar decisões |
| Na sessão | editar os arquivos da peça pedida, acrescentar formato novo ao `sistema.md` |
| Precisa da sua aprovação | criar ou alterar `DESIGN.md`/tokens de marca, alterar decisão já registrada no `sistema.md`, instalar dependências, usar imagem de terceiros |
| Proibido | inventar fonte/cor quando o projeto define, ignorar o sistema sem registrar o motivo, declarar pronto sem render olhado, afirmar medida não medida, apagar o registro de decisões |

## Recomendações para a sua conta

Desative as skills genéricas de estética que disputam espaço com o estúdio e não têm método:
`canvas-design`, `theme-factory`, `brand-guidelines` (esta última impõe a marca da Anthropic).

## Manutenção do banco

- Cada arquivo segue o formato: Princípios · Regras operacionais · Falhas comuns · Como verificar · Quando quebrar a regra.
- Números marcados como heurística ou "confirme a especificação vigente" (zonas de interface das plataformas, tempo
  de leitura em vídeo) devem ser revistos quando as plataformas mudarem. As zonas usadas pelos scripts ficam em
  `skills/metodo/scripts/zonas.json`.
- Fontes e licenças estão no cabeçalho de cada arquivo. O repositório `jsonmaster555-ai/Design-skills-`, que não tem licença,
  contribuiu só com ideias, sem nenhum texto reproduzido.
