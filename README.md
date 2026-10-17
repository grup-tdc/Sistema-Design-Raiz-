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

1. Em cada projeto, crie um `DESIGN.md` na raiz a partir de [`templates/DESIGN.md`](templates/DESIGN.md). Também pode pedir:
   *"use o diretor-de-arte para montar o DESIGN.md deste projeto"*. Ele propõe e você aprova.
   Se o projeto já tem um padrão visual citado no `CLAUDE.md`, o agente usa esse.
2. Peça normalmente (*"refaça este post"*, *"diagrame este folder A4 em 3 dobras"*) ou use `/design-raiz:estudio <pedido>`.
3. Você recebe os renders, o veredito do crítico, o que foi medido e o que não pôde ser verificado.

## Regras de autoridade

| Classe | Ações |
|---|---|
| Automático | ler o projeto e o banco, renderizar, auditar, criticar |
| Na sessão | editar os arquivos da peça pedida |
| Precisa da sua aprovação | criar ou alterar `DESIGN.md`/tokens de marca, instalar dependências, usar imagem de terceiros |
| Proibido | inventar fonte/cor quando o projeto define, declarar pronto sem render olhado, afirmar medida não medida |

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
