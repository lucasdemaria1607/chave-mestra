# WIREFRAME REFERENCE KIT — Carousel Image Generation
## Guia Universal para IAs de Imagem

> **O que é este documento:** referência técnica e visual completa para que qualquer IA de geração de imagem (Midjourney, DALL-E, Gemini, Flux, Ideogram, etc.) produza slides de carrossel com precisão estrutural — layouts, tipografia, proporções, margens e estilos consistentes entre si.
>
> **Como usar:** copie a seção relevante (Layout + Estilo + Pergaminho) no prompt da IA de imagem. Cada seção é auto-contida.

---

## 1. ESPECIFICAÇÕES TÉCNICAS OBRIGATÓRIAS

### Canvas / Dimensões

| Formato | Pixels | Proporção | Uso |
|---------|--------|-----------|-----|
| **Carrossel Instagram** | 1080 × 1080 px | 1:1 | Padrão (recomendado) |
| **Carrossel Retrato** | 1080 × 1350 px | 4:5 | Maior área de texto |
| **Story / Reels** | 1080 × 1920 px | 9:16 | Vertical full |

### Zona Segura (Safe Zone) — CRÍTICO

```
┌──────────────────────────────────────┐
│            80px MARGEM               │
│  ┌──────────────────────────────┐    │
│  │                              │    │
│  │      ZONA SEGURA             │    │
│  │      Todo texto e            │    │
│  │      elementos-chave         │    │
│  │      DENTRO desta área       │    │
│  │                              │    │
│  │      920 × 920 px (1:1)      │    │
│  │      920 × 1190 px (4:5)     │    │
│  │                              │    │
│  └──────────────────────────────┘    │
│            80px MARGEM               │
└──────────────────────────────────────┘
```

**Regra absoluta:** nenhum texto toca a borda do canvas. Margem mínima de 80px em todos os lados. Imagens de fundo podem sangrar (bleed) até a borda — texto e elementos gráficos nunca.

### Hierarquia de Tamanho de Texto (em relação ao canvas 1080px)

| Elemento | Tamanho mínimo | Proporção do canvas | Peso |
|----------|---------------|---------------------|------|
| **Headline / Título** | 56–80px | ~5–7% da altura | Bold / Black |
| **Subtítulo** | 36–48px | ~3–4% da altura | Semibold |
| **Corpo de texto** | 28–36px | ~2.5–3% da altura | Regular |
| **Label / Tag** | 20–24px | ~2% da altura | Medium |
| **Watermark / Marca** | 16–18px | ~1.5% da altura | Light |

**Regra:** se o texto não é legível em um celular segurando a 30cm do rosto, está pequeno demais.

---

## 2. OS 18 LAYOUTS (Wireframes)

Cada layout é descrito com sua estrutura espacial exata. O wireframe usa coordenadas relativas ao canvas.

---

### CAPAS (Slide 1)

#### COVER_CENTER
```
┌────────────────────────┐
│                        │
│    [IMAGEM FUNDO]      │
│    (full-bleed)        │
│                        │
│  ┌──────────────────┐  │
│  │   HEADLINE       │  │
│  │   (centralizado) │  │
│  │                  │  │
│  │   Subtítulo      │  │
│  │   (centralizado) │  │
│  └──────────────────┘  │
│                        │
│       @handle          │
└────────────────────────┘
```
- **Imagem:** full-bleed, cobre 100% do canvas
- **Overlay:** gradiente escuro 40–60% opacidade sobre a imagem para legibilidade
- **Headline:** centralizado vertical e horizontalmente, 60–80px
- **Subtítulo:** abaixo do headline, 32–40px, peso mais leve
- **Handle/Marca:** rodapé, 16–18px
- **Distribuição vertical:** texto no terço central (33%–66% da altura)

#### COVER_TOP
```
┌────────────────────────┐
│  ┌──────────────────┐  │
│  │   HEADLINE       │  │
│  │   (alinhado topo) │  │
│  │   Subtítulo      │  │
│  └──────────────────┘  │
│                        │
│    [IMAGEM]            │
│    (60% inferior)      │
│                        │
│                        │
│       @handle          │
└────────────────────────┘
```
- **Texto:** terço superior (0%–33% da altura), dentro da safe zone
- **Imagem:** ocupa os 60% inferiores
- **Overlay:** gradiente do topo (escuro→transparente) se texto sobre imagem

