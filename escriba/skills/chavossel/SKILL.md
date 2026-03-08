---
name: chavossel
version: 2.2
layer: Camada 3 — Criação
description: >
  Geração de carrosséis editoriais de 6 a 10 slides com Progymnasmata e sintaxe Chavossel v22.
  Ativar quando o usuário pedir carrossel, mencionar "chavossel", "roteiro de carrossel",
  "ensaio visual", ou quiser adaptar tema/argumento para formato de carrossel.
role: Geração de carrosséis editoriais (6–10 slides) via 14 exercícios Progymnasmata + sintaxe Chavossel v22
inputs: tema/insumo bruto, exercício Progymnasmata (opcional), número de slides desejado (opcional)
outputs: roteiro de carrossel de 6–10 slides em sintaxe Chavossel v22, pronto para o plugin Figma
feeds-into: Chavideo (versão vídeo do mesmo argumento), Mapa de Campanha (peças de conteúdo orgânico)
changelog:
  - v1.0: versão inicial — 10 slides fixos, instrução contraditória sobre marcadores
  - v2.0: slides flexíveis (6–10), regra de densidade inversa, output com # e --- literais obrigatórios
  - v2.1: elemento Watermark [WATERMARK: TEXTO] adicionado à sintaxe v22 — estético, não narrativo
  - v2.2: Palavra de Poder *asterisco* adicionada à sintaxe v22 — destaque cromático e tipográfico no motor Figma
---

## ⚙️ Identidade do Usuário — Antes de Qualquer Output

Antes de gerar qualquer conteúdo, verifique se os dados abaixo foram fornecidos na sessão. Se não foram, pergunte:

1. **Nome / marca:**
2. **Produtos** (nome + tipo de cada um):
3. **Como chama sua audiência:**
4. **Tom de voz** — 3 adjetivos + 1 frase que nunca diria:
5. **Nicho e posicionamento** em uma frase:

> **Regra inviolável de output:** todo conteúdo gerado usa exclusivamente o nome, marca, produtos, linguagem e tom de voz do usuário. Nada externo ao negócio do usuário aparece no que é entregue. Se os dados já foram fornecidos na sessão, não pergunte novamente — aplique diretamente.

---

# Chavossel — Motor de Ensaios Visuais com Progymnasmata

O Chavossel não gera carrosséis. Gera ensaios visuais. A missão é adaptar a densidade de teses filosóficas, narrativas complexas e retórica clássica para quadros visuais sem perder profundidade.

**Diferencial crítico:** o público Chave Mestra é inteligente e busca sofisticação. Nenhuma simplificação. Nenhuma linguagem de coach motivacional. Profundidade que respeita a inteligência de quem lê.

---

## Sintaxe Chavossel v22 (OBRIGATÓRIA)

| Ferramenta | Sintaxe | Efeito Visual |
|---|---|---|
| **Manchete** | `# Frase longa de título` | Título de impacto no topo do slide |
| **Corpo** | Texto normal (parágrafos) | Leitura narrativa padrão |
| **Immersive Reader** | Texto puro >20 palavras, sem `#` | Remove distrações, foco tipográfico — para argumentos densos |
| **O Grito** | `# Frase curta <20 palavras` isolado, sem corpo | Aforismo, plot twist, ruptura |
| **Corte** | `---` em linha isolada | Separador de slides — detectado pelo plugin Figma |
| **Watermark** | `[WATERMARK: TEXTO]` em linha isolada | Texto decorativo gigante no fundo do slide — palavra-chave, nome, data, número |
| **Palavra de Poder** | `*palavra*` inline no corpo | Destaque cromático (cor de acento) + tipografia bold/itálico no motor Figma — para 1 ou 2 palavras por slide |

**Regra crítica:** todo slide é separado por `---`. Nunca escrever dois slides sem o corte entre eles.

---

## Palavra de Poder — Destaque Tipográfico

A Palavra de Poder é um **elemento de contraste visual dentro do corpo do texto**. O motor Figma lê o `*asterisco*` e aplica automaticamente a cor de acento (ouro) + bold/itálico na palavra marcada — criando ruptura rítmica e foco do olhar sem quebrar o fluxo narrativo.

### Como escrever

Envolver apenas a palavra (ou expressão mínima) entre asteriscos, inline no texto:

```
O homem comum tenta se *explicar*.
Não é sobre holofotes. É sobre controle *absoluto*.
A presença não é um dom. É um *posicionamento*.
```

### Regras de uso

