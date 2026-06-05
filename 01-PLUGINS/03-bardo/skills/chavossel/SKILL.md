---
name: chavossel
description: Usar quando o usuário pedir "carrossel", "chavossel", "cria um carrossel", "10 slides", "ensaio visual", "carrossel editorial", "carrossel com Progymnasmata", ou qualquer geração de roteiro de carrossel com retórica clássica. O número de slides é decidido pela narrativa — entre 6 e 10.
version: 1.1
layer: Camada 3 — Criação
role: Geração de carrosséis editoriais de 6–10 slides via 14 exercícios Progymnasmata + sintaxe Chavossel v22. O número de slides emerge da densidade narrativa do insumo, não de um template fixo.
inputs: tema/insumo bruto, exercício Progymnasmata (opcional), número de slides (opcional — se não informado, decidir pela narrativa)
outputs: roteiro de carrossel formatado em sintaxe Chavossel v22 completa e explícita, pronto para copiar no plugin
feeds-into: Chavideo (versão vídeo do mesmo argumento), Mapa de Campanha (peças de conteúdo orgânico)
---

# Chavossel — Motor de Ensaios Visuais com Progymnasmata

O Chavossel não gera carrosséis. Gera ensaios visuais. A missão é adaptar a densidade de teses filosóficas, narrativas complexas e retórica clássica para o número de quadros que a narrativa exige — sem perder profundidade e sem inflar para preencher espaço.

**Diferencial crítico:** o público Chave Mestra é inteligente e busca sofisticação. Nenhuma simplificação. Nenhuma linguagem de coach motivacional. Profundidade que respeita a inteligência de quem lê.

---

## GATEKEEPING — Pré-Requisitos

Antes de gerar carrossel, verificar no **Dossiê CM** (`05-ASSETS/dossies/[projeto].md`):

| Pré-requisito | Seção do Dossiê | Se não existir |
|---------------|-----------------|----------------|
| Persona mapeada | §2 > Persona | ⚠️ Sem persona, slide 1 (âncora) e o tom perdem calibragem. Alertar: "Sem Alma da Persona, o carrossel não espelha o público real. Recomendo Forja da Persona antes." Pode operar com público descrito na conversa. |
| DNA de Marca | §1 > DNA de Marca | ⚠️ Sem DNA, narrativa e símbolos ficam genéricos. Alertar e sugerir. Pode operar com tom informado na conversa. |
| Tema / headline | Conversa ou Headline Generator | ⚡ Se não houver tema, sugerir Headline Generator primeiro. Não bloqueia. |

**Ao concluir:**
1. Registrar no §4 do Dossiê (Inventário de Outputs > Carrosséis).
2. **Publicar no Notion via Publicador Visual** — adicionar seção 🗂️ Carrossel na entrada do dia na database Conteúdo:
   - Buscar entrada onde `date:Data de Publicação:start` = [data planejada]
   - Se não existe: criar entrada do dia (Título = "📅 [DD/MM] — [tema]", Status = Rascunho, data = [data])
   - Adicionar seção com diagnóstico Chavossel (exercício, N-level, número de slides, proporção C1/C2/C3) + roteiro completo com sintaxe v22 + nota técnica
   → Ver `publicador-visual/SKILL.md` para o fluxo completo.

---

## Sintaxe Chavossel v22 (OBRIGATÓRIA)

A sintaxe é parseada bloco a bloco pelo plugin. Um bloco = tudo entre dois `---`. A identificação do tipo de slide é feita pelo conteúdo do bloco, não por marcações externas.

---

### Tipos de Bloco — Regras de Identificação

