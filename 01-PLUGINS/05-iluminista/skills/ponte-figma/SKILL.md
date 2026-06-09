---
name: ponte-figma
version: 2.0
plugin: "05-iluminista"
layer: "Transversal — Estética / Renderização"
description: >
  Motor de renderização Figma do Arsenal Chave Mestra. Recebe o roteiro
  gerado pelo Chavossel (Bardo) em Sintaxe v22 e o transforma em arquivo
  Figma editável: 10 frames 1080×1350px, tipografia, hierarquia visual,
  zonas de imagem e geração de foto via Nano Banana (opcional).
  Opera em dois modos: Modo CM (tokens Chavossel auto-carregados) e
  Modo Cliente (coleta brand config antes de qualquer execução).
  v2.0: motor de criação direta via use_figma + create_new_file.
inputs: roteiro Chavossel v22 (10 slides) + brand config (CM ou cliente)
outputs: arquivo Figma editável (URL) com todos os frames nomeados
upstream:
  - "01-PLUGINS/03-bardo/skills/chavossel/SKILL.md — escrita, Progymnasmata, Sintaxe v22"
  - "01-PLUGINS/05-iluminista/skills/sistema-de-design/SKILL.md — tokens visuais CM e Pergaminhos"
feeds-into: Publicador Visual (Notion), Arauto (agendamento)
triggers: >
  "manda pro Figma", "renderiza no Figma", "ponte Figma", "Chavossel Figma",
  "injeta nos frames", "gera carrossel no Figma", "exporta do Figma",
  "cria os frames", "montar no Figma"
---

# Ponte Figma — Motor de Renderização Chavossel

A Ponte Figma **não escreve carrosséis**. Renderiza roteiros já escritos.

O input é sempre um roteiro em **Sintaxe Chavossel v22** — produzido pelo Chavossel (Bardo, Plugin 03). A Ponte lê o roteiro, mapeia cada slide para um layout da biblioteca de 30 templates, constrói os frames via Figma MCP e entrega o arquivo editável.

> **Se não há roteiro ainda:** parar e acionar o Chavossel primeiro.
> Ver `01-PLUGINS/03-bardo/skills/chavossel/SKILL.md`.

---

## Ferramentas MCP Disponíveis

| Ferramenta | Função |
|---|---|
| `create_new_file` | Cria novo arquivo Figma |
| `use_figma` | Executa JavaScript no contexto do Figma Plugin API |
| `upload_assets` | Faz upload de imagens para o Figma |
| `get_design_context` | Lê estrutura de arquivo existente (layers, frames) |
| `get_screenshot` | Captura screenshot de frames específicos |
| `get_variable_defs` | Lê variáveis de design (cores, espaçamentos) |
| `whoami` | Obtém planKey do usuário |

---

## Mapa de Fluxo

```
Bardo / Chavossel
  → roteiro 10 slides (Sintaxe v22)
      ↓
Ponte Figma
  Step 0: Brand Config (CM auto / cliente coleta)
  Step 1: Parse roteiro v22 → identificar títulos, corpo, gritos, cortes
  Step 2: Plano de layouts (slide-a-slide, sujeito a aprovação)
  Step 3: Nano Banana (opcional) — gerar imagens para zonas de foto
  Step 4: create_new_file — criar arquivo Figma
  Step 5: use_figma — construir todos os frames via Figma Plugin API
  Step 6: Numeração + consistência
  Step 7: Entrega (URL + sumário)
      ↓
Arquivo Figma editável
  → Publicador Visual → Notion
  → Arauto → agendamento
```

---

## STEP 0 — Brand Configuration (OBRIGATÓRIO ANTES DE TUDO)

### Modo CM — Lucas Grigo / Chave Mestra
Detectar automaticamente quando: e-mail `lucasdemaria1607@gmail.com`, ou o usuário menciona "Chave Mestra", "Chavossel", "Oráculo", "Pergaminho Preto".

→ Carregar **CHAVOSSEL_DEFAULT** (seção de tokens abaixo). Não perguntar nada. Avançar.

### Modo Cliente — Qualquer outra marca

