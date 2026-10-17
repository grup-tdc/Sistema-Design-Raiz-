---
titulo: Editorial longo e documentos com dados variáveis (livro, apostila, relatório, certificado, crachá)
quando_consultar: Ao diagramar peças paginadas (livro, apostila, e-book em PDF, relatório, catálogo) ou documentos gerados em lote com dados variáveis (certificado, crachá, convite nominal), antes de definir o documento e de novo antes de fechar o arquivo.
fontes:
  - Robert Bringhurst, The Elements of Typographic Style (página, mancha, ritmo vertical, aberturas)
  - Jan Tschichold, The Form of the Book / cânone Van de Graaf (proporções de página e margem; ver composicao/grades.md)
  - Josef Müller-Brockmann, Grid Systems in Graphic Design (grade de linha de base e registro)
  - Matthew Butterick, Practical Typography (corpo, entrelinha e hierarquia em documentos)
  - ISO 7810 (cartão ID-1/CR80, 85,6 × 54 mm); ISO 216 (séries A e B)
  - Prática corrente de pré-impressão e acabamento editorial no Brasil (cadernos, lombada, encadernações). Valores variam por gráfica e papel: confirme a ficha técnica.
---
# Editorial longo e documentos com dados variáveis

## Princípios

- **Em peça paginada, a unidade de design é a página dupla (spread)**, não a página. Margens, mancha e grade se espelham; o leitor sempre vê duas páginas juntas.
- **Ritmo vertical é o que faz um livro parecer profissional**: todas as linhas de texto caem numa grade de linha de base comum, e frente e verso da folha ficam em registro (a linha do verso coincide com a da frente).
- **Consistência é a regra; exceção só com função.** Abertura de capítulo, citação, tabela, figura: cada tipo de elemento tem um único tratamento no documento inteiro. Um sistema de estilos (parágrafo, caractere, objeto) é obrigatório, nunca formatação manual.
- **Documento com dados variáveis é desenhado para o pior caso**: o nome mais longo, o título de curso mais extenso, a carga horária com mais dígitos. Quem desenha para "Ana Lima" quebra em "Maria Aparecida de Albuquerque Figueiredo".
- **A encadernação define a margem interna.** O que some na dobra, na espiral ou no grampo não existe para o leitor.

## Regras operacionais

### Livro e apostila: o documento

| Decisão | Regra | Contexto |
|---|---|---|
| Formato | Livro: 14×21, 16×23 cm (aproveitamento comum de folha no Brasil). Apostila: A4 ou A5. | Confirme com a gráfica o formato com melhor aproveitamento da folha antes de travar |
| Número de páginas | Múltiplo de 4 (sempre); ideal múltiplo de 16 ou 32 (cadernos) | Páginas sobrando viram brancas no fim; planeje-as |
| Margens | Comece pelo cânone (composicao/grades.md) e ajuste: interna recebe o acréscimo da encadernação | A externa é a maior em livro; a inferior maior que a superior |
| Acréscimo na medianiz | Brochura colada (PUR/hotmelt): +3–6 mm conforme espessura · Espiral/wire-o: +10–15 mm (furação) · Grampo (canoa): +2–3 mm e prever deslocamento das páginas centrais (creep) | Quanto mais grosso o miolo, mais a página "entra" na lombada colada |
| Lombada | espessura ≈ (páginas ÷ 2) × espessura da folha. Offset 75 g/m² ≈ 0,10 mm; 90 g ≈ 0,12 mm | Peça o cálculo à gráfica com o papel real; texto na lombada só acima de ~6–8 mm |
| Linha de base | = entrelinha do texto corrido (ex.: 11/15 pt → 15 pt). Todos os espaços verticais em múltiplos dela | Títulos podem ocupar 2–3 linhas de base; nunca valores avulsos |

### Livro e apostila: hierarquia e elementos

- **Texto corrido**: 10–12 pt no impresso, medida 60–75 caracteres, parágrafo indicado por recuo (≈ 1 entrelinha ou 1 quadratim) **ou** espaço, nunca os dois. Primeiro parágrafo após título sem recuo.
- **Títulos**: no máximo 3–4 níveis visíveis. Diferencie por espaço e peso antes de tamanho (tipografia/escala-e-hierarquia.md). Espaço acima de um título maior que o espaço abaixo, ambos em linhas de base.
- **Abertura de capítulo**: em página ímpar (direita) para livro; título rebaixado (ex.: começa a 1/3 da altura da mancha), mesmo tratamento em todos os capítulos. Apostila pode abrir em qualquer página se o conteúdo for contínuo, mas decida e mantenha.
- **Fólios (números de página) e cabeçalhos correntes**: na margem externa ou centrados no pé; omitidos em páginas de abertura e páginas em branco. Cabeçalho corrente: livro à esquerda, capítulo à direita.
- **Figuras e tabelas**: ocupam módulos inteiros da grade (1 coluna, 2 colunas, mancha inteira), alinhadas à linha de base; legenda sempre no mesmo lado e estilo; numeração por capítulo (Figura 3.2). Tabela: fios horizontais finos, sem grade fechada; números alinhados à direita com algarismos tabulares.
- **Notas**: rodapé em corpo 2 pt menor que o texto, mesma linha de base proporcional ou grade própria; chamada sobrescrita após a pontuação.
- **Elementos pedagógicos de apostila** (boxes de atenção, exercícios, resumos): um estilo por tipo, no máximo 3 tipos de box, identificados por forma e posição antes de cor (precisam funcionar impressos em preto e branco).
- **Viúvas e órfãs**: nenhuma linha isolada no topo ou no pé da página; título nunca é a última linha de uma página.

