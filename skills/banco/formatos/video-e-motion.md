---
titulo: Vídeo vertical, horizontal e motion design
quando_consultar: Ao planejar, animar, legendar ou revisar vídeo para Reels, Stories, TikTok, Shorts ou YouTube, antes de posicionar texto no quadro e antes de definir tempos de animação.
fontes:
  - https://www.inro.social/tools/instagram-reels-safe-zone-checker (Reels: 14% topo, 35% base, 6% laterais, derivados das especificações de anúncios da Meta; não há número orgânico oficial)
  - https://www.revid.ai/instagram-reels-safe-zone (Reels: 270 topo, 670 base, 120 direita)
  - https://billo.app/blog/meta-ads-safe-zones e https://adnova.ai/blogs/meta-ad-safe-zones-guide (zonas Meta 2026; Stories 20% base, Reels 35%)
  - https://www.inro.social/blog/instagram-story-size e https://argil.ai/blog/instagram-story-dimensions (Stories: 250 px consenso; 340 px base na leitura mais conservadora)
  - https://adkit.so/tools/safe-zones/tiktok e https://adaptlypost.com/en/blog/social-media-safe-zones-2026-complete-guide (TikTok: direita 120–242, base 480–660, topo 160–254)
  - https://adkit.so/tools/safe-zones/youtube e https://www.socialync.io/tools/safe-zones/youtube-shorts (Shorts: 288 topo, 672 base, 48 esquerda, 192 direita, atribuídos à ajuda de anúncios do Google)
  - https://backlothelp.netflix.com/hc/en-us/articles/215600497-Portuguese-Brazil-Timed-Text-Style-Guide (42 caracteres por linha, 2 linhas)
  - https://periodicos.usp.br/tradterm/article/download/193693/178865/533973 (velocidade de leitura de ~14 caracteres/s para o espectador brasileiro médio)
  - Conhecimento canônico: Thomas & Johnston, The Illusion of Life (12 princípios da animação); Walter Murch, In the Blink of an Eye (corte)
  - Observação: nenhuma plataforma publica zona segura orgânica oficial. Os valores escolhidos aqui são o limite conservador entre as fontes.
---
# Vídeo vertical, horizontal e motion design

## Princípios

1. **No vídeo, a hierarquia acontece no tempo.** Uma coisa por vez: o olho só segue um movimento principal. Se dois elementos entram juntos com o mesmo peso, nenhum é lido. Escalone, ou deixe um parado.
2. **Movimento precisa de motivo.** Toda transição diz algo (continuação, contraste, zoom num detalhe, mudança de assunto). Se não diz, é corte seco.
3. **A interface da plataforma cobre o vídeo.** Topo (nome, progresso, câmera), base (legenda do post, áudio, campo de resposta) e lateral direita (curtir, comentar, compartilhar) são território da plataforma. Texto crítico fica fora.
4. **O primeiro segundo é capa.** Em vídeo curto, o quadro 1 já precisa mostrar o assunto (título, rosto em ação, objeto). Introdução com logo animado vem depois, se vier.
5. **O ritmo vem da fala ou da música.** Cortes, entradas e ênfases caem em pausas, sílabas tônicas e batidas, não em tempos arbitrários.
6. **Texto na tela precisa de tempo de leitura.** Se a pessoa não consegue ler antes de sair, o texto não existe.

## Regras operacionais

### Quadros

| Uso | Resolução | Proporção | Quadros/s |
|---|---|---|---|
| Reels, Stories, TikTok, Shorts | 1080×1920 px | 9:16 | 30 (ou 24/25/60 se a captação for assim; não misture) |
| YouTube, apresentação, site | 1920×1080 px | 16:9 | 24, 25, 30 ou 60 |
| Feed em vídeo 4:5 | 1080×1350 px | 4:5 | 30 |

A 30 fps, 1 quadro = 33,3 ms; 10 quadros ≈ 333 ms; 15 quadros = 500 ms.

### Zonas seguras verticais (1080×1920) — valores escolhidos

| Plataforma | Topo | Base | Esquerda | Direita | Área de texto crítico | Faixa entre fontes |
|---|---|---|---|---|---|---|
| Instagram Reels | 270 | 670 | 65 | 120 | x 65–960, y 270–1250 | base 480–672; topo 150–288 |
| Instagram Stories | 250 | 340 | 65 | 65 | x 65–1015, y 250–1580 | base 250–384 (anúncio: até 25%) |
| TikTok | 260 | 660 | 65 | 200 | x 65–880, y 260–1260 | direita 120–242 (anúncio) |
| YouTube Shorts | 290 | 680 | 50 | 200 | x 50–880, y 290–1240 | base 381–672 |
| **Peça única para todas** | **290** | **680** | **65** | **200** | **x 65–880, y 290–1240 (815×950)** | — |

