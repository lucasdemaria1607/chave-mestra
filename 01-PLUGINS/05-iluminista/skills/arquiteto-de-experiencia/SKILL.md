---
name: arquiteto-de-experiencia
version: 1.0
plugin: "05-iluminista"
layer: "Transversal — UX/UI/Content Design"
description: >
  Sistema de design de experiência para conteúdo digital. Cobre UX de conteúdo,
  UI de peças visuais, content design, microinterações, hierarquia visual,
  grid systems e padrões de leitura. Opera sobre outputs do Bardo (carrosséis,
  roteiros) e do Arauto (campanhas) para garantir que a experiência visual
  maximize retenção e conversão.
  Triggers: "UX do conteúdo", "hierarquia visual", "design de experiência",
  "arquiteto", "layout", "grid", "microinteração", "scroll", "bento grid".
---

# Arquiteto de Experiência — UX/UI/Content Design

---

## PROPÓSITO

O Arquiteto de Experiência garante que todo conteúdo visual do sistema Chave Mestra seja **projetado para performance** — não apenas bonito, mas estrategicamente organizado para reter atenção, guiar o olho e converter.

Opera como camada de inteligência visual sobre os outputs dos outros plugins.

---

## PRINCÍPIOS DE DESIGN

### 1. Hierarquia Visual (Lei de Fitts + Gestalt)
- **Título:** sempre o maior elemento. Peso visual dominante.
- **Corpo:** texto secundário. Contraste suficiente mas não competindo com o título.
- **CTA:** posição e cor que criam urgência visual. Nunca perdido no layout.
- **Espaço negativo:** é tão importante quanto o conteúdo. Permite respiração.

### 2. Padrões de Leitura
| Formato | Padrão | Aplicação |
|---------|--------|-----------|
| Post 1:1 | Z-pattern | Título topo-esquerda → imagem → CTA inferior-direita |
| Carrossel | F-pattern por slide | Manchete topo → corpo centro → gancho inferior |
| Story 9:16 | Single-column | Vertical flow: gancho → conteúdo → swipe CTA |
| Landing page | Z + F híbrido | Hero → benefícios (F) → prova social → CTA |

### 3. Microinterações e Ritmo Visual
- **Em carrosséis:** variar layouts entre slides para manter engagement (não repetir o mesmo grid 10x)
- **Em stories:** usar progressão visual — slides iniciais mais simples, crescendo em complexidade
- **Em campanhas:** cada fase tem personalidade visual distinta mas coerente com o todo

---

## SISTEMA DE LAYOUTS PARA CARROSSEL

Baseado nos 30+ layouts do plugin Figma Chavossel:

### Layouts de Capa
| Layout | Uso ideal |
|--------|-----------|
| COVER_CENTER | Título central impactante, fundo visual forte |
| COVER_TOP | Título no topo, imagem dominante embaixo |
| COVER_BOTTOM | Imagem topo, título + CTA embaixo |

### Layouts de Conteúdo
| Layout | Uso ideal |
|--------|-----------|
| EDITORIAL_STD | Texto longo editorial, layout de revista |
| MAG_TOP / MAG_MID / MAG_BOT | Variações magazine com posição de imagem |
| STORY_LEFT / STORY_RIGHT | Imagem + texto lado a lado |
| STORY_MID_IMG | Imagem central com texto envolvendo |
| STORY_TOTAL | Imagem full-bleed com texto overlay |

### Layouts de CTA / Fechamento
| Layout | Uso ideal |
|--------|-----------|
| CTA_MINIMAL | Slide final limpo com chamada |
| CTA_CARD | Card destacado com ação |
| CTA_SPLIT | Divisão visual: benefício vs ação |

### Layouts Especiais
| Layout | Uso ideal |
|--------|-----------|
| TWITTER | Formato tweet estilizado |
| QUOTE_BOX | Citação destacada |
| LIST_CLEAN | Lista visual organizada |
| DATA_CARD | Dados/métricas em cards |

---

## MAPA DE IMAGENS POR LAYOUT

Cada layout do Chavossel demanda um número específico de imagens. Usar esta tabela para calcular automaticamente quantas imagens gerar para um carrossel:

| Layout | Imagens | Tipo de imagem | Aspect ratio |
|--------|---------|----------------|-------------|
| COVER_CENTER | 1 | Background full-bleed | 1:1 |
| COVER_TOP | 1 | Imagem topo | 1:1 |
| COVER_BOTTOM | 1 | Imagem inferior | 1:1 |
| STORY_TOTAL | 1 | Full-bleed com overlay | 1:1 |
| STORY_LEFT | 1 | Lado esquerdo (~50%) | 1:2 vertical |
| STORY_RIGHT | 1 | Lado direito (~50%) | 1:2 vertical |
| STORY_MID_IMG | 1 | Centro horizontal | 2:1 horizontal |
| MAG_TOP | 1 | Topo (~40% do frame) | 3:1 horizontal |
| MAG_MID | 1 | Centro (~30% do frame) | 3:1 horizontal |
| MAG_BOT | 1 | Base (~40% do frame) | 3:1 horizontal |
| CTA_SPLIT | 1 | Metade visual | 1:2 vertical |
| EDITORIAL_STD | 0-1 | Opcional, editorial | variável |
| CTA_MINIMAL | 0 | Sem imagem | — |
| CTA_CARD | 0-1 | Opcional, card | 1:1 |
| TWITTER | 0 | Apenas avatar | — |
| QUOTE_BOX | 0 | Sem imagem | — |
| LIST_CLEAN | 0 | Sem imagem | — |
| DATA_CARD | 0 | Sem imagem | — |

