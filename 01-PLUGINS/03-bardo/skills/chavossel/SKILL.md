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
   - Adicionar seção com diagnóstico Chavossel (exercício, N-level, proporção C1/C2/C3) + roteiro dos 10 slides com sintaxe v22 + nota técnica
   → Ver `publicador-visual/SKILL.md` para o fluxo completo.

---

## Sintaxe Chavossel v22 (OBRIGATÓRIA)

| Ferramenta | Sintaxe | Efeito Visual |
|---|---|---|
| **Manchete** | `# Frase longa de título` | Título de impacto no topo do slide |
| **Corpo** | Texto normal (parágrafos) | Leitura narrativa padrão |
| **Immersive Reader** | Texto puro >20 palavras, sem título | Remove distrações, foco tipográfico — para argumentos densos |
| **O Grito** | `# Frase curta <20 palavras` + slide vazio | Aforismo, plot twist, ruptura |
| **Corte** | `---` em linha isolada | Separador de slides |

**Regra crítica:** todo slide é separado por `---`. Nunca escrever dois slides sem o corte entre eles.

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

### Passo 2 — Seleção, Consulta e Decisão de Slides
1. Identificar o exercício Progymnasmata
2. Consultar `exercicios.md` → seção do exercício → template dos atos
3. **Decidir o número de slides** (6–10) com base na tabela acima e registrar na nota técnica
4. Mapear quais atos do template serão usados, comprimidos ou fundidos

### Passo 3 — Composição
- Escrever slide por slide seguindo o template adaptado ao número de slides decidido
- **Aplicar a sintaxe Chavossel v22 explicitamente em cada slide** — sem abreviações, sem `[...]`
- Manter tom autoral, denso, provocativo
- Não simplificar. Não usar linguagem de coach motivacional.

### Passo 4 — Revisão de Ritmo e Sintaxe
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

Após o roteiro, fornecer a **nota técnica** com:
1. Exercício escolhido e por que
2. Número de slides e lógica de compressão/expansão usada
3. Padrão de ritmo aplicado (sequência de tipos de slide)
4. Efeito retórico pretendido no slide final

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

NOTA TÉCNICA:
Exercício: Máxima/Gnome — o insumo é uma afirmação que inverte uma crença comum ("problema de audiência" → "problema de argumento"). A Máxima expande o paradoxo em camadas até torná-lo inescapável.
Slides: 7 — insumo de média densidade; 10 inflaria; 6 não completaria o arco de inversão necessário.
Ritmo: Manchete → Immersive → Grito → Immersive → Grito → Immersive → Fechamento (Manchete+CTA)
Efeito retórico: o leitor chega ao slide 7 incapaz de não fazer a pergunta a si mesmo — o carrossel instalou a dúvida sem parecer didático.

CALIBRAÇÃO DE ATIVOS:
Ativo primário: Autoridade (slides 3–6) com Afinidade na abertura e fechamento
Slide de ativação: S1: Afinidade | S3+S5: Autoridade | S6: Confiança | S7: Afinidade + CTA
Custo percebido: alto — requer que o leitor questione uma crença estabelecida sobre o próprio trabalho
Pseudo-autenticidade: não aplicável — argumento abstrato sem narrativa pessoal
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
