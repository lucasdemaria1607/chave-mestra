---
name: chavideo-headline-generator
description: Generates 30 varied, high-impact hooks/aberturas for short-form video content (Reels, Shorts, TikTok) based on Progymnasmata exercise type and specialist profile. Use when user requests hooks, aberturas, or opening lines for videos. Generates 30 openings with varied Progymnasmata structures and cinematographic technique annotations.
---

# Chavideo Headline Generator

Generates 30 complete, specific, high-impact video opening hooks based on Progymnasmata exercise types and the 10 cinematic opening patterns.

**Principle:** The hook is where the scroll stops or continues. Everything else is irrelevant if the first 3 seconds fail.

---

## When to Use

Trigger when:
- User requests hooks, ganchos, aberturas for video
- User says "gere hooks para [tema]" or "quero aberturas de video"
- Before script creation (hooks feed into chavideo-script-creator)
- User wants to test which opening angle has most potential

---

## Specialist Profile Collection (MANDATORY FIRST STEP)

Before generating ANY hooks, collect:

1. **Nicho/Tema:** What is the content about?
2. **Público-alvo:** Who is the lead? What is their Inferno/Purgatório/Paraíso?
3. **Nível de consciência predominante:** N1 (unaware) → N5 (most aware)
4. **Tom da marca:** Provocador / Intelectual / Empático / Irreverente / Sábio
5. **Objetivo do vídeo:** Atrair novos / Educar seguidores / Converter / Criar pertencimento

If insufficient info provided, ask for the above before generating.

---

## GATEKEEPING — Pré-Requisitos

Antes de gerar headlines, verificar no **Dossiê CM** (`05-ASSETS/dossies/[projeto].md`):

| Pré-requisito | Seção do Dossiê | Se não existir |
|---------------|-----------------|----------------|
| Persona mapeada | §2 > Persona | ⚠️ Sem persona, as headlines não calibram emoção, dor nem nível de consciência. Alertar: "Headlines genéricas sem Alma da Persona. Recomendo Forja da Persona antes." Pode operar com público descrito na conversa (item 2 do Specialist Profile acima). |
| DNA de Marca | §1 > DNA de Marca | ⚡ Desejável para calibrar tom (item 4 do Specialist Profile). Não bloqueia. |

**Ao concluir:** registrar no §4 do Dossiê (Inventário de Outputs > Headlines). Sinalizar que headlines estão prontas para Script Creator / Chavideo / Chavossel.

---

## Generation Logic

### The 14 Progymnasmata × Hook Types

Each hook implicitly signals which type of video it is. Choose varied structures across the 30 outputs:

| Progymnasmata | Hook Signal |
|---|---|
| Fabula | Abertura de história/parábola |
| Narratio | "Quando eu estava em [situação]..." |
| Chreia | Citação + expansão imediata |
| Sententia | Máxima contraintuitiva direta |
| Refutatio | Negação de crença comum |
| Confirmatio | Afirmação polêmica com razão |
| Locus Communis | Amplificação emocional direta |
| Encomium | Elogio que cria expectativa |
| Vituperatio | Censura de inimigo simbólico |
| Comparatio | Contraste X vs Y na abertura |
| Impersonatio | Voz de outra perspectiva |
| Descriptio | Imersão sensorial imediata |
| Thesis | Questão abstrata polarizante |
| Propositio Legis | Regra/protocolo defendido ou atacado |

### The 10 Cinematic Opening Patterns

Vary across the 30 hooks:
1. Afirmação Contraintuitiva
2. Revelação de Existência
3. Pergunta Dramática Direta
4. Cena Imersiva (Descriptio)
5. Afirmação de Autoridade Polêmica
6. Número + Especificidade
7. Voz Diferente (Impersonatio)
8. Negação Amplificada
9. Foreshadowing Direto
10. História com Cut Dramático

---

## Generation Rules

**MUST:**
- ✅ Generate exactly 30 hooks
- ✅ Vary Progymnasmata types (no more than 3 of same type)
- ✅ Vary cinematic patterns (all 10 patterns represented at least once)
- ✅ Each hook: specific, concrete, never generic
- ✅ Annotate each with: [Exercício Progymnasmata] + [Padrão Cinematográfico] + [Gatilho]
- ✅ Hooks must work for SPOKEN delivery (read aloud, natural rhythm)
- ✅ Every 5 hooks: vary tone (provocador / empático / intelectual / direto / misterioso)

**MUST NOT:**
- ❌ Generic hooks ("Você sabia que...?" sem especificidade)
- ❌ Same structure repeated more than 3 times
- ❌ Coach clichês ("Quer mudar sua vida?", "Você merece mais")
- ❌ Hooks longer than 2 sentences (max 25 words)
- ❌ Hooks that reveal the full content immediately (kills curiosity)

---

## Output Format

```markdown
# HOOKS CHAVIDEO — [ESPECIALISTA] — [TEMA]

**Perfil:** [Nicho] | [Público] | [Tom] | [Objetivo]

---

## GRUPO 1 — INTRIGA E MISTÉRIO (Hooks 1-6)

**Hook 1**
"[Texto do hook]"
*[Exercício Progymnasmata] + [Padrão Cinematográfico] + Gatilho: [Gatilho principal]*

**Hook 2**
"[Texto do hook]"
*[Exercício] + [Padrão] + Gatilho: [X]*

[... até Hook 6]

---

## GRUPO 2 — TENSÃO E CONTRASTE (Hooks 7-12)

[Mesmo formato]

---

## GRUPO 3 — AUTORIDADE E CRENÇA (Hooks 13-18)

[Mesmo formato]

---

## GRUPO 4 — IDENTIDADE E PERTENCIMENTO (Hooks 19-24)

[Mesmo formato]

---

## GRUPO 5 — IMPERSONATIO E MISDIRECTION (Hooks 25-30)

[Mesmo formato]

---

## RECOMENDAÇÃO ESTRATÉGICA

**Top 5 para testar primeiro:** [Listar 5 hooks com maior potencial para o perfil dado]
**Por quê:** [2-3 linhas de justificativa estratégica]
```

---

## Quality Check Before Output

For each hook, verify internally:
- [ ] Specific enough? (Evita generalidade)
- [ ] Creates curiosity without confusing? (Mistério ≠ Confusão)
- [ ] Sounds natural spoken aloud?
- [ ] Stops the scroll in first 3 seconds?
- [ ] Different structure from adjacent hooks?
- [ ] Connects to the Alma da Persona (Inferno/Purgatório/Paraíso)?