```
     0      65                         880   1080
   0 ┌──────────────────────────────────────┐
     │ ▒▒ nome, progresso, câmera (290) ▒▒▒│
 290 │  ┌──────────────────────────────┐ ▓▓▓│
     │  │                              │ ▓▓▓│ ▓ = coluna de botões
     │  │     TEXTO CRÍTICO            │ ▓▓▓│     (200 px)
     │  │     815 × 950 px             │ ▓▓▓│
     │  │                              │ ▓▓▓│
     │  │  legenda: base em y ≈ 1220   │ ▓▓▓│
1240 │  └──────────────────────────────┘ ▓▓▓│
     │ ▒▒ @, legenda do post, áudio,    ▒▒▒│
     │ ▒▒ CTA de anúncio (680)          ▒▒▒│
1920 └──────────────────────────────────────┘
```

Imagem, fundo e rosto podem ocupar o quadro inteiro; a zona vale para texto, logo, número, CTA e legenda. Rosto: olhos por volta de y = 600–800 no plano de apresentador.

Horizontal 1920×1080: margem de título de 5% (96 px laterais, 54 px topo/base) e, para texto que pode ir para TV ou ser recortado para vertical, 10% (192/108 px). Se o vídeo vai ganhar versão 9:16 por recorte central, mantenha texto dentro da faixa central de 608 px de largura.

### Texto e legenda sobre vídeo

| Item | 1080×1920 | 1920×1080 |
|---|---|---|
| Legenda (corpo) | 48–64 px; mínimo 42 px | 44–56 px; mínimo 36 px |
| Texto de apoio | mínimo 40 px | mínimo 32 px |
| Título de cena | 80–140 px | 72–120 px |
| Caracteres por linha | 18–26 (largura útil ~815 px) | até 42 |
| Linhas por bloco | 2 no máximo | 2 no máximo |
| Velocidade de leitura | 14–17 caracteres/s (≈ 2,5–3 palavras/s em PT-BR); use 14 para público amplo | idem |
| Duração mínima de um bloco | 1 s (≈ 0,8 s para blocos de 1–2 palavras sincronizados com a fala) | 1 s |

Quebra de linha: quebre por unidade de sentido (depois de vírgula, antes de preposição/conjunção, nunca entre artigo e substantivo ou entre número e unidade). Prefira linha de cima mais curta (formato pirâmide) quando houver escolha. Não termine bloco em palavra que precisa da próxima ("de", "o", "que").

Legibilidade sobre imagem em movimento, em ordem de preferência: (1) colocar o texto onde o fundo já é calmo; (2) gradiente localizado escurecendo/clareando só a faixa do texto; (3) caixa sólida ou translúcida atrás; (4) contorno ou sombra difusa (sombra 0 2–4 px com desfoque 8–16 px, ~50% opacidade). O contraste se mede no pior quadro do trecho, não no primeiro.

### Tempos de animação

| Movimento | UI (tela de app/site) | Motion de vídeo @30fps |
|---|---|---|
| Micro (hover, toque) | 100–200 ms | — |
| Entrada de elemento | 200–500 ms | 8–15 quadros (270–500 ms) |
| Saída | 150–300 ms (mais curta que a entrada) | 6–10 quadros |
| Deslocamento grande / troca de tela | 300–600 ms | 12–20 quadros |
| Transição entre cenas | — | 8–20 quadros; corte seco = 0 |
| Escalonamento (stagger) entre itens | 30–80 ms | 2–4 quadros por item; palavra a palavra 3–5 quadros |
| Pausa de leitura antes do próximo movimento | — | tempo de leitura do texto + 10–15 quadros |

Motion de vídeo tolera durações maiores que UI porque não há usuário esperando resposta; mesmo assim, nada passa de ~1 s sem motivo narrativo.

### Princípios de animação aplicados

| Princípio | Aplicação em motion |
|---|---|
| Timing | Peso visual pede duração: elemento grande ou pesado entra mais devagar que um rótulo |
| Easing | Entrada: desacelera no fim (ease-out). Saída: acelera (ease-in). Deslocamento de A para B: ease-in-out. Linear só para movimento mecânico contínuo (rolagem, rotação constante) |
| Antecipação | 2–4 quadros de recuo ou compressão antes de um movimento grande; sinaliza o que vai acontecer |
| Follow-through / sobreposição | Partes secundárias (sombra, sublinhado, ícone) chegam 2–6 quadros depois da principal |
| Stagger | Itens de lista entram em sequência na ordem de leitura; o escalonamento total de um grupo não passa de ~600 ms |
| Hierarquia no tempo | Nível 1 entra primeiro e sozinho; nível 2 só depois que o 1 assentou; nível 3 entra parado ou junto do 2 |
| Exagero | Reservado ao momento de ênfase; se tudo pula, nada se destaca |
| Arcos | Deslocamentos longos ganham leve curva; linha reta parece robótica |

