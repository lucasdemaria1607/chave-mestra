---
name: forja-de-imagem
version: 1.1
plugin: "05-iluminista"
layer: "Transversal — Criação Visual"
tier: "PRO (opcional)"
description: >
  [SKILL PRO — OPCIONAL] Geração e edição de imagens por IA via Nano Banana Pro
  (Google Gemini Image API). Requer chave Google API paga e skill Nano Banana Pro
  instalada. O sistema Chave Mestra funciona 100% sem esta skill — ela é um
  acelerador para quem quer gerar imagens por IA dentro do pipeline.
  Suporta texto-para-imagem, edição de imagens existentes, composição multi-imagem,
  presets visuais e controle de custos. Integra com o sistema de Pergaminhos Visuais
  (Branco/Preto/Dourado/Arcano) para geração temática consistente.
  Triggers: "gera imagem", "cria visual", "forja de imagem", "nano banana",
  "edita essa imagem", "compõe imagens", "imagem para post", "imagem para carrossel".
---

# Forja de Imagem — Geração Visual por IA

> **SKILL PRO (OPCIONAL)** — Requer Google API Key (nível pago) + skill Nano Banana Pro instalada no Claude Code. O sistema Chave Mestra funciona completo sem esta skill. Ative apenas quando quiser gerar imagens por IA dentro do pipeline.

---

## PROPÓSITO

A Forja de Imagem é o motor **opcional** de geração visual do ecossistema Chave Mestra. Usa a skill Nano Banana Pro (Google Gemini Image API) para criar, editar e compor imagens de alta qualidade diretamente no Claude Code.

**Regra de ouro:** toda imagem gerada deve servir a um propósito no pipeline — post, carrossel, story, thumbnail, asset de campanha. Imagem sem destino é desperdício de token.

**Custo:** cada imagem custa entre $0.04 e $0.24 dependendo do modelo e resolução. Confirmar com o usuário antes de gerar em lote.

---

## FERRAMENTA

**CLI:** `uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py [OPTIONS]`

**Pré-requisitos:**
- `uv` instalado
- `GOOGLE_API_KEY` configurada em `~/.claude/.env`

---

## MODELOS DISPONÍVEIS

| Modelo | Velocidade | Qualidade | Melhor para | Resolução máx |
|--------|-----------|-----------|-------------|---------------|
| gemini-3.1-flash-image-preview | Rápido | Alta | Uso geral (recomendado) | 4K |
| gemini-3-pro-image-preview | Mais lento | Máxima | Assets profissionais, texto em imagem | 4K |
| gemini-2.5-flash-image | Mais rápido | Boa | Budget, rascunhos rápidos | 1K |

---

## PRESETS NANO BANANA

| Preset | Resolução | Aspecto | Estilo |
|--------|-----------|---------|--------|
| photorealistic | 2K | 3:2 | Foto DSLR |
| social-media | 1K | 1:1 | Posts Instagram/Facebook |
| social-story | 1K | 9:16 | Stories/Reels/TikTok |
| product | 2K | 1:1 | Fotos de produto em estúdio |
| banner | 2K | 21:9 | Hero/banner de website |
| thumbnail | 1K | 16:9 | Thumbnails YouTube |
| illustration | 2K | 1:1 | Arte digital/ilustração |
| cinematic | 4K | 21:9 | Stills cinematográficos |

---

## MAPEAMENTO PERGAMINHO → ESTILO DE IMAGEM

Quando o contexto da sessão identifica um Pergaminho ativo, aplicar o estilo correspondente no prompt:

| Pergaminho | Paleta dominante | Estilo de prompt | Keywords obrigatórias |
|------------|-----------------|------------------|----------------------|
| **Branco** | #f5edd6, #2c2c2c, branco | Limpo, editorial, minimalista | "clean white background, editorial, minimalist, soft natural light" |
| **Preto** | #0a0a08, #d4af37, preto profundo | Dark premium, contraste alto | "dark background, moody lighting, premium feel, gold accents" |
| **Dourado** | #d4af37, #1a1a1a, dourado | Luxo, exclusividade | "luxury gold tones, rich textures, opulent, high-end product feel" |
| **Arcano** | #1a0a2e, #7b2ff2, roxo místico | Místico, profundo, etéreo | "mystical atmosphere, deep purple haze, ethereal glow, arcane symbols" |