Coletar antes de qualquer execução:

```
1. CORES DA MARCA (obrigatório)
   - Cor primária / acento (equivale ao ouro no Chavossel): hex
   - Cor de fundo (base escura ou clara): hex
   - Cor de texto principal sobre esse fundo: hex
   - Opcional: acento secundário, neutros extras

2. TIPOGRAFIA (obrigatório)
   - Família do título (Google Fonts ou Figma)
   - Família do corpo
   - Se desconhecida: escolher um dos 6 estilos predefinidos

3. REFERÊNCIAS VISUAIS (recomendado)
   - URLs de imagem, logo, moodboard
   - Usadas para guiar geração Nano Banana

4. NOME DA MARCA / TOM
   - Nome (para nomear arquivo Figma)
   - Tom: luxury / bold / editorial / minimal / playful / professional
```

Refletir para aprovação:
```
✓ Marca: [Nome]
✓ Acento: #XXXXXX  →  RGB { r: X.XXX, g: X.XXX, b: X.XXX }
✓ Fundo:  #XXXXXX
✓ Texto:  #XXXXXX
✓ Fonte título: [Família]
✓ Fonte corpo:  [Família]
✓ Estilo visual: [descrição]
```

---

## STEP 1 — Parse do Roteiro v22

| Marcação no roteiro | Tipo de slide | Comportamento no Figma |
|---|---|---|
| `# Frase longa` + parágrafos abaixo | Manchete | Título grande (TITLE_LG) + corpo |
| `# Frase curta` + nada mais | O Grito | Só título centralizado, slide vazio |
| Texto puro >20 palavras, sem `#` | Immersive Reader | Texto corrido, sem título, tipografia maior |
| Texto puro <20 palavras, sem `#` | Corpo | Texto curto centralizado |
| `---` em linha isolada | Separador | Novo frame |

**Extração por slide:**
```
Slide N:
  Tipo: [Manchete / Grito / Immersive / Corpo]
  Título: [linha # — ou vazio]
  Subtítulo: [segunda linha se presente]
  Corpo: [parágrafo(s) de texto puro]
  Posição: [Abertura (S1) / Ponte (S2) / Corpo (S3-S9) / Fechamento (S10)]
```

---

## STEP 2 — Plano de Layouts

Selecionar layout por posição + tipo e apresentar para aprovação:

| Posição | Tipo | Layouts recomendados |
|---|---|---|
| S1 Abertura | Manchete | COVER_CENTER, COVER_NATIVE, COVER_TOP |
| S2 Ponte | Immersive / Manchete | EDITORIAL_STD, EDIT_TXT, STORY_TOTAL |
| S3–S4 Corpo | Manchete forte | STORY_SHOUT, EDIT_TXT |
| S5–S6 Corpo | Immersive | EDITORIAL_STD, STORY_MID_IMG, NEWS_L |
| S7 O Grito | O Grito | EDIT_TXT (só título), COVER_BOTTOM |
| S8–S9 Corpo | Immersive / Corpo | EDITORIAL_STD, HALF_H, EDITORIAL_DUAL_TOP |
| S10 Fechamento | CTA | CTA_MINIMAL, CTA_CARD, CTA_SPLIT |

**Regra anti-repetição:** nenhum layout idêntico em slides adjacentes.

Plano no formato:
```
PLANO — [Tema]
S1 → COVER_CENTER | "[título]"
S2 → EDIT_TXT     | "[corpo]"
...
S10 → CTA_MINIMAL | "[CTA]"
Zonas de foto: S3, S6 — gerar com Nano Banana? (sim/não)
```

---

## STEP 3 — Nano Banana (Opcional)

Se aprovado gerar imagens:

1. Craftar prompt por slide com base no VISUAL_STYLE da brand config
2. `generate_image` — model: `nano_banana_pro`, aspect_ratio: `4:5`
3. Se usuário forneceu referências → passar em `medias` com role `style_reference`
4. Salvar URLs para `upload_assets` no Step 5

**Diretrizes de imagem por tom:**

