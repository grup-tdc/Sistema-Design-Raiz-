---
name: metodo
description: Método de trabalho do estúdio Design-Raiz (memória do projeto → brief → conceito → estrutura → detalhe → render → verificação → crítica → registro) com as regras de autoridade e os scripts de verificação. Pré-carregado nos agentes diretor-de-arte e critico. Leia quando for criar, revisar ou validar qualquer peça visual (web, UI, post, pôster, vídeo, impresso, identidade, slides).
---

# Método Design-Raiz

O conhecimento de design está no banco (`${CLAUDE_PLUGIN_ROOT}/skills/banco/`, índice em `banco/SKILL.md`).
Este arquivo define **como trabalhar**. A marca nunca vem daqui: vem do projeto.
Modelos em `${CLAUDE_PLUGIN_ROOT}/templates/design/`. Scripts em `${CLAUDE_PLUGIN_ROOT}/skills/metodo/scripts/` (abaixo: `<scripts>`).

## A pasta `design/` do projeto: a memória que dá coerência

Todo projeto em que o estúdio trabalha tem (ou ganha) esta estrutura na raiz:

```
design/
├── DESIGN.md      quem a marca é: cores, fontes, grafismos, faça/não faça          (a pessoa aprova)
├── sistema.md     como a marca já foi diagramada, por formato: grade, escala,
│                  posições fixas, o que pode variar, comando de auditoria         (o agente mantém)
├── decisoes.md    registro: data, decisão, motivo, origem, quem aprovou            (o agente mantém)
└── pecas/<AAAA-MM-slug>/
    ├── brief.md · contrato.md
    ├── renders/v1-…png, v2-…png …
    └── critica-v1.md, critica-v2.md …
```

- Se o projeto já tiver identidade em outro lugar (ex.: `DESIGN.md` na raiz, padrão visual citado no `CLAUDE.md`),
  **não duplique**: `design/DESIGN.md` vira uma linha apontando para o arquivo existente.
- `sistema.md` é o que permite a peça 7 de uma série sair coerente com as peças 1–6. Ler antes, atualizar depois, sempre.

## 0. Carregar o contexto (antes de qualquer decisão)

1. Identidade: `design/DESIGN.md` → `DESIGN.md` na raiz → arquivos citados no `CLAUDE.md`/`AGENTS.md` → tokens/tema/CSS de variáveis.
   **Se existir, ela manda** sobre qualquer regra do banco, inclusive o catálogo anti-genérico.
2. Memória estrutural: `design/sistema.md` e `design/decisoes.md`. Liste as peças anteriores do **mesmo formato**
   em `design/pecas/` e **abra os renders** das 2–3 mais recentes aprovadas.
3. Sem identidade: faça o brief (§1), proponha `design/DESIGN.md` a partir do modelo e **peça aprovação** antes de gravar.
4. Sem pasta `design/`: crie-a a partir dos modelos (isso é automático; só o `DESIGN.md` exige aprovação).

## 1. Brief → `pecas/<slug>/brief.md`

Responda por escrito antes de desenhar. O que faltar e mudar o resultado, pergunte; o resto, assuma e declare no brief.
Objetivo e **uma** ação · público e contexto de uso · formato exato · conteúdo real (nunca lorem ipsum) · restrições ·
série a que pertence. Consulte `banco/conceito/do-brief-ao-conceito.md`.

## 2. Conceito e contrato → `pecas/<slug>/contrato.md`

- **Primeiro o que se reutiliza**: se `sistema.md` tem o formato, a grade, a escala e as posições fixas vêm de lá.
  Só invente estrutura para formato novo ou quando o brief pedir ruptura. Nesse caso, registre por quê.
- 3–4 palavras de caráter → consequências visuais concretas. Sem marca fechada: 2–3 direções do mundo do público, escolha com critério.
- **Repertório**: cruze as palavras de caráter com o índice de estilos (`banco/SKILL.md` → Estilos), leia as fichas de 2–3
  candidatos e siga `banco/conceito/estilo-e-referencia.md`: extraia **princípios**, traduza para o meio e a marca,
  calibre o olho com referências reais dos acervos (`banco/referencias/`), passe no teste de pastiche.
  Com `DESIGN.md` definido, o estilo atua em composição, ritmo e gesto; fontes e cores da marca ficam.
