---
name: banco
description: Índice do banco de conhecimento de design do Design-Raiz — fundamentos que um designer sênior carrega: grades com cálculo, hierarquia e peso visual, Gestalt, espaço e ritmo, sistemas de composição, tipografia (escala, medida, microtipografia), cor (estratégia, contraste medido, paleta, impresso/vídeo), UX/UI (heurísticas de Nielsen, leis de UX, affordance, componentes, landing), formatos (post, pôster, vídeo/motion e zonas seguras, impresso, identidade, slides), conceito, anti-genérico e crítica. Pré-carregado nos agentes diretor-de-arte e critico; consulte para explicar POR QUE um layout funciona ou falha.
---

# Banco de conhecimento — índice

Arquivos em `${CLAUDE_PLUGIN_ROOT}/skills/banco/<pasta>/<arquivo>.md`. **Leia só o que a tarefa pede (2–5 arquivos).**
Todos seguem: Princípios · Regras operacionais · Falhas comuns · Como verificar · Quando quebrar a regra.
O banco ensina a pensar e executar; **a estética e a marca vêm do `DESIGN.md` do projeto**, que vence qualquer regra daqui.

## Por tarefa (rotas rápidas)

| Tarefa | Leia |
|---|---|
| Peça nova de qualquer tipo | `conceito/do-brief-ao-conceito` → `composicao/grades` → `composicao/hierarquia-e-peso-visual` → arquivo do formato |
| Post, carrossel, capa, pôster, flyer | `formatos/post-e-poster`, `composicao/sistemas-de-composicao`, `tipografia/escala-e-hierarquia` |
| Reels/Stories/TikTok/Shorts, motion, legenda | `formatos/video-e-motion`, `tipografia/medida-entrelinha-e-leitura`, `cor/contraste-e-acessibilidade` |
| Landing page, site | `ux-ui/web-e-landing`, `composicao/grades`, `tipografia/escala-e-hierarquia`, `ux-ui/heuristicas-e-leis` |
| Interface, app, formulário, dashboard | `ux-ui/interface-e-componentes`, `ux-ui/heuristicas-e-leis`, `composicao/gestalt-e-agrupamento` |
| Impresso (cartão, folder, cartaz, papelaria) | `formatos/impresso`, `cor/cor-para-impresso-e-video`, `composicao/grades` |
| Livro, apostila, relatório, e-book PDF | `formatos/editorial-e-documentos`, `composicao/grades`, `tipografia/medida-entrelinha-e-leitura`, `formatos/impresso` |
| Certificado, crachá, convite nominal (dados variáveis) | `formatos/editorial-e-documentos`, `composicao/hierarquia-e-peso-visual`, `formatos/impresso` |
| Logotipo, identidade, manual, DESIGN.md | `formatos/identidade-visual`, `tipografia/escolha-e-pareamento`, `cor/estrategia-e-papeis`, `cor/construcao-de-paleta` |
| Slides | `formatos/apresentacoes`, `composicao/hierarquia-e-peso-visual` |
| Escolher/corrigir fontes | `tipografia/escolha-e-pareamento`, `tipografia/escala-e-hierarquia` |
| Escolher/corrigir cores | `cor/estrategia-e-papeis`, `cor/construcao-de-paleta`, `cor/contraste-e-acessibilidade` |
| "Está genérico / com cara de IA" | `conceito/anti-generico`, `composicao/espaco-ritmo-e-equilibrio`, `tipografia/microtipografia` |
| "Está confuso / tudo grita" | `composicao/hierarquia-e-peso-visual`, `composicao/gestalt-e-agrupamento` |
| Revisar / criticar / aprovar | `critica/metodo-de-critica`, `critica/portao-de-qualidade` + arquivos do formato |
| Acabamento antes de entregar | `tipografia/microtipografia`, `conceito/anti-generico` |

## Catálogo

**composicao/** — diagramação
- `grades` — construir grade com números: margens clássicas e de tela, colunas, gutter, módulos, linha de base; exemplos A4, post 1080×1350, quadro 1080×1920, web.
- `hierarquia-e-peso-visual` — ordem de leitura, fatores de peso, um evento dominante, enfraquecer concorrentes, padrões Z/F.
- `gestalt-e-agrupamento` — proximidade, similaridade, região comum, continuidade, fechamento, figura-fundo, Von Restorff.
- `espaco-ritmo-e-equilibrio` — espaço ativo, escala de espaçamento, ritmo, simetria/assimetria, tensão intencional vs acidental.
- `sistemas-de-composicao` — os 8 sistemas de Elam, composição de pôster, zona de leitura protegida, disciplina de contraste.

**tipografia/**
- `escolha-e-pareamento` — classificar, escolher por função e mídia, parear, quantas famílias, licenças.
- `escala-e-hierarquia` — razões de escala por contexto, alavancas de hierarquia, salto do display.
- `medida-entrelinha-e-leitura` — medida, entrelinha, alinhamento, texto sobre imagem/vídeo, tamanhos mínimos.
- `microtipografia` — rios, viúvas, hifenização e pontuação PT-BR, tracking, numerais, alinhamento óptico.

**cor/**
- `estrategia-e-papeis` — estratégia antes da paleta, papéis, proporções, derivar do conceito.
- `contraste-e-acessibilidade` — fórmula WCAG, limiares, texto sobre imagem, sempre medir (`contraste.mjs`/`auditar.mjs`).
- `construcao-de-paleta` — OKLCH, rampas, neutros matizados, modo escuro, tokens por papel.
- `cor-para-impresso-e-video` — CMYK, preto rico, cobertura de tinta, spot, compressão de redes.

**ux-ui/**
- `heuristicas-e-leis` — Nielsen + severidade, Krug, Fitts/Hick/Jakob/Miller/Tesler/Doherty, Norman (affordance, significantes, mapeamento, feedback).
- `interface-e-componentes` — Refactoring UI, estados obrigatórios, formulários, alvos de toque, microinterações.
- `web-e-landing` — estrutura de landing, responsivo, grade web, acessibilidade WCAG 2.2 AA, textos de interface.

**formatos/**
- `post-e-poster` — proporções, recorte da grade do perfil, carrossel, distância de leitura, miniatura.
- `video-e-motion` — zonas seguras por plataforma (as mesmas de `scripts/zonas.json`), texto e legenda, princípios de animação, gancho.
- `impresso` — sangria, segurança, resolução, CMYK, dobras, tamanhos ISO/BR, checklist de fechamento.
- `editorial-e-documentos` — livro/apostila (spread, linha de base e registro, medianiz por encadernação, lombada, cadernos, aberturas, fólios, figuras, notas), certificado, crachá, dados variáveis (pior caso).
- `identidade-visual` — construção de logo, proteção, redução mínima, versões, sistema de marca, coerência entre peças.
- `apresentacoes` — 16:9, uma ideia por slide, grade de slide, texto projetado, modelo mestre.

**conceito/**
- `do-brief-ao-conceito` — perguntas de brief, palavras de caráter → consequências visuais, direções, contrato de direção.
- `anti-generico` — por que modelos convergem para a média, catálogo de tiques de IA (a marca vence o catálogo), passada de subtração.

**critica/**
- `metodo-de-critica` — como olhar um render: intenção, pesos 1–5, squint, miniatura, ausência, vocabulário preciso.
- `portao-de-qualidade` — checklist binário, reprovações automáticas, veredito e formato do relatório.
