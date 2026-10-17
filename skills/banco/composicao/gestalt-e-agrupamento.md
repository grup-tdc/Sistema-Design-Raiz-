---
titulo: Gestalt e agrupamento
quando_consultar: Ao organizar elementos em grupos (cards, formulários, listas, blocos de informação de um post) ou quando o leitor associa coisas erradas entre si.
fontes:
  - owl-listener/designer-skills — ui-design/skills/law-of-* (proximidade, similaridade, região comum, Prägnanz, conexão uniforme) e visual-critique/critique-composition (MIT)
  - jsonmaster555-ai/Design-skills- — proximity-and-whitespace.md (sem licença: só ideias)
  - jpoindexter/typography-skills — typography-layout-systems (MIT): elementos não-objetivos e significado pela posição
  - Conhecimento canônico: psicologia da Gestalt (Wertheimer, Koffka, Köhler), Hedwig von Restorff, Arnheim
---
# Gestalt e agrupamento

## Princípios

- O leitor não vê elementos soltos; vê **grupos**. O layout decide quais grupos existem — por espaço, por semelhança e por fronteiras.
- **Proximidade é a lei mais forte e mais barata**: antes de adicionar linha, caixa ou cor, ajuste o espaço.
- As leis competem entre si. Quando proximidade diz "juntos" e similaridade diz "separados", o resultado é ambíguo. Faça as leis concordarem.
- Cada recurso de agrupamento extra (borda, fundo, divisória) é peso visual. Use o mínimo que resolve.

## Regras operacionais

### A escada de proximidade

```
dentro do grupo   <   entre grupos   <   entre seções
      x                 ≥ 2x               ≥ 2 × (entre grupos)
exemplo (base 8):  8        16–24              48–64
```

| Contexto | Dentro do grupo | Entre grupos | Entre seções |
|---|---|---|---|
| Formulário web | rótulo→campo 4–8 px | campo→campo 24 px | bloco→bloco 48 px |
| Card de UI | título→texto 8 px | entre cards 24 px | entre faixas 64–96 px |
| Post 1080×1350 | linhas de um bloco: entrelinha | blocos 48–64 px | (raramente há seções) |
| Quadro 1080×1920 | 16–24 px | 64–96 px | troca de cena |
| Impresso A4 | 0–½ linha de base | 1–2 linhas | 3–4 linhas |

Regra prática: o espaço **acima** de um título deve ser ≥ 2× o espaço **abaixo** dele — o título pertence ao que vem depois.

### As leis, com aplicação e falha típica

| Lei | Aplicação em layout | Falha típica |
|---|---|---|
| **Proximidade** | agrupar rótulo + dado, título + texto, foto + legenda | espaçamento uniforme em tudo: nada parece pertencer a nada |
| **Similaridade** (cor, forma, tamanho, peso) | todos os links iguais; todos os itens clicáveis com o mesmo tratamento | elemento decorativo com aparência de botão; dois estilos para a mesma função |
| **Região comum** | card, faixa de cor, painel de fundo envolvendo um grupo | caixa dentro de caixa dentro de caixa; fronteiras que cortam grupos ao meio |
| **Conexão uniforme** | linha ligando etapas de um processo, chave unindo itens | conectores decorativos que ligam coisas sem relação |
| **Continuidade** | alinhamentos fortes que levam o olho; itens dispostos ao longo de uma linha ou curva | eixo de alinhamento interrompido por um elemento desviado alguns px |
| **Fechamento** | logotipos e ícones com partes omitidas; carrossel com o card seguinte cortado na borda (sugere "há mais") | corte tão grande que a forma não se completa; sangria que parece erro de exportação |
| **Figura-fundo** | texto em campo calmo; produto recortado sobre fundo limpo | texto sobre foto movimentada; figura e fundo com valores parecidos |
| **Prägnanz (simplicidade)** | formas simples e regulares são lidas primeiro e lembradas | composição que só faz sentido após análise |
| **Destino comum** (movimento) | em motion, elementos que se movem juntos são um grupo | animar com o mesmo timing itens que não pertencem ao mesmo grupo |
| **Von Restorff (isolamento)** | um único item diferente é lembrado: CTA, preço, "mais popular" | vários itens "diferentes" ao mesmo tempo: o efeito se anula |

### Procedimento de agrupamento

1. Escreva os grupos lógicos do conteúdo (ex.: [título + subtítulo], [data + local + hora], [CTA + link]).
2. Defina a escada de proximidade na escala de espaçamento do projeto (x, 2x, 4x).
3. Aplique **só espaço**. Avalie no squint.
4. Se um grupo ainda não se separa, acrescente uma lei por vez: similaridade (alinhamento/estilo comum) → região comum (fundo sutil) → conexão (linha). Pare quando funcionar.
5. Garanta **um** elemento Von Restorff por vista.

### Figura-fundo em números

- Texto crítico precisa de fundo com variação de valor baixa atrás dele (ver zona de leitura protegida em `sistemas-de-composicao.md`).
- Contraste mínimo de texto: siga WCAG como medida física (4,5:1 para texto corrido, 3:1 para texto grande ≥ 24 px ou ≥ 18,7 px negrito); a estética da marca decide o resto.
- Sobre foto: escureça/clareie a região do texto até que o contraste se sustente no **pior pixel** atrás das letras, não na média.

## Falhas comuns

| Sintoma visível | Causa | Correção |
|---|---|---|
| Legenda parece pertencer à foto de baixo | legenda equidistante das duas fotos | legenda a x da sua foto e ≥ 2x da outra |
| Lista de campos parece uma massa | espaço rótulo→campo igual a campo→campo | 4–8 px dentro, 24 px entre |
| Interface "encaixotada" | região comum usada em todo nível | troque bordas internas por espaço; mantenha só a caixa externa |
| Título solto entre duas seções | espaço acima = espaço abaixo | acima ≥ 2× abaixo |
| Destaque não se destaca | vários elementos com cor de acento | um elemento Von Restorff por vista |
| Ícones parecem clicáveis e não são | similaridade com botões | diferencie forma/cor de elementos interativos e informativos |
| Em vídeo, título e legenda parecem uma coisa só | entram com o mesmo movimento e timing | escalone entradas; mesmo movimento só para o que é um grupo |

## Como verificar

- **Squint/desfoque** (8–12 px): devem aparecer manchas que correspondem exatamente aos grupos lógicos. Conte as manchas e compare com a lista do passo 1.
- **Medir distâncias**: para cada grupo, anote espaço interno e externo; razão externo÷interno ≥ 2.
- **Teste de remoção**: tire bordas e fundos de cards temporariamente. Se os grupos continuam claros, as caixas eram excesso.
- **Escala de cinza** para figura-fundo: o texto ainda se separa do fundo em todos os pontos?
- **Pergunte "o que pertence a quê?"**: aponte para cada legenda/rótulo; deve haver apenas uma resposta.
- **Motion**: assista em 0,5×; elementos que se movem juntos devem ser os que pertencem ao mesmo grupo.

## Quando quebrar a regra

- **Ambiguidade como conceito**: figura-fundo reversível (vaso/rostos) e fechamento extremo funcionam em logotipos e pôsteres conceituais, nunca em informação operacional (preço, data, instrução).
- **Densidade editorial**: tabelas e listas técnicas podem usar espaçamento quase uniforme se linhas finas ou zebra fizerem o agrupamento.
- **Proximidade proposital "errada"**: aproximar dois itens sem relação para criar tensão ou humor — só quando a quebra é o conteúdo e o resto da peça segue a regra.
