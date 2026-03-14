---
name: publicador-visual
version: 1.0
plugin: "05-iluminista"
layer: "Transversal — Publicação Visual"
description: >
  Exportação e publicação de conteúdo visual para Notion. Integra imagens
  geradas (Forja de Imagem), frames renderizados (Ponte Figma) e peças
  visuais com as databases de campanha do Arauto no Notion.
  Triggers: "publica no Notion", "exporta visual", "publicador visual",
  "envia imagens pro Notion", "popula visual", "imagens da campanha".
---

# Publicador Visual — Exportação para Notion

---

## PROPÓSITO

O Publicador Visual é a última milha do pipeline visual. Pega imagens e peças renderizadas e publica no Notion, vinculando-as às tarefas de campanha do Arauto (MINHA ESTEIRA) ou a databases dedicadas de conteúdo visual.

---

## FERRAMENTAS MCP DISPONÍVEIS (Notion)

| Ferramenta | Função |
|------------|--------|
| `notion-search` | Buscar páginas e databases no workspace |
| `notion-fetch` | Ler conteúdo de uma página/database específica |
| `notion-create-pages` | Criar novas páginas com conteúdo |
| `notion-create-database` | Criar nova database |
| `notion-create-view` | Criar nova view em database existente |
| `notion-update-page` | Atualizar página existente (propriedades, conteúdo) |

---

## FLUXOS DE PUBLICAÇÃO

### Fluxo 1: Imagens de Post → Notion

```
1. Forja de Imagem gera imagem para post
2. Imagem salva em 04-PERGAMINHOS/visuais/posts/
3. Publicador Visual cria página no Notion:
   - Database: buscar database de conteúdo do usuário
   - Propriedades: título, tipo (post), status (rascunho), data
   - Conteúdo: copy do post (do Bardo/Alquimista) + imagem embeddada
```

### Fluxo 2: Carrossel Completo → Notion

```
1. Bardo gera texto do carrossel
2. Forja de Imagem gera imagens dos slides
3. Ponte Figma renderiza no Figma
4. Publicador Visual cria página no Notion:
   - Database: database de conteúdo
   - Propriedades: título, tipo (carrossel), status, data, nº slides
   - Conteúdo:
     - Texto de cada slide (formatado)
     - Link do Figma (se renderizado)
     - Imagens individuais dos slides
     - Observações de design (layouts usados, estilo)
```

### Fluxo 3: Assets de Campanha → MINHA ESTEIRA

Quando o Arauto popula a esteira de campanha no Notion:

```
1. Arauto cria linha por dia na MINHA ESTEIRA
2. Publicador Visual enriquece cada linha com:
   - Imagem principal do dia (post/story)
   - Link para carrossel no Figma (se aplicável)
   - Preview visual (thumbnail)
3. Resultado: esteira completa com copy + visual integrados
```

### Fluxo 4: Galeria Visual → Database Dedicada

Para organizar todos os visuais produzidos:

```
1. Publicador Visual busca/cria database "Galeria Visual" no Notion
2. Cada imagem gerada vira uma entrada:
   - Título: nome descritivo
   - Tipo: post / carrossel / story / thumbnail / asset
   - Pergaminho: branco / preto / dourado / arcano
   - Campanha: nome da campanha (se vinculada)
   - Data: data de criação
   - Status: rascunho / aprovado / publicado
   - Arquivo: imagem embeddada
```

---

## ESTRUTURA DA DATABASE GALERIA VISUAL

| Propriedade | Tipo | Valores |
|-------------|------|---------|
| Nome | Title | Texto descritivo |
| Tipo | Select | Post, Carrossel, Story, Thumbnail, Asset, Banner |
| Pergaminho | Select | Branco, Preto, Dourado, Arcano, Cliente |
| Campanha | Relation | → database de campanhas |
| Status | Status | Rascunho → Em Revisão → Aprovado → Publicado |
| Data Criação | Date | Auto |
| Plataforma | Multi-select | Instagram, YouTube, LinkedIn, TikTok, Website |
| Resolução | Select | 512px, 1K, 2K, 4K |
| Aspecto | Select | 1:1, 9:16, 16:9, 3:2, 21:9 |
| Custo | Number | Custo de geração (Gemini) |
| Link Figma | URL | Link para frame no Figma (se renderizado) |

---

## REGRAS DE PUBLICAÇÃO

1. **Nunca publicar sem aprovação** — status inicial é sempre "Rascunho"
2. **Nunca hardcode IDs** — sempre buscar databases dinamicamente via notion-search
3. **Metadados completos** — toda imagem publicada leva tipo, pergaminho, resolução
4. **Vincular à campanha** — se a imagem pertence a uma campanha, criar relação
5. **Preservar local** — a imagem original fica em `04-PERGAMINHOS/visuais/`, o Notion recebe uma cópia

---

## INTER-PLUGIN

| Plugin | Relação |
|--------|---------|
| **Arauto** (Esteira Notion) | Enriquece linhas da MINHA ESTEIRA com visuais |
| **Arauto** (Mapa de Campanha) | Recebe plano de campanha → sabe quais visuais precisa |
| **Forja de Imagem** | Recebe imagens geradas → publica |
| **Ponte Figma** | Recebe links de frames renderizados → embeda no Notion |
| **Bardo** | Recebe texto de carrosséis/posts → publica junto com visual |

---

## MODO CLIENTE EXTERNO

Em Modo Cliente Externo, o Publicador Visual:
- Usa o workspace Notion do cliente (não o do Lucas)
- Adapta nomes de databases à nomenclatura do cliente
- Não menciona "Pergaminho", "Chave Mestra" ou termos proprietários
- A database é nomeada conforme o cliente preferir ("Banco de Imagens", "Conteúdos", etc.)
