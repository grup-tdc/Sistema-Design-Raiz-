---
titulo: Identidade visual e sistema de marca
quando_consultar: Ao construir, revisar ou documentar um logotipo e seu sistema (versões, redução, proteção, cores, tipos, grafismos), ou ao checar se uma peça nova é coerente com a marca do projeto.
fontes:
  - Conhecimento canônico de identidade visual: Alina Wheeler, Designing Brand Identity; Paul Rand, A Designer's Art; manuais públicos de marca de órgãos e empresas (estrutura típica: versões, área de proteção, redução mínima, usos incorretos)
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link (favicon e ícones via link rel)
  - https://web.dev/articles/add-manifest (ícones 192 e 512 px no manifesto)
  - https://developer.apple.com/design/human-interface-guidelines/app-icons (ícone de tela inicial 180 px)
  - Observação: valores de redução mínima abaixo são pontos de partida medidos em prática de mercado, não norma. Cada marca define os seus depois do teste de redução.
---
# Identidade visual e sistema de marca

## Princípios

1. **A marca vive pequena.** A maior parte das aparições de um logotipo é minúscula: avatar, favicon, rodapé, carimbo, bordado, assinatura de e-mail. Construa pensando no menor uso e verifique no maior, não o contrário.
2. **Um sistema, não um desenho.** Logotipo sozinho não sustenta peças. O que torna uma marca reconhecível é a repetição de poucas decisões: cor, tipo, um grafismo, um jeito de fotografar, um tom de voz.
3. **Constância no núcleo, liberdade na borda.** Algumas coisas nunca mudam (desenho do logo, cores primárias, tipo de títulos). Outras variam por peça (composição, imagem, cor de apoio). Documentar a fronteira é o trabalho.
4. **Regra que não está escrita não existe.** Toda decisão de marca vai para o DESIGN.md (ou manual) do projeto, com números. O agente lê esse arquivo antes de criar qualquer peça; este documento não define estética, só a estrutura do que precisa estar lá.

## Regras operacionais

### Construção do logotipo

| Etapa | O que fazer |
|---|---|
| Malha | Defina um módulo (ex.: altura do x, espessura da haste, diâmetro do símbolo) e desenhe sobre uma grade baseada nele. Raios, espaçamentos e proporções viram múltiplos do módulo |
| Correção óptica | Formas redondas e pontiagudas passam 1–3% da linha de base e da altura para parecerem do mesmo tamanho; ajuste o espaçamento entre letras de logotipo à mão |
| Espessura mínima | Nenhum traço ou vão abaixo de ~1/20 da altura total do logo, para sobreviver à redução e à impressão |
| Área de proteção | Margem livre ao redor, medida em módulos (ex.: 1× a altura do símbolo ou da letra "x"). Nada (texto, borda, outro logo) entra nela |
| Arquivos-mestre | Vetor (SVG, PDF/AI, EPS se pedido) com textos convertidos; PNG em várias larguras; nada de logo "redesenhado" por peça |

### Versões

| Versão | Uso | Observação |
|---|---|---|
| Principal | Onde há espaço e liberdade | A referência para todas as outras |
| Horizontal | Cabeçalho, rodapé, faixas, assinatura de vídeo | Símbolo à esquerda do nome, alinhado pela altura óptica |
| Vertical / empilhada | Espaços quadrados, capas | Se a principal já é horizontal |
| Símbolo / monograma | Avatar, favicon, ícone de app, carimbo, marca d'água | Precisa funcionar sozinho em 16 px |
| Monocromática (1 cor) | Carimbo, gravação, bordado, documento P&B, fax/xerox | Sem degradê nem transparência |
| Negativa | Sobre fundo escuro ou foto | Desenho ajustado se o peso óptico mudar (branco sobre escuro "engorda") |
| Reduzida (opcional) | Abaixo do limite da principal | Menos detalhe, espaçamento maior, sem tagline |

### Redução mínima (pontos de partida)

| Versão | Tela | Impresso |
|---|---|---|
| Logotipo com nome (horizontal) | 100–120 px de largura | 20–25 mm de largura |
| Logotipo empilhado | 60–80 px de altura | 15 mm de altura |
| Símbolo isolado | 16 px (favicon) com versão simplificada; 24–32 px para a versão completa | 6–8 mm |
| Tagline junto do logo | some abaixo de ~180 px / 35 mm | — |
| Bordado / gravação | — | traço ≥ 1 mm; vãos ≥ 1 mm |

Esses valores mudam com o desenho; o número final sai do teste de redução e vai para o DESIGN.md.

### Teste em tamanhos pequenos e favicon

| Arquivo | Tamanho | Para quê |
|---|---|---|
| favicon.svg | vetorial | Navegadores modernos; pode trocar cor no modo escuro via CSS interno |
| favicon.ico / png | 16, 32, 48 px | Abas, atalhos, compatibilidade |
| apple-touch-icon.png | 180×180 px | Tela inicial iOS (fundo sólido, sem transparência) |
| Ícones do manifesto | 192×192 e 512×512 px | Android / app web; versão "maskable" com símbolo dentro do círculo central de 80% |
| Avatar de redes | 320–1080 px, recorte circular | Símbolo dentro do círculo inscrito com ~10% de folga |