1. **Máximo de 1 a 2 Palavras de Poder por slide** — o destaque existe pelo contraste; excesso anula o efeito
2. **Nunca marcar frases inteiras** — a marcação é de palavra ou expressão curtíssima (máximo 3 palavras)
3. **Nunca usar no slide 1** — a abertura carrega todo o peso visual; o asterisco competiria com a manchete
4. **Escolher a palavra de maior tensão semântica** — o verbo que rompe, o substantivo que concentra o argumento, o adjetivo que contradiz a expectativa
5. **Nunca usar em Watermark nem em `#` Manchete** — a Palavra de Poder pertence ao corpo do texto
6. **Compatível com todos os tipos de slide** — Corpo, Immersive Reader, e slides sem manchete

### Exemplos

Uma Palavra de Poder por slide:
```
# O Arquétipo da Autoridade

Não se trata de holofotes ou admiração pública.
Trata-se de controle *absoluto* sobre si mesmo.

---
```

Duas Palavras de Poder no mesmo slide:
```
O homem comum reage por impulso e perde a margem.
Quem domina o ambiente nunca entra em uma negociação em *desvantagem* — nunca age por *reatividade*.

---
```

Com Watermark + Palavra de Poder:
```
[WATERMARK: MÉTODO]

# É a sua hora.

A presença não é um dom. É um *posicionamento*.

---
```

---

## Watermark — Elemento de Estética

O Watermark é um **elemento visual, não narrativo**. Ele adiciona uma camada decorativa ao slide — texto grande e transparente no fundo — sem pertencer ao argumento. O plugin Figma o lê como diretiva visual, não como conteúdo.

### O que é

Uma palavra, nome próprio, data, número ou termo-chave colocado como textura visual de fundo de um slide específico. Existe para criar elegância, densidade visual e ressonância temática — não para informar.

### Como escrever

```
[WATERMARK: TEXTO]
```

Exemplos válidos:
```
[WATERMARK: EXAUSTÃO]
[WATERMARK: 1973]
[WATERMARK: VIKTOR FRANKL]
[WATERMARK: LIBERTAS]
[WATERMARK: R$ 0]
```

O `TEXTO` deve ser:
- Uma única palavra ou expressão muito curta (máximo 3 palavras)
- Um nome próprio, data, número, conceito-chave ou termo do argumento
- Algo que ressoe com o tema do slide — não um resumo, não uma repetição da manchete

### Onde colocar no slide

O `[WATERMARK: TEXTO]` vai em **linha isolada** dentro do bloco do slide — antes do corpo, depois da manchete, ou entre parágrafos. Nunca junto ao `---` de corte.

**Exemplos de posicionamento:**

Um watermark por slide:
```
# O custo invisível da pressa

[WATERMARK: EXAUSTÃO]

Quando você troca o descanso estratégico pelo trabalho braçal contínuo, você deixa de ser o arquiteto do seu império.

---
```

Watermark no final do bloco:
```
A privação de sono não forja milionários. Ela forja pacientes. Ela destrói a sua capacidade primária de tomar decisões complexas.

[WATERMARK: DECISÕES]

---
```

Dois watermarks no mesmo slide (lançamento com data e nome da oferta):
```
# As vagas fecham em 48 horas

[WATERMARK: 14 DE ABRIL]

[WATERMARK: PORTADORES DA CHAVE]

Este não é mais um curso. É um rito de passagem para quem decidiu parar de aprender e começar a transformar.

---
```

Três watermarks no mesmo slide (história com personagem, lugar e ano):
```
[WATERMARK: VIKTOR FRANKL]

[WATERMARK: AUSCHWITZ]

[WATERMARK: 1944]

Ele não tinha controle sobre o campo, sobre os guardas, sobre o frio ou a fome. Mas descobriu que a última liberdade humana — a de escolher a própria atitude — não podia ser confiscada.

---
```

### Quantidade por slide e por carrossel

**Por slide:** até 3 watermarks em um mesmo slide, em linhas isoladas separadas. Quando há mais de um, eles se distribuem visualmente como camadas de fundo.

**Por carrossel:** a quantidade total depende do propósito narrativo — não há um número fixo. As configurações possíveis são:

| Quantidade total | Uso |
|---|---|
| **0** | Carrossel puramente textual, argumento não pede âncora visual externa |
| **3** | Aplicação pontual — 3 slides recebem 1 watermark cada, ou 1 slide recebe 3 |
| **4** | Narrativa com múltiplos beats visuais — cada beat âncora um termo |
| **5** | Histórias longas, lançamentos com múltiplas datas/fases |
| **7** | Carrosséis de alta densidade visual — lançamentos com timeline, glossário implícito |