#### COVER_BOTTOM
```
┌────────────────────────┐
│                        │
│    [IMAGEM]            │
│    (60% superior)      │
│                        │
│                        │
│  ┌──────────────────┐  │
│  │   HEADLINE       │  │
│  │   + CTA / Sub    │  │
│  │   (alinhado base)│  │
│  └──────────────────┘  │
│       @handle          │
└────────────────────────┘
```
- **Imagem:** ocupa os 60% superiores
- **Texto:** terço inferior (66%–100%), headline + CTA
- **Overlay:** gradiente da base (escuro→transparente para cima)

---

### CONTEÚDO EDITORIAL

#### EDITORIAL_STD
```
┌────────────────────────┐
│                        │
│  HEADLINE              │
│  ─────────────         │
│                        │
│  Parágrafo de texto    │
│  corrido, denso,       │
│  editorial. Múltiplas  │
│  linhas com boa        │
│  entrelinha.           │
│                        │
│  Segundo parágrafo     │
│  se necessário.        │
│                        │
│       @handle          │
└────────────────────────┘
```
- **Sem imagem** (ou imagem sutil de fundo com opacidade 5–10%)
- **Headline:** topo-esquerda, 48–56px, bold
- **Separador:** linha fina abaixo do headline (1–2px, cor de acento)
- **Corpo:** texto corrido, 28–32px, line-height 1.6, alinhado à esquerda
- **Foco 100% tipográfico** — este é o layout "Immersive Reader"

#### MAG_TOP
```
┌────────────────────────┐
│  ┌──────────────────┐  │
│  │   [IMAGEM]       │  │
│  │   (40% superior) │  │
│  └──────────────────┘  │
│                        │
│  HEADLINE              │
│                        │
│  Corpo de texto.       │
│  Narrativa editorial.  │
│                        │
│       @handle          │
└────────────────────────┘
```
- **Imagem:** faixa horizontal no topo, 40% da altura, aspect ~2.5:1
- **Headline:** abaixo da imagem, 44–52px
- **Corpo:** 28–32px, 3–5 linhas máximo

#### MAG_MID
```
┌────────────────────────┐
│                        │
│  HEADLINE              │
│                        │
│  ┌──────────────────┐  │
│  │   [IMAGEM]       │  │
│  │   (30% central)  │  │
│  └──────────────────┘  │
│                        │
│  Corpo de texto        │
│  abaixo da imagem.     │
│                        │
│       @handle          │
└────────────────────────┘
```
- **Headline:** topo, 44–52px
- **Imagem:** faixa central, ~30% da altura, aspect ~3:1
- **Corpo:** abaixo da imagem, 28–32px

#### MAG_BOT
```
┌────────────────────────┐
│                        │
│  HEADLINE              │
│                        │
│  Corpo de texto.       │
│  Narrativa antes da    │
│  imagem.               │
│                        │
│  ┌──────────────────┐  │
│  │   [IMAGEM]       │  │
│  │   (40% inferior) │  │
│  └──────────────────┘  │
│       @handle          │
└────────────────────────┘
```
- **Headline:** topo, 44–52px
- **Corpo:** texto acima da imagem, 28–32px
- **Imagem:** faixa no rodapé, 40% da altura

---

### STORY (Texto + Imagem lado a lado)

#### STORY_LEFT
```
┌────────────────────────┐
│                        │
│  ┌────┐  HEADLINE      │
│  │IMG │                │
│  │    │  Corpo de      │
│  │50% │  texto na      │
│  │    │  metade         │
│  │    │  direita.      │
│  └────┘                │
│                        │
│       @handle          │
└────────────────────────┘
```
- **Imagem:** metade esquerda (~50% largura), full-height dentro da safe zone
- **Texto:** metade direita, headline 40–48px + corpo 26–30px
- **Gap:** 24–32px entre imagem e texto

#### STORY_RIGHT
```
┌────────────────────────┐
│                        │
│  HEADLINE   ┌────┐    │
│              │IMG │    │
│  Corpo de    │    │    │
│  texto na    │50% │    │
│  metade      │    │    │
│  esquerda.   │    │    │
│              └────┘    │
│                        │
│       @handle          │
└────────────────────────┘
```
- Espelhamento do STORY_LEFT

