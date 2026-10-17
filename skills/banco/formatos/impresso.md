---
titulo: Peças impressas e fechamento de arquivo
quando_consultar: Ao criar, adaptar ou fechar qualquer peça que vai para gráfica (cartão, flyer, folder, cartaz, papelaria, embalagem simples), antes de definir o documento e de novo antes de exportar o PDF.
fontes:
  - https://www.dga.unicamp.br/Conteudos/Documentos/Procedimento_para_Impressao.pdf (sangria 3–6 mm, margem de 5 mm do corte)
  - https://cursa.app/pt/pagina/dimensoes-sangria-e-margens-de-seguranca-em-grafica-rapida (sangria 3 mm, margem 3 mm)
  - https://tecnoblog.net/355690/como-fechar-um-arquivo-para-impressao-no-indesign/ (checklist de fechamento, pacote)
  - https://blog.hybridhelix.com/?p=2482 e https://helpdesk.caldera.com/hc/en-us/articles/360006997038-PDF-X-1A-vs-PDF-X-4 (PDF/X-1a versus PDF/X-4)
  - https://wiki.contextgarden.net (perfis de saída FOGRA39 / ISO Coated v2 300%)
  - https://cidesp.com.br/v4/negocios-e-empresas/tamanho-padrao-cartao-de-visita, https://www.canva.com/pt_br/criar/cartao-visita/ e https://pt.wix.com/blog/guia-cartão-de-visita (cartão 90×50 mm; sangria 3–6 mm; margem ~4 mm)
  - ISO 216 / ABNT NBR ISO 216 (séries A e B)
  - Conhecimento canônico de pré-impressão (ganho de ponto, cobertura total de tinta, preto composto, sobreimpressão). Limites numéricos variam por gráfica: confirme sempre a ficha técnica dela.
---
# Peças impressas e fechamento de arquivo

## Princípios

1. **A gráfica manda no número final.** Sangria, margem, perfil de cor e limite de tinta mudam entre gráficas e processos (offset, digital, plotter). Os valores abaixo são o padrão seguro para quando a ficha técnica não foi recebida; ao receber, ela vence.
2. **O corte erra.** A guilhotina e a dobra têm tolerância de 1 a 2 mm. Por isso existe sangria (fundo que passa do corte) e margem de segurança (texto que fica longe dele).
3. **A tela mente sobre a cor.** RGB luminoso vira CMYK mais apagado, e o papel muda tudo de novo. A decisão de cor final é feita com prova, não com o monitor.
4. **Papel é parte do design.** Gramatura, revestimento e cor do papel alteram contraste, saturação e o quanto um detalhe fino sobrevive.
5. **O PDF de fechamento é um contrato.** Ele precisa conter tudo (fontes, imagens, sangria, marcas) e nada a mais (camadas ocultas, objetos fora da página, RGB solto).

## Regras operacionais

### Documento

| Item | Padrão seguro | Faixa encontrada | Observação |
|---|---|---|---|
| Sangria | 3 mm em cada lado | 2–6 mm | Cartaz grande / plotter: até 5 mm; livro com lombada: confirmar |
| Margem de segurança (texto e logo longe do corte) | 5 mm | 3–5 mm | Peças pequenas (cartão): 4 mm mínimo |
| Margem em peça grampeada / encadernada | +3 a 5 mm no lado da lombada | — | Compensa a curvatura |
| Resolução de imagem no tamanho final | 300 ppi | 240–350 ppi | Grande formato visto de longe: 100–150 ppi |
| Arte de traço em bitmap (1 bit) | 1200 ppi | 800–2400 | Prefira vetor |
| Modo de cor | CMYK com perfil da gráfica | — | Sem perfil informado: Coated FOGRA39 (couché) ou Uncoated FOGRA29 (offset) |

Arquivo do cartão 90×50 mm com 3 mm de sangria: documento de 96×56 mm; área de texto até 82×42 mm (4 mm de margem).

### Cor, preto e tinta

| Situação | Valor |
|---|---|
| Texto preto até ~14 pt, fios, código de barras | 100% K, sem C/M/Y, em sobreimpressão |
| Grandes áreas pretas (preto "rico") | C 40–60, M 30–40, Y 30–40, K 100 (cobertura 200–260%) |
| Cobertura total de tinta, couché | ≤ 300% (algumas gráficas aceitam 320–330%) |
| Cobertura total, offset / não revestido | ≤ 260–280% |
| Papel jornal | ≤ 240% |
| Texto vazado (branco sobre cor de 4 tintas) | ≥ 8 pt, peso regular ou maior, sem serifa finíssima |
| Cor de marca exata | Pantone (cor especial) quando o orçamento permite; senão, CMYK aprovado em prova e registrado no DESIGN.md |
| Cinza neutro | Só K (ex.: K 50); cinza em CMYK tende a puxar cor |