Configurações intermediárias (1, 2, 6) são possíveis, mas as acima são as mais testadas. Deixar claro na nota técnica quantos watermarks foram usados e a lógica de distribuição.

### Por propósito narrativo

| Contexto | O que usar como watermark |
|---|---|
| **Lançamento** | Datas de abertura/encerramento, número de vagas, preço, nome da oferta |
| **História / Narrativa** | Nome do personagem, ano, frase-chave da cena, lugar |
| **Argumento filosófico** | Conceito central em latim ou no idioma original, nome do pensador |
| **Notícia / Tendência** | Termo-chave do campo, dado numérico central, fonte ou publicação |
| **Refutação / Mito** | O mito em uma palavra, o dado que o destrói |
| **Comparação** | Nome de cada elemento comparado nos slides correspondentes |

### Regras de uso

1. **Por slide: até 3 watermarks** — cada um em linha isolada, dentro do bloco do slide
2. **Por carrossel: 0, 3, 4, 5 ou 7** — definido pelo propósito, nunca por convenção
3. **Nunca no slide 1** — a abertura já carrega todo o peso visual
4. **Nunca no slide de fechamento/CTA** — o foco final é a chamada à ação
5. **Nunca repetir o texto exato da manchete `#` do mesmo slide** — o watermark complementa, não ecoa
6. **Nunca narrativo** — se o texto for necessário para entender o slide, pertence ao corpo, não ao fundo
7. **Distribuição estratégica:** slides de maior peso conceitual, de virada, ou com dado/nome que merece destaque visual silencioso

---

## Formato de Output — CRÍTICO

O output final deve ser **exclusivamente o roteiro em sintaxe Chavossel v22 como texto bruto**, pronto para copiar e colar no plugin Figma.

### Os marcadores `#` e `---` DEVEM aparecer literalmente no output.

O plugin Figma os lê como texto simples para detectar tipo de slide e pontos de corte. Se esses caracteres forem suprimidos, renderizados ou substituídos, o plugin falha na distribuição dos slides.

**Formato correto:**
```
# Título do slide

Corpo do slide com parágrafos.

---

Próximo slide sem título. Texto corrido denso que ocupa o quadro todo.

---

# O Grito isolado

---

# Slide com manchete

Seguido de corpo imediatamente abaixo.

---
```

**Proibido no output:**
- Rótulos internos como "Slide 1:", "Manchete:", "Immersive Reader:", "O Grito:"
- Blocos de código (triple backtick) envolvendo o roteiro
- Qualquer texto entre o roteiro e a nota técnica além de uma linha em branco
- Omissão do `#` em slides de Manchete ou O Grito
- Omissão do `---` entre slides consecutivos
- Comentar ou explicar o watermark dentro do roteiro ("este watermark representa...") — ele simplesmente aparece

Após o roteiro, fornecer uma **nota técnica de 3 linhas**:
1. Exercício escolhido e por que
2. Lógica de ritmo aplicada
3. Efeito retórico pretendido no slide final

---

## Densidade de Slides (6–10)

O número de slides não é fixo. É determinado pelo insumo, pelo exercício Progymnasmata e pelo efeito retórico pretendido.

**Regra de densidade inversa:** menos slides = mais texto por slide. Nunca diluir o argumento em slides extras para chegar a 10. Nunca comprimir argumento denso em 6 slides rasos.

| Slides | Densidade | Uso ideal |
|--------|-----------|-----------|
| 6 | Alta — blocos longos por slide | Argumento filosófico unitário, tema com poucos beats mas alta profundidade |
| 7–8 | Média — equilíbrio ritmo/profundidade | Maioria dos insumos; Refutação, Confirmação, Tese, Chria |
| 9–10 | Baixa — textos mais curtos, ritmo acelerado | Narrativas com muitos beats, Fábula com muita ação, Comparação com dois retratos |

**Estrutura mínima por quantidade de slides:**

**6 slides:** Abertura → Ponte → Corpo A → Corpo B → Corpo C → Fechamento + CTA

**7 slides:** Abertura → Ponte → Corpo A → Grito central → Corpo B → Corpo C → Fechamento + CTA

**8 slides:** Abertura → Ponte → Corpo A → Grito → Corpo B → Corpo C → Corpo D → Fechamento + CTA

**9–10 slides:** Abertura → Ponte → 5–6 slides de corpo com alternância plena → Fechamento + CTA

Consulte `exercicios.md` para a tabela de compressão de cada exercício.

---

## Os 14 Exercícios Progymnasmata

### Seleção do Exercício

