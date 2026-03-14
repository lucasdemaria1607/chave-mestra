# Iluminista — Plugin de Design, UX e Produção Visual v4.0

O Iluminista. Cobre design system, geração de imagens por IA, UX/UI de conteúdo, integração com Figma e publicação visual no Notion.

## Skills

| Skill | Função |
|-------|--------|
| **Sistema de Design** | Design system v3.2: 4 pergaminhos visuais (Branco/Preto/Dourado/Arcano), motor de tema, CSS, tokens, engenharia reversa visual |
| **Forja de Imagem** | **[PRO]** Geração de imagens por IA via Nano Banana Pro (Gemini API) — opcional, requer API key paga |
| **Arquiteto de Experiência** | UX/UI de conteúdo: hierarquia visual, layouts, tipografia, efeitos, regras de composição |
| **Ponte Figma** | Integração com plugin Figma Chavossel: injeção de texto/imagens, renderização de carrosséis, leitura de design tokens |
| **Publicador Visual** | Exportação de conteúdo visual para Notion: imagens, carrosséis, assets de campanha |

## Posição no Pipeline

```
CAMADA VISUAL — opera transversalmente sobre todos os outputs

Bardo (texto) → Iluminista (design + imagem) → Figma (render) → Notion (publicar)
     ↑                    ↓
Alquimista (copy)    Arauto (campanha → MINHA ESTEIRA + visuais)
```

## Pergaminhos Visuais

| Pergaminho | Identidade | Cor dominante | Fonte |
|------------|------------|---------------|-------|
| **Branco** | Limpo, minimalista — conteúdo educativo | #FFFFFF / #2C2C2C | elegant |
| **Preto** | Dark, premium — conteúdo avançado | #0A0A08 / #D4AF37 | impact |
| **Dourado** | Luxo, exclusividade — ofertas high ticket | #1A1A1A / #D4AF37 | oldmoney |
| **Arcano** | Místico, profundo — conteúdo filosófico | #1A0A2E / #7B2FF2 | aesthetic |

## Integrações

| Ferramenta | Via | Função |
|------------|-----|--------|
| **Nano Banana Pro** | Claude Code skill | **[PRO]** Geração de imagens (Gemini API) — opcional, custo por imagem |
| **Figma** | MCP (get_design_context, get_screenshot, etc.) | Renderização de carrosséis, leitura de tokens |
| **Notion** | MCP (create-pages, update-page, search) | Publicação de conteúdo visual |

## Princípios

1. **Congruência visual obrigatória.** O visual confirma o posicionamento narrativo.
2. **Dois modos:** Modo CM (tema Chave Mestra) e Modo Cliente (tema customizado).
3. **Tokens são lei.** Cores, fontes e espaçamentos vêm do sistema de tokens.
4. **Pipeline integrado.** Texto → Imagem → Layout → Publicação — sem etapas manuais desnecessárias.
5. **Design é persuasão.** Conteúdo medíocre com design excelente vende mais que o inverso.
6. **Zero dependência de serviços pagos.** O sistema base funciona 100% sem Nano Banana ou APIs pagas. Skills Pro são aceleradores opcionais.

## Gatilhos

`"tema visual"` · `"design system"` · `"pergaminho branco/preto/dourado/arcano"` · `"CSS"` · `"identidade visual"` · `"iluminista"` · `"gera imagem"` · `"forja de imagem"` · `"nano banana"` · `"UX"` · `"layout"` · `"hierarquia visual"` · `"manda pro Figma"` · `"ponte Figma"` · `"publica no Notion"` · `"exporta visual"`

## Estrutura de Output

```
04-PERGAMINHOS/visuais/
├── posts/          → Imagens 1:1 para posts
├── carrosseis/     → Subpastas por carrossel
├── stories/        → Imagens 9:16 para stories
├── thumbnails/     → Imagens 16:9 para thumbnails
└── assets/         → Assets soltos (logos, texturas, backgrounds)
```