| Tipo | Como escrever | Como o plugin identifica | Efeito no render |
|---|---|---|---|
| **Manchete** | `# Título` + texto(s) abaixo no mesmo bloco | Linha `#` **com** conteúdo adicional no bloco | Título TITLE_LG (ouro) + subtítulo/corpo abaixo |
| **O Grito** | `# Aforismo` — **nada mais** no bloco | Linha `#` **sem** conteúdo adicional — bloco contém só o `#` | Slide inteiro = aforismo centralizado, espaço vazio ao redor |
| **Immersive Reader** | Texto puro sem `#`, **≥ 20 palavras** | Sem `#`, word count ≥ 20 | Texto corrido, tipografia aumentada, sem título — máxima imersão |
| **Corpo** | Texto puro sem `#`, **< 20 palavras** | Sem `#`, word count < 20 | Texto curto centralizado no frame |
| **Corte** | `---` em linha isolada | Linha exatamente `---` | Delimita fim de um slide, início do próximo |

> **A diferença crítica Manchete ↔ O Grito não é o tamanho do título — é a presença ou ausência de texto abaixo do `#` no mesmo bloco.**

---

### Anatomia dos Blocos

**Manchete — Slide 1 (Abertura canônica):**
```
# Título que desafia crença ou promete transformação
Subtítulo que aprofunda o paradoxo ou ancora a promessa.
```
→ Plugin: título TITLE_LG (72px, ouro) + linha abaixo como SUBTITLE (32px, TXT_MD).

**Manchete — Slides interiores:**
```
# Argumento-título
Parágrafo de corpo que desenvolve o argumento.

Segundo parágrafo se necessário.
```
→ Plugin: título TITLE_LG + linhas seguintes como BODY (26px, TXT_MD).

**O Grito:**
```
# Uma frase que não precisa de mais nada.
```
→ Plugin: aforismo centralizado, TITLE_LG, slide vazio ao redor. Zero corpo.

**Immersive Reader:**
```
O argumento se desenvolve aqui em texto corrido, sem nenhuma linha de título acima. Densidade necessária para que o leitor sinta que está dentro do pensamento, não observando de fora. A ausência de título remove a distância entre o texto e quem lê.
```
→ Plugin: texto corrido, tipografia aumentada. Ativado automaticamente se o bloco tiver 20+ palavras sem `#`.

**Corpo:**
```
Consequência inevitável. Sem escudo.
```
→ Plugin: texto curto centralizado. Ativado se o bloco tiver <20 palavras sem `#`. Usar para pausas, transições, frases de impacto que não chegam ao nível de O Grito (sem `#`).

**Corte:**
```
---
```
→ Linha isolada. Sempre antes e depois de cada bloco. Nunca dentro de um bloco.

---

### Hierarquia Tipográfica dentro do Manchete

Dentro de um bloco Manchete, a Ponte Figma aplica tamanhos diferentes por posição de linha:

```
# Título principal           → TITLE_LG  (72px, GOLD) — linha com #
Subtítulo imediato           → SUBTITLE  (32px, TXT_MD) — 1ª linha após o #
Corpo do argumento           → BODY      (26px, TXT_MD) — linhas seguintes
Legenda curta se necessária  → CAPTION   (20px, TXT_LO) — última linha curta em layouts específicos
```

**Consequência prática:** a segunda linha de um Manchete não é tratada visualmente como corpo — tem tamanho maior (32px vs 26px) e serve de âncora entre o título e o argumento. Escrever o Subtítulo como se fosse Corpo compromete a hierarquia visual.

**Slide 1 (Abertura):** o Subtítulo é obrigatório. Sem ele, o slide 1 fica visualmente desequilibrado.
**Slides interiores:** Subtítulo é opcional — usar quando o título precisa de âncora antes do argumento se desenvolver.

---

### Inline — Formatação dentro do Texto

| Marcação | Uso | Comportamento no render |
|---|---|---|
| `*texto em itálico*` | Títulos de livros, conceitos-chave estrangeiros, ênfase pontual | Itálico nos layouts que suportam formatação de texto; asteriscos literais em layouts simples |
| Aspas `"texto"` | Citações, vozes do personagem, termos do vocabulário da persona | Renderizado como texto literal — usar para citações diretas e para simular monólogo interno |

