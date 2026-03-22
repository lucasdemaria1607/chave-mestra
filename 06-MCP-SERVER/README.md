# Chave Mestra MCP Server

MCP Server que expõe o Sistema Chave Mestra completo — 6 plugins, 24 skills, documentos fundacionais — para qualquer cliente MCP (Claude Code, Claude Cowork, Cursor, etc.).

## Instalação

### Claude Code (CLI)

```bash
cd CHAVE-MESTRA/06-MCP-SERVER
npm install && npm run build
claude mcp add chave-mestra -- node /caminho/para/06-MCP-SERVER/dist/index.js
```

### Claude Desktop / Cowork

Adicione ao `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "chave-mestra": {
      "command": "node",
      "args": ["/caminho/para/CHAVE-MESTRA/06-MCP-SERVER/dist/index.js"]
    }
  }
}
```

## O que expõe

### Tools (5)

| Tool | Descrição |
|---|---|
| `listar-plugins` | Lista todos os plugins e skills disponíveis |
| `ler-skill` | Lê o conteúdo completo de uma skill por slug |
| `ler-fundacao` | Lê documentos fundacionais (filosofia, glossário, etc.) |
| `buscar` | Busca por termo em todo o sistema |
| `ativar-plugin` | Carrega contexto completo de uma skill + referências + glossário |

### Prompts (11)

| Prompt | Descrição |
|---|---|
| `sistema-chave-mestra` | Prompt completo do sistema — transforma qualquer conversa no ecossistema CM |
| `mapear-mercado` | Análise de mercado com Portal do Terreno |
| `criar-persona` | Mapeamento com Alma da Persona + SZC |
| `criar-copy` | Copy com Copy 3x5 + Método Carga |
| `criar-oferta` | Oferta irresistível com Forja de Oferta |
| `criar-video` | Roteiro de vídeo curto com Chavideo |
| `criar-carrossel` | Carrossel editorial com Chavossel |
| `planejar-campanha` | Campanha de lançamento com Mapa de Campanha |
| `diagnostico-escala` | Diagnóstico de fase com Portal da Escala |
| `worldbuilding` | Universo de marca com Forja do Universo |
| `capturar-conhecimento` | Captura de insight no Zettelkasten |

### Resources (55+)

Todos os documentos do sistema acessíveis via URI:
- `cm://foundation/{nome}` — Documentos fundacionais
- `cm://skill/{plugin}/{skill}` — SKILL.md de cada skill
- `cm://reference/{plugin}/{skill}/{ref}` — Referências co-locadas

## Build

```bash
npm run build:content  # Embute todos os .md no JSON
npm run build:ts       # Compila TypeScript
npm run build          # Os dois juntos
```

Após editar qualquer SKILL.md ou documento fundacional, reconstruir:

```bash
npm run build
```

## Desenvolvimento

```bash
npm run dev  # Build + run com tsx
```
