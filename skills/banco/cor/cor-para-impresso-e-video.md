---
titulo: Cor para impresso e vídeo
quando_consultar: Antes de fechar arquivo para gráfica ou exportar vídeo/peça para redes, e quando a cor final não bate com a tela de criação.
fontes:
  - Conhecimento canônico de pré-impressão: CMYK, perfis ICC (FOGRA39/ISO Coated v2, PSO Coated v3/FOGRA51, PSO Uncoated v3/FOGRA52), limite de tinta total (TAC), preto rico, ganho de ponto, Pantone/cores especiais, provas
  - Conhecimento canônico de vídeo: Rec.709, faixa legal/broadcast (16–235 em 8 bits), subamostragem de croma 4:2:0, compressão H.264/HEVC
  - jakubkrehel/skills, better-colors/color-formats.md (MIT) — gamut e conversão
  - educlopez/ui-craft, references/color.md (MIT) — sRGB versus P3
---
# Cor para impresso e vídeo

## Princípios

1. **Cada meio tem um gamut menor do que a tela onde você cria.** Monitores modernos (P3) mostram mais cor que o sRGB; o sRGB mostra mais que a impressão CMYK em papel. O que se perde primeiro: verdes e azuis-ciano muito vivos, laranjas e rosas neon, azuis RGB elétricos (tipo `#0000FF`), roxos saturados. Decida as cores-chave já sabendo o meio final.

2. **Impresso é tinta sobre papel, não luz.** O mesmo CMYK sai diferente em papel couché, offset (não revestido) e jornal. Por isso existe perfil ICC: ele descreve como aquela combinação de máquina, tinta e papel reproduz cor. Sem perfil acordado com a gráfica, qualquer conversão é chute.

3. **Vídeo para redes passa por compressão agressiva.** O que sai do seu After Effects ou Premiere não é o que o público vê: o Instagram, TikTok e YouTube recomprimem, e a tela do celular aplica brilho automático, tom noturno e modo escuro ao redor.

4. **A prova decide, não a tela.** Prova de cor (física ou soft proof com perfil correto) é a única referência confiável antes de imprimir; quadro exportado e visto no celular é a referência antes de publicar.

## Regras operacionais

### Impresso

- **Pergunte à gráfica**: perfil de saída (no Brasil é comum pedirem Coated FOGRA39; gráficas atualizadas usam PSO Coated v3/FOGRA51), limite de tinta, sangria, se aceitam cor especial e se querem PDF/X-1a ou PDF/X-4.
- **RGB→CMYK conscientemente.** Converta (ou faça soft proof) cedo, com o perfil da gráfica e intenção de renderização *perceptual* para fotos e *colorimétrica relativa* para cores de marca. Ative o alerta de gamut (Photoshop: Exibir > Aviso de gamut) e ajuste as cores-chave à mão em vez de deixar a conversão decidir.
- **Cores de marca têm valores CMYK definidos** no manual; use-os em vez de converter o hex. Se não houver, defina-os com prova e registre no `DESIGN.md`.
- **TAC (cobertura total de tinta):** soma de C+M+Y+K no ponto mais escuro. Referências típicas: ~300–330% em couché, ~260–300% em não revestido, ~240% em jornal. Acima disso, a tinta não seca, decalca e borra. Verifique na separação (Acrobat > Visualização de saída).
- **Preto rico vs. preto 100K:**
  - **Texto pequeno, fios finos e corpo de texto:** 100% K puro. Preto rico em texto pequeno mostra halo colorido ao menor desvio de registro.
  - **Grandes áreas pretas:** preto rico (ex.: C60 M40 Y40 K100, ≈240%) para um preto profundo; 100K sozinho em área grande sai cinza-escuro. Confirme a receita com a gráfica.
  - Preto 100K costuma sair em sobreimpressão (overprint); confira se é isso que você quer sobre imagens.
  - Preto "registro" (100/100/100/100) nunca vai para arte.
- **Cor especial (Pantone/spot):** use quando a cor é crítica para a marca, quando está fora do gamut CMYK (laranjas, verdes vivos, metálicos, fluorescentes) ou quando a tiragem é de 1–2 cores. Escolha pela guia física **C** (coated) ou **U** (uncoated) conforme o papel: o mesmo número muda bastante. Se o arquivo também for impresso em CMYK, use a conversão da guia "Color Bridge"/CMYK equivalente, não a automática.
- **Ganho de ponto:** retículas engordam na impressão, mais em papel não revestido. Tons médios e sombras escurecem; texto vazado fino em fundo de 4 cores fecha. Evite texto vazado pequeno em fundo de muitas tintas; prefira fundo de uma tinta ou corpo maior/mais pesado.
- **Tons claros demais somem:** retículas abaixo de ~3–5% podem não imprimir; fundos "quase brancos" viram branco.
- **Provas:** prova digital certificada (contrato) para cor crítica; prova de máquina ou impressão piloto em tiragens grandes. Avalie sob luz padronizada (D50) ou, no mínimo, luz do dia indireta — nunca só na tela.

