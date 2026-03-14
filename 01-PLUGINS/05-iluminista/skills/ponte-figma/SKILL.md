---
name: ponte-figma
version: 1.0
plugin: "05-iluminista"
layer: "Transversal — Renderização Figma"
description: >
  Ponte de integração entre o sistema Chave Mestra e o plugin Figma Chavossel.
  Usa Figma MCP para injetar conteúdo (texto + imagens) nos frames de carrossel,
  ler design tokens, extrair screenshots e sincronizar o design system.
  Triggers: "manda pro Figma", "renderiza no Figma", "ponte Figma", "Chavossel Figma",
  "injeta nos frames", "gera carrossel no Figma", "exporta do Figma".
---

# Ponte Figma — Integração com Plugin Chavossel

---

## PROPÓSITO

A Ponte Figma conecta o pipeline de conteúdo do Chave Mestra ao plugin Figma Chavossel, permitindo que textos gerados pelo Bardo e imagens geradas pela Forja de Imagem sejam renderizados automaticamente em layouts profissionais no Figma.

---

## FERRAMENTAS MCP DISPONÍVEIS

| Ferramenta | Função |
|------------|--------|
| `get_design_context` | Ler estrutura de um arquivo Figma (layers, frames, componentes) |
| `get_screenshot` | Capturar screenshot de frames específicos |
| `get_metadata` | Ler metadados do arquivo (nome, última edição, colaboradores) |
| `get_variable_defs` | Ler variáveis de design (cores, espaçamentos, tipografia) |
| `get_code_connect_map` | Mapear componentes Figma ↔ código |
| `add_code_connect_map` | Adicionar mapeamento componente ↔ código |
| `create_design_system_rules` | Criar regras de design system no Figma |

---

## PLUGIN FIGMA CHAVOSSEL — REFERÊNCIA TÉCNICA

### Tipos de Mensagem para Integração

| Mensagem | Função | Quando usar |
|----------|--------|-------------|
| `generate-master` | Gerar carrossel completo (N slides) | Pipeline completo: texto → frames |
| `apply-single-img` | Aplicar 1 imagem a 1 frame | Injetar imagem gerada pela Forja |
| `apply-imgs-sync` | Aplicar múltiplas imagens sincronizadas | Lote de imagens para carrossel |
| `apply-profile-pic` | Aplicar foto de perfil | Personalização de slides com avatar |
| `update-smart` | Atualizar layout inteligente | Re-layout sem perder conteúdo |
| `update-text-only` | Atualizar apenas texto | Edição rápida de copy |
| `adjust-font` | Ajustar fonte/tamanho | Fine-tuning tipográfico |

### Formato de Texto Chavossel

O plugin Figma espera texto neste formato:
```
# Título do Slide
Corpo do texto aqui. Pode ter múltiplas linhas.
**Texto em bold** para destaque (O Grito).
*Texto com highlight* para marcação.
_Texto em itálico_ para ênfase suave.
~Texto sublinhado~ para links visuais.
[WATERMARK: texto da marca d'água]
---
# Próximo Slide
...
```

- `#` = Título (manchete)
- `---` = Separador de slides
- `**bold**` = Bold (O Grito)
- `*highlight*` = Marcação colorida
- `_italic_` = Itálico
- `~underline~` = Sublinhado
- `[WATERMARK: texto]` = Marca d'água

### 30+ Layouts Disponíveis

**Capas:** COVER_CENTER, COVER_TOP, COVER_BOTTOM
**Stories:** STORY_TOTAL, STORY_LEFT, STORY_RIGHT, STORY_MID_IMG
**Editorial:** EDITORIAL_STD
**Magazine:** MAG_TOP, MAG_MID, MAG_BOT
**CTA:** CTA_MINIMAL, CTA_CARD, CTA_SPLIT
**Especiais:** TWITTER, QUOTE_BOX, LIST_CLEAN, DATA_CARD

### 6 Estilos de Fonte