| Tom | Diretriz |
|---|---|
| luxury / premium | cinematic dramatic lighting, deep shadows, warm tones, editorial, dark moody |
| bold / impact | high contrast, graphic, strong composition, punchy |
| editorial | clean editorial photography, natural light, journalistic, authentic |
| minimal | airy, negative space, soft light, muted palette |
| playful | vibrant, dynamic, energetic, lifestyle |
| professional | corporate clean, neutral tones, sharp focus |

**Prompt Chavossel (CM):**
```
[cena/assunto], cinematic dramatic lighting, dark moody atmosphere,
deep shadows, warm gold-amber tones, high contrast, editorial quality,
dark background #080808, [nota específica da cena], 4K
```

---

## STEP 4 — Criar Arquivo Figma

```javascript
// 1. whoami → planKey
// 2. create_new_file:
{
  fileName: "Chavossel — [Tema]",   // ou "[Marca] — [Tema]" para clientes
  editorType: "design",
  planKey: "[do whoami]"
}
// 3. Armazenar fileKey retornado
```

---

## STEP 5 — Construir Frames via `use_figma`

Para cada slide, executar JavaScript que:
1. Cria frame base 1080×1350px
2. Aplica background conforme layout
3. Adiciona zona de foto (placeholder ou fill de imagem gerada)
4. Adiciona overlay de gradiente se necessário
5. Adiciona camadas de texto com fonte, tamanho, posição e cor corretos
6. `upload_assets` para imagens Nano Banana, depois aplica como fill

> **Batch:** construir todos os frames em um único `use_figma` quando possível. Para >8 slides, dividir em 2 chamadas.

---

## STEP 6 — Numeração e Consistência

- Numeração `N/10` em cada frame — canto inferior direito, 16px, TXT_DIM
- Linha gold fina no topo (2px, largura total, GOLD 15%) — consistência de marca
- Nomear cada frame: `Slide 01 — COVER_CENTER`, `Slide 02 — EDIT_TXT`, etc.

---

## STEP 7 — Entrega

```
✓ Arquivo Figma: [URL]
✓ Slides: [lista com layout usado em cada um]
✓ Zonas de foto: [placeholder / Nano Banana]
✓ Textos para revisão manual: [lista se houver]
```

---

## Tokens Figma — CHAVOSSEL_DEFAULT (Modo CM)

Valores RGB (0–1) para o Figma Plugin API. Fonte: `sistema-de-design/SKILL.md`.

```javascript
const C = {
  GOLD:      { r: 0.910, g: 0.725, b: 0.137 },  // #E8B923 — gold vivo
  GOLD_IMP:  { r: 0.831, g: 0.573, b: 0.039 },  // #D4920A — gold imperial
  GOLD_DK:   { r: 0.545, g: 0.353, b: 0.078 },  // #8B5A14 — gold escuro
  VOID:      { r: 0.031, g: 0.031, b: 0.031 },  // #080808 — preto absoluto
  VOID_C:    { r: 0.071, g: 0.071, b: 0.063 },  // #121210 — card surface
  VOID_S:    { r: 0.086, g: 0.086, b: 0.078 },  // #161614 — card elevado
  TXT_HI:    { r: 0.961, g: 0.929, b: 0.878 },  // #F5EDE0 — headlines
  TXT_MD:    { r: 0.784, g: 0.753, b: 0.659 },  // #C8C0A8 — corpo
  TXT_LO:    { r: 0.659, g: 0.596, b: 0.502 },  // #A89880 — labels
  TXT_DIM:   { r: 0.439, g: 0.408, b: 0.345 },  // #706858 — dim
  PHOTO_PH:  { r: 0.145, g: 0.141, b: 0.125 },  // #252520 — placeholder foto
  WINE:      { r: 0.478, g: 0.063, b: 0.188 },  // #7A1030 — vinho
};
```

### Escala tipográfica (frame 1080px)

```javascript
const T = {
  TITLE_XL:  88,   // headline primário — capa
  TITLE_LG:  72,   // headline principal
  TITLE_MD:  56,   // headline secundário
  SUBTITLE:  32,   // subtítulo
  BODY:      26,   // corpo de texto
  CAPTION:   20,   // caption / metadados
  MICRO:     16,   // labels, numeração
};
```