### Vídeo e redes

- **Trabalhe e exporte em Rec.709 / sRGB**, 8 bits, a menos que o destino peça outra coisa. O app recomprime de qualquer forma; vantagens de 10 bits e HDR raramente sobrevivem em post comum.
- **Faixa legal (broadcast) versus faixa total:** TV aberta e entregas broadcast exigem níveis 16–235 (8 bits) e croma dentro dos limites; use o efeito/escopo de "broadcast safe". Para redes, não é obrigatório, mas confira se o export não está com flag de faixa errada — isso aparece como pretos lavados ou sombras esmagadas.
- **Banding em gradientes:** degradês suaves e áreas lisas escuras viram faixas após compressão. Antes de exportar, adicione grão/ruído leve (1–3%) ou dithering; evite gradientes longos de baixo contraste em fundo escuro; prefira degradês com textura.
- **Vermelhos e azuis saturados sofrem:** a subamostragem 4:2:0 guarda cor em meia resolução, então texto fino vermelho, magenta ou azul puro sobre fundo contrastante borra e "sangra" nas bordas. Use texto com peso maior, contorno/fundo neutro, ou reduza um pouco o croma. Texto claro sobre fundo vermelho é mais seguro que texto vermelho sobre escuro.
- **Telas de celular:** a maioria é OLED, com brilho automático, True Tone/tom noturno e às vezes perfil vívido que *aumenta* a saturação. Cores já no limite ficam estouradas. Não dependa de diferenças sutis de tom (dois cinzas escuros vizinhos podem virar o mesmo preto em OLED com brilho baixo).
- **Moldura do app:** a interface do Instagram/TikTok fica por cima e ao redor do vídeo, em modo claro ou escuro. Teste a peça cercada pelos dois modos; bordas pretas puras se fundem ao app escuro e bordas brancas ao claro.
- **Preto puro em OLED com movimento** pode mostrar rastro (black smear); fundos escuros um pouco acima do zero (≈ RGB 8–16) costumam se comportar melhor.
- **Consistência entre peças:** cores de marca definidas em hex sRGB e reaplicadas a partir dessas amostras em cada projeto de vídeo, não "pescadas" a olho de um render anterior.

## Falhas comuns

| Sintoma | Causa | Correção |
|---|---|---|
| Laranja/verde vivo saiu apagado no impresso | cor fora do gamut CMYK, conversão automática | ajustar à mão com alerta de gamut ou usar cor especial |
| Texto preto pequeno com halo colorido | texto em preto rico | texto em 100% K |
| Área preta grande sai acinzentada | 100K sozinho | preto rico na receita da gráfica |
| Papel decalcado, tinta não seca | TAC acima do limite do papel | reconverter com perfil correto, reduzir sombras |
| Pantone diferente da amostra | guia C usada em papel não revestido | escolher pela guia U ou ajustar no papel real |
| Texto vazado fino "fechou" | ganho de ponto em fundo de 4 cores | aumentar corpo/peso ou usar fundo de uma tinta |
| Degradê com faixas no reel | compressão do app em área lisa | grão/dithering, evitar gradiente longo e escuro |
| Legenda vermelha borrada | subamostragem de croma 4:2:0 | fonte mais pesada, caixa neutra, menos croma |
| Pretos lavados no export | faixa (legal/total) marcada errado | conferir configuração de faixa e escopos |
| Cor ok no Mac, estourada no celular | perfil vívido/OLED + cor no limite | reduzir croma e checar no aparelho |

## Como verificar

- **Impresso:** soft proof com o perfil da gráfica e aviso de gamut ligado; Visualização de saída no Acrobat para separações, TAC e sobreimpressão; pré-comprovação (preflight) PDF/X; prova física para cor crítica, avaliada sob luz D50.
- **Contraste continua valendo no papel:** meça texto/fundo pelo script de contraste do plugin com os valores convertidos (ou amostrados da prova digitalizada); o ganho de ponto tende a reduzir contraste de texto vazado.
- **Vídeo:** escopos (forma de onda e vetorscópio) no editor para níveis e saturação; export de teste enviado para o próprio celular e visto *dentro* do app (rascunho ou conta de teste), com brilho baixo, em modo claro e escuro; quadros com texto amostrados e medidos.
- **Daltonismo e escala de cinza** no quadro ou página final, como em qualquer peça.

## Quando quebrar a regra

- **Preto rico em texto** é aceitável em títulos grandes e pesados (acima de ~24 pt) quando a gráfica garante bom registro.
- **Exceder o sRGB/P3 de propósito** vale para web em telas P3 com fallback declarado, ou para vídeo HDR destinado a plataforma que suporte HDR de verdade.
- **Gradiente liso sem grão** funciona quando o arquivo vai para tela de alta qualidade sem recompressão (apresentação local, telão com arquivo original).
- **Fora da faixa legal** é irrelevante quando o destino é exclusivamente rede social e os escopos mostram que nada está cortado.