Nunca use preto de registro (100/100/100/100). Preto rico em texto pequeno desalinha e fica com halo colorido.

### Papel e efeito na cor

| Papel | Uso típico | Efeito |
|---|---|---|
| Couché brilho 115–170 g/m² | Flyer, folder, cartaz | Cor saturada, preto profundo, reflexo |
| Couché fosco 115–300 g/m² | Folder, capa, cartão | Cor levemente menos saturada, sem reflexo, boa leitura |
| Offset (sulfite) 75–120 g/m² | Papelaria, miolo, formulário | Absorve tinta: ganho de ponto maior, cores mais escuras e apagadas, detalhe fino engorda |
| Cartão / supremo 250–350 g/m² | Cartão de visita, tag, capa | Rígido; dobra exige vinco |
| Reciclado / pólen / colorido | Identidades com textura | Muda o branco e todas as cores; prova obrigatória |

Acima de ~170 g/m², peça dobrada precisa de vinco para não rachar a tinta na dobra. Laminação (BOPP fosca ou brilho) escurece e satura levemente a cor.

### Tamanhos (ISO 216, adotado pela ABNT)

| Série A | mm | Série B | mm |
|---|---|---|---|
| A0 | 841×1189 | B0 | 1000×1414 |
| A1 | 594×841 | B1 | 707×1000 |
| A2 | 420×594 | B2 | 500×707 |
| A3 | 297×420 | B3 | 353×500 |
| A4 | 210×297 | B4 | 250×353 |
| A5 | 148×210 | B5 | 176×250 |
| A6 | 105×148 | B6 | 125×176 |

Na gráfica offset brasileira, o custo depende do aproveitamento das folhas-mãe 66×96 cm (BB) e 76×112 cm (AA). Formatos fora do padrão podem desperdiçar papel; pergunte o formato que aproveita melhor.

### Cartão de visita

| Formato | mm | Onde |
|---|---|---|
| Padrão brasileiro | 90×50 | Mais pedido nas gráficas do Brasil |
| Alternativos BR | 88×50, 85×50 | Algumas gráficas e plataformas |
| Europeu | 85×55 | Europa; mais "quadrado" |
| Americano | 88,9×50,8 (3,5×2 pol.) | EUA; quase igual ao BR |
| Cartão de crédito (ISO/IEC 7810 ID-1) | 85,6×54 | Cartões plásticos |

Corpo mínimo no cartão: 7 pt para dados (6 pt só em versalete com fonte robusta); nome 9–12 pt.

### Dobras

Terminologia: "1 dobra" = 2 painéis; "2 dobras" = 3 painéis; "3 dobras" = 4 painéis.

| Tipo | Painéis | Regra |
|---|---|---|
| 2 dobras carteira (enrolado) — A4 deitado | 3 | O painel que dobra para dentro é 2–3 mm menor: 100 + 99 + 98 mm (= 297); algumas gráficas usam 100 + 100 + 97 |
| 2 dobras sanfona (zigue-zague) | 3 | Painéis iguais: 99 + 99 + 99 mm |
| 3 dobras sanfona | 4 | Iguais (ex.: 4 × 105 mm em 420 mm) |
| 3 dobras janela / gate | 4 | As duas abas externas são ~2 mm menores que metade do miolo |
| 3 dobras carteira (enrolado) | 4 | Cada painel interno ~2 mm menor que o anterior; peça a gabarito da gráfica |

```
 Folder A4, 2 dobras carteira — lado externo (de quem olha)
 ┌────────────┬────────────┬────────────┐
 │ aba interna│  verso     │   capa     │
 │   98 mm    │  99 mm     │  100 mm    │
 └────────────┴────────────┴────────────┘
 lado interno: 100 | 99 | 98  (espelhado)
 Texto a ≥ 5 mm de cada linha de dobra.
```

Nada de texto ou rosto atravessando a linha de dobra; elementos que cruzam a dobra são aceitáveis se forem imagem ou cor contínua.

### Corpo mínimo e fios

| Elemento | Mínimo offset | Mínimo digital / papel offset |
|---|---|---|
| Texto corrido | 8 pt (confortável 9–11 pt) | 8 pt |
| Nota legal / rodapé | 6 pt | 7 pt |
| Texto vazado em 4 cores | 8 pt (10 pt se serifa fina) | 9 pt |
| Fio positivo | 0,25 pt (≈ 0,09 mm) | 0,3–0,5 pt |
| Fio vazado / em cor de 4 tintas | 0,5 pt | 0,75 pt |
| Retícula mínima visível | 3–5% | 5–8% |