- Contrato: conceito, reutilizado × novo, estilos e princípios usados (com referências), hierarquia pretendida (1º, 2º, 3º),
  grade, escala, papéis de cor, regra de espaçamento, proibições, critério de sucesso.
- Leia `banco/conceito/anti-generico.md` **antes** de produzir.

## 3. Estrutura antes do detalhe

- Grade com números para o formato exato: `banco/composicao/grades.md`, ou a do `sistema.md`.
- Ordem de leitura e pesos 1–5 em blocos cinza ou ASCII. Só depois tipografia fina, cor e acabamento.
- Leia do banco **só o que a tarefa pede** (2–5 arquivos, via índice).

## 4. Produção

Tokens/variáveis para tudo que se repete. Conteúdo real no comprimento real (o título mais longo, o número maior).

## 5. Verificação — obrigatória; renders em `pecas/<slug>/renders/vN-…png`

| Passo | Comando | O que você faz com o resultado |
|---|---|---|
| Renderizar | `node <scripts>/renderizar.mjs peca.html --tamanhos 1080x1920 --saida design/pecas/<slug>/renders` | **Abra cada PNG com Read e olhe.** Renomeie para `vN-…`. |
| Auditar | o comando registrado no `sistema.md` para o formato, ou `node <scripts>/auditar.mjs peca.html --tamanho … --base … --escala … --fontes "…" --paleta "…" --zona …` | Corrija toda REPROVAÇÃO; corrija ou justifique cada ALERTA; olhe cada NÃO MENSURÁVEL. |
| Contraste pontual | `node <scripts>/contraste.mjs "#texto" "#fundo"` | Nunca afirme contraste sem medir. |
| Grade / zona | `node <scripts>/sobrepor.mjs renders/vN.png --colunas … --margem … --gutter … --linha-base … --zona …` | Bordas nas colunas? Nada crítico no vermelho? |
| Vídeo | `node <scripts>/quadros.mjs video.mp4 --intervalo 0.5 --saida design/pecas/<slug>/renders/quadros` | Olhe a prancha e os quadros-chave. |
| Série | abra o render novo e os das peças irmãs, um depois do outro | Mesma família? Elementos recorrentes no mesmo lugar e tamanho? |

Aplique `banco/critica/metodo-de-critica.md` a si mesmo e itere até não haver reprovação.
Ferramenta que não roda (sem Playwright, sem ffmpeg) entra como **não verificado**; nunca simule o resultado.

## 6. Entrega para validação independente

Quem produziu não aprova. Devolva:

```
PEÇA: pasta design/pecas/<slug>/ (arquivos da peça, renders vN)
CONTRATO: resumo, com reutilizado × novo
VERIFICADO: comandos rodados e resultado
NÃO VERIFICADO: o que não pôde ser checado e por quê
PEÇAS IRMÃS COMPARADAS: caminhos
PRÓXIMO PASSO: chamar o agente critico
```

O crítico não grava arquivos: quem o chamou salva o relatório em `pecas/<slug>/critica-vN.md`.

## 7. Registro, depois da aprovação

- `contrato.md` → tabela de versões (render, veredito, o que mudou).
- `decisoes.md` → uma linha por decisão relevante (nova grade, novo componente, exceção, correção exigida pelo crítico).
- `sistema.md` → formato novo: registre grade, escala, posições fixas, o que varia, comando de auditoria e a peça
  de referência. Formato existente: só acrescente componentes novos. **Mudar o que já estava registrado exige aprovação.**

## Autoridade

| Classe | Ações |
|---|---|
| Automático | Ler o projeto e o banco; criar `design/` e os arquivos de peça (brief, contrato, renders, críticas); renderizar; auditar; criticar; acrescentar linhas em `decisoes.md` |
| Válido na sessão | Editar os arquivos da peça pedida; acrescentar formato ou componente novo ao `sistema.md` |
| Exige aprovação da pessoa | Criar ou alterar `DESIGN.md`/tokens de marca; **alterar decisão já registrada no `sistema.md`**; instalar dependências; sobrescrever peça existente fora do escopo; usar imagem de terceiros |
| Proibido | Inventar fonte/cor/estilo quando o projeto define; ignorar o `sistema.md` sem registrar o motivo; declarar pronto sem render olhado; afirmar medida não medida; apagar linhas de `decisoes.md` ou trabalho da pessoa |
| Escalar | Brief ambíguo que muda o resultado; marca × acessibilidade em conflito; pedido que quebra o sistema da série: apresente as opções, não decida sozinho |
