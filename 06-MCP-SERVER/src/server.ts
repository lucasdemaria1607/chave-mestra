/**
 * Shared MCP server definition — used by both stdio (local) and HTTP (remote) transports.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import content from "./content.js";

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

// ─── Server Factory ──────────────────────────────────────────────────────────

export function createServer(): McpServer {
  const server = new McpServer({
    name: "chave-mestra",
    version: "1.0.0",
  });

  // ─── Resources: Foundation Docs ────────────────────────────────────────────

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

  // ─── Resources: Skills ─────────────────────────────────────────────────────

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

  // ─── Resources: References ─────────────────────────────────────────────────

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

  // ─── Tools ─────────────────────────────────────────────────────────────────

  server.tool(
    "listar-plugins",
    "Lista todos os 6 plugins do Sistema Chave Mestra com suas skills. Use SEMPRE no início da conversa para apresentar o sistema completo ao usuário.",
    {},
    async () => {
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
  );

  server.tool(
    "ler-skill",
    "Lê o conteúdo completo de uma skill específica. Use o slug da skill (ex: 'pergaminho-de-copy', 'forja-da-persona').",
    { slug: z.string().describe("Slug da skill (ex: 'chavideo', 'portal-do-terreno')") },
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
      const refs = Object.entries(bundle.references)
        .filter(([_, r]) => r.skill === skillId)
        .map(([_, r]) => `\n\n---\n\n# Referência: ${r.name}\n\n${r.content}`);
      return { content: [{ type: "text", text: skill.content + refs.join("") }] };
    }
  );

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

  server.tool(
    "buscar",
    "Busca por termo em todos os documentos do sistema (skills, fundação, referências).",
    { termo: z.string().describe("Termo de busca") },
    async ({ termo }) => {
      const termoLower = termo.toLowerCase();
      const results: string[] = [];

      for (const [key, doc] of Object.entries(bundle.foundation)) {
        if (doc.content.toLowerCase().includes(termoLower)) {
          const matchLines = doc.content.split("\n")
            .filter(l => l.toLowerCase().includes(termoLower))
            .slice(0, 3).map(l => `  > ${l.trim()}`);
          results.push(`**Fundação: ${key}**\n${matchLines.join("\n")}`);
        }
      }
      for (const [skillId, skill] of Object.entries(bundle.skills)) {
        if (skill.content.toLowerCase().includes(termoLower)) {
          const matchLines = skill.content.split("\n")
            .filter(l => l.toLowerCase().includes(termoLower))
            .slice(0, 3).map(l => `  > ${l.trim()}`);
          results.push(`**Skill: ${skill.name}** (${skillId})\n${matchLines.join("\n")}`);
        }
      }
      for (const [refId, ref] of Object.entries(bundle.references)) {
        if (ref.content.toLowerCase().includes(termoLower)) {
          const matchLines = ref.content.split("\n")
            .filter(l => l.toLowerCase().includes(termoLower))
            .slice(0, 2).map(l => `  > ${l.trim()}`);
          results.push(`**Ref: ${ref.name}** (${refId})\n${matchLines.join("\n")}`);
        }
      }

      if (results.length === 0) {
        return { content: [{ type: "text", text: `Nenhum resultado para "${termo}".` }] };
      }
      return {
        content: [{ type: "text", text: `# Resultados para "${termo}" (${results.length})\n\n${results.join("\n\n")}` }],
      };
    }
  );

  server.tool(
    "ativar-plugin",
    "Carrega o contexto completo de um plugin ou skill. Aceita nome do PLUGIN (ex: 'bardo', 'alquimista', 'cartografo') para carregar TODAS as skills do plugin, ou slug de uma skill específica (ex: 'chavideo', 'pergaminho-de-copy'). Use o nome do plugin para contexto completo.",
    { slug: z.string().describe("Nome do plugin (ex: 'bardo', 'chaveiro', 'cartografo', 'alquimista', 'arauto', 'iluminista') ou slug da skill (ex: 'chavideo', 'pergaminho-de-copy')") },
    async ({ slug }) => {
      const slugLower = slug.toLowerCase().trim();

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
      const pluginAliases = Object.values(bundle.plugins).map(p => p.alias).join(", ");
      const skillSlugs = Object.values(bundle.skills).map(s => s.slug).join(", ");
      return {
        content: [{ type: "text", text: `"${slug}" não encontrado.\n\n**Plugins:** ${pluginAliases}\n**Skills:** ${skillSlugs}` }],
        isError: true,
      };
    }
  );

  // ─── Prompts ───────────────────────────────────────────────────────────────

  server.prompt(
    "sistema-chave-mestra",
    "Prompt completo do Sistema Chave Mestra — transforma qualquer conversa Claude no ecossistema CM com todos os 6 plugins disponíveis",
    {},
    async () => {
      // Build plugin map for the system prompt
      const pluginMap: string[] = [];
      for (const [pluginName, plugin] of Object.entries(bundle.plugins)) {
        const displayName = pluginName.replace("chave-mestra-", "").toUpperCase();
        const skillList = plugin.skills.map(sid => {
          const s = bundle.skills[sid];
          return s ? `${s.slug}` : "";
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
        messages: [{
          role: "user" as const,
          content: {
            type: "text" as const,
            text: instructions,
          },
        }],
      };
    }
  );

  const quickPrompts = [
    { name: "mapear-mercado", description: "Análise de mercado completa com Portal do Terreno", slug: "portal-do-terreno", instruction: "Ative o Portal do Terreno e execute uma análise estrutural de mercado completa." },
    { name: "criar-persona", description: "Mapeamento de persona com Alma da Persona e SZC", slug: "forja-da-persona", instruction: "Ative a Forja da Persona e guie o usuário pelo mapeamento completo (SZC + Alma da Persona)." },
    { name: "criar-copy", description: "Criar copy com Copy 3x5 e Método Carga", slug: "pergaminho-de-copy", instruction: "Ative o Pergaminho de Copy e crie uma peça usando Copy 3x5 + Método Carga." },
    { name: "criar-oferta", description: "Montar oferta irresistível com Forja de Oferta", slug: "forja-de-oferta", instruction: "Ative a Forja de Oferta e guie o usuário pela criação de uma oferta completa." },
    { name: "criar-video", description: "Roteiro de vídeo curto com Chavideo + Progymnasmata", slug: "chavideo", instruction: "Ative o Chavideo e crie um roteiro de vídeo curto (Reels/TikTok/Shorts)." },
    { name: "criar-carrossel", description: "Carrossel editorial com Chavossel", slug: "chavossel", instruction: "Ative o Chavossel e crie um carrossel editorial completo." },
    { name: "planejar-campanha", description: "Planejar campanha de lançamento com Mapa de Campanha", slug: "mapa-de-campanha", instruction: "Ative o Mapa de Campanha e planeje uma campanha completa." },
    { name: "diagnostico-escala", description: "Diagnóstico de fase e alavancas de crescimento", slug: "portal-da-escala", instruction: "Ative o Portal da Escala e execute um diagnóstico de fase completo." },
    { name: "worldbuilding", description: "Construir universo de marca com Forja do Universo", slug: "forja-do-universo", instruction: "Ative a Forja do Universo e guie o usuário pelo worldbuilding completo (Primal Branding + StoryBrand)." },
    { name: "capturar-conhecimento", description: "Capturar insight/aprendizado no Zettelkasten", slug: "forja-do-conhecimento", instruction: "Ative a Forja do Conhecimento e guie a captura de um novo insight no Zettelkasten." },
  ];

  for (const qp of quickPrompts) {
    server.prompt(qp.name, qp.description, {}, async () => ({
      messages: [{
        role: "user" as const,
        content: {
          type: "text" as const,
          text: `${qp.instruction}\n\nPrimeiro, use a tool "ativar-plugin" com slug "${qp.slug}" para carregar o contexto completo da skill.`,
        },
      }],
    }));
  }

  return server;
}