**Se o usuário fornecer o exercício:** usar diretamente.

**Se o usuário fornecer apenas o tema/insumo:** diagnosticar:

| Diagnóstico do insumo | Exercício |
|---|---|
| História com moral → | Fábula |
| Relato de evento real/histórico → | Narrativa |
| Citação ou gesto de pessoa famosa → | Chria |
| Provérbio ou máxima → | Máxima/Gnome |
| Ataca mito ou crença popular → | Refutação |
| Defende posição com provas → | Confirmação |
| Amplifica vício ou virtude → | Lugar-Comum |
| Elogia pessoa, obra, lugar → | Elogio |
| Ataca ideia, vício, comportamento → | Vitupério |
| Compara dois elementos → | Comparação |
| Assume voz de personagem → | Etopeia |
| Descreve cena ou lugar vividamente → | Écfrase |
| Argumenta questão filosófica geral → | Tese |
| Discute utilidade/dano de norma → | Proposta de Lei |

---

## Processo de Criação

### Passo 1 — Leitura do Insumo
Absorver o insumo bruto. Identificar: essência, conflito central, argumento ou imagem mais forte. Estimar a densidade natural do argumento — isso define o número de slides.

### Passo 2 — Definição de Escopo
Determinar o número de slides (6–10) baseado na densidade do insumo. Slides a menos que o necessário rasa o argumento. Slides a mais que o necessário dilui o ritmo.

### Passo 3 — Seleção e Consulta
Identificar o exercício. Consultar `exercicios.md` → seção do exercício → usar o template de 10 atos como referência máxima e comprimir para o número de slides definido no Passo 2.

### Passo 4 — Composição
- Escrever slide por slide seguindo a estrutura do exercício
- Aplicar a sintaxe Chavossel v22 com `#` e `---` literais em cada ponto correto
- Manter tom autoral, denso, provocativo
- Não simplificar. Não usar linguagem de coach motivacional.

### Passo 5 — Revisão de Ritmo
- [ ] O slide 1 desafia uma crença ou promete transformação real?
- [ ] O slide 2 abre lacuna de informação genuína?
- [ ] O ritmo alterna entre os tipos de slide?
- [ ] O fechamento entrega a conclusão prometida na abertura?
- [ ] Todo `#` está presente onde há Manchete ou O Grito?
- [ ] Todo `---` está presente entre slides consecutivos?
- [ ] Nenhum rótulo interno ("Slide X:", "Manchete:") no output?

---

## Lei do Ritmo

Nunca três slides do mesmo tipo seguidos. Alternar sempre:

**Padrão base (adaptar ao número de slides):**
Manchete/Grito forte → Immersive Reader → Manchete → Immersive Reader → Grito → Immersive Reader → Manchete → Fechamento

O ritmo pode variar conforme o exercício. O que nunca varia: ruptura periódica com O Grito, profundidade nos blocos Immersive Reader, clareza na Abertura e no Fechamento.

---

## Regras

1. Nunca criar carrossel sem selecionar o exercício Progymnasmata primeiro
2. Nunca dois slides consecutivos sem `---` entre eles
3. O slide 1 é inegociável — deve provocar ou prometer algo real
4. O slide 2 é inegociável — deve abrir lacuna de informação
5. Lei do Ritmo: alternar tipos de slide — nunca três iguais seguidos
6. `#` e `---` aparecem literalmente no output — nunca suprimir, nunca encapsular em bloco de código
7. Número de slides: mínimo 6, máximo 10 — definido pelo argumento, não por convenção
8. Densidade inversa: menos slides = mais texto por slide. Nunca o oposto.
9. Output final = roteiro bruto + nota técnica de 3 linhas abaixo
10. Watermark: até 3 por slide; 0/3/4/5/7 por carrossel conforme propósito; nunca no slide 1 nem no fechamento; nunca narrativo — sempre estético
11. Palavra de Poder: máximo 2 por slide; nunca frase inteira; nunca no slide 1; nunca em `#` Manchete nem em Watermark — exclusiva do corpo do texto

---

## Referências Cruzadas

- `exercicios.md` — templates dos 14 exercícios com estrutura de 10 atos + tabela de compressão para 6–9 slides
- `exemplos.md` — exemplos gold standard de roteiros completos em sintaxe correta
- `copy-3x5.md` — calibração de qual camada cada slide serve (C1/C2/C3)
- `metodo-carga.md` — calibração de intensidade emocional e intelectual
- `progymnasmata-video-map.md` — a mesma estrutura exercício → adaptação para vídeo (Chavideo)
