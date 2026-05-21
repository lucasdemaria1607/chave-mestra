# Visual Carrossel — Sistema de Geração de Imagens

Este arquivo define o design system completo do Chavossel, o mapeamento de slides v22 para layouts, e os prompts DALL-E calibrados para reproduzir cada layout.

**Referência visual primária:** os cards PNG dos layouts estão disponíveis no Knowledge deste agente. Antes de gerar cada imagem, consultar o PNG correspondente ao layout escolhido — o card mostra a estrutura exata de proporções, zonas de texto e hierarquia visual que o prompt DALL-E deve reproduzir.

---

## Design Tokens (valores exatos — usar em todos os prompts)

### Paleta de Cores
```
Fundo principal (Void):      #0a0a08
Fundo card (Void-C):         #0e0e0c
Fundo superfície (Void-S):   #141412
Fundo elevado (Void-R):      #1c1c18
Ouro (acento principal):     #d4af37
Ouro claro:                  #e8c84a
Ouro escuro:                 #8b6914
Texto alto contraste:        #f5f0e8
Texto médio:                 #b8b098
Texto baixo:                 #726a58
Texto fraco:                 #38362e
```

### Pares Tipográficos
```
Elegant:   Playfair Display (700/900) + Lato (400)
Modern:    Montserrat (900, letter-spacing: -1px) + Roboto (400)
Old Money: Cinzel (400-700) + EB Garamond (400)
Impact:    Anton (400) + Inter (400)
Aesthetic: Playfair Display Italic + Montserrat Light
Jornal:    Merriweather + Georgia
```

### Proporção
- Formato 4:5 (Instagram portrait): 1080×1350px
- Todo slide gerado nessa proporção

---

## Mapeamento v22 → Layout

| Tipo de slide v22 | Layouts recomendados | Quando usar |
|---|---|---|
| **Slide 1** (abertura, sempre Manchete) | COVER_CENTER, COVER_NATIVE | Slide de abertura obrigatoriamente |
| **Manchete** (`# título longo` + subtítulo) | COVER_TOP, COVER_BOTTOM, EDIT_BOT | Slides de título intermediários |
| **O Grito** (`# frase curta` isolado) | STORY_SHOUT, TWITTER | Ruptura de ritmo, aforismo, twist |
| **Immersive Reader** (texto puro >20 palavras) | EDIT_TXT, STORY_LEFT, STORY_RIGHT | Argumentos densos, corpo narrativo |
| **Corpo padrão** (texto <20 palavras) | STORY_HORIZ, HALF_H, STORY_MID_IMG | Pontos de transição, pausas |
| **Slide 10** (fechamento/CTA) | CTA_MINIMAL, CTA_NATIVE, CTA_CARD | Último slide sempre |

---

## Prompts DALL-E por Layout

**Instrução global** — incluir em TODOS os prompts:
> "Sharp text rendering. Crisp letterforms. No blur. Legible at thumbnail size. 4:5 portrait format 1080×1350."

---

### COVER_CENTER — Capa Centralizada

Estrutura: fundo sólido void, título grande no centro (43% do height), subtítulo abaixo (54%), linha decorativa fina ouro no rodapé (70%).

```
4:5 portrait Instagram carousel slide (1080×1350). Solid deep black background #0a0a08, no texture, no gradient. Centered composition: bold headline reading "[TÍTULO]" centered horizontally, positioned 43% from top, large weight, white text #f5f0e8, 64-72pt equivalent. Below it at 54% height, smaller text reading "[SUBTÍTULO]" centered, medium gray #b8b098, 22pt. At 70% height, a thin horizontal gold line #d4af37, 20% of slide width, centered, 1px. Ultra-minimal, nothing else. Premium dark editorial aesthetic. Sharp text rendering.
```

---

### COVER_NATIVE — Capa Nativa (com glow ouro sutil)

Estrutura: fundo void puro, glow radial ouro muito sutil no centro, título e subtítulo centralizados, ponto decorativo dourado.

```
4:5 portrait Instagram carousel slide. Deep black background #0a0a08 with an extremely subtle radial gold glow at center (rgba(212,175,55,0.07), barely visible). Centered headline reading "[TÍTULO]" at 43% height, white #f5f0e8, bold, 64pt. Subtitle reading "[SUBTÍTULO]" at 54%, gray #b8b098, 20pt. A thin gold horizontal accent line below at 65%, #d4af37, 20% width, centered. Minimal but slightly more atmospheric than pure black. Sharp text rendering.
```

---

### STORY_SHOUT — Grito

Estrutura: título enorme centralizado (37% height, fonte bem maior), subtítulo pequeno, faixa de foto escura no rodapé (30% height).

```
4:5 portrait Instagram carousel slide. Deep black background #0a0a08. Single large bold headline reading "[TEXTO DO GRITO]" centered at 37% height, white #f5f0e8, very large weight, 80-96pt equivalent, taking up 60% of slide width. Small subtitle reading "[SUBTÍTULO SE HOUVER]" below at 52%, gray #b8b098, 18pt. A dark photo-texture strip occupying the bottom 30% of the slide, darker than the background (#0e0e0c to #1c1c18 gradient, no actual photo). Maximum typographic impact. Sharp text rendering.
```

---

### TWITTER — Tweet Card

Estrutura: fundo void, card central escuro com borda sutil (80% largura, 32% height, centralizado em 34-60%), texto dentro do card.