> **Regra de uso:** `*italic*` é reservado para títulos de obras e conceitos filosóficos onde o itálico é convenção estabelecida. Não usar para ênfase emocional — para isso, a sintaxe é O Grito ou escolha vocabular, não formatação.

---

### Regra do Corte — Crítica

Todo slide começa e termina com `---`. O roteiro completo tem o padrão:

```
[bloco 1]
---
[bloco 2]
---
[bloco 3]
---
```

Nunca: dois blocos sem `---` entre eles. Nunca: `---` dentro de um bloco Immersive Reader para quebrar parágrafos (isso criaria um novo slide).

Para separar parágrafos dentro de um Immersive Reader: usar linha em branco, não `---`.

---

## Número de Slides — Decisão pela Narrativa

**O número de slides não é fixo.** O template de cada exercício em `exercicios.md` tem 10 atos como referência máxima. A narrativa decide quantos são necessários.

| Número de slides | Quando usar |
|---|---|
| **6 slides** | Argumento simples, aforismo expandido, insumo curto (tweet, citação breve), urgência de janela (conteúdo imediato) |
| **7–8 slides** | Argumento com 1–2 exemplos, narrativa com uma virada, análise de dado ou evento |
| **9–10 slides** | Narrativa complexa, argumento com múltiplas camadas, Chria ou Fábula com desenvolvimento moral denso |

**Regra:** ao selecionar o exercício, decidir o número de slides **antes** de escrever. Registrar na nota técnica. Se o usuário especificar um número, respeitar. Se não especificar, decidir pela natureza do insumo e registrar o porquê.

---

## Estrutura dos Atos — Pontos Inegociáveis e Corpo Variável

| Posição | Função | Tom | Obrigatório |
|---|---|---|---|
| **Slide 1** | **Abertura** — Título + Subtítulo que desafiam crença ou prometem transformação | Provocativo | ✅ sempre |
| **Slide 2** | **A Ponte** — Contextualização que abre lacuna de informação (Information Gap) | Intrigante | ✅ sempre |
| **Slides 3–(N-1)** | **O Corpo** — Estrutura retórica do exercício. Alternar ritmo obrigatoriamente | Denso / variado | ✅ mín. 3 |
| **Slide N (último)** | **Fechamento** — Conclusão moral ou prática + CTA | Resolutivo | ✅ sempre |

**Lei do Ritmo:** nunca três slides do mesmo tipo seguidos. Alternar: Manchete forte → dois slides Immersive Reader → O Grito → volta ao corpo. Funciona em 6 ou em 10 — o princípio não muda, o número de repetições sim.

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
Absorver o insumo bruto. Identificar: essência, conflito central, argumento ou imagem mais forte. Avaliar a densidade: o argumento precisa de 6, 8 ou 10 slides?

### Passo 2 — Calibração Copy 3×5 (OBRIGATÓRIO antes de escrever)

Antes de escolher o exercício, calibrar dois parâmetros do `copy-3x5.md`:

**N-level:** em qual nível de consciência está o público para ESTE carrossel?

| N-level | Estado | Proporção indicada |
|---|---|---|
| N1–N2 | Não conhece o problema | C1 alto (60%+), C2 médio, C3 mínimo |
| N2–N3 | Conhece o problema | C1 médio, C2 forte, C3 leve |
| N3–N4 | Conhece a solução | C1 médio, C2 médio, C3 crescente |
| N4–N5 | Conhece o produto | C1 baixo, C2 baixo, C3 dominante |

**Proporção C1/C2/C3 nos slides:** distribuir o peso de cada camada slide a slide — não uniformemente, mas com pico nos slides que a proporção do N-level indica.

Registrar N-level e proporção na nota técnica.