### Estilos Tipográficos

| ID | Fonte Título | Fonte Corpo | Tom |
|---|---|---|---|
| `old_money` | Cinzel SemiBold | IM Fell English / Cinzel Regular | Premium, clássico — **padrão CM** |
| `elegant` | Playfair Display Bold | Lato Regular | Lifestyle, luxo |
| `modern` | Montserrat Bold | Roboto Regular | Tech, negócios |
| `impact` | Anton Regular | Inter Regular | Bold statements |
| `aesthetic` | Playfair Display Italic | Montserrat Light | Arte, moda |
| `jornal` | Merriweather Bold | Georgia Regular | Jornalismo |

**Fallbacks:** Cinzel → `Georgia` | Anton → `Inter Bold` | Playfair/Merriweather → `Georgia`

---

## Mapeamento Pergaminho → Configuração Figma

| Pergaminho | BG | Texto destaque | Acento | Font style | Efeito | Capa |
|---|---|---|---|---|---|---|
| **Preto** | `#080808` | `#F5EDE0` | `#E8B923` | old_money | dream_fade | COVER_CENTER |
| **Branco** | `#FDFAF0` | `#141210` | `#D4920A` | elegant | corte_limpo | COVER_TOP |
| **Dourado** | `#D4A050` | `#1A0A00` | `#6B3A08` | old_money | offset | COVER_BOTTOM |
| **Arcano** | `#B8A070` | `#0A0200` | `#D4920A` | aesthetic | double_exposure | STORY_TOTAL |

---

## Biblioteca de 30 Layouts

Coordenadas em porcentagem: multiply x% × 1080, y% × 1350.

### CAPAS (S1 — Abertura)

**COVER_CENTER** — Background VOID + radial gold glow 6% em 50% 60% / Título centralizado y=40% TITLE_LG GOLD / Subtítulo y=54% SUBTITLE TXT_MD / Linha decorativa w=26% y=68% GOLD 35%

**COVER_TOP** — BG VOID sólido / Título y=17% TITLE_LG GOLD / Subtítulo y=28% SUBTITLE TXT_MD

**COVER_BOTTOM** — BG gradiente VOID→VOID_C / Título bottom 22% TITLE_LG GOLD / Subtítulo bottom 14% SUBTITLE TXT_MD

**COVER_NATIVE** — BG VOID_C + radial gold 4% / Título y=43% TITLE_LG GOLD / Subtítulo y=54% SUBTITLE TXT_MD / Ponto decorativo 8px TXT_DIM

---

### STORYTELLING

**STORY_TOTAL** — Foto 100%×100% / Overlay VOID 75% bottom→transp 45% / Título x=10% bottom 20% w=80% TITLE_MD TXT_HI / Subtítulo bottom 12% BODY TXT_MD

**STORY_LEFT** — Foto x=0 w=40% h=100% / Título painel dir x=5% y=40% w=42% TITLE_MD TXT_HI / Subtítulo +11% BODY / Caption +8% CAPTION TXT_LO

**STORY_RIGHT** — Foto x=60% w=40% h=100% / Título x=5% y=40% w=42% / mesmo padrão STORY_LEFT

**STORY_HORIZ** — Foto y=15% h=40% w=100% / Título centralizado y=72% TITLE_MD / Subtítulo y=80% BODY

**STORY_SHOUT** — Foto bottom 0 h=30% / Título BIG centralizado y=37% w=62% TITLE_XL TXT_HI / Subtítulo y=52% BODY

**STORY_MID_IMG** — Título x=20% y=11% / Subtítulo y=21% / Foto y=32% h=35% / Body x=16% y=72% / Caption x=23% y=80%

---

### EDITORIAL

**EDITORIAL_STD** — Foto x=15% y=12% w=70% h=50% rounded 8px / Título x=15% y=67% TITLE_MD / Body x=15% y=78%

