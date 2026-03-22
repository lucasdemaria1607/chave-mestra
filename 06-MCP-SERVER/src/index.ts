/**
 * Stdio entry point — for local use with Claude Code / Claude Desktop.
 *
 * Usage: node dist/index.js
 */

import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createServer } from "./server.js";

async function main() {
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("🔑 Chave Mestra MCP Server running on stdio");
}

main().catch(console.error);