### Passo 3 — Seleção, Consulta e Decisão de Slides
1. Identificar o exercício Progymnasmata (a partir do diagnóstico do insumo)
2. Consultar `exercicios.md` → seção do exercício → template dos atos
3. **Decidir o número de slides** (6–10) com base na tabela acima e registrar na nota técnica
4. Mapear quais atos do template serão usados, comprimidos ou fundidos

### Passo 4 — Composição
- Escrever slide por slide seguindo o template adaptado ao número de slides decidido
- **Aplicar a sintaxe Chavossel v22 explicitamente em cada slide** — sem abreviações, sem `[...]`
- Respeitar a hierarquia tipográfica Título → Subtítulo → Corpo dentro dos Manchetes
- Distribuir C1/C2/C3 conforme o N-level calibrado no Passo 2
- Manter tom autoral, denso, provocativo
- Não simplificar. Não usar linguagem de coach motivacional.

### Passo 5 — Revisão de Ritmo e Sintaxe
- [ ] O slide 1 desafia uma crença ou promete transformação real?
- [ ] O slide 2 abre lacuna de informação genuína?
- [ ] O ritmo alterna entre os tipos de slide?
- [ ] O fechamento entrega a conclusão prometida na abertura?
- [ ] **Toda sintaxe `#` e `---` está correta e explícita?**
- [ ] **Nenhum slide sem separador `---` antes e depois?**
- [ ] **O número de slides está declarado na nota técnica?**
- [ ] O output está limpo — sem comentários, sem "Slide X:", sem placeholders?

---

## Formato de Output

O output final deve ser **exclusivamente o roteiro formatado completo**, pronto para copiar e colar no plugin Chavossel.

**Regras inegociáveis de formato:**
- Sem comentários entre slides
- Sem marcadores "Slide 1:", "Manchete:", "Imagem sugerida:", etc.
- Sem `[...]` ou qualquer placeholder — o roteiro é entregue completo, do slide 1 ao último
- Cada slide separado por `---` em linha isolada
- Manchetes com `#` no início da linha (sem espaço antes)
- Immersive Reader: texto puro, sem `#`, com mais de 20 palavras
- O Grito: `#` + frase curta + slide seguinte vazio (só `---`)

Após o roteiro, fornecer a **nota técnica completa**:

```
DIAGNÓSTICO:
Exercício: [nome] — [por que este exercício para este insumo]
N-level: [N1–N2 / N2–N3 / N3–N4 / N4–N5] — [estado do público para este carrossel]
Proporção C1/C2/C3: [ex: C1:55% | C2:35% | C3:10%] — [onde cada camada domina nos slides]
Slides: [número] — [justificativa: por que N slides e não mais ou menos]

RITMO:
[sequência de tipos — ex: Manchete → Immersive → Grito → Immersive → Grito → Immersive → Manchete+CTA]

INTENÇÃO:
Efeito retórico: [o que o carrossel instala no leitor ao chegar no último slide]

CALIBRAÇÃO DE ATIVOS:
Ativo primário: [Autoridade | Confiança | Status | Afinidade]
Slide de ativação: [ex: S1: Af | S3–S5: Au | S6: Co | S7: Af + CTA]
Custo percebido: [alto | médio | baixo — o que torna este carrossel custoso de ignorar]
Pseudo-autenticidade: [não | sim — onde]
```

### Exemplo de Output Completo (7 slides — Exercício: Máxima)

