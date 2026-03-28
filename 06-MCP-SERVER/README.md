# Chave Mestra MCP Server

MCP Server que expoe o Sistema Chave Mestra completo — 6 plugins, 24 skills, documentos fundacionais — para qualquer cliente MCP.

---

## Acesso Remoto (Recomendado)

O servidor esta hospedado na Vercel. Qualquer cliente MCP compativel pode conectar via URL.

**URL:** `https://chave-mestra-mcp.vercel.app/api/mcp`
**Autenticacao:** API Key via query parameter ou header `Authorization: Bearer`

> Sem a chave, todas as requisicoes retornam `401 Unauthorized`.

---

## Como Conectar — Passo a Passo por Cliente

### Claude Code (CLI no terminal)

**Opcao A — Comando direto (mais rapido):**

```bash
claude mcp add chave-mestra --transport http "https://chave-mestra-mcp.vercel.app/api/mcp?key=SUA_CHAVE_AQUI"
```

**Opcao B — Editar o arquivo de config manualmente:**

1. Abra o arquivo de configuracao:
   - **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
   - **Mac:** `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Linux:** `~/.config/Claude/claude_desktop_config.json`

2. Adicione dentro de `"mcpServers"`:

```json
{
  "mcpServers": {
    "chave-mestra": {
      "type": "url",
      "url": "https://chave-mestra-mcp.vercel.app/api/mcp?key=SUA_CHAVE_AQUI"
    }
  }
}
```

3. Reinicie o Claude Code.

---

### Claude Desktop / Claude Cowork

1. Abra **Settings** (icone de engrenagem) > **Developer** > **Edit Config**
2. Isso abre o arquivo `claude_desktop_config.json`
3. Adicione:

```json
{
  "mcpServers": {
    "chave-mestra": {
      "type": "url",
      "url": "https://chave-mestra-mcp.vercel.app/api/mcp?key=SUA_CHAVE_AQUI"
    }
  }
}
```

4. Salve o arquivo e reinicie o Claude Desktop.
5. Verifique: clique no icone de ferramentas (martelo) na caixa de chat — deve aparecer "chave-mestra" com 5 tools.

---

### Cursor

1. Abra **Settings** (`Ctrl+,` ou `Cmd+,`)
2. Busque por **"MCP"** na barra de pesquisa
3. Clique em **"Add MCP Server"**
4. Preencha:
   - **Name:** `chave-mestra`
   - **Type:** `sse` ou `streamable-http`
   - **URL:** `https://chave-mestra-mcp.vercel.app/api/mcp?key=SUA_CHAVE_AQUI`
5. Salve e reinicie o Cursor.

**Alternativa — editar `~/.cursor/mcp.json` diretamente:**

```json
{
  "mcpServers": {
    "chave-mestra": {
      "url": "https://chave-mestra-mcp.vercel.app/api/mcp?key=SUA_CHAVE_AQUI"
    }
  }
}
```

---

### Windsurf (Codeium)

1. Abra **Settings** > **MCP Servers**
2. Adicione um novo servidor:
   - **Name:** `chave-mestra`
   - **URL:** `https://chave-mestra-mcp.vercel.app/api/mcp?key=SUA_CHAVE_AQUI`
3. Salve e reinicie.

**Alternativa — editar `~/.codeium/windsurf/mcp_config.json`:**

```json
{
  "mcpServers": {
    "chave-mestra": {
      "serverUrl": "https://chave-mestra-mcp.vercel.app/api/mcp?key=SUA_CHAVE_AQUI"
    }
  }
}
```

---

### VS Code (com extensao Claude Code ou Continue)

**Claude Code no VS Code:**

Abra o terminal integrado e rode:
```bash
claude mcp add chave-mestra --transport http "https://chave-mestra-mcp.vercel.app/api/mcp?key=SUA_CHAVE_AQUI"
```

**Continue (extensao):**

Edite `.continue/config.yaml` no seu projeto:
```yaml
mcpServers:
  - name: chave-mestra
    url: "https://chave-mestra-mcp.vercel.app/api/mcp?key=SUA_CHAVE_AQUI"
```

