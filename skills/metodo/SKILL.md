---
name: metodo
description: Método de trabalho do estúdio Design-Raiz (brief → conceito → estrutura → detalhe → render → verificação → crítica) com as regras de autoridade e os scripts de verificação. Pré-carregado nos agentes diretor-de-arte e critico. Leia quando for criar, revisar ou validar qualquer peça visual (web, UI, post, pôster, vídeo, impresso, identidade, slides).
---

# Método Design-Raiz

O conhecimento de design está no banco (`${CLAUDE_PLUGIN_ROOT}/skills/banco/`, índice em `banco/SKILL.md`).
Este arquivo define **como trabalhar**. A marca nunca vem daqui: vem do `DESIGN.md` do projeto.

## 0. Contexto antes de tudo

1. Procure a identidade do projeto, nesta ordem: `DESIGN.md` na raiz → arquivos citados no `CLAUDE.md`/`AGENTS.md` do projeto
   (padrão visual, manual de marca) → `tokens`, `theme`, `tailwind.config`, CSS de variáveis.
2. **Se existir**, ela manda. Fontes, cores, grade, raios, movimento e proibições do projeto vencem qualquer regra do banco,
   inclusive o catálogo anti-genérico. O banco serve para executar bem a marca, não para substituí-la.
3. **Se não existir**, não invente uma marca em silêncio: faça o brief (§1), proponha um `DESIGN.md`
   a partir de `${CLAUDE_PLUGIN_ROOT}/templates/DESIGN.md` e **peça aprovação** antes de gravá-lo.
4. Registre a mídia e o formato exatos (ex.: Reels 1080×1920, A4 com sangria 3 mm, landing 1440/390).

## 1. Brief (o que, para quem, onde, para quê)

Responda por escrito antes de desenhar. O que faltar e mudar o resultado, pergunte; o resto, assuma e declare.
- Objetivo e **uma** ação desejada · público e contexto de uso (onde e como a peça é vista, a que distância, por quanto tempo)
- Mídia/formato/dimensões · conteúdo real (textos, números, imagens; nunca lorem ipsum como base de decisão)
- Restrições: marca, prazo, técnica (HTML, Remotion, SVG, PDF), acessibilidade.
Consulte `banco/conceito/do-brief-ao-conceito.md`.

## 2. Conceito e contrato de direção

- 3–4 palavras de caráter → consequências visuais concretas (tipo, escala, densidade, contraste, cor, ritmo, movimento).
- Quando não houver marca fechada, gere 2–3 direções distintas a partir do mundo do público e escolha com critério explícito.
- Escreva o **contrato de direção** (curto): conceito, hierarquia pretendida (o que se lê em 1º, 2º, 3º), grade,
  escala tipográfica, papéis de cor, regra de espaçamento, o que está proibido nesta peça.
- Consulte `banco/conceito/anti-generico.md` **antes** de produzir, não depois.

## 3. Estrutura antes do detalhe

- Construa a grade com números (margens, colunas, gutter, linha de base) para o formato exato: `banco/composicao/grades.md`.
- Esboce em ASCII ou em blocos cinza a ordem de leitura e os pesos 1–5. Só depois tipografia fina, cor e acabamento.
- Leia do banco **só o que a tarefa pede** (2–5 arquivos, via índice). Não carregue o banco inteiro.

## 4. Produção

- Use tokens/variáveis para tudo que se repete (cores, tamanhos, espaços). Valores soltos são falha.
- Conteúdo real e no comprimento real (o título mais longo, o nome mais comprido, o número maior).

## 5. Verificação — obrigatória, nunca declare "pronto" sem ela

Scripts em `${CLAUDE_PLUGIN_ROOT}/skills/metodo/scripts/` (Node ≥18; ffmpeg para vídeo/sobreposição; Playwright para auditoria).

| Passo | Comando | O que você faz com o resultado |
|---|---|---|
| Renderizar | `node <scripts>/renderizar.mjs peca.html --tamanhos 1080x1920 --saida renders` | **Abra cada PNG com Read e olhe.** |
| Auditar | `node <scripts>/auditar.mjs peca.html --tamanho 1080x1920 --base 8 --escala 24,32,48,96 --fontes "X" --paleta "#..,#.." --zona reels` | Corrija toda REPROVAÇÃO; justifique ou corrija cada ALERTA; olhe cada item NÃO MENSURÁVEL. |
| Contraste pontual | `node <scripts>/contraste.mjs "#texto" "#fundo"` | Nunca afirme contraste sem medir. |
| Grade / zona | `node <scripts>/sobrepor.mjs renders/x.png --colunas 12 --margem 64 --gutter 24 --linha-base 8 --zona reels` | Olhe se as bordas caem nas colunas e se nada crítico está no vermelho. |
| Vídeo | `node <scripts>/quadros.mjs video.mp4 --intervalo 0.5` | Olhe a prancha e os quadros-chave (1º segundo, cada entrada de texto, último quadro). |

Depois de olhar, aplique `banco/critica/metodo-de-critica.md` a si mesmo: intenção → pesos 1–5 → squint → miniatura → ausência.
Itere até não haver reprovação. Se uma ferramenta não puder rodar (sem Playwright, sem ffmpeg), diga isso
explicitamente no relatório como **não verificado**: nunca simule o resultado.

## 6. Entrega e validação independente

Quem produziu não aprova. Ao terminar, devolva o relatório abaixo e recomende chamar o agente **critico**
(só leitura) com os caminhos dos arquivos, dos renders e do contrato de direção.

```
PEÇA: caminhos dos arquivos e renders
CONTRATO DE DIREÇÃO: (resumo)
DECISÕES: o que foi decidido e por quê (inclui o que veio do DESIGN.md)
VERIFICADO: comandos rodados + resultado
NÃO VERIFICADO: o que não pôde ser checado e por quê
PRÓXIMO PASSO: chamar o agente critico
```

## Autoridade

| Classe | Ações |
|---|---|
| Automático | Ler o projeto e o banco; renderizar; auditar; criticar; criar arquivos novos de rascunho/render |
| Válido na sessão | Editar os arquivos da peça pedida |
| Exige aprovação da pessoa | Criar ou alterar `DESIGN.md`/tokens de marca; instalar dependências (Playwright, ffmpeg, fontes); sobrescrever peça existente fora do escopo pedido; usar imagem de terceiros |
| Proibido | Inventar fonte/cor/estilo quando o projeto define; declarar pronto sem render olhado; afirmar contraste ou medida não medidos; copiar layout de referência protegida; apagar trabalho da pessoa |
| Escalar | Brief ambíguo que muda o resultado; conflito entre marca e acessibilidade (ex.: cor da marca reprova contraste): apresente as opções, não decida sozinho |