### Certificado

| Item | Regra |
|---|---|
| Formato | A4 paisagem (297×210 mm) é o padrão; PDF digital não precisa de sangria. Impressão em impressora de escritório: nada essencial a menos de 8–10 mm da borda (ela não imprime até o limite). |
| Hierarquia | 1º nome do participante · 2º nome do curso/evento · 3º carga horária, data e local · 4º assinaturas · 5º código de validação. O nome é o elemento dominante, não o título "CERTIFICADO". |
| Assinaturas | Linha de 50–70 mm, nome e cargo abaixo em corpo pequeno; assinaturas alinhadas numa mesma linha de base. |
| Validação | Código único e/ou QR com URL de verificação, em canto e tamanho discretos (QR ≥ 18 mm impresso). |
| Texto legal | Frase completa, sem abreviações ambíguas ("carga horária de 16 horas", não "CH 16h"). |

### Crachá

| Item | Regra |
|---|---|
| Formatos | Cartão PVC ID-1/CR80 85,6×54 mm · evento 10×14 cm ou A6 (105×148 mm) em retrato |
| Área do furo/cordão | Topo livre de 12–15 mm (furo, slot ou ilhós) |
| Nome | Primeiro nome é o maior elemento, legível a 1,5–2 m: maiúscula com ≥ 8–10 mm de altura (≈ corpo 36–48 pt) em crachá de evento. Heurística de legibilidade, confirme imprimindo e olhando a 2 m |
| Hierarquia | Primeiro nome → sobrenome/empresa → categoria (participante, palestrante, staff) por cor ou faixa, sempre com rótulo em texto também |
| Verso | Crachá gira no cordão: imprima os dois lados com o nome, ou o verso com informação útil (programação, Wi-Fi, mapa) |

### Dados variáveis (mala direta)

1. Liste os campos e o **maior valor real** de cada um (exporte a planilha e meça o comprimento máximo).
2. Defina a caixa de cada campo e o comportamento quando não couber: reduzir corpo até um mínimo definido → quebrar em 2 linhas → abreviar só sobrenomes intermediários (nunca o primeiro nome).
3. Gere e **olhe** pelo menos: o registro mais curto, o mais longo, um com acentos/caracteres especiais (Ç, Ã, Ü, apóstrofo) e um com campo vazio.

## Falhas comuns

| Sintoma visível | Causa | Correção |
|---|---|---|
| Texto "some" na dobra do livro | Margem interna sem acréscimo de encadernação | Somar o acréscimo da tabela à interna; refazer a mancha |
| Linhas de frente e verso desencontradas (fantasma no papel fino) | Espaços verticais fora da linha de base | Todo espaço vertical em múltiplos da entrelinha; travar texto à grade |
| Capítulos parecem de livros diferentes | Formatação manual, sem estilos | Estilos de parágrafo/objeto para cada elemento; aplicar em todo o documento |
| Páginas em branco inesperadas no fim | Total não múltiplo de 4/16 | Planejar a paginação desde o início (falsa folha de rosto, créditos, notas) |
| Nome longo estoura o certificado | Desenho feito com o nome curto | Caixa para o pior caso + regra de redução com mínimo |
| Crachá ilegível a 1 m | Nome no mesmo corpo da empresa/cargo | Nome dominante (≥ 36 pt), resto em 2º e 3º níveis |
| Box de apostila invisível na cópia P&B | Diferenciação só por cor | Forma, fio, ícone e posição antes da cor |

## Como verificar

- **Spreads no render**: renderize páginas duplas (não páginas soltas) e olhe espelhamento de margens, fólios e cabeçalhos.
- **Grade e linha de base**: converta para px no render (a 300 dpi, 1 mm ≈ 11,81 px) e use `sobrepor.mjs --colunas … --margem … --gutter … --linha-base …` numa página de texto corrido e numa com figura; todas as linhas devem cair nas guias.
- **Registro frente/verso**: sobreponha a página ímpar espelhada sobre a par (50% de opacidade); as linhas de texto devem coincidir.
- **Dados variáveis**: gere os 4 casos-limite da lista acima e abra cada render.
- **Crachá e certificado**: imprima um em tamanho real; crachá lido a 2 m, certificado assinado de verdade (a linha comporta a assinatura?).
- **Antes da gráfica**: checklist de fechamento em `formatos/impresso.md` (sangria, perfis, fontes incorporadas, PDF/X).

## Quando quebrar a regra

- **Livro de arte, catálogo, revista**: a grade de linha de base pode ceder a uma grade modular de imagem; mantenha o registro ao menos no texto corrido.
- **Material didático muito visual** (infográficos por página): abertura e hierarquia podem variar por spread, desde que os elementos pedagógicos mantenham um único tratamento.
- **Certificado com identidade forte de evento**: o título pode dominar se o nome continuar sendo o segundo elemento lido e estiver em destaque inequívoco.
- **Normas institucionais** (ABNT para trabalhos acadêmicos, manuais de marca, exigências de órgão emissor): a norma vence a preferência tipográfica; registre em `decisoes.md`.