```
4:5 portrait Instagram carousel slide. Deep black background #0a0a08. A rounded rectangle card in the center at 34% height, 80% width, 32% height, background #141412, border 1px solid rgba(212,175,55,0.15), border-radius 8px. Inside the card: bold text reading "[TEXTO]" centered at 41%, white #f5f0e8, 28pt. Below at 51%, smaller text in gray #b8b098, 18pt. Below at 59%, even smaller text #726a58, 14pt. Dark, social card aesthetic. Sharp text rendering.
```

---

### EDIT_TXT — Textão (Immersive Reader)

Estrutura: fundo void, título grande centralizado no meio (39%), subtítulo/corpo abaixo (55%), linha de texto adicional (63%). Layout de só texto, sem imagem.

```
4:5 portrait Instagram carousel slide. Deep black background #0a0a08. Large bold text reading "[PRIMEIRA LINHA / TÍTULO]" at 39% height, centered, white #f5f0e8, 64pt, taking up 80% of width. Below at 55%, medium text reading "[CORPO]" centered, gray #b8b098, 24pt. Below at 63%, smaller text reading "[LINHA ADICIONAL SE HOUVER]" centered, darker gray #726a58, 18pt. Pure text layout, no images. Editorial, dense, intellectual. Sharp text rendering.
```

---

### STORY_LEFT — Pilar Esquerda (Immersive Reader com foto)

Estrutura: 40% esquerda ocupada por coluna foto escura, texto à direita centralizado verticalmente.

```
4:5 portrait Instagram carousel slide. Left 40% of slide: dark textured column, deep dark gray #1c1c18, no real photo content, solid. Right 60%: deep black #0a0a08. On the right side at 40% height, bold text reading "[TÍTULO]" right-aligned with 5% margin, white #f5f0e8, 36pt, 42% width. Below at 51%, subtitle text, gray #b8b098, 22pt, same alignment. Below at 59%, smaller body text #726a58, 16pt. Editorial split layout. Sharp text rendering.
```

---

### STORY_RIGHT — Pilar Direita (espelhado)

Estrutura: 40% direita coluna escura, texto à esquerda.

```
4:5 portrait Instagram carousel slide. Right 40% of slide: dark textured column #1c1c18. Left 60%: deep black #0a0a08. On the left at 40% height, bold text reading "[TÍTULO]" left-aligned with 5% margin, white #f5f0e8, 36pt, 42% width. Below at 51%, subtitle #b8b098, 22pt. Below at 59%, body text #726a58, 16pt. Editorial split layout, mirrored. Sharp text rendering.
```

---

### STORY_HORIZ — Horizonte

Estrutura: banda fotográfica horizontal no centro (15-55% height), texto centralizado abaixo.

```
4:5 portrait Instagram carousel slide. Background #0a0a08. Horizontal dark band at 15-55% height, slightly lighter texture #1c1c18, 100% width. Below: large text reading "[TÍTULO]" at 78% height, centered, white #f5f0e8, 52pt. Subtitle at 86%, gray #b8b098, 22pt. Clean, architectural. Sharp text rendering.
```

---

### CTA_MINIMAL — CTA Mínimo

Estrutura: fundo void com glow ouro suave, ponto dourado canto superior esquerdo, título/subtítulo centralizados, linha ouro no rodapé.

```
4:5 portrait Instagram carousel slide. Background #0a0a08 with faint radial gold shimmer (rgba(212,175,55,0.04)). Top-left corner: small gold dot #d4af37, 8px circle, 22px from left, 18% from top. Centered headline reading "[TÍTULO CTA]" at 43% height, white #f5f0e8, bold, 52pt. Subtitle reading "[AÇÃO]" at 54%, gray #b8b098, 22pt. Bottom at 84%, thin horizontal gold bar #d4af37, 28px wide, centered, opacity 35%. Minimal, ceremonial, conclusive. Sharp text rendering.
```

---

### CTA_CARD — CTA Card

Estrutura: fundo void, card proeminente centralizado (72% largura, 40% height), texto dentro do card.

```
4:5 portrait Instagram carousel slide. Background #0a0a08. A prominent card box: 72% width, 40% height, positioned at 28% from top, centered, background #0e0e0c, border 1px solid rgba(212,175,55,0.25), border-radius 10px. Inside card: bold text reading "[TÍTULO]" at 36% height, white #f5f0e8, 48pt, centered. Below at 47%, subtitle #b8b098, 22pt. Dark luxury card aesthetic. Sharp text rendering.
```

---

## Seleção Inteligente de Layout

Para cada slide, selecionar o layout considerando:

1. **Posição no carrossel**: Slide 1 → COVER. Slide 10 → CTA.
2. **Tipo v22**: Ver tabela de mapeamento acima.
3. **Equilíbrio visual no conjunto**: Não repetir o mesmo layout mais de 2x seguidos.
4. **Comprimento do texto**: Textos longos → EDIT_TXT ou STORY_LEFT/RIGHT. Textos curtos → STORY_SHOUT ou TWITTER.

**Sequência de referência para um carrossel padrão:**
```
Slide 1:  COVER_CENTER (Manchete)
Slide 2:  STORY_LEFT ou STORY_RIGHT (Corpo ou Immersive)
Slide 3:  STORY_SHOUT (O Grito)
Slide 4:  EDIT_TXT (Immersive Reader)
Slide 5:  STORY_HORIZ (Corpo)
Slide 6:  STORY_RIGHT (Immersive)
Slide 7:  EDIT_TXT (Immersive)
Slide 8:  TWITTER (O Grito)
Slide 9:  STORY_LEFT (Immersive)
Slide 10: CTA_MINIMAL (Fechamento)
```