**Cálculo automático:** para um carrossel de 10 slides, somar a coluna "Imagens" dos layouts escolhidos. Resultado típico: **5 a 7 imagens**.

**Geração contextual [PRO]:** quando a Forja de Imagem estiver ativa, o Arquiteto analisa o texto de cada slide e gera um prompt descritivo para a imagem correspondente, respeitando:
1. O Pergaminho ativo (paleta + keywords de estilo)
2. A narrativa do slide (o que a imagem deve ilustrar)
3. O tipo de imagem exigido pelo layout (full-bleed, lateral, horizontal)
4. Coerência visual entre todas as imagens do carrossel

---

## REGRAS DE COMPOSIÇÃO

### Para Carrosséis (10 slides)
1. **Slide 1 (Capa):** COVER_CENTER ou COVER_TOP — gancho visual máximo
2. **Slides 2-3:** EDITORIAL ou STORY — estabelecer o argumento
3. **Slides 4-6:** Variar entre MAG, STORY_MID_IMG, LIST — manter ritmo
4. **Slides 7-8:** DATA_CARD ou QUOTE_BOX — prova/autoridade
5. **Slide 9:** Clímax narrativo — STORY_TOTAL ou editorial forte
6. **Slide 10 (CTA):** CTA_MINIMAL ou CTA_SPLIT — ação clara

**Regra de ouro:** nunca 2 layouts iguais consecutivos. Variar para manter scroll.

### Para Posts (1:1)
- Máximo 3 elementos visuais
- Título legível em mobile (mín 24pt equivalente)
- CTA no terço inferior
- Contraste mínimo 4.5:1 (WCAG AA)

### Para Stories (9:16)
- Conteúdo principal nos 60% centrais (safe zone)
- Topo e base são áreas de interface do app
- Texto legível em 2-3 segundos
- Progressão: gancho → conteúdo → ação

---

## ESTILOS TIPOGRÁFICOS

Baseado nos 6 font styles do Chavossel:

| Estilo | Título | Corpo | Personalidade |
|--------|--------|-------|---------------|
| **elegant** | Playfair Display | Lato | Sofisticado, editorial |
| **modern** | Montserrat | Roboto | Limpo, tech, startups |
| **oldmoney** | Cinzel | EB Garamond | Clássico, autoridade, luxo |
| **impact** | Anton | Inter | Bold, urgência, direto |
| **aesthetic** | Playfair Display | Montserrat Light | Artístico, delicado |
| **jornal** | Merriweather | Georgia | Jornalístico, credibilidade |

### Mapeamento Pergaminho → Estilo Tipográfico
| Pergaminho | Estilo primário | Alternativa |
|------------|----------------|-------------|
| **Branco** | elegant / aesthetic | modern |
| **Preto** | impact / modern | elegant |
| **Dourado** | oldmoney / elegant | jornal |
| **Arcano** | aesthetic / oldmoney | elegant |

---

## EFEITOS VISUAIS

Baseado nos 5 efeitos de imagem do Chavossel:

| Efeito | Descrição | Quando usar |
|--------|-----------|-------------|
| **fade** | Gradiente suave sobre a imagem | Texto sobre foto — garante legibilidade |
| **corte_limpo** | Recorte geométrico preciso | Layout editorial limpo |
| **offset** | Imagem deslocada do centro | Dinamismo, modernidade |
| **double_exposure** | Sobreposição dupla | Conceitual, artístico |
| **torn** | Efeito de papel rasgado | Orgânico, handmade, rebelde |

### Mapeamento Pergaminho → Efeito
| Pergaminho | Efeito primário | Alternativa |
|------------|----------------|-------------|
| **Branco** | corte_limpo | fade |
| **Preto** | fade (dark) | double_exposure |
| **Dourado** | corte_limpo | offset |
| **Arcano** | double_exposure | torn |

---

## FLUXO DE TRABALHO

1. **Receber briefing** do plugin origem (Bardo, Arauto, etc.)
2. **Identificar Pergaminho ativo** → carregar paleta + estilo + efeito
3. **Selecionar layouts** para cada peça (respeitando regras de composição)
4. **Definir hierarquia** de elementos por slide/post/story
5. **Entregar especificação** para Ponte Figma executar ou para geração direta

---

## INTER-PLUGIN

| Plugin origem | O que recebe | O que entrega |
|---------------|-------------|---------------|
| **Bardo** (Chavossel) | Texto de 10 slides | Especificação de layout por slide + estilo |
| **Bardo** (Chavideo) | Roteiro de vídeo | Sugestão de thumbnails + stills |
| **Arauto** (Campanha) | Cronograma + fases | Identidade visual por fase da campanha |
| **Alquimista** (Copy) | Copy calibrada | Hierarquia visual para a peça |
| **Forja de Imagem** | Imagens brutas | Direção de estilo para geração |
| **Ponte Figma** | Specs completas | Recebe para renderização no Figma |
