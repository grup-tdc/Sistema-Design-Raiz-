---
titulo: Escolha e pareamento de tipos
quando_consultar: Ao escolher, substituir ou combinar famílias tipográficas para um projeto novo, ou ao auditar por que uma combinação "parece errada".
fontes:
  - jpoindexter/typography-skills — skills typeface-selection, typeface-pairing, typography-critique (MIT); destilam Lupton (Thinking with Type), Rutter (Web Typography), Santa Maria (On Web Typography), Stocks (Universal Principles of Typography), Coles (The Geometry of Type), Kupferschmid
  - wondelai/skills — web-typography (MIT)
  - educlopez/ui-craft — references/typography.md (MIT)
  - pbakaus/impeccable — skill/reference/typeset.md (Apache-2.0)
---
# Escolha e pareamento de tipos

## Princípios

1. **Restrições eliminam antes do gosto.** Cobertura de caracteres (acentos do português: ã õ ç á é í ó ú â ê ô à, além de º ª e “ ” – —), licença para a mídia, estilos existentes (itálico verdadeiro, pesos) e recursos OpenType (numerais tabulares, versaletes) descartam a maioria dos candidatos. Só depois se discute voz.
2. **Não existe tipo neutro.** Toda escolha tem voz; "neutro" quase sempre quer dizer "discreto". Justifique o tom pela forma visível (eixo, contraste de traço, abertura, proporção), não por adjetivo.
3. **Julgue no tamanho, na mídia e no texto reais.** Uma fonte que encanta no espécime de 72 px pode embolar a 14 px, em papel poroso ou num vídeo comprimido.
4. **Serifa vs. sem serifa não é decisão de legibilidade.** A pesquisa não demonstra vantagem consistente de leitura para nenhum dos dois; a familiaridade pesa mais. Decida por tom e comportamento de renderização.
5. **Duas famílias precisam de um motivo.** Uma família com boa amplitude de pesos e larguras resolve a maior parte das hierarquias. No pareamento, vale a máxima do repositório jpoindexter (MIT): *"Contrast or unity — never in between."* Diferenças sutis parecem erro; o risco é a semelhança, não o choque.

## Regras operacionais

### Classificar para descrever (não para buscar)

| Grupo | Sinais visíveis | Leitura de tom típica |
|---|---|---|
| Humanista (serifada ou sem) | eixo inclinado, traço caligráfico, aberturas amplas | calorosa, próxima |
| Transicional / racional (serifada) | eixo vertical, contraste médio a alto | editorial, institucional |
| Didone | contraste extremo, serifas finíssimas | luxo, moda — só em tamanho grande |
| Grotesca / neo-grotesca | proporções regulares, contraste baixo, aberturas mais fechadas | sistemática, discreta |
| Geométrica | círculos e retas, traço uniforme | técnica, construída |
| Slab / egípcia | serifas grossas, contraste baixo | robusta, direta |
| Monoespaçada | larguras iguais, 0/O e 1/l/I distinguíveis | técnica, código, dados |
| Display / script | formas singulares | expressiva — nunca para texto corrido |

Diga a evidência em voz alta: "aberturas amplas e eixo inclinado" é argumento; "parece moderna" não é.

### Escolher por função

| Papel | Exija |
|---|---|
| Texto corrido (web, livro, revista) | contraste baixo a moderado, aberturas abertas, itálico verdadeiro, x-height confortável, cobertura completa de PT-BR |
| Interface densa | 1 l I e 0 O distinguíveis, numerais tabulares, métricas verticais compactas, 3+ pesos |
| Display / marca | caráter; versão óptica "Display" se houver; comportamento em tamanho pequeno é irrelevante |
| Dados / tabelas / preços | numerais tabulares obrigatórios |
| Vídeo 1080×1920 | traço sem hairlines (a compressão come traços finos), x-height alta, peso médio ou maior, contraformas abertas que sobrevivem a desfoque de movimento |
| Impresso pequeno (bula, rodapé, 6–8 pt) | contraste baixo, aberturas abertas, *ink traps* ou desenho para tamanhos pequenos |
| Sinalização / pôster lido de longe | x-height alta, largura normal (evite condensadas extremas), contraformas grandes |

### Procedimento de decisão

1. Liste as restrições: idiomas, mídias (web, app, impresso, vídeo, logotipo), pesos e estilos necessários, recursos OpenType, orçamento de bytes na web.
2. Elimine quem falha em qualquer restrição dura.
3. Monte um espécime comparativo: o MESMO conteúdo real (maior título real, parágrafo, legenda, números) em cada candidata, nos tamanhos reais, lado a lado.
4. Teste o pior caso: a palavra mais longa ("inconstitucionalissimamente", "responsabilização"), o menor rótulo, texto claro sobre escuro, fundo de vídeo movimentado.
5. Só então compare tom, com evidência formal.
6. Registre a decisão e o motivo no DESIGN.md do projeto. A marca define a fonte; este banco só ensina a avaliá-la.

### Parear

