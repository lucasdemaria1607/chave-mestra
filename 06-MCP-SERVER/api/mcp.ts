/**
 * Vercel Serverless Function — MCP endpoint (manual JSON-RPC handler).
 *
 * The MCP SDK's transport requires an initialize handshake that doesn't
 * survive across serverless invocations. This handler implements the
 * MCP protocol directly as a stateless JSON-RPC router.
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";
import content from "../src/content.js";

// ─── Types ──────────────────────────────────────────────────────────────────

interface SkillEntry {
  plugin: string;
  pluginNumber: string;
  slug: string;
  name: string;
  description: string;
  content: string;
}

interface ReferenceEntry {
  skill: string;
  name: string;
  content: string;
}

interface FoundationEntry {
  path: string;
  content: string;
}

interface PluginEntry {
  number: string;
  directory: string;
  alias: string;
  description: string;
  skills: string[];
}

interface ContentBundle {
  foundation: Record<string, FoundationEntry>;
  plugins: Record<string, PluginEntry>;
  skills: Record<string, SkillEntry>;
  references: Record<string, ReferenceEntry>;
}

const bundle = content as ContentBundle;

// ─── MCP Protocol Constants ─────────────────────────────────────────────────

const PROTOCOL_VERSION = "2025-03-26";

const SERVER_INFO = { name: "chave-mestra", version: "1.0.0" };

const CAPABILITIES = {
  tools: { listChanged: false },
};

// ─── Tool Definitions (JSON Schema) ─────────────────────────────────────────

const TOOL_DEFS = [
  {
    name: "listar-plugins",
    description: "Lista todos os 6 plugins do Sistema Chave Mestra com suas 24 skills. Use SEMPRE no início da conversa para apresentar o sistema completo ao usuário.",
    inputSchema: { type: "object" as const, properties: {} },
  },
  {
    name: "ler-skill",
    description:
      "Lê o conteúdo completo de uma skill específica. Use o slug da skill (ex: 'pergaminho-de-copy', 'forja-da-persona').",
    inputSchema: {
      type: "object" as const,
      properties: {
        slug: { type: "string", description: "Slug da skill (ex: 'chavideo', 'portal-do-terreno')" },
      },
      required: ["slug"],
    },
  },
  {
    name: "ler-fundacao",
    description:
      "Lê um documento fundacional (filosofia, manifesto, glossário, guia-do-sistema, modo-cliente, claude).",
    inputSchema: {
      type: "object" as const,
      properties: {
        doc: { type: "string", description: "Nome do documento (ex: 'filosofia', 'glossario', 'manifesto')" },
      },
      required: ["doc"],
    },
  },
  {
    name: "buscar",
    description: "Busca por termo em todos os documentos do sistema (skills, fundação, referências).",
    inputSchema: {
      type: "object" as const,
      properties: {
        termo: { type: "string", description: "Termo de busca" },
      },
      required: ["termo"],
    },
  },
  {
    name: "ativar-plugin",
    description:
      "Carrega o contexto completo de um plugin ou skill. Aceita nome do PLUGIN (ex: 'bardo', 'alquimista', 'cartografo') para carregar TODAS as skills, ou slug de skill específica (ex: 'chavideo', 'pergaminho-de-copy').",
    inputSchema: {
      type: "object" as const,
      properties: {
        slug: { type: "string", description: "Nome do plugin (ex: 'bardo', 'chaveiro', 'cartografo', 'alquimista', 'arauto', 'iluminista') ou slug da skill (ex: 'chavideo', 'pergaminho-de-copy')" },
      },
      required: ["slug"],
    },
  },
];

// ─── Tool Executors ─────────────────────────────────────────────────────────

function execListarPlugins(): { content: { type: string; text: string }[] } {
  const lines: string[] = [
    "# Sistema Chave Mestra — 6 Plugins, 24 Skills\n",
    "Ecossistema de coprodução digital. Personalidade + Inteligência = diferenciação real.\n",
    "---\n",
  ];
  for (const [pluginName, plugin] of Object.entries(bundle.plugins)) {
    const displayName = pluginName.replace("chave-mestra-", "").toUpperCase();
    lines.push(`## ${plugin.number} — ${displayName}`);
    lines.push(`> ${plugin.description}\n`);
    lines.push(`**Para ativar:** use \`ativar-plugin\` com slug \`${plugin.alias}\` (carrega TODAS as skills)\n`);
    lines.push("**Skills:**");
    for (const skillId of plugin.skills) {
      const skill = bundle.skills[skillId];
      if (skill) {
        const desc = skill.description ? skill.description.slice(0, 150) : "(sem descrição)";
        lines.push(`  - \`${skill.slug}\` — ${desc}`);
      }
    }
    lines.push("");
  }
  lines.push("---\n");
  lines.push("**Como usar:** `ativar-plugin` com o nome do plugin (ex: `bardo`, `alquimista`) ou slug da skill específica (ex: `chavideo`, `pergaminho-de-copy`).");
  lines.push("**Buscar:** use `buscar` com qualquer termo para encontrar conteúdo em todo o sistema.");
  lines.push("**Fundação:** use `ler-fundacao` com `filosofia`, `manifesto`, `glossario`, `guia-do-sistema`, `modo-cliente` ou `claude`.");
  return { content: [{ type: "text", text: lines.join("\n") }] };
}

function execLerSkill(args: { slug: string }) {
  const entry = Object.entries(bundle.skills).find(([_, s]) => s.slug === args.slug);
  if (!entry) {
    const available = Object.values(bundle.skills).map((s) => s.slug).join(", ");
    return {
      content: [{ type: "text", text: `Skill "${args.slug}" não encontrada. Disponíveis: ${available}` }],
      isError: true,
    };
  }
  const [skillId, skill] = entry;
  const refs = Object.entries(bundle.references)
    .filter(([_, r]) => r.skill === skillId)
    .map(([_, r]) => `\n\n---\n\n# Referência: ${r.name}\n\n${r.content}`);
  return { content: [{ type: "text", text: skill.content + refs.join("") }] };
}

function execLerFundacao(args: { doc: string }) {
  const entry = bundle.foundation[args.doc.toLowerCase()];
  if (!entry) {
    const available = Object.keys(bundle.foundation).join(", ");
    return {
      content: [{ type: "text", text: `Documento "${args.doc}" não encontrado. Disponíveis: ${available}` }],
      isError: true,
    };
  }
  return { content: [{ type: "text", text: entry.content }] };
}

function execBuscar(args: { termo: string }) {
  const termoLower = args.termo.toLowerCase();
  const results: string[] = [];

  for (const [key, doc] of Object.entries(bundle.foundation)) {
    if (doc.content.toLowerCase().includes(termoLower)) {
      const matchLines = doc.content
        .split("\n")
        .filter((l) => l.toLowerCase().includes(termoLower))
        .slice(0, 3)
        .map((l) => `  > ${l.trim()}`);
      results.push(`**Fundação: ${key}**\n${matchLines.join("\n")}`);
    }
  }
  for (const [skillId, skill] of Object.entries(bundle.skills)) {
    if (skill.content.toLowerCase().includes(termoLower)) {
      const matchLines = skill.content
        .split("\n")
        .filter((l) => l.toLowerCase().includes(termoLower))
        .slice(0, 3)
        .map((l) => `  > ${l.trim()}`);
      results.push(`**Skill: ${skill.name}** (${skillId})\n${matchLines.join("\n")}`);
    }
  }
  for (const [refId, ref] of Object.entries(bundle.references)) {
    if (ref.content.toLowerCase().includes(termoLower)) {
      const matchLines = ref.content
        .split("\n")
        .filter((l) => l.toLowerCase().includes(termoLower))
        .slice(0, 2)
        .map((l) => `  > ${l.trim()}`);
      results.push(`**Ref: ${ref.name}** (${refId})\n${matchLines.join("\n")}`);
    }
  }

  if (results.length === 0) {
    return { content: [{ type: "text", text: `Nenhum resultado para "${args.termo}".` }] };
  }
  return {
    content: [{ type: "text", text: `# Resultados para "${args.termo}" (${results.length})\n\n${results.join("\n\n")}` }],
  };
}

function execAtivarPlugin(args: { slug: string }) {
  const slugLower = (args.slug || "").toLowerCase().trim();

  // 1. Try to match as plugin alias (e.g. "bardo" → "chave-mestra-bardo")
  const pluginEntry = Object.entries(bundle.plugins).find(
    ([name, p]) => p.alias === slugLower || name === slugLower || name === `chave-mestra-${slugLower}`
  );

  if (pluginEntry) {
    const [pluginName, plugin] = pluginEntry;
    const displayName = pluginName.replace("chave-mestra-", "").toUpperCase();
    const parts: string[] = [
      `# Plugin ${displayName} — ${plugin.description}\n`,
      `*${plugin.skills.length} skills carregadas:*\n`,
    ];

    for (const skillId of plugin.skills) {
      const skill = bundle.skills[skillId];
      if (!skill) continue;
      parts.push(`\n\n${"=".repeat(80)}\n\n# SKILL: ${skill.name} (${skill.slug})\n\n${skill.content}`);
      const refs = Object.entries(bundle.references).filter(([_, r]) => r.skill === skillId);
      for (const [_, ref] of refs) {
        parts.push(`\n\n---\n\n## Referência: ${ref.name}\n\n${ref.content}`);
      }
    }

    if (bundle.foundation["glossario"]) {
      parts.push(`\n\n${"=".repeat(80)}\n\n# Glossário CM\n\n${bundle.foundation["glossario"].content}`);
    }
    return { content: [{ type: "text", text: parts.join("") }] };
  }

  // 2. Try to match as skill slug
  const skillEntry = Object.entries(bundle.skills).find(([_, s]) => s.slug === slugLower);
  if (skillEntry) {
    const [skillId, skill] = skillEntry;
    const parts: string[] = [`# ${skill.name} (${skill.plugin})\n\n${skill.content}`];
    const refs = Object.entries(bundle.references).filter(([_, r]) => r.skill === skillId);
    for (const [_, ref] of refs) {
      parts.push(`\n\n---\n\n# Referência: ${ref.name}\n\n${ref.content}`);
    }
    if (bundle.foundation["glossario"]) {
      parts.push(`\n\n---\n\n# Glossário CM\n\n${bundle.foundation["glossario"].content}`);
    }
    return { content: [{ type: "text", text: parts.join("") }] };
  }

  // 3. Not found
  const pluginAliases = Object.values(bundle.plugins).map((p) => p.alias).join(", ");
  const skillSlugs = Object.values(bundle.skills).map((s) => s.slug).join(", ");
  return {
    content: [{ type: "text", text: `"${args.slug}" não encontrado.\n\n**Plugins:** ${pluginAliases}\n**Skills:** ${skillSlugs}` }],
    isError: true,
  };
}

const TOOL_EXECUTORS: Record<string, (args: any) => any> = {
  "listar-plugins": execListarPlugins,
  "ler-skill": execLerSkill,
  "ler-fundacao": execLerFundacao,
  buscar: execBuscar,
  "ativar-plugin": execAtivarPlugin,
};

// ─── JSON-RPC Router ────────────────────────────────────────────────────────

function handleRpc(rpc: any): any | null {
  // Notifications (no id) → no response
  if (rpc.id === undefined || rpc.id === null) {
    return null;
  }

  switch (rpc.method) {
    case "initialize":
      return {
        jsonrpc: "2.0",
        result: {
          protocolVersion: PROTOCOL_VERSION,
          capabilities: CAPABILITIES,
          serverInfo: SERVER_INFO,
        },
        id: rpc.id,
      };

    case "tools/list":
      return {
        jsonrpc: "2.0",
        result: { tools: TOOL_DEFS },
        id: rpc.id,
      };

    case "tools/call": {
      const toolName = rpc.params?.name;
      const executor = TOOL_EXECUTORS[toolName];
      if (!executor) {
        return {
          jsonrpc: "2.0",
          result: {
            content: [{ type: "text", text: `Tool "${toolName}" não encontrada.` }],
            isError: true,
          },
          id: rpc.id,
        };
      }
      const result = executor(rpc.params?.arguments || {});
      return { jsonrpc: "2.0", result, id: rpc.id };
    }

    case "resources/list": {
      const resources: any[] = [];
      for (const [key, doc] of Object.entries(bundle.foundation)) {
        resources.push({
          uri: `cm://foundation/${key}`,
          name: `Fundação: ${key}`,
          description: `Documento fundacional: ${doc.path}`,
          mimeType: "text/markdown",
        });
      }
      for (const [skillId, skill] of Object.entries(bundle.skills)) {
        resources.push({
          uri: `cm://skill/${skillId}`,
          name: `Skill: ${skill.name}`,
          description: skill.description || `Skill: ${skill.name}`,
          mimeType: "text/markdown",
        });
      }
      for (const [refId, ref] of Object.entries(bundle.references)) {
        resources.push({
          uri: `cm://reference/${refId}`,
          name: `Ref: ${ref.name}`,
          description: `Referência: ${ref.name} (skill: ${ref.skill})`,
          mimeType: "text/markdown",
        });
      }
      return { jsonrpc: "2.0", result: { resources }, id: rpc.id };
    }

    case "resources/read": {
      const uri = rpc.params?.uri as string;
      if (uri?.startsWith("cm://foundation/")) {
        const key = uri.replace("cm://foundation/", "");
        const doc = bundle.foundation[key];
        if (doc) {
          return {
            jsonrpc: "2.0",
            result: { contents: [{ uri, text: doc.content, mimeType: "text/markdown" }] },
            id: rpc.id,
          };
        }
      } else if (uri?.startsWith("cm://skill/")) {
        const skillId = uri.replace("cm://skill/", "");
        const skill = bundle.skills[skillId];
        if (skill) {
          return {
            jsonrpc: "2.0",
            result: { contents: [{ uri, text: skill.content, mimeType: "text/markdown" }] },
            id: rpc.id,
          };
        }
      } else if (uri?.startsWith("cm://reference/")) {
        const refId = uri.replace("cm://reference/", "");
        const ref = bundle.references[refId];
        if (ref) {
          return {
            jsonrpc: "2.0",
            result: { contents: [{ uri, text: ref.content, mimeType: "text/markdown" }] },
            id: rpc.id,
          };
        }
      }
      return {
        jsonrpc: "2.0",
        error: { code: -32602, message: `Resource not found: ${uri}` },
        id: rpc.id,
      };
    }

    case "prompts/list": {
      const prompts = [
        {
          name: "sistema-chave-mestra",
          description: "Prompt completo do Sistema Chave Mestra — transforma qualquer conversa no ecossistema CM",
        },
        { name: "mapear-mercado", description: "Análise de mercado completa com Portal do Terreno" },
        { name: "criar-persona", description: "Mapeamento de persona com Alma da Persona e SZC" },
        { name: "criar-copy", description: "Criar copy com Copy 3x5 e Método Carga" },
        { name: "criar-oferta", description: "Montar oferta irresistível com Forja de Oferta" },
        { name: "criar-video", description: "Roteiro de vídeo curto com Chavideo + Progymnasmata" },
        { name: "criar-carrossel", description: "Carrossel editorial com Chavossel" },
        { name: "planejar-campanha", description: "Planejar campanha de lançamento com Mapa de Campanha" },
        { name: "diagnostico-escala", description: "Diagnóstico de fase e alavancas de crescimento" },
        { name: "worldbuilding", description: "Construir universo de marca com Forja do Universo" },
        { name: "capturar-conhecimento", description: "Capturar insight/aprendizado no Zettelkasten" },
      ];
      return { jsonrpc: "2.0", result: { prompts }, id: rpc.id };
    }

    case "prompts/get": {
      const promptName = rpc.params?.name;
      const quickMap: Record<string, { slug: string; instruction: string }> = {
        "mapear-mercado": { slug: "portal-do-terreno", instruction: "Ative o Portal do Terreno e execute uma análise estrutural de mercado completa." },
        "criar-persona": { slug: "forja-da-persona", instruction: "Ative a Forja da Persona e guie o usuário pelo mapeamento completo (SZC + Alma da Persona)." },
        "criar-copy": { slug: "pergaminho-de-copy", instruction: "Ative o Pergaminho de Copy e crie uma peça usando Copy 3x5 + Método Carga." },
        "criar-oferta": { slug: "forja-de-oferta", instruction: "Ative a Forja de Oferta e guie o usuário pela criação de uma oferta completa." },
        "criar-video": { slug: "chavideo", instruction: "Ative o Chavideo e crie um roteiro de vídeo curto (Reels/TikTok/Shorts)." },
        "criar-carrossel": { slug: "chavossel", instruction: "Ative o Chavossel e crie um carrossel editorial completo." },
        "planejar-campanha": { slug: "mapa-de-campanha", instruction: "Ative o Mapa de Campanha e planeje uma campanha completa." },
        "diagnostico-escala": { slug: "portal-da-escala", instruction: "Ative o Portal da Escala e execute um diagnóstico de fase completo." },
        "worldbuilding": { slug: "forja-do-universo", instruction: "Ative a Forja do Universo e guie o usuário pelo worldbuilding completo (Primal Branding + StoryBrand)." },
        "capturar-conhecimento": { slug: "forja-do-conhecimento", instruction: "Ative a Forja do Conhecimento e guie a captura de um novo insight no Zettelkasten." },
      };

      if (promptName === "sistema-chave-mestra") {
        // Build plugin map
        const pluginMap: string[] = [];
        for (const [pluginName, plugin] of Object.entries(bundle.plugins)) {
          const displayName = pluginName.replace("chave-mestra-", "").toUpperCase();
          const skillList = plugin.skills.map((sid: string) => {
            const s = bundle.skills[sid];
            return s ? s.slug : "";
          }).filter(Boolean).join(", ");
          pluginMap.push(`- **${displayName}** (ativar: \`${plugin.alias}\`): ${plugin.description} → Skills: ${skillList}`);
        }

        const systemContent = [
          bundle.foundation["claude"]?.content || "",
          "\n\n---\n\n",
          bundle.foundation["filosofia"]?.content || "",
          "\n\n---\n\n",
          bundle.foundation["manifesto"]?.content || "",
          "\n\n---\n\n",
          bundle.foundation["modo-cliente"]?.content || "",
        ].join("");

        const instructions = `Use o seguinte sistema como base para TODAS as interações:

${systemContent}

---

# Seus 6 Plugins (24 Skills)

${pluginMap.join("\n")}

---

# Como Operar

Você agora é o **Sistema Chave Mestra**. Siga estas regras:

1. **ANTES de qualquer output criativo**, use \`ativar-plugin\` para carregar o contexto da skill relevante.
2. **Identifique o plugin correto** pelo que o usuário pede:
   - Mercado/persona/marca → **cartografo**
   - Copy/oferta/escala → **alquimista**
   - Vídeo/carrossel/headlines → **bardo**
   - Campanha/Notion/lançamento → **arauto**
   - Design/imagem/UX/Figma → **iluminista**
   - Conhecimento/erros/rotina → **chaveiro**
3. **Modo Cliente**: se o cliente não é Lucas/Chave Mestra, capture os 5 elementos antes de produzir.
4. **Glossário CM**: use termos proprietários (Pergaminho, Portal, Forja, etc.) apenas em Modo CM.
5. Use \`buscar\` para encontrar qualquer conteúdo no sistema.
6. Use \`ler-fundacao\` para acessar documentos fundacionais (filosofia, manifesto, glossário, etc.).

Quando o usuário perguntar "o que você pode fazer" ou "quais plugins tem", use \`listar-plugins\` e apresente o sistema completo de forma organizada.`;

        return {
          jsonrpc: "2.0",
          result: {
            messages: [{
              role: "user",
              content: { type: "text", text: instructions },
            }],
          },
          id: rpc.id,
        };
      }

      const qp = quickMap[promptName];
      if (qp) {
        return {
          jsonrpc: "2.0",
          result: {
            messages: [{
              role: "user",
              content: { type: "text", text: `${qp.instruction}\n\nPrimeiro, use a tool "ativar-plugin" com slug "${qp.slug}" para carregar o contexto completo da skill.` },
            }],
          },
          id: rpc.id,
        };
      }

      return {
        jsonrpc: "2.0",
        error: { code: -32602, message: `Prompt "${promptName}" não encontrado.` },
        id: rpc.id,
      };
    }

    case "ping":
      return { jsonrpc: "2.0", result: {}, id: rpc.id };

    default:
      return {
        jsonrpc: "2.0",
        error: { code: -32601, message: `Method not found: ${rpc.method}` },
        id: rpc.id,
      };
  }
}

// ─── Vercel Handler ─────────────────────────────────────────────────────────

// ─── Auth ───────────────────────────────────────────────────────────────────

function checkAuth(req: VercelRequest, res: VercelResponse): boolean {
  const apiKey = process.env.MCP_API_KEY;
  // If no key configured, server is open (dev mode)
  if (!apiKey) return true;

  // Accept key via Authorization header OR ?key= query parameter
  const authHeader = req.headers.authorization;
  const queryKey = req.query?.key as string | undefined;

  if (authHeader === `Bearer ${apiKey}` || queryKey === apiKey) {
    return true;
  }

  res.status(401).json({
    jsonrpc: "2.0",
    error: { code: -32000, message: "Unauthorized — invalid or missing API key" },
    id: null,
  });
  return false;
}

// ─── Vercel Handler ─────────────────────────────────────────────────────────

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, mcp-session-id, Authorization");
  res.setHeader("Access-Control-Expose-Headers", "mcp-session-id");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  // Health check is always public
  if (req.method === "GET") {
    res.status(200).json({
      name: "chave-mestra-mcp",
      version: "1.0.0",
      status: "ok",
      auth: process.env.MCP_API_KEY ? "required" : "open",
      tools: TOOL_DEFS.length,
      prompts: 11,
      resources: `${Object.keys(bundle.foundation).length + Object.keys(bundle.skills).length + Object.keys(bundle.references).length}`,
    });
    return;
  }

  // All other methods require auth
  if (!checkAuth(req, res)) return;

  if (req.method === "DELETE") {
    res.status(200).json({ ok: true });
    return;
  }

  if (req.method === "POST") {
    try {
      const body = req.body;
      const isBatch = Array.isArray(body);
      const requests = isBatch ? body : [body];
      const responses: any[] = [];

      for (const rpc of requests) {
        const result = handleRpc(rpc);
        if (result !== null) {
          responses.push(result);
        }
      }

      if (isBatch) {
        res.status(200).json(responses);
      } else if (responses.length > 0) {
        res.status(200).json(responses[0]);
      } else {
        // Notification only — no response body needed
        res.status(202).end();
      }
    } catch (err) {
      console.error("MCP handler error:", err);
      if (!res.headersSent) {
        res.status(500).json({
          jsonrpc: "2.0",
          error: { code: -32603, message: "Internal server error" },
          id: null,
        });
      }
    }
    return;
  }

  res.status(405).json({ error: "Method not allowed" });
}
