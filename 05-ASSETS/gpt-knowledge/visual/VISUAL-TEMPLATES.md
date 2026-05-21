# Visual Carrossel — Templates e Engenharia de Prompts

Este arquivo define os templates visuais disponíveis e os prompts de geração de imagem correspondentes por tipo de slide (v22) e por template escolhido.

**Modelo de imagem:** gpt-image-2 (via ChatGPT Image Generation)
**Formato:** 1:1 (1080×1080px), Instagram-ready
**Instrução global em todo prompt:** "Sharp text rendering. Crisp edges. No blur. Legible at small size."

---

## Os 3 Templates

### TEMPLATE 1 — DARK EDITORIAL
*Identidade:* Autoridade silenciosa. Premium sem ostentação. Leitura de revista técnica às 2h da manhã.

| Elemento | Valor |
|---|---|
| Fundo | Preto sólido #0a0a0a |
| Texto primário | Branco #ffffff |
| Texto secundário | Cinza claro #a0a0a0 |
| Tipografia (descrever no prompt) | Sans-serif bold para título, sans-serif regular para corpo |
| Elementos decorativos | Nenhum |
| Sensação visual | Ultra-minimal, densidade tipográfica, peso editorial |

### TEMPLATE 2 — CLEAN LIGHT
*Identidade:* Clareza intelectual. Credibilidade acadêmica com leveza de design moderno.

| Elemento | Valor |
|---|---|
| Fundo | Off-white #f5f5f0 |
| Texto primário | Preto profundo #0a0a0a |
| Texto secundário | Cinza médio #555555 |
| Tipografia (descrever no prompt) | Serif para título, sans-serif para corpo |
| Elementos decorativos | Linha fina sutil |
| Sensação visual | Literário, limpo, confiável |

### TEMPLATE 3 — BOLD CONTRAST
*Identidade:* Impacto imediato. Ousadia controlada. Para quando o conteúdo precisa de presença física.

| Elemento | Valor |
|---|---|
| Fundo | Azul escuro profundo #0d1b2a |
| Texto primário | Branco #ffffff |
| Texto secundário | Azul claro #7aa7cc |
| Tipografia (descrever no prompt) | Sans-serif bold condensed para título, sans-serif para corpo |
| Elementos decorativos | Acento de linha ou bloco de cor no título |
| Sensação visual | Dinâmico, seguro, presença de marca |

---

## Tipos de Slide v22 → Tratamento Visual

### MANCHETE (`# Título longo + subtítulo abaixo`)
Título domina o slide. Subtítulo menor abaixo. Muito espaço negativo.

**Proporção:** Título = 60% do slide. Subtítulo = 20%. Espaço = 20%.

### O GRITO (`# Frase curta` — standalone)
Frase única centralizada. Tamanho extremo. Nada mais no slide.

**Proporção:** Texto ocupa 50–70% do frame. Centralizado. Fundo limpo.

### IMMERSIVE READER (bloco de texto >20 palavras sem `#`)
Slide dominado por texto editorial. Múltiplos parágrafos. Leitura densa mas respirável.

**Proporção:** Texto ocupa 80% do slide. Margens generosas. Tamanho de leitura.

### CORPO (texto normal <20 palavras ou parágrafo médio)
Layout equilibrado. Um ou dois parágrafos. Espaço para respirar.

**Proporção:** Texto ocupa 60–70% do slide. Centralizado ou alinhado à esquerda.

---

## Prompts por Tipo × Template

### DARK EDITORIAL

**Manchete:**
```
Instagram carousel slide, 1:1 square format. Solid black background #0a0a0a. Large bold white sans-serif headline reading "[TÍTULO]" positioned in upper portion, taking up 40% of slide height. Below it, smaller gray sans-serif text reading "[SUBTÍTULO]". Generous negative space below. No decorative elements. Ultra-minimal premium editorial design. Sharp text rendering. Crisp edges. High contrast typography.
```

**O Grito:**
```
Instagram carousel slide, 1:1 square format. Solid black background #0a0a0a. Single white bold sans-serif phrase reading "[TEXTO]" perfectly centered both horizontally and vertically, font size large enough to take 55-65% of the frame width. Nothing else. Maximum typographic impact. Ultra-minimal. Sharp text rendering, crisp edges.
```

**Immersive Reader:**
```
Instagram carousel slide, 1:1 square format. Solid black background #0a0a0a. Dense white body text filling the slide in 3-4 short paragraphs, regular sans-serif, small readable size with generous line spacing. Text reads: "[TEXTO COMPLETO]". Editorial literary aesthetic, like a page from a premium magazine. Sharp text rendering, dense text rendering enabled, legible at thumbnail size.
```