Ordem de preferência:
1. **Uma família com mais amplitude** (peso, largura, caixa, tamanho, cor).
2. **Superfamília** (serifada + sem serifa do mesmo esqueleto e métricas).
3. **Duas famílias com um traço compartilhado declarado e uma diferença clara.**
4. **Três ou mais**: quase sempre perda de controle. Exceção funcional: uma monoespaçada para código ou dados.

| Compartilhe (pelo menos 1 item objetivo) | Contraste (pelo menos 1 eixo forte) |
|---|---|
| x-height | classificação (serifa ↔ sem) |
| proporção / largura | contraste de traço |
| época ou intenção | estrutura (geométrica ↔ humanista) |
| forma de a g r y, terminais | peso e escala |

- Ancore em uma fonte, de preferência a do texto (é ela que faz o trabalho de leitura); a de destaque se adapta.
- Atalhos legítimos: mesmo desenhista ou mesma fundição.
- Combinações frágeis: duas sem serifa humanistas de famílias diferentes; duas geométricas; duas display com muita personalidade.
- **Iguale o tamanho aparente na junção:** fixe uma fonte e ajuste o corpo da outra até as x-heights coincidirem visualmente (ex.: 40 pt com 37,5 pt). Não iguale o número.

### Pesos disponíveis

- Mínimo prático para um sistema: regular + um peso forte (600–700). Interface costuma pedir 3 (400/500/600 ou 400/600/700).
- Diferença mínima entre pesos adjacentes que carregam papéis distintos: 200 unidades (400 vs 600). 400 vs 500 raramente se distingue em tela pequena ou vídeo.
- Verifique se o itálico é verdadeiro e se existe em cada peso usado; negrito e itálico sintetizados pelo software são defeito.
- Fonte variável: um arquivo cobre o eixo inteiro; ainda assim, use só os valores do sistema (não 437).
- Carregue na web apenas os arquivos usados.

### Licença

| Mídia | O que verificar na licença (EULA) |
|---|---|
| Impresso e imagens estáticas (post, PDF) | licença desktop costuma bastar; confira limite de máquinas/usuários |
| Web | licença web separada, às vezes por visualizações; auto-hospedagem permitida? |
| App / software | licença de embutir em aplicativo |
| Vídeo / broadcast | algumas licenças desktop excluem uso em vídeo, TV ou anúncios pagos |
| Logotipo / marca registrada | algumas proíbem ou cobram à parte |
| Entrega de arquivos ao cliente | quase sempre proibida em licença de assinatura; o cliente precisa da própria |

- Fontes sob SIL Open Font License (OFL) permitem uso comercial e embutir; modificar exige renomear se houver Nome Reservado; não podem ser vendidas sozinhas.
- Registre no DESIGN.md: fonte, origem, licença, mídias cobertas.

## Falhas comuns

| Sintoma visível | Causa | Correção |
|---|---|---|
| Linda no espécime, embolada no corpo de texto | julgada só em tamanho grande | reavaliar no tamanho real, em parágrafo |
| Acentos caindo para outra fonte (ã, ç diferentes) | cobertura não checada | testar pangrama PT-BR antes de aprovar |
| "Algo errado" sem choque evidente | duas fontes parecidas demais | aumentar contraste ou voltar para uma família |
| Título e texto parecem de tamanhos desencontrados | x-heights diferentes | compensar o corpo na junção |
| Itálico torto ou negrito "borrado" | estilo sintetizado | usar estilo real ou outro recurso de ênfase |
| Números pulando numa tabela ou contador animado | numerais proporcionais | ativar tabulares |
| Hairlines somem no vídeo exportado | didone/alto contraste em mídia comprimida | trocar de corte ou aumentar peso/tamanho |
| Terceira fonte surgiu num banner | sistema sem regra | limitar as famílias no DESIGN.md |
| Projeto bloqueado na entrega | licença não cobre a mídia | checar EULA no início |

## Como verificar

- Espécime lado a lado com conteúdo real; elimine pelo pior caso, não pelo melhor.
- Pangrama PT-BR em cada peso: "À noite, vovô Kowalsky vê o ímã cair no pé do pinguim queixoso e vovó põe açúcar no chá de tâmaras do jabuti feliz." Confira se nenhum glifo cai em fonte substituta.
- Título real imediatamente acima do texto real: as x-heights casam?
- Squint test na junção: os dois papéis se distinguem claramente, ou parecem quase iguais?
- Vídeo: exporte 3 s com o codec final e veja no celular a 30–40 cm; impresso: imprima em 100% no papel previsto.
- Conte famílias e pesos no arquivo final; compare com o DESIGN.md.

## Quando quebrar a regra

- **Três famílias** são aceitáveis quando uma delas tem papel funcional isolado (código, dados) ou quando o logotipo usa uma fonte própria que nunca aparece em texto.
- **Display em texto curto:** uma frase de 3–6 palavras num pôster pode usar fonte de destaque; um parágrafo não.
- **Fonte do sistema** é legítima quando desempenho e familiaridade valem mais que distinção (ferramentas internas, painéis).
- Conflito entre autores: alguns defendem procurar contraste máximo (serifa + sem); outros, unidade (superfamília). Ambos concordam no ponto central: evitar o meio-termo.