### Sobreimpressão (overprint)

- Preto 100% K de textos e fios: sobreimpressão ligada (evita filete branco se o registro falhar).
- Branco: sobreimpressão sempre desligada (branco em overprint desaparece).
- Cores claras sobre escuras: desligada, salvo efeito intencional.
- Confira na visualização de sobreimpressão antes de exportar.

### PDF de fechamento — checklist

| Item | Conferir |
|---|---|
| Padrão | PDF/X-1a (tudo já em CMYK/especial, transparências achatadas) quando a gráfica não especificar; PDF/X-4 se a gráfica aceitar transparência viva e RGB com perfil |
| Perfil de saída | O da gráfica (ex.: Coated FOGRA39, PSO Coated v3, Uncoated FOGRA29) |
| Sangria | Incluída no PDF (3 mm) e fundo realmente estendido até ela |
| Marcas | Marcas de corte com deslocamento ≥ sangria; marcas de registro só se pedidas |
| Fontes | Todas incorporadas (ou convertidas em curvas, se a gráfica exigir) |
| Imagens | CMYK ou perfil correto, ≥ 300 ppi efetivo; nenhuma ampliada acima de 120% |
| Preto | Texto em 100% K; preto rico só em áreas grandes |
| Tinta | Cobertura total dentro do limite (separações/visualização) |
| Cores especiais | Nomeadas certo; nenhuma especial sobrando se a impressão é só CMYK |
| Página | Tamanho final correto (sem sangria na caixa de corte); páginas na ordem; verso na orientação certa |
| Limpeza | Sem camadas ocultas, objetos fora da página, comentários, RGB residual |
| Pacote | Arquivo aberto + links + fontes guardados para reabrir depois |

## Falhas comuns

| Sintoma | Causa | Correção |
|---|---|---|
| Filete branco na borda depois do corte | Sem sangria ou fundo não estendido | Estender fundo até 3 mm além do corte |
| Texto cortado ou colado na borda | Fora da margem de segurança | Texto a ≥ 5 mm do corte |
| Cor "lavada" | Arte em RGB convertida automaticamente | Converter com o perfil da gráfica e revisar; prova |
| Preto acinzentado em área grande | 100% K só | Preto rico em áreas grandes |
| Texto pequeno com halo colorido | Preto rico ou 4 cores em texto miúdo | 100% K em sobreimpressão |
| Imagem pixelada | Resolução efetiva < 200 ppi | Trocar imagem ou reduzir tamanho de uso |
| Folder não fecha / aba enruga | Painéis iguais em dobra carteira | Aba interna 2–3 mm menor |
| Tinta borrada / secagem lenta | Cobertura acima do limite | Reduzir com o perfil ou GCR |
| Fio sumiu | Fio < 0,25 pt ou vazado fino | Engrossar conforme tabela |
| Elemento branco desapareceu | Branco com sobreimpressão | Desligar overprint no branco |
| Rachadura na dobra | Papel grosso sem vinco | Pedir vinco |

## Como verificar

1. **Pré-comprovação (preflight):** rode a verificação do programa ou do Acrobat com o perfil PDF/X escolhido; zero erros.
2. **Visualizar separações:** confira cada chapa (C, M, Y, K, especiais), cobertura total no ponto mais escuro e se texto pequeno está só no K.
3. **Visualização de sobreimpressão** ligada antes de aprovar.
4. **Sobrepor guias:** gere o PDF com marcas e linhas de dobra/margem numa camada não imprimível e confira que nada crítico cruza.
5. **Prova impressa:** imprima em escala 100%, corte nas marcas, dobre. Cartão e folder: tenha na mão. Cor de marca: prova de contrato da gráfica no papel final.
6. **Leitura real:** confira corpo mínimo a 30–40 cm de distância e sob luz comum, não sob a luminária da mesa.

## Quando quebrar a regra

- **Gráfica com ficha técnica própria:** sangria de 2 mm ou 5 mm, perfil diferente, PDF/X-4 obrigatório — siga a ficha.
- **Impressão digital de pequena tiragem:** limites de tinta e fio fino são mais tolerantes; ainda assim, prova.
- **Preto rico em texto grande de display** (acima de ~36 pt) é aceitável e dá profundidade.
- **Sangria intencional "sem margem"** em pôster de linguagem gráfica: texto pode tocar o corte se o corte fizer parte da ideia, e o cliente sabe que pode variar 1–2 mm.
- **Papel especial ou acabamento** (hot stamping, verniz localizado, faca especial): cada um tem arquivo separado com regras próprias da gráfica.
