import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import content from "./content.json" with { type: "json" };

// ─── Types ───────────────────────────────────────────────────────────────────

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

interface ContentBundle {
  foundation: Record<string, FoundationEntry>;
  plugins: Record<string, { number: string; directory: string; skills: string[] }>;
  skills: Record<string, SkillEntry>;
  references: Record<string, ReferenceEntry>;
}

const bundle = content as ContentBundle;

// ─── Server ──────────────────────────────────────────────────────────────────

const server = new McpServer({
  name: "chave-mestra",
  version: "1.0.0",
});

// ─── Resources: Foundation Docs ──────────────────────────────────────────────

for (const [key, doc] of Object.entries(bundle.foundation)) {
  server.resource(
    `foundation-${key}`,
    `cm://foundation/${key}`,
    {
      description: `Documento fundacional: ${doc.path}`,
      mimeType: "text/markdown",
    },
    async () => ({
      contents: [{ uri: `cm://foundation/${key}`, text: doc.content, mimeType: "text/markdown" }],
    })
  );
}

// ─── Resources: Skills ───────────────────────────────────────────────────────

for (const [skillId, skill] of Object.entries(bundle.skills)) {
  const uri = `cm://skill/${skillId}`;
  server.resource(
    `skill-${skill.slug}`,
    uri,
    {
      description: skill.description || `Skill: ${skill.name}`,
      mimeType: "text/markdown",
    },
    async () => ({
      contents: [{ uri, text: skill.content, mimeType: "text/markdown" }],
    })
  );
}

// ─── Resources: References ───────────────────────────────────────────────────

for (const [refId, ref] of Object.entries(bundle.references)) {
  const uri = `cm://reference/${refId}`;
  server.resource(
    `ref-${refId.replace(/\//g, "-")}`,
    uri,
    {
      description: `Referência: ${ref.name} (skill: ${ref.skill})`,
      mimeType: "text/markdown",
    },
    async () => ({
      contents: [{ uri, text: ref.content, mimeType: "text/markdown" }],
    })
  );
}

// ─── Tools ───────────────────────────────────────────────────────────────────

// Tool: List all available plugins and skills
server.tool(
  "listar-plugins",
  "Lista todos os plugins e skills disponíveis no Sistema Chave Mestra",
  {},
  async () => {
    const lines: string[] = ["# Plugins do Sistema Chave Mestra\n"];

    for (const [pluginName, plugin] of Object.entries(bundle.plugins)) {
      lines.push(`## ${plugin.number} — ${pluginName}`);
      for (const skillId of plugin.skills) {
        const skill = bundle.skills[skillId];
        if (skill) {
          lines.push(`  - **${skill.name}**: ${skill.description.slice(0, 120)}...`);
        }
      }
      lines.push("");
    }

    return { content: [{ type: "text", text: lines.join("\n") }] };
  }
);

// Tool: Read a specific skill
server.tool(
  "ler-skill",
  "Lê o conteúdo completo de uma skill específica. Use o slug da skill (ex: 'pergaminho-de-copy', 'forja-da-persona').",
  { slug: z.string().describe("Slug da skill (ex: 'chavideo', 'portal-do-terreno')") },
  async ({ slug }) => {
    // Find skill by slug across all plugins
    const entry = Object.entries(bundle.skills).find(([_, s]) => s.slug === slug);
    if (!entry) {
      const available = Object.values(bundle.skills).map(s => s.slug).join(", ");
      return {
        content: [{ type: "text", text: `Skill "${slug}" não encontrada. Disponíveis: ${available}` }],
        isError: true,
      };
    }

    const [skillId, skill] = entry;

    // Also include references
    const refs = Object.entries(bundle.references)
      .filter(([_, r]) => r.skill === skillId)
      .map(([_, r]) => `\n\n---\n\n# Referência: ${r.name}\n\n${r.content}`);

    const fullContent = skill.content + refs.join("");

    return { content: [{ type: "text", text: fullContent }] };
  }
);