**Corpo:**
```
Instagram carousel slide, 1:1 square format. Solid black background #0a0a0a. White regular sans-serif body text, 2-3 sentences, centered or left-aligned with generous margins. Text reads: "[TEXTO]". Breathing room above and below. Minimal premium design. Sharp text rendering.
```

---

### CLEAN LIGHT

**Manchete:**
```
Instagram carousel slide, 1:1 square format. Off-white background #f5f5f0. Large bold dark serif headline reading "[TÍTULO]" in near-black #0a0a0a, positioned upper portion. Below it, smaller medium-gray sans-serif text reading "[SUBTÍTULO]". A thin subtle horizontal line separating title from subtitle. Clean, literary, academic aesthetic. Sharp text rendering.
```

**O Grito:**
```
Instagram carousel slide, 1:1 square format. Off-white background #f5f5f0. Single large bold near-black serif text reading "[TEXTO]" perfectly centered, taking up 50-60% of frame. Clean whitespace all around. Literary typographic impact. Sharp text rendering, crisp edges.
```

**Immersive Reader:**
```
Instagram carousel slide, 1:1 square format. Off-white background #f5f5f0. Dense near-black body text, 3-4 paragraphs, regular serif or sans-serif, small readable size with generous line height. Text reads: "[TEXTO COMPLETO]". Magazine page aesthetic, literary and credible. Sharp text rendering, dense text rendering, legible at small size.
```

**Corpo:**
```
Instagram carousel slide, 1:1 square format. Off-white background #f5f5f0. Near-black regular sans-serif body text, 2-3 sentences, generous margins. Text reads: "[TEXTO]". Clean, readable, trustworthy. A thin subtle decorative line as bottom accent. Sharp text rendering.
```

---

### BOLD CONTRAST

**Manchete:**
```
Instagram carousel slide, 1:1 square format. Deep navy background #0d1b2a. Large bold white condensed sans-serif headline reading "[TÍTULO]" upper portion. Below it, light blue smaller text #7aa7cc reading "[SUBTÍTULO]". A bold accent color block or underline under the headline. Dynamic, impactful, brand presence. Sharp text rendering.
```

**O Grito:**
```
Instagram carousel slide, 1:1 square format. Deep navy background #0d1b2a. Single large bold white sans-serif condensed text reading "[TEXTO]" centered, taking 60% of frame width. Optional: thin light blue horizontal line above and below the text. Bold and commanding. Sharp text rendering, crisp edges.
```

**Immersive Reader:**
```
Instagram carousel slide, 1:1 square format. Deep navy background #0d1b2a. Dense white body text, 3-4 paragraphs, regular sans-serif, readable size with generous line spacing. Text reads: "[TEXTO COMPLETO]". Light blue accent #7aa7cc for first line or pull quote emphasis. Sharp text rendering, dense text rendering.
```

**Corpo:**
```
Instagram carousel slide, 1:1 square format. Deep navy background #0d1b2a. White regular sans-serif body text, 2-3 sentences, generous margins. Text reads: "[TEXTO]". Light blue subtle accent element. Professional, brand-forward. Sharp text rendering.
```

---

## Regras de Geração

1. **Sempre incluir "[SHARP TEXT RENDERING]"** em todos os prompts — o modelo prioriza legibilidade
2. **O Grito = sem texto de apoio** — apenas a frase, nada mais no slide
3. **Immersive Reader = texto completo no prompt** — o modelo deve renderizar todo o texto do slide
4. **Manchete = apenas título + subtítulo** — sem corpo de texto
5. **Gerar slide por slide** — 1 imagem por vez em sequência de 1 a 10
6. **Se texto muito longo para Immersive Reader** — usar primeiros 40 palavras + "..." e indicar ao usuário que o texto completo vai abaixo da imagem no post

---

## Diagnóstico v22 → Tipo de Slide

Para cada bloco separado por `---` no input v22, diagnosticar:

| Padrão no texto | Tipo de slide | Prompt a usar |
|---|---|---|
| Começa com `#` + texto abaixo | Manchete | Manchete prompt |
| Começa com `#` + nada depois ou linha vazia | O Grito | O Grito prompt |
| Texto puro >20 palavras sem `#` | Immersive Reader | Immersive prompt |
| Texto puro <20 palavras sem `#` | Corpo | Corpo prompt |