**EDIT_TOP** — Foto x=10% y=8% w=80% h=46% / Título x=10% y=59% / Body y=70%

**EDIT_BOT** — Título x=10% y=18% / Body y=28% / Foto bottom 8% h=46%

**EDIT_TXT** *(sem foto — Immersive/Grito)* — Linha ornamental x=10% y=25% h=2px GOLD 30% / Título BIG centralizado y=39% w=80% TITLE_LG / Body x=17% y=55% / Caption x=24% y=63% / Linha bottom

**EDITORIAL_DUAL_IMG** — Foto 1 x=5% y=4% w=40% h=42% / Foto 2 x=5% bottom 4% w=40% h=42% / Título painel dir w=37% y=38% SUBTITLE / Body, Caption abaixo

**EDITORIAL_DUAL_LEFT** — Mesma estrutura DUAL_IMG, coluna esquerda empilhada

**EDITORIAL_DUAL_TOP** — Foto 1 x=4% y=4% w=42% h=42% / Foto 2 x=54% espelho / Título centralizado y=55% / Subtítulo y=66%

**CARD_IMG_TOP** — Foto x=10% y=8% w=80% h=48% rounded / Título x=18% y=62% SUBTITLE / Body x=10% y=72%

**CARD_IMG_BOT** — Título x=18% y=12% / Body y=22% / Foto bottom 8% h=48% rounded

---

### MAGAZINE

**MAG_TOP** — Foto frame completo / Overlay VOID 70% top→transp 45% / Título x=13% y=15% TITLE_LG TXT_HI / Subtítulo y=27%

**MAG_MID** — Foto frame completo / Overlay transp 25%→VOID 72% em 45–62%→transp 80% / Título y=42% / Subtítulo x=21% y=54%

**MAG_BOT** — Foto frame completo / Overlay VOID 75% bottom / Título bottom 18% / Subtítulo bottom 10%

---

### NOTÍCIAS & CORTES

**NEWS_L** — Foto x=0 w=45% h=100% / Título painel dir x=6% y=37% w=38% SUBTITLE / Subtítulo +11% / Caption +8%

**NEWS_R** — Foto x=55% w=45% / Título x=6% y=37% — padrão NEWS_L

**HALF_H** — Foto y=0 h=50% w=100% / Título x=16% y=65% TITLE_MD / Subtítulo x=16% y=76%

**HALF_V** — Foto x=0 w=50% h=100% / Título painel dir x=6% y=37% w=32% SUBTITLE

---

### TWITTER / SOCIAL

**TWITTER** — BG VOID_C / Card interno x=10% y=34% w=80% h=32% rounded border GOLD 15% fill VOID_S / Título centralizado y=41% w=58% SUBTITLE / Body y=51% / Caption y=59%

---

### CTAs (S10 — Fechamento)

**CTA_MINIMAL** — BG VOID + radial gold 4% / Ponto 8px y=18% TXT_DIM / Título CTA centralizado y=43% w=62% TITLE_MD / Body y=54% / Linha gold bottom 16%

**CTA_CARD** — BG VOID_C / Card x=14% y=28% w=72% h=40% rounded border GOLD 25% / Título centralizado y=36% / Body y=47%

**CTA_SPLIT** — Foto y=0 h=50% / Título centralizado y=67% / Body y=78%

---

## Efeitos de Imagem

| ID | Descrição | Implementação |
|---|---|---|
| `solid` | Foto flat | Nenhum overlay |
| `corte_limpo` | Borda ouro inset | Inset rect 6px GOLD 25% opacity |
| `offset` | Sombra offset | Rect duplicado +8px VOID_C atrás |
| `double_exposure` | Blend gold | Rect sobre foto GOLD 12% Screen |
| `dream_fade` | Esmaece para escuro | Overlay transp→VOID 0.85 |

---

## Figma JavaScript — Helpers