---

### Qualquer Cliente MCP Compativel

A regra geral e a mesma para todos:

| Campo | Valor |
|-------|-------|
| **Nome** | `chave-mestra` |
| **Tipo** | `url`, `sse`, ou `streamable-http` (depende do cliente) |
| **URL** | `https://chave-mestra-mcp.vercel.app/api/mcp?key=SUA_CHAVE_AQUI` |

Se o cliente suportar header de autorizacao em vez de query parameter:
- **Header:** `Authorization: Bearer SUA_CHAVE_AQUI`
- **URL:** `https://chave-mestra-mcp.vercel.app/api/mcp`

---

## Verificar se Funcionou

Depois de conectar, teste chamando qualquer tool. No Claude, basta digitar:

> "Liste os plugins disponiveis"

O Claude deve chamar a tool `listar-plugins` e retornar os 6 plugins com 24 skills.

Se aparecer erro de autenticacao, verifique:
1. A chave esta correta (sem espacos extras, sem quebra de linha)
2. O cliente foi reiniciado apos a configuracao
3. A URL esta exatamente como mostrado acima

---

## O que o Servidor Expoe

### Tools (5)

| Tool | O que faz |
|------|-----------|
| `listar-plugins` | Lista os 6 plugins e 24 skills do sistema |
| `ler-skill` | Le o conteudo completo de uma skill pelo slug |
| `ler-fundacao` | Le documentos fundacionais (filosofia, glossario, etc.) |
| `buscar` | Busca por termo em todos os documentos |
| `ativar-plugin` | Carrega contexto completo de um plugin ou skill + referencias |

### Prompts (11)

| Prompt | O que faz |
|--------|-----------|
| `sistema-chave-mestra` | Ativa o sistema completo — transforma a conversa no ecossistema CM |
| `mapear-mercado` | Analise de mercado com Portal do Terreno |
| `criar-persona` | Mapeamento de persona com Alma da Persona + SZC |
| `criar-copy` | Copy com Copy 3x5 + Metodo Carga |
| `criar-oferta` | Oferta irresistivel com Forja de Oferta |
| `criar-video` | Roteiro de video curto com Chavideo |
| `criar-carrossel` | Carrossel editorial com Chavossel |
| `planejar-campanha` | Campanha de lancamento com Mapa de Campanha |
| `diagnostico-escala` | Diagnostico de fase com Portal da Escala |
| `worldbuilding` | Universo de marca com Forja do Universo |
| `capturar-conhecimento` | Captura de insight no Zettelkasten |

---

## Instalacao Local (Alternativa)

Para rodar o servidor na sua propria maquina (sem depender da Vercel):

```bash
cd CHAVE-MESTRA/06-MCP-SERVER
npm install
npm run build
```

### Via stdio (Claude Code local):
```bash
claude mcp add chave-mestra -- node /caminho/para/06-MCP-SERVER/dist/index.js
```

### Via HTTP local:
```bash
npm run dev:http
# Servidor em http://localhost:3001/mcp
```

### Claude Desktop (local):
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

---

## Build e Desenvolvimento

```bash
npm run build:content  # Gera src/content.ts a partir dos .md
npm run build:ts       # Compila TypeScript
npm run build          # Os dois juntos
npm run dev            # Build + run local (stdio)
npm run dev:http       # Build + run local (HTTP na porta 3001)
```

Apos editar qualquer SKILL.md ou documento fundacional, reconstruir com `npm run build`.

---

## Administracao da Chave

**Trocar a chave (revogar acesso):**

1. Gere uma nova chave: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
2. Va em [vercel.com](https://vercel.com) > seu projeto > Settings > Environment Variables
3. Edite `MCP_API_KEY` com o novo valor
4. Faca redeploy (Deployments > ultimo deploy > Redeploy)
5. Envie a nova chave aos clientes autorizados

**Health check (publico, sem chave):**
```
GET https://chave-mestra-mcp.vercel.app/api/mcp
```
Retorna status do servidor, numero de tools e prompts.