// Tool: Read a foundation document
server.tool(
  "ler-fundacao",
  "Lê um documento fundacional (filosofia, manifesto, glossário, guia-do-sistema, modo-cliente, claude).",
  { doc: z.string().describe("Nome do documento (ex: 'filosofia', 'glossario', 'manifesto')") },
  async ({ doc }) => {
    const entry = bundle.foundation[doc.toLowerCase()];
    if (!entry) {
      const available = Object.keys(bundle.foundation).join(", ");
      return {
        content: [{ type: "text", text: `Documento "${doc}" não encontrado. Disponíveis: ${available}` }],
        isError: true,
      };
    }

    return { content: [{ type: "text", text: entry.content }] };
  }
);

// Tool: Search across all content
server.tool(
  "buscar",
  "Busca por termo em todos os documentos do sistema (skills, fundação, referências).",
  { termo: z.string().describe("Termo de busca") },
  async ({ termo }) => {
    const termoLower = termo.toLowerCase();
    const results: string[] = [];

    // Search foundation
    for (const [key, doc] of Object.entries(bundle.foundation)) {
      if (doc.content.toLowerCase().includes(termoLower)) {
        const lines = doc.content.split("\n");
        const matchLines = lines
          .filter(l => l.toLowerCase().includes(termoLower))
          .slice(0, 3)
          .map(l => `  > ${l.trim()}`);
        results.push(`📄 **Fundação: ${key}**\n${matchLines.join("\n")}`);
      }
    }

    // Search skills
    for (const [skillId, skill] of Object.entries(bundle.skills)) {
      if (skill.content.toLowerCase().includes(termoLower)) {
        const lines = skill.content.split("\n");
        const matchLines = lines
          .filter(l => l.toLowerCase().includes(termoLower))
          .slice(0, 3)
          .map(l => `  > ${l.trim()}`);
        results.push(`🔧 **Skill: ${skill.name}** (${skillId})\n${matchLines.join("\n")}`);
      }
    }

    // Search references
    for (const [refId, ref] of Object.entries(bundle.references)) {
      if (ref.content.toLowerCase().includes(termoLower)) {
        const lines = ref.content.split("\n");
        const matchLines = lines
          .filter(l => l.toLowerCase().includes(termoLower))
          .slice(0, 2)
          .map(l => `  > ${l.trim()}`);
        results.push(`📚 **Ref: ${ref.name}** (${refId})\n${matchLines.join("\n")}`);
      }
    }

    if (results.length === 0) {
      return { content: [{ type: "text", text: `Nenhum resultado para "${termo}".` }] };
    }

    return {
      content: [{
        type: "text",
        text: `# Resultados para "${termo}" (${results.length} encontrados)\n\n${results.join("\n\n")}`,
      }],
    };
  }
);

// Tool: Get the full plugin activation context (like what Claude Code does)
server.tool(
  "ativar-plugin",
  "Carrega todo o contexto de um plugin: skill principal + referências. Equivalente ao que o Claude Code faz automaticamente.",
  { slug: z.string().describe("Slug da skill a ativar (ex: 'pergaminho-de-copy', 'chavideo')") },
  async ({ slug }) => {
    const entry = Object.entries(bundle.skills).find(([_, s]) => s.slug === slug);
    if (!entry) {
      const available = Object.values(bundle.skills).map(s => s.slug).join(", ");
      return {
        content: [{ type: "text", text: `Skill "${slug}" não encontrada. Disponíveis: ${available}` }],
        isError: true,
      };
    }

    const [skillId, skill] = entry;
    const parts: string[] = [];

    // Main SKILL.md
    parts.push(`# ${skill.name} (${skill.plugin})\n\n${skill.content}`);

    // All references for this skill
    const refs = Object.entries(bundle.references)
      .filter(([_, r]) => r.skill === skillId);

    for (const [_, ref] of refs) {
      parts.push(`\n\n---\n\n# Referência: ${ref.name}\n\n${ref.content}`);
    }

    // Foundation context (always include glossary and mode)
    if (bundle.foundation["glossario"]) {
      parts.push(`\n\n---\n\n# Glossário CM\n\n${bundle.foundation["glossario"].content}`);
    }

    return {
      content: [{
        type: "text",
        text: parts.join(""),
      }],
    };
  }
);

// ─── Prompts ─────────────────────────────────────────────────────────────────