```javascript
// ─── PALETA CHAVOSSEL ────────────────────────────────────────────────────────
const C = {
  GOLD:     { r: 0.910, g: 0.725, b: 0.137 },
  VOID:     { r: 0.031, g: 0.031, b: 0.031 },
  VOID_C:   { r: 0.071, g: 0.071, b: 0.063 },
  TXT_HI:   { r: 0.961, g: 0.929, b: 0.878 },
  TXT_MD:   { r: 0.784, g: 0.753, b: 0.659 },
  TXT_DIM:  { r: 0.439, g: 0.408, b: 0.345 },
  PHOTO_PH: { r: 0.145, g: 0.141, b: 0.125 },
};
const T = { TITLE_XL:88, TITLE_LG:72, TITLE_MD:56, SUBTITLE:32, BODY:26, CAPTION:20, MICRO:16 };

// ─── FRAME BASE ──────────────────────────────────────────────────────────────
function createBaseFrame(name, slideIndex) {
  const frame = figma.createFrame();
  frame.name = name;
  frame.resize(1080, 1350);
  frame.x = slideIndex * 1140;
  frame.y = 0;
  frame.fills = [{ type: 'SOLID', color: C.VOID }];
  return frame;
}

// ─── ZONA DE FOTO ────────────────────────────────────────────────────────────
function createPhotoZone(frame, xPct, yPct, wPct, hPct, name = "Photo Zone", rounded = 0) {
  const rect = figma.createRectangle();
  rect.name = name;
  rect.x = xPct * 1080; rect.y = yPct * 1350;
  rect.resize(wPct * 1080, hPct * 1350);
  if (rounded > 0) rect.cornerRadius = rounded;
  rect.fills = [{ type: 'SOLID', color: C.PHOTO_PH }];
  frame.appendChild(rect);
  return rect;
}

// ─── OVERLAY DE GRADIENTE ────────────────────────────────────────────────────
function createGradientOverlay(frame, direction = 'bottom-to-top', opacity = 0.75) {
  const overlay = figma.createRectangle();
  overlay.name = "Gradient Overlay";
  overlay.resize(1080, 1350); overlay.x = 0; overlay.y = 0;
  const dark = { ...C.VOID, a: opacity };
  const clear = { ...C.VOID, a: 0 };
  overlay.fills = [{
    type: 'GRADIENT_LINEAR',
    gradientTransform: direction === 'bottom-to-top' ? [[1,0,0],[0,-1,1]] : [[1,0,0],[0,1,0]],
    gradientStops: [{ position: 0, color: dark }, { position: 1, color: clear }]
  }];
  frame.appendChild(overlay);
}

// ─── CAMADA DE TEXTO ─────────────────────────────────────────────────────────
async function createTextLayer(frame, text, { xPct, yPct, wPct, fontSize, color, family, style, align = 'LEFT' }) {
  const node = figma.createText();
  await figma.loadFontAsync({ family, style });
  node.fontName = { family, style };
  node.fontSize = fontSize;
  node.characters = text;
  node.fills = [{ type: 'SOLID', color }];
  node.textAlignHorizontal = align;
  if (wPct) { node.textAutoResize = 'HEIGHT'; node.resize(wPct * 1080, 100); }
  node.x = xPct * 1080; node.y = yPct * 1350;
  frame.appendChild(node);
  return node;
}

// ─── NUMERAÇÃO ───────────────────────────────────────────────────────────────
async function addSlideNumber(frame, current, total) {
  const tag = figma.createText();
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  tag.fontName = { family: "Inter", style: "Regular" };
  tag.fontSize = T.MICRO; tag.characters = `${current}/${total}`;
  tag.fills = [{ type: 'SOLID', color: C.TXT_DIM }];
  tag.x = 1080 - 80; tag.y = 1350 - 48;
  frame.appendChild(tag);
}

// ─── EXEMPLO COMPLETO — COVER_CENTER ─────────────────────────────────────────
async function buildCoverCenter(title, subtitle, slideIndex = 0) {
  await Promise.all([
    figma.loadFontAsync({ family: "Cinzel", style: "SemiBold" }),
    figma.loadFontAsync({ family: "Cinzel", style: "Regular" }),
    figma.loadFontAsync({ family: "Inter", style: "Regular" }),
  ]);
  const frame = createBaseFrame("Slide 01 — COVER_CENTER", slideIndex);

  // Radial gold glow
  const glow = figma.createEllipse();
  glow.resize(900, 600); glow.x = 90; glow.y = 1350 * 0.35;
  glow.fills = [{ type: 'RADIAL_GRADIENT', gradientTransform: [[0.5,0,0.5],[0,0.5,0.5]],
    gradientStops: [
      { position: 0, color: { ...C.GOLD, a: 0.06 } },
      { position: 1, color: { ...C.GOLD, a: 0 } }
    ] }];
  frame.appendChild(glow);

  await createTextLayer(frame, title.toUpperCase(), {
    xPct: 0.111, yPct: 0.40, wPct: 0.778,
    fontSize: T.TITLE_LG, color: C.GOLD,
    family: "Cinzel", style: "SemiBold", align: 'CENTER'
  });
  await createTextLayer(frame, subtitle, {
    xPct: 0.222, yPct: 0.56, wPct: 0.556,
    fontSize: T.SUBTITLE, color: C.TXT_MD,
    family: "Cinzel", style: "Regular", align: 'CENTER'
  });

  // Linha decorativa
  const line = figma.createRectangle();
  line.resize(280, 1); line.x = (1080 - 280) / 2; line.y = 1350 * 0.68;
  line.fills = [{ type: 'SOLID', color: C.GOLD, opacity: 0.35 }];
  frame.appendChild(line);

  figma.currentPage.appendChild(frame);
  figma.viewport.scrollAndZoomIntoView([frame]);
}
```