#### STORY_MID_IMG
```
┌────────────────────────┐
│                        │
│  HEADLINE              │
│                        │
│  Texto  ┌──────┐ Texto │
│  wrap   │ IMG  │ wrap  │
│  ao     │ cent │ ao    │
│  redor  └──────┘ redor │
│                        │
│  Continuação texto.    │
│       @handle          │
└────────────────────────┘
```
- **Imagem:** centralizada, ~40% da largura, aspect 1:1 ou circular
- **Texto:** flui ao redor da imagem (wrap effect)

#### STORY_TOTAL
```
┌────────────────────────┐
│                        │
│    [IMAGEM FUNDO]      │
│    (full-bleed 100%)   │
│                        │
│  ┌──────────────────┐  │
│  │ HEADLINE         │  │
│  │                  │  │
│  │ Corpo overlay    │  │
│  │ sobre imagem     │  │
│  └──────────────────┘  │
│                        │
│       @handle          │
└────────────────────────┘
```
- **Imagem:** 100% do canvas, full-bleed
- **Overlay:** gradiente escuro (60–70% opacidade) para legibilidade
- **Texto:** sobre o overlay, headline 52–64px + corpo 28–32px
- **Usado para:** clímax narrativo, slide de impacto máximo

---

### CTA / FECHAMENTO (Slide 10)

#### CTA_MINIMAL
```
┌────────────────────────┐
│                        │
│                        │
│                        │
│     HEADLINE CTA       │
│     (centralizado)     │
│                        │
│     [ BOTÃO CTA ]      │
│                        │
│     @handle            │
│                        │
│                        │
└────────────────────────┘
```
- **Sem imagem** — fundo sólido ou gradiente sutil
- **Headline CTA:** centralizado, 48–56px, bold
- **Botão/Badge:** indicador visual de ação, cor de acento, 32–36px
- **Máximo espaço negativo** — foco total na ação

#### CTA_CARD
```
┌────────────────────────┐
│                        │
│  ┌──────────────────┐  │
│  │                  │  │
│  │  HEADLINE CTA    │  │
│  │                  │  │
│  │  Benefício       │  │
│  │  resumido.       │  │
│  │                  │  │
│  │  [ BOTÃO CTA ]   │  │
│  │                  │  │
│  └──────────────────┘  │
│       @handle          │
└────────────────────────┘
```
- **Card central:** flutuante sobre o fundo, com borda/sombra
- **Padding interno:** 48–64px
- **Headline + texto + CTA** dentro do card

#### CTA_SPLIT
```
┌────────────────────────┐
│                        │
│  ┌────┐  HEADLINE      │
│  │IMG │  CTA           │
│  │    │                │
│  │50% │  Benefício     │
│  │    │  principal.    │
│  │    │                │
│  │    │  [ BOTÃO ]     │
│  └────┘                │
│       @handle          │
└────────────────────────┘
```
- **Metade visual:** imagem ou asset gráfico (50% esquerda)
- **Metade CTA:** texto + botão (50% direita)

---

### ESPECIAIS

#### QUOTE_BOX
```
┌────────────────────────┐
│                        │
│        ❝               │
│                        │
│    "Citação aqui,      │
│     com itálico e      │
│     peso visual."      │
│                        │
│        — Autor         │
│                        │
│                        │
│       @handle          │
└────────────────────────┘
```
- **Aspas gigantes:** decorativas, 120–160px, cor de acento, opacidade 30%
- **Citação:** centralizada, itálico, 32–40px
- **Autor:** abaixo, 24–28px, dash prefix

#### LIST_CLEAN
```
┌────────────────────────┐
│                        │
│  HEADLINE              │
│  ─────────             │
│                        │
│  ① Item um             │
│                        │
│  ② Item dois           │
│                        │
│  ③ Item três           │
│                        │
│  ④ Item quatro         │
│                        │
│       @handle          │
└────────────────────────┘
```
- **Headline:** topo, 44–52px
- **Itens:** numerados com ícone/badge, 28–32px, espaçamento 24–32px entre itens
- **Sem imagem** — layout 100% tipográfico

#### DATA_CARD
```
┌────────────────────────┐
│                        │
│  HEADLINE              │
│                        │
│  ┌────────┐ ┌────────┐ │
│  │  72%   │ │  3.2x  │ │
│  │ label  │ │ label  │ │
│  └────────┘ └────────┘ │
│  ┌────────┐ ┌────────┐ │
│  │  +450  │ │  98%   │ │
│  │ label  │ │ label  │ │
│  └────────┘ └────────┘ │
│                        │
│       @handle          │
└────────────────────────┘
```
- **Grid 2×2:** cards com números grandes (48–64px) + labels pequenos (20–24px)
- **Cards:** com borda sutil ou fundo diferenciado
- **Headline:** topo contextualiza os dados