### Gancho, corte e capa

- **Primeiro segundo (0–30 quadros):** assunto visível já no quadro 1; texto de gancho legível em ≤ 1,5 s; movimento já em curso (não comece de quadro parado com fade de preto).
- **Cortes:** no fim de frase, na respiração ou na batida. Retire pausas mortas > 0,3 s na fala, a menos que a pausa seja dramática. Use corte J/L (áudio antecipa ou sobra sobre a imagem) para suavizar troca de assunto.
- **Duração de plano:** em vídeo curto falado, troca visual (corte, zoom, gráfico) a cada 2–5 s mantém atenção; plano de explicação pode durar mais se algo estiver acontecendo nele.
- **Capa/thumb:** 1080×1920 para Reels/TikTok/Shorts, com título e rosto dentro do miolo 3:4 (y 240–1680, ideal 300–1380); YouTube 1280×720 (16:9), texto ≤ 4–5 palavras, legível a 160 px de largura, longe do canto inferior direito (selo de duração).

## Falhas comuns

| Sintoma | Causa | Correção |
|---|---|---|
| Legenda escondida pela descrição do post | Legenda na base do quadro | Base da legenda em y ≤ 1240 (ou ≤ 1250 só para Reels) |
| CTA coberto pelo botão de curtir | Texto alinhado à direita até a borda | Respeitar 200 px à direita na peça multiplataforma |
| Ninguém lê o texto | Bloco some antes do tempo de leitura | Mínimo 14 caracteres/s; segurar o bloco 10–15 quadros a mais |
| Tela "nervosa" | Vários elementos entrando ao mesmo tempo com o mesmo peso | Escalonar; um movimento principal por momento |
| Animação parece amadora | Easing linear ou mesmo easing em entrada e saída | ease-out na entrada, ease-in na saída |
| Texto salta quando outro entra | Altura do bloco não reservada | Reservar o espaço final desde o primeiro quadro |
| Gancho perdido | Logo ou apresentação nos primeiros 2 s | Quadro 1 = assunto; assinatura no fim |
| Legenda ilegível em cena clara | Contraste checado só num quadro | Testar no quadro mais claro e no mais escuro; usar faixa ou caixa |
| Transição chama mais atenção que o conteúdo | Efeito sem significado | Corte seco; reservar transição para mudança real de assunto |
| Capa sem título no perfil | Título no topo do 9:16 | Título dentro do miolo 3:4 |

## Como verificar

1. **Sobrepor a zona segura:** renderize com uma camada-guia (PNG 1080×1920 com as faixas da tabela em vermelho translúcido) e assista inteiro; nenhum texto crítico pode tocar as faixas. Gere o guia a partir dos valores da linha "peça única".
2. **Extrair quadros:** tire um quadro a cada 0,5 s (ex.: `ffmpeg -i video.mp4 -vf fps=2 quadro_%03d.png`) e monte uma folha de contato; confira contraste, posição e se algo pula entre quadros vizinhos.
3. **Quadro 1:** abra o primeiro quadro isolado; ele precisa funcionar como capa.
4. **Leitura cronometrada:** para cada bloco de texto, conte caracteres ÷ duração; acima de 17 car/s, alongue ou corte texto.
5. **Celular real, som desligado:** assista no telefone com a interface da plataforma (rascunho ou conta de teste) e sem áudio; a mensagem precisa passar só com imagem e legenda.
6. **Capa:** reduza para 110 px de largura recortada em 3:4 e confira o título.

## Quando quebrar a regra

- **Plano cinematográfico ou vídeo sem texto:** zonas seguras viram só cuidado com rosto e ponto focal; a interface pode cobrir paisagem.
- **Legenda palavra a palavra estilizada** (karaokê, 1–3 palavras por vez): a regra de 2 linhas não se aplica; a de velocidade continua valendo.
- **Ênfase deliberada:** um único momento de exagero, tremor ou excesso de tempo funciona justamente porque o resto obedece.
- **Formato exclusivo de uma plataforma** (só Stories, por exemplo): use a linha dela em vez da "peça única" e ganhe área útil.
- **Ritmo contemplativo:** em vídeo institucional ou de arte, planos longos e cortes lentos podem ser o conceito; registre isso no DESIGN.md do projeto.