```
# Você não tem problema de audiência. Tem problema de argumento.

A maioria muda de plataforma quando o que precisa mudar é a tese.

---

Existe uma diferença entre falar muito e ter algo a dizer. O mercado digital confundiu os dois por tempo demais. Quando o alcance cai, a resposta padrão é postar mais, testar outro formato, mudar o horário. Nenhuma dessas respostas toca o problema real.

---

# O algoritmo não distribui conteúdo. Distribui atenção que já foi conquistada.

---

Atenção conquistada não é produto de frequência — é produto de precisão. Quem tem um argumento claro sobre um problema específico de uma pessoa específica não precisa de volume para ser encontrado. Precisa de clareza suficiente para que quem tem esse problema reconheça a solução quando a vê.

---

# O que você chama de nicho é o tamanho do problema que você consegue nomear com exatidão.

---

O especialista que amplia o nicho para alcançar mais pessoas geralmente alcança menos. Porque a audiência não cresce com a generalização — ela encolhe. O argumento que serve a todos não serve a ninguém com força suficiente para gerar ação. Especificidade não é limitação. É o único caminho para relevância duradoura.

---

# Qual é o problema que só você nomeia com essa exatidão?

Se você não consegue responder em uma frase — esse é o problema real.

Salva esse slide. Próxima semana continuo com o que fazer quando você encontrar a resposta.

---

DIAGNÓSTICO:
Exercício: Máxima/Gnome — o insumo é uma afirmação que inverte uma crença comum ("problema de audiência" → "problema de argumento"). A Máxima expande o paradoxo em camadas até torná-lo inescapável.
N-level: N2–N3 — público consciente do problema ("meu alcance caiu") mas não da causa real (argumento fraco, não algoritmo).
Proporção C1/C2/C3: C1:50% | C2:40% | C3:10% — maioria dos slides ativa identidade e dor (C1/C2); nenhum pitch (C3 mínimo).
Slides: 7 — insumo de média densidade; 10 inflaria; 6 não completaria o arco de inversão necessário.

RITMO:
Manchete → Immersive → Grito → Immersive → Grito → Immersive → Manchete+CTA

INTENÇÃO:
Efeito retórico: o leitor chega ao slide 7 incapaz de não fazer a pergunta a si mesmo — o carrossel instalou a dúvida sem parecer didático.

CALIBRAÇÃO DE ATIVOS:
Ativo primário: Autoridade (slides 3–6) com Afinidade na abertura e fechamento
Slide de ativação: S1: Af | S3+S5: Au | S6: Co | S7: Af + CTA
Custo percebido: alto — requer que o leitor questione uma crença estabelecida sobre o próprio trabalho
Pseudo-autenticidade: não — argumento abstrato sem narrativa pessoal
```

---

## Regras

1. Nunca criar carrossel sem selecionar o exercício Progymnasmata primeiro
2. **Decidir o número de slides (6–10) antes de escrever** — registrar na nota técnica com justificativa
3. Nunca dois slides consecutivos sem `---` em linha isolada entre eles
4. O slide 1 é inegociável — deve provocar ou prometer algo real
5. O slide 2 é inegociável — deve abrir lacuna de informação
6. Lei do Ritmo: alternar tipos de slide — nunca três iguais seguidos
7. Output final = roteiro **completo e sem placeholders** (nenhum `[...]`) + nota técnica com número de slides declarado
8. Nunca usar "Slide X:", "Manchete:", "Imagem:" ou qualquer anotação de estrutura no corpo do output

---

## Referências Cruzadas

- `exercicios.md` — templates dos 14 exercícios com estrutura slide a slide
- `exemplos.md` — exemplos gold standard de roteiros completos
- `copy-3x5.md` — calibração de qual camada cada slide serve (C1/C2/C3)
- `metodo-carga.md` — calibração de intensidade emocional e intelectual
- `ativos-de-percepcao/SKILL.md` — ativo primário por carrossel + sequência slide a slide; Slide 1 abre com Afinidade, slides centrais constroem Autoridade, Slide 8–9 ativa Confiança, Slide 10 fecha com Status ou Afinidade dependendo do objetivo
- `progymnasmata-video-map.md` — a mesma estrutura exercício → adaptação para vídeo (Chavideo)
- `01-PLUGINS/05-iluminista/skills/ponte-figma/SKILL.md` — **DOWNSTREAM** — renderização do roteiro v22 em arquivo Figma (30 layouts, tokens RGB, Nano Banana, JS helpers)