---

## FLUXOS DE GERAÇÃO

### 1. Imagem para Post (1:1)
```bash
uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "DESCRIÇÃO + keywords do pergaminho ativo" \
  --preset social-media \
  --output "CHAVE-MESTRA/04-PERGAMINHOS/visuais/posts/YYYY-MM-DD-descricao.png"
```

### 2. Imagens para Carrossel (série)
Gerar N imagens coerentes para slides de carrossel:
```bash
# Para cada slide que precisa de imagem:
uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "Slide N: DESCRIÇÃO, consistent style with previous slides" \
  --resolution 2K --aspect-ratio 1:1 \
  --output "CHAVE-MESTRA/04-PERGAMINHOS/visuais/carrosseis/NOME-CARROSSEL/slide-NN.png"
```

### 3. Imagem para Story (9:16)
```bash
uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "DESCRIÇÃO" \
  --preset social-story \
  --output "CHAVE-MESTRA/04-PERGAMINHOS/visuais/stories/YYYY-MM-DD-descricao.png"
```

### 4. Thumbnail (16:9)
```bash
uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "DESCRIÇÃO" \
  --preset thumbnail \
  --output "CHAVE-MESTRA/04-PERGAMINHOS/visuais/thumbnails/YYYY-MM-DD-descricao.png"
```

### 5. Edição de Imagem Existente
```bash
uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "INSTRUÇÃO DE EDIÇÃO" \
  -i /caminho/para/imagem-original.png \
  --output /caminho/para/imagem-editada.png
```

### 6. Composição Multi-Imagem (até 14 referências)
```bash
uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "INSTRUÇÃO DE COMPOSIÇÃO" \
  -i img1.png -i img2.png -i img3.png \
  --output /caminho/para/composta.png
```

---

## FLUXO CROSS-PLUGIN: BARDO → FORJA DE IMAGEM

Quando o Bardo gera um Chavossel (carrossel), a Forja de Imagem pode ser acionada para criar imagens de apoio:

1. **Bardo** gera o texto do carrossel (10 slides)
2. **Forja de Imagem** analisa quais slides precisam de imagem
3. Gera imagens coerentes entre si (mesmo estilo, mesma paleta do Pergaminho ativo)
4. Salva em `04-PERGAMINHOS/visuais/carrosseis/NOME/`
5. **Ponte Figma** injeta texto + imagens nos frames do plugin Chavossel

---

## ESTRUTURA DE OUTPUT

Todas as imagens geradas são salvas em:
```
CHAVE-MESTRA/04-PERGAMINHOS/visuais/
├── posts/          → Imagens 1:1 para posts
├── carrosseis/     → Subpastas por carrossel (slide-01.png, slide-02.png...)
│   └── NOME-CARROSSEL/
├── stories/        → Imagens 9:16 para stories
├── thumbnails/     → Imagens 16:9 para thumbnails
└── assets/         → Assets soltos (logos, texturas, backgrounds)
```

---

## CUSTOS

| Modelo | 512px | 1K | 2K | 4K |
|--------|-------|-----|-----|-----|
| Gemini 3.1 Flash | $0.045 | $0.067 | $0.101 | $0.151 |
| Gemini 3 Pro | — | $0.134 | $0.134 | $0.240 |
| Gemini 2.5 Flash | — | $0.039 | — | — |

**Regra:** para custos acima de $0.10/imagem, rodar `--dry-run` primeiro e confirmar com o usuário.

---

## DICAS DE PROMPT

- **Ser específico:** sujeito + estilo + iluminação + composição
- **Front-load** os detalhes mais importantes
- **Referências de câmera** para fotorrealismo: "shot on Canon EOS R5, 85mm f/1.4"
- **Keywords de arte** para ilustrações: "watercolor", "vector", "oil painting"
- **2K ou 4K** para texto legível em imagens
- **Consistência em série:** repetir keywords de estilo entre imagens do mesmo carrossel