| ID | Título | Corpo |
|----|--------|-------|
| elegant | Playfair Display | Lato |
| modern | Montserrat | Roboto |
| oldmoney | Cinzel | EB Garamond |
| impact | Anton | Inter |
| aesthetic | Playfair Display | Montserrat Light |
| jornal | Merriweather | Georgia |

### 5 Efeitos de Imagem

| ID | Descrição |
|----|-----------|
| fade | Gradiente suave sobre imagem |
| corte_limpo | Recorte geométrico |
| offset | Imagem deslocada |
| double_exposure | Dupla exposição |
| torn | Papel rasgado |

---

## MAPEAMENTO PERGAMINHO → CONFIGURAÇÃO FIGMA

| Pergaminho | Cores hex | Font style | Efeito | Layout preferido (capa) |
|------------|-----------|-----------|--------|------------------------|
| **Branco** | bg: #FFFFFF, text: #2C2C2C, accent: #D4AF37 | elegant | corte_limpo | COVER_CENTER |
| **Preto** | bg: #0A0A08, text: #F5EDD6, accent: #D4AF37 | impact | fade | COVER_TOP |
| **Dourado** | bg: #1A1A1A, text: #D4AF37, accent: #F5EDD6 | oldmoney | corte_limpo | COVER_BOTTOM |
| **Arcano** | bg: #1A0A2E, text: #E8D5F5, accent: #7B2FF2 | aesthetic | double_exposure | STORY_TOTAL |

---

## FLUXOS DE INTEGRAÇÃO

### Fluxo 1: Texto do Bardo → Figma
```
1. Bardo gera Chavossel (10 slides em formato texto)
2. Arquiteto de Experiência define layout por slide
3. Ponte Figma formata texto no padrão Chavossel (#, ---, **, etc.)
4. Envia via MCP → generate-master com configuração:
   - layout por slide
   - font_style conforme Pergaminho
   - effect conforme Pergaminho
   - cores conforme Pergaminho
```

### Fluxo 2: Imagens da Forja → Figma
```
1. Forja de Imagem gera N imagens para carrossel
2. Ponte Figma usa apply-imgs-sync para injetar
3. Plugin auto-aplica efeito (fade, corte_limpo, etc.)
4. Smart systems ajustam contraste e hierarquia
```

### Fluxo 3: Leitura do Figma → Sistema
```
1. Ponte Figma usa get_design_context para ler estrutura
2. Extrai cores, fontes, componentes via get_variable_defs
3. Alimenta o Sistema de Design com tokens reais do arquivo
4. Garante sincronização entre Figma e os Pergaminhos
```

### Fluxo 4: Screenshot → Revisão
```
1. Ponte Figma usa get_screenshot de frames renderizados
2. Exibe para revisão do usuário no Claude Code
3. Usuário solicita ajustes → update-text-only ou adjust-font
4. Iteração rápida sem sair do pipeline
```

---

## SMART SYSTEMS DO PLUGIN FIGMA

O plugin Chavossel tem sistemas inteligentes que operam automaticamente:

| Sistema | Função |
|---------|--------|
| **Contrast Guardian** | getLuminance + getSafeBrandColor — garante legibilidade |
| **Harmony Checker** | checkHarmony — verifica safe zones e margens |
| **Auto-Fit** | syncFrameLayout — ajusta layout ao conteúdo |
| **Layer Hierarchy** | enforceHierarchy — ordena layers por importância |

Estes sistemas operam no lado do Figma. A Ponte Figma não precisa replicá-los — apenas enviar os dados corretos e confiar que o plugin processará.

---

## INTER-PLUGIN

| Plugin | Relação |
|--------|---------|
| **Bardo** (Chavossel) | Recebe texto formatado → envia para Figma |
| **Forja de Imagem** | Recebe imagens → injeta nos frames |
| **Arquiteto de Experiência** | Recebe specs de layout → aplica na configuração |
| **Sistema de Design** | Recebe tokens visuais → mapeia para Figma |
| **Publicador Visual** | Exporta frames renderizados → envia para Notion |