Em 16 px o símbolo deve ser redesenhado na grade de pixels (traços com 1 ou 2 px inteiros), não apenas reduzido.

### O sistema: o que documentar

| Bloco | Conteúdo mínimo com números |
|---|---|
| Logo | Versões, área de proteção em módulos, redução mínima (px e mm), fundos permitidos, usos proibidos com exemplos |
| Cor | Primárias e de apoio com HEX, RGB, CMYK e Pantone quando houver; papel de cada cor (fundo, texto, destaque, alerta); pares de contraste aprovados (razão WCAG) |
| Tipografia | Famílias, pesos permitidos, escala (tamanhos por nível), entrelinha, rastreio, alinhamento; fonte de sistema substituta; licença |
| Grafismos | Elemento recorrente (forma, padrão, fio, recorte de foto): construção, escala, quantas vezes por peça |
| Fotografia / ilustração | Luz, enquadramento, tratamento de cor, o que fotografar e o que evitar, recorte; banco aprovado |
| Ícones | Grade, espessura de traço, cantos, preenchido ou contorno |
| Movimento | Durações, easing, entradas típicas, transições permitidas (ver `video-e-motion.md`) |
| Tom de voz | 3–5 atributos com "é / não é", exemplos de título e legenda |
| Formatos | Gabaritos por formato (post, story, slide, cartão) com grade e posição fixa do logo |
| Arquivos | Onde estão os mestres, nomes de arquivo, versão do manual |

Estrutura sugerida de DESIGN.md: 1. Essência (1 parágrafo) · 2. Logo · 3. Cor · 4. Tipografia · 5. Grade e espaçamento · 6. Grafismos · 7. Imagem · 8. Movimento · 9. Voz · 10. Gabaritos por formato · 11. Proibições · 12. Histórico de decisões (o que foi pedido, rejeitado e por quê).

### Coerência entre peças

| Repete sempre | Pode variar |
|---|---|
| Desenho e versões do logo | Composição e grade interna da peça |
| Cores primárias e seus papéis | Cor de apoio dominante numa campanha (dentro da paleta) |
| Famílias tipográficas e escala de títulos | Tamanho absoluto (depende do formato) |
| Posição e tamanho relativo do logo por formato | Imagem, foto, ilustração |
| Um grafismo-assinatura | Quantidade de texto |
| Margem mínima e zona segura por formato | Ritmo e densidade |
| Tom de voz | Assunto e chamada |

Teste rápido: cubra o logo. Se a peça ainda parecer da marca, o sistema funciona.

## Falhas comuns

| Sintoma | Causa | Correção |
|---|---|---|
| Logo vira mancha no avatar | Símbolo detalhado demais, sem versão reduzida | Criar versão de símbolo simplificada para ≤ 32 px |
| Favicon borrado | PNG reduzido automaticamente | Desenhar 16 e 32 px na grade de pixels; SVG simples |
| Logo "apertado" nas peças | Área de proteção não definida ou ignorada | Definir em módulos e incluir nos gabaritos |
| Negativo parece mais pesado | Branco sobre escuro sem ajuste | Afinar traços ~3–5% na versão negativa |
| Carimbo/bordado ilegível | Só existe versão colorida com degradê | Versão monocromática com traço ≥ 1 mm |
| Cada peça parece de uma marca | Nada repete além do logo | Fixar grafismo, tipo de título e posição do logo |
| Cores diferentes no impresso e na tela | Só HEX documentado | Registrar CMYK/Pantone aprovado em prova |
| Peças engessadas e repetitivas | Tudo foi fixado, nada pode variar | Separar núcleo fixo de variáveis no DESIGN.md |
| Equipe redesenha o logo | Arquivo-mestre inacessível | Pasta de mestres com nomes claros, link no manual |

## Como verificar

1. **Escada de redução:** coloque o logo lado a lado em 512, 128, 64, 32 e 16 px e em 50, 25, 15 e 8 mm impressos. Anote onde quebra; esse é o mínimo.
2. **Fundos:** aplique todas as versões sobre branco, preto, cor primária, foto clara e foto escura.
3. **Desfoque:** aplique desfoque gaussiano de 4–8 px no logo a 200 px; a silhueta ainda deve ser reconhecível.
4. **Monocromia:** converta para 1 bit (preto e branco puros); nada deve sumir.
5. **Prova impressa** de cartão e papelaria com o logo no tamanho mínimo.
6. **Coerência:** monte uma prancha com 6–10 peças da marca lado a lado e em miniatura; confira o que repete e o que destoa.
7. **Favicon no navegador** real, em aba clara e escura.

## Quando quebrar a regra

- **Marcas dinâmicas** (logo que muda de cor, forma ou conteúdo): o que se fixa é a regra de geração, documentada com a mesma precisão.
- **Uso artístico ou de campanha** (logo gigante cortado na borda, logo como textura): permitido se o DESIGN.md prever e se a peça tiver o logo íntegro em outro lugar.
- **Coassinatura** com parceiros: as áreas de proteção se somam e pode ser preciso usar a versão monocromática para equilibrar.
- **Suportes extremos** (bordado, gravação a laser, neon): cada um exige uma versão adaptada; não force a principal.