// System prompt for the full CM experience
server.prompt(
  "sistema-chave-mestra",
  "Prompt completo do Sistema Chave Mestra — transforma qualquer conversa Claude no ecossistema CM",
  {},
  async () => {
    const claude = bundle.foundation["claude"];
    const filosofia = bundle.foundation["filosofia"];
    const manifesto = bundle.foundation["manifesto"];

    const systemContent = [
      claude?.content || "",
      "\n\n---\n\n",
      filosofia?.content || "",
      "\n\n---\n\n",
      manifesto?.content || "",
    ].join("");

    return {
      messages: [
        {
          role: "user" as const,
          content: {
            type: "text" as const,
            text: `Use o seguinte sistema como base para todas as interações:\n\n${systemContent}\n\nVocê agora opera como o Sistema Chave Mestra. Quando precisar de uma skill específica, use a tool "ativar-plugin" para carregar o contexto completo. Quando receber uma solicitação, identifique qual skill é relevante e ative-a antes de responder.`,
          },
        },
      ],
    };
  }
);

// Quick prompts for common workflows
const quickPrompts: Array<{ name: string; description: string; slug: string; instruction: string }> = [
  {
    name: "mapear-mercado",
    description: "Análise de mercado completa com Portal do Terreno",
    slug: "portal-do-terreno",
    instruction: "Ative o Portal do Terreno e execute uma análise estrutural de mercado completa.",
  },
  {
    name: "criar-persona",
    description: "Mapeamento de persona com Alma da Persona e SZC",
    slug: "forja-da-persona",
    instruction: "Ative a Forja da Persona e guie o usuário pelo mapeamento completo (SZC + Alma da Persona).",
  },
  {
    name: "criar-copy",
    description: "Criar copy com Copy 3x5 e Método Carga",
    slug: "pergaminho-de-copy",
    instruction: "Ative o Pergaminho de Copy e crie uma peça usando Copy 3x5 + Método Carga.",
  },
  {
    name: "criar-oferta",
    description: "Montar oferta irresistível com Forja de Oferta",
    slug: "forja-de-oferta",
    instruction: "Ative a Forja de Oferta e guie o usuário pela criação de uma oferta completa.",
  },
  {
    name: "criar-video",
    description: "Roteiro de vídeo curto com Chavideo + Progymnasmata",
    slug: "chavideo",
    instruction: "Ative o Chavideo e crie um roteiro de vídeo curto (Reels/TikTok/Shorts).",
  },
  {
    name: "criar-carrossel",
    description: "Carrossel editorial com Chavossel",
    slug: "chavossel",
    instruction: "Ative o Chavossel e crie um carrossel editorial completo.",
  },
  {
    name: "planejar-campanha",
    description: "Planejar campanha de lançamento com Mapa de Campanha",
    slug: "mapa-de-campanha",
    instruction: "Ative o Mapa de Campanha e planeje uma campanha completa.",
  },
  {
    name: "diagnostico-escala",
    description: "Diagnóstico de fase e alavancas de crescimento",
    slug: "portal-da-escala",
    instruction: "Ative o Portal da Escala e execute um diagnóstico de fase completo.",
  },
  {
    name: "worldbuilding",
    description: "Construir universo de marca com Forja do Universo",
    slug: "forja-do-universo",
    instruction: "Ative a Forja do Universo e guie o usuário pelo worldbuilding completo (Primal Branding + StoryBrand).",
  },
  {
    name: "capturar-conhecimento",
    description: "Capturar insight/aprendizado no Zettelkasten",
    slug: "forja-do-conhecimento",
    instruction: "Ative a Forja do Conhecimento e guie a captura de um novo insight no Zettelkasten.",
  },
];

for (const qp of quickPrompts) {
  server.prompt(
    qp.name,
    qp.description,
    {},
    async () => ({
      messages: [
        {
          role: "user" as const,
          content: {
            type: "text" as const,
            text: `${qp.instruction}\n\nPrimeiro, use a tool "ativar-plugin" com slug "${qp.slug}" para carregar o contexto completo da skill.`,
          },
        },
      ],
    })
  );
}

// ─── Start Server ────────────────────────────────────────────────────────────

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("🔑 Chave Mestra MCP Server running on stdio");
}

main().catch(console.error);
