---
name: chavossel
description: Usar quando o usuário pedir "carrossel", "chavossel", "cria um carrossel", "10 slides", "ensaio visual", "carrossel editorial", "carrossel com Progymnasmata", ou qualquer geração de roteiro de carrossel de 10 slides com retórica clássica.
version: 1.0
layer: Camada 3 — Criação
role: Geração de carrosséis editoriais de 10 slides via 14 exercícios Progymnasmata + sintaxe Chavossel v22
inputs: tema/insumo bruto, exercício Progymnasmata (opcional)
outputs: roteiro de carrossel de 10 slides formatado em sintaxe Chavossel v22, pronto para o plugin
feeds-into: Chavideo (versão vídeo do mesmo argumento), Mapa de Campanha (peças de conteúdo orgânico)
---

# Chavossel — Motor de Ensaios Visuais com Progymnasmata

O Chavossel não gera carrosséis. Gera ensaios visuais. A missão é adaptar a densidade de teses filosóficas, narrativas complexas e retórica clássica para 10 quadros sem perder profundidade.

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

## Estrutura dos 10 Atos (Invariável)

| Slide | Função | Tom |
|---|---|---|
| 1 | **Abertura** — Título + Subtítulo que desafiam crença ou prometem transformação | Provocativo |
| 2 | **A Ponte** — Contextualização que abre lacuna de informação (Information Gap) | Intrigante |
| 3–9 | **O Corpo** — Estrutura retórica do exercício escolhido. Alternar ritmo obrigatoriamente | Denso / variado |
| 10 | **Fechamento** — Conclusão moral ou prática + CTA | Resolutivo |

**Lei do Ritmo:** nunca três slides do mesmo tipo seguidos. Alternar: Manchete forte → dois slides Immersive Reader → O Grito → volta ao corpo.

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
Absorver o insumo bruto. Identificar: essência, conflito central, argumento ou imagem mais forte.

### Passo 2 — Seleção e Consulta
Identificar o exercício. Consultar `exercicios.md` → seção do exercício escolhido → usar o template dos 10 atos específico daquele exercício.

### Passo 3 — Composição
- Escrever slide por slide seguindo o template do exercício
- Aplicar a sintaxe Chavossel v22 corretamente em cada slide
- Manter tom autoral, denso, provocativo
- Não simplificar. Não usar linguagem de coach motivacional.

### Passo 4 — Revisão de Ritmo
- [ ] O slide 1 desafia uma crença ou promete transformação real?
- [ ] O slide 2 abre lacuna de informação genuína?
- [ ] O ritmo alterna entre os tipos de slide?
- [ ] O fechamento entrega a conclusão prometida na abertura?
- [ ] Toda sintaxe `#` e `---` está correta?
- [ ] Nenhum slide sem separador `---`?

---

## Formato de Output

O output final deve ser **exclusivamente o roteiro formatado**, pronto para copiar e colar no plugin Chavossel.

**Sem comentários extras. Sem marcações de blocos visíveis. Sem "Slide 1:", "Manchete:", etc. — apenas o texto com a sintaxe limpa.**

Após o roteiro, fornecer uma **nota técnica de 3 linhas** com:
1. Exercício escolhido e por que
2. Lógica de ritmo aplicada
3. Efeito retórico pretendido

### Exemplo de Formato

```
# Título que desafia crença

Subtítulo que aprofunda a promessa ou o conflito.

---

A contextualização que abre o gap de informação. Por que isso importa agora? O que muda quando você entende isso?

---

# O Grito que quebra ritmo

---

O argumento principal se desenvolve aqui. Denso o suficiente para ser respeitado. Leve o suficiente para ser absorvido.

---

[continua pelos 10 slides...]

---

NOTA TÉCNICA:
Exercício: [nome] — [justificativa de seleção]
Ritmo: [padrão aplicado — ex: Manchete → 2x Immersive → Grito → 2x Immersive → Grito → Immersive → Fechamento]
Efeito retórico: [o que este carrossel deve fazer ao público ao chegar no slide 10]

CALIBRAÇÃO DE ATIVOS:
Ativo primário: [Autoridade | Confiança | Status | Afinidade]
Slide de ativação por ativo: [Slide 1: Af | Slides 3–7: Au | Slide 8: Co | Slide 9–10: S]
Custo percebido: [alto | médio | baixo — o que torna este carrossel custoso de ignorar]
Pseudo-autenticidade: [não | sim — onde]
```

---

## Regras

1. Nunca criar carrossel sem selecionar o exercício Progymnasmata primeiro
2. Nunca dois slides consecutivos sem `---` entre eles
3. O slide 1 é inegociável — deve provocar ou prometer algo real
4. O slide 2 é inegociável — deve abrir lacuna de informação
5. Lei do Ritmo: alternar tipos de slide — nunca três iguais seguidos
6. Output final = apenas roteiro limpo + nota técnica de 3 linhas

---

## Referências Cruzadas

- `exercicios.md` — templates dos 14 exercícios com estrutura slide a slide
- `exemplos.md` — exemplos gold standard de roteiros completos
- `copy-3x5.md` — calibração de qual camada cada slide serve (C1/C2/C3)
- `metodo-carga.md` — calibração de intensidade emocional e intelectual
- `ativos-de-percepcao/SKILL.md` — ativo primário por carrossel + sequência slide a slide; Slide 1 abre com Afinidade, slides centrais constroem Autoridade, Slide 8–9 ativa Confiança, Slide 10 fecha com Status ou Afinidade dependendo do objetivo
- `progymnasmata-video-map.md` — a mesma estrutura exercício → adaptação para vídeo (Chavideo)
