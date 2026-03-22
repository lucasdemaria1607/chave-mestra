/**
 * HTTP entry point — for remote deployment on Vercel (or any Node.js host).
 *
 * Exposes the MCP server over Streamable HTTP transport.
 * Each request gets a fresh server+transport (stateless — fine for our read-only tools).
 *
 * Deploy on Vercel: the vercel.json routes /mcp to this handler.
 */

import { createServer as createHttpServer, type IncomingMessage, type ServerResponse } from "node:http";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { createServer } from "./server.js";

const PORT = parseInt(process.env.PORT || "3001", 10);

async function handleMcpRequest(req: IncomingMessage, res: ServerResponse) {
  // CORS headers for cross-origin access
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, mcp-session-id");
  res.setHeader("Access-Control-Expose-Headers", "mcp-session-id");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // Health check
  if (req.method === "GET" && (req.url === "/" || req.url === "/health")) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      name: "chave-mestra-mcp",
      version: "1.0.0",
      status: "ok",
      tools: 5,
      prompts: 11,
      resources: "55+",
    }));
    return;
  }

  // MCP endpoint
  if (req.url === "/mcp" || req.url === "/") {
    try {
      const server = createServer();
      const transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: () => crypto.randomUUID(),
      });

      await server.connect(transport);
      await transport.handleRequest(req, res);
    } catch (err) {
      console.error("MCP request error:", err);
      if (!res.headersSent) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Internal server error" }));
      }
    }
    return;
  }

  // 404
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found. Use /mcp for MCP protocol or / for health check." }));
}

const httpServer = createHttpServer(handleMcpRequest);

httpServer.listen(PORT, () => {
  console.error(`🔑 Chave Mestra MCP Server running on http://localhost:${PORT}`);
  console.error(`   MCP endpoint: http://localhost:${PORT}/mcp`);
  console.error(`   Health check: http://localhost:${PORT}/health`);
});