#### TWITTER
```
┌────────────────────────┐
│                        │
│  ┌──┐  Nome            │
│  │🖼│  @handle          │
│  └──┘                  │
│                        │
│  "Texto estilizado     │
│   como tweet, com      │
│   formatação de        │
│   rede social."        │
│                        │
│  ♡ 2.4K  ↻ 890  💬 156 │
│                        │
│       @handle          │
└────────────────────────┘
```
- **Avatar:** círculo 64–80px, topo-esquerda
- **Nome + @:** ao lado do avatar, 24–28px
- **Corpo:** texto do "tweet", 28–36px
- **Métricas:** rodapé com ícones, 20–24px

---

## 3. OS 4 ESTILOS VISUAIS (Pergaminhos)

Cada estilo define paleta, tipografia e atmosfera. Use UM por carrossel inteiro.

---

### PERGAMINHO BRANCO — "Clareza que convence"

| Propriedade | Valor |
|-------------|-------|
| **Fundo** | Off-white quente `#FDFAF0` (nunca branco puro #FFF) |
| **Fundo card** | `#FFFFFF` |
| **Texto principal** | Quase-preto quente `#141210` |
| **Texto secundário** | Marrom escuríssimo `#3A3530` |
| **Cor de acento** | Gold imperial `#D4920A` |
| **Acento secundário** | Vinho `#7A1030` (para alertas e ênfase) |
| **Fonte título** | **Cinzel** — serifada, versalete, elegante |
| **Fonte corpo** | **IM Fell English** ou **Georgia** — serifada, legível |
| **Atmosfera** | Limpo, editorial, minimalista, autoridade acadêmica |
| **Bordas** | Sutis, quentes (1px, tom de marrom com 12% opacidade) |
| **Separadores** | Linha `#E8B923` 50% opacidade |

**Prompt keywords para IA de imagem:**
`clean off-white background, warm minimal design, editorial layout, serif typography, subtle gold accents, academic authority, sophisticated restraint, warm paper texture, soft natural light, high contrast dark text on light background`

---

### PERGAMINHO PRETO — "A escuridão que ilumina"

| Propriedade | Valor |
|-------------|-------|
| **Fundo** | Void preto absoluto `#080808` |
| **Fundo card** | `#121210` ou `#161614` |
| **Texto destaque** | Gold vivo `#E8B923` (headlines, CTAs) |
| **Texto corpo** | Off-white quente `#C8C0A8` |
| **Texto headlines** | Off-white `#F5EDE0` |
| **Texto label** | Bege médio `#A89880` |
| **Cor de acento** | Gold imperial `#D4920A` + Vinho `#7A1030` |
| **Fonte título** | **Cinzel Decorative** — serifada, impactante, weight 700+ |
| **Fonte corpo** | **IM Fell English** — serifada, elegância sombria |
| **Atmosfera** | Dark premium, confronto visual, poder, escassez |
| **Bordas** | Gold sutil (1px, rgba gold 25% opacidade) |
| **Efeito** | Glassmorphism, glow dourado em CTAs |

**Prompt keywords para IA de imagem:**
`void black background #080808, premium dark design, gold text accents, moody atmospheric lighting, glass morphism effect, gold glow highlights, cinematic dark aesthetic, high contrast gold on black, luxury dark mode, dramatic shadows, subtle gold ambient light`

---

### PERGAMINHO DOURADO — "A antiguidade que transforma"

| Propriedade | Valor |
|-------------|-------|
| **Fundo** | Pergaminho forte `#D4A050` (bege envelhecido, quase laranja) |
| **Fundo card** | `#E0B868` (mais claro que o fundo) |
| **Texto principal** | Preto quente `#1A0A00` |
| **Texto secundário** | Marrom escuríssimo `#2A1200` |
| **Cor de acento** | Ouro queimado `#6B3A08` |
| **Acento bordas** | Gold médio `#8B5A14` |
| **Acento prestígio** | Vinho profundo `#5A0A20` |
| **Fonte título** | **Cinzel Decorative** — weight 600–700, espaçamento generoso |
| **Fonte corpo** | **IM Fell English** — serifada, estilo antigo |
| **Atmosfera** | Artefato antigo, transformação, legado, textura tátil |
| **Textura** | Obrigatória — paper/parchment texture, grain médio |
| **Ornamentos** | Drop caps, separadores ornamentais (—◆—, ✦) |

**Prompt keywords para IA de imagem:**
`aged parchment background, warm golden tones, antique manuscript feel, paper texture grain, ornamental typography, old world craftsmanship, burnished gold accents, tactile warm surface, classical serif lettering, rich amber tones, aged document aesthetic, leather and parchment`

---

### PERGAMINHO ARCANO — "A antiguidade que respira"

| Propriedade | Valor |
|-------------|-------|
| **Fundo** | Pergaminho oxidado `#B8A070` |
| **Fundo profundidade** | `#A08858` (áreas rebaixadas) |
| **Fundo elevado** | `#D0B888` (cards flutuantes) |
| **Texto principal** | Preto absoluto quente `#0A0200` |
| **Texto secundário** | Marrom escuríssimo `#2A1000` |
| **Texto label** | `#3A1800` |
| **Acento madeira** | `#4A2010` (bordas, ornamentos) |
| **Acento âmbar** | `#D4920A` (apenas decorativo, CTAs) |
| **Acento vinho** | `#5A0A20` (selos de prestígio) |
| **Fonte título** | **Cinzel Decorative** — maiúsculas, espaçamento generoso |
| **Fonte corpo** | **IM Fell English** — serifado histórico |
| **Fonte decorativa** | **UnifrakturMaguntia** — gótica, só drop caps e selos |
| **Atmosfera** | Ancestral, místico, artefato com peso de civilização |
| **Textura** | Grão de papel forte, sensação de pergaminho real oxidado |
| **Efeitos** | Drop cap gótico, moldura de madeira, selo de cera, divisor âmbar |

**Prompt keywords para IA de imagem:**
`oxidized parchment surface, aged manuscript, dark wood frame borders, mystical ancient artifact, gothic drop cap letters, wax seal elements, amber gold dividers, deep earth tones, weathered paper grain, medieval document aesthetic, arcane symbols, warm oxidized surface with depth`

---

## 4. OS 6 ESTILOS TIPOGRÁFICOS

Usar UM estilo por carrossel inteiro para consistência.

| ID | Fonte Título | Fonte Corpo | Personalidade | Melhor para |
|----|-------------|-------------|---------------|-------------|
| **elegant** | Playfair Display | Lato | Sofisticado, editorial | Conteúdo intelectual, moda |
| **modern** | Montserrat | Roboto | Limpo, tech, direto | Startups, tech, produtividade |
| **oldmoney** | Cinzel | EB Garamond | Clássico, autoridade, luxo | Finanças, direito, consultoria |
| **impact** | Anton | Inter | Bold, urgência, confronto | Provocação, polêmica, urgência |
| **aesthetic** | Playfair Display | Montserrat Light | Artístico, delicado, contemplativo | Arte, filosofia, lifestyle |
| **jornal** | Merriweather | Georgia | Jornalístico, credibilidade | Análises, investigação, opinião |

### Mapeamento Pergaminho → Estilo Recomendado

| Pergaminho | Estilo primário | Alternativa |
|------------|----------------|-------------|
| **Branco** | elegant ou aesthetic | modern |
| **Preto** | impact ou modern | elegant |
| **Dourado** | oldmoney ou elegant | jornal |
| **Arcano** | aesthetic ou oldmoney | elegant |

---

## 5. OS 5 EFEITOS DE IMAGEM

Quando houver imagem de fundo ou imagem no slide, aplicar UM efeito:

| Efeito | Descrição Visual para IA | Quando usar |
|--------|-------------------------|-------------|
| **fade** | Gradiente escuro suave sobre a imagem, transição de opaco (embaixo ou do lado do texto) para transparente. A imagem aparece parcialmente, o texto fica legível sobre a parte escurecida. | Texto sobre foto — garante legibilidade |
| **corte_limpo** | Recorte geométrico preciso — a imagem ocupa um retângulo ou forma com bordas nítidas, sem efeito de transição. Separação clara entre zona de imagem e zona de texto. | Layout editorial limpo |
| **offset** | Imagem ligeiramente deslocada do centro, com sombra de profundidade. Cria dinamismo e quebra a simetria. Pode ter borda fina ou moldura desalinhada. | Modernidade, dinamismo |
| **double_exposure** | Sobreposição de duas imagens ou de imagem com textura/padrão. Efeito cinematográfico. A imagem principal transparece através de uma segunda camada visual. | Conceitual, artístico, filosófico |
| **torn** | Efeito de papel rasgado — a borda da imagem é irregular, como se fosse um recorte manual ou colagem. Textura orgânica nas bordas. | Orgânico, rebelde, handmade |

### Mapeamento Pergaminho → Efeito Recomendado

| Pergaminho | Efeito primário | Alternativa |
|------------|----------------|-------------|
| **Branco** | corte_limpo | fade |
| **Preto** | fade (dark) | double_exposure |
| **Dourado** | corte_limpo | offset |
| **Arcano** | double_exposure | torn |

---

## 6. ESTRUTURA DE 10 SLIDES (Sequência Padrão)

Todo carrossel segue esta distribuição de layouts — **nunca dois layouts iguais consecutivos:**

| Slide | Função | Layout recomendado | Imagem? |
|-------|--------|--------------------|---------|
| **1** | **Capa** — Gancho visual máximo | COVER_CENTER ou COVER_TOP | ✅ Sim (fundo) |
| **2** | **Ponte** — Contextualização, abre lacuna | EDITORIAL_STD ou MAG_TOP | ❌ ou opcional |
| **3** | **Corpo** — Primeiro argumento | STORY_LEFT ou MAG_MID | ✅ Sim |
| **4** | **Corpo** — Desenvolvimento | EDITORIAL_STD | ❌ Não (tipográfico) |
| **5** | **Ruptura** — Plot twist, O Grito | QUOTE_BOX ou STORY_TOTAL | ✅ opcional |
| **6** | **Corpo** — Argumento forte | MAG_BOT ou STORY_RIGHT | ✅ Sim |
| **7** | **Prova** — Dados, evidência | DATA_CARD ou LIST_CLEAN | ❌ Não |
| **8** | **Autoridade** — Citação ou prova social | QUOTE_BOX ou TWITTER | ❌ Não |
| **9** | **Clímax** — Conclusão narrativa | STORY_TOTAL ou EDITORIAL_STD | ✅ Sim (forte) |
| **10** | **CTA** — Chamada para ação | CTA_MINIMAL ou CTA_SPLIT | ❌ ou ✅ |

**Total de imagens típico por carrossel: 4 a 6**

---

## 7. REGRAS ANTI-ERRO (Para IAs de Imagem)

### ❌ Erros Comuns e Como Evitar

| Erro | Causa | Solução no prompt |
|------|-------|-------------------|
| **Texto cortado na borda** | Sem margem de segurança | "80px safe margin on all sides, no text touching edges" |
| **Texto ilegível sobre imagem** | Sem overlay/gradiente | "dark gradient overlay 50-60% opacity behind text area" |
| **Fontes inconsistentes** | Cada slide com fonte diferente | "consistent typography throughout: [fonte] for headlines, [fonte] for body" |
| **Texto muito pequeno** | Escala errada | "minimum text size 28px, headline 56px or larger" |
| **Layout sem hierarquia** | Todos os elementos do mesmo tamanho | "clear visual hierarchy: headline 2x larger than body text" |
| **Cores sem contraste** | Texto claro sobre fundo claro | "dark text on light backgrounds, light text on dark backgrounds — always" |
| **Imagem muito detalhada atrás do texto** | Fundo ruidoso compete com texto | "simple or blurred background where text overlays, clean composition" |
| **Slides todos iguais** | Mesmo layout repetido | "vary layout between slides: alternate between text-only, image-left, image-right, centered" |
| **Sangria (bleed) invertida** | Texto sangrando, imagem com margem | "images can bleed to edges, text must stay within safe zone" |
| **Espaço mal distribuído** | Tudo amontoado num canto | "balanced distribution of elements, generous whitespace between sections" |

### ✅ Checklist por Slide

Antes de aceitar cada slide gerado:
- [ ] Todo texto está dentro da safe zone (80px de margem)?
- [ ] O headline é legível em tamanho de celular?
- [ ] O contraste texto/fundo é forte o suficiente?
- [ ] O layout é diferente do slide anterior?
- [ ] O estilo visual (cores, fontes, atmosfera) é consistente com os outros slides?
- [ ] Se tem imagem de fundo, há overlay para legibilidade do texto?

---

## 8. TEMPLATE DE PROMPT (Copiar e Adaptar)

### Prompt Base (adaptar por slide)

```
Generate a carousel slide image, 1080x1080px, 1:1 aspect ratio.

LAYOUT: [nome do layout — ex: COVER_CENTER]
STYLE: [nome do pergaminho — ex: Pergaminho Preto]
FONT STYLE: [nome do estilo — ex: impact]
IMAGE EFFECT: [nome do efeito — ex: fade]

STRUCTURE:
- [descrição do wireframe conforme seção 2]
- 80px safe margin on all sides
- [posição do headline, corpo, imagem conforme layout]

COLORS:
- Background: [hex do pergaminho]
- Text: [hex do texto]
- Accent: [hex do acento]

TYPOGRAPHY:
- Headline: "[texto]" — [tamanho]px, [peso], [fonte]
- Body: "[texto]" — [tamanho]px, regular, [fonte]
- Handle: "@handle" — 16px, bottom center

ATMOSPHERE:
[keywords do pergaminho da seção 3]

RULES:
- No text touching canvas edges
- Clear visual hierarchy
- Consistent style across all slides in series
- [fonte do título] for headlines only, [fonte do corpo] for body text
```

### Exemplo Concreto — Slide 1 Pergaminho Preto

```
Generate a carousel slide image, 1080x1080px, 1:1 aspect ratio.

LAYOUT: COVER_CENTER
STYLE: Pergaminho Preto (void dark premium)
FONT STYLE: impact (Anton + Inter)
IMAGE EFFECT: fade

STRUCTURE:
- Full-bleed atmospheric background image
- Dark gradient overlay 60% opacity
- Headline centered vertically and horizontally in safe zone
- Subtitle below headline
- Handle at bottom center
- 80px safe margin on all sides

COLORS:
- Background: #080808 (void black)
- Headline text: #F5EDE0 (warm off-white)
- Subtitle: #C8C0A8 (warm light grey)
- Accent elements: #E8B923 (vivid gold)
- Gold glow on headline: subtle

TYPOGRAPHY:
- Headline: "O QUE NINGUÉM TE CONTA SOBRE AUTORIDADE" — 64px, bold, Anton
- Subtitle: "E por que 90% dos experts falham" — 36px, regular, Inter
- Handle: "@chavemestra" — 16px, Inter, bottom center

ATMOSPHERE:
Void black background, premium dark design, gold text accents,
moody atmospheric lighting, dramatic shadows, subtle gold ambient light,
cinematic dark aesthetic, high contrast

RULES:
- No text touching canvas edges (80px margin minimum)
- Dark gradient overlay must ensure text legibility
- Gold elements used sparingly (max 25% visual area)
- Headline must be clearly legible on mobile at arm's length
```

---

## 9. MAPA DE IMAGENS POR LAYOUT

Quantas imagens cada layout exige e em qual formato:

| Layout | Qtd Imagens | Tipo | Aspect Ratio |
|--------|-------------|------|-------------|
| COVER_CENTER | 1 | Background full-bleed | 1:1 |
| COVER_TOP | 1 | Imagem inferior | 1:1 |
| COVER_BOTTOM | 1 | Imagem superior | 1:1 |
| STORY_TOTAL | 1 | Full-bleed com overlay | 1:1 |
| STORY_LEFT | 1 | Lado esquerdo (~50%) | 1:2 vertical |
| STORY_RIGHT | 1 | Lado direito (~50%) | 1:2 vertical |
| STORY_MID_IMG | 1 | Centro (~40%) | 1:1 ou circular |
| MAG_TOP | 1 | Faixa topo (~40%) | 2.5:1 horizontal |
| MAG_MID | 1 | Faixa centro (~30%) | 3:1 horizontal |
| MAG_BOT | 1 | Faixa base (~40%) | 2.5:1 horizontal |
| CTA_SPLIT | 1 | Metade visual | 1:2 vertical |
| EDITORIAL_STD | 0 | Sem imagem (tipográfico) | — |
| CTA_MINIMAL | 0 | Sem imagem | — |
| CTA_CARD | 0–1 | Opcional | 1:1 |
| QUOTE_BOX | 0 | Sem imagem | — |
| LIST_CLEAN | 0 | Sem imagem | — |
| DATA_CARD | 0 | Sem imagem | — |
| TWITTER | 0 | Apenas avatar (64px) | 1:1 circular |

---

*Wireframe Reference Kit v1.0 — Sistema Chave Mestra*
*Para uso com qualquer IA de geração de imagem*
*Criado em: 2026-05-13*