---

## Checklist de Qualidade

- [ ] Todos os slides são 1080×1350px
- [ ] S1 usa COVER_*
- [ ] S10 usa CTA_*
- [ ] Nenhum layout idêntico em slides adjacentes
- [ ] Texto legível em todos os slides (contraste suficiente)
- [ ] Zonas de foto nomeadas claramente
- [ ] Frames com padrão `Slide NN — LAYOUT_ID`
- [ ] Numeração `N/10` consistente
- [ ] Tipografia consistente ao longo do carrossel

---

## Comandos

### `/create-carousel [tema]`
Fluxo completo Step 0 → Step 7. Apresenta plano de layouts para aprovação antes de construir.

### `/generate-slide [layout_id] [conteúdo]`
Cria slide isolado no arquivo Figma ativo.

### `/apply-chavossel [figma_url]`
Lê frames existentes e aplica tokens Chavossel (cores, tipografia, estrutura).

### `/restyle [figma_url] [style_id]`
Troca família tipográfica em todos os textos do arquivo.
Estilos válidos: `old_money`, `elegant`, `modern`, `impact`, `aesthetic`, `jornal`

---

## Referências Cruzadas

- `01-PLUGINS/03-bardo/skills/chavossel/SKILL.md` — **UPSTREAM (escrita)** — Progymnasmata, 10 atos, Sintaxe v22
- `01-PLUGINS/03-bardo/skills/chavossel/exercicios.md` — 14 templates de exercício
- `01-PLUGINS/05-iluminista/skills/sistema-de-design/SKILL.md` — tokens CM, 4 Pergaminhos, CSS
- `05-ASSETS/referencias-visuais/chavossel-layouts.html` — referência visual interativa dos 30 layouts
- `publicador-visual/SKILL.md` — publicação no Notion após render

---

## Notas Técnicas

- **Fontes no Figma:** Cinzel, Cinzel Decorative, Playfair Display e Merriweather devem estar instaladas na org ou como fontes locais. Fallback → Georgia (serif) / Inter (sans).
- **Geração de imagens (Nano Banana):** usa créditos. Confirmar com usuário antes de gerar lote. Default é criar placeholders para o usuário substituir.
- **Texto:** sempre em português por default neste projeto.
- **Arquivo Figma:** nomear sempre `Chavossel — [Tema]` para identificação fácil.

---

*Ponte Figma v2.0 — Maio 2026*
*Plugin 05 — Iluminista / Camada: Transversal — Estética / Renderização*
*Parte do Arsenal Chave Mestra — Lucas Grigo*
