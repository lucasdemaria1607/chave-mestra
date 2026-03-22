/**
 * Vercel Serverless Function — MCP endpoint.
 *
 * This is the entry point when deployed on Vercel.
 * URL: https://your-project.vercel.app/api/mcp
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { createServer } from "../src/server.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, mcp-session-id");
  res.setHeader("Access-Control-Expose-Headers", "mcp-session-id");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  // Health check on GET
  if (req.method === "GET") {
    res.status(200).json({
      name: "chave-mestra-mcp",
      version: "1.0.0",
      status: "ok",
      tools: 5,
      prompts: 11,
      resources: "55+",
    });
    return;
  }

  // MCP protocol on POST
  try {
    const server = createServer();
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: () => crypto.randomUUID(),
    });

    await server.connect(transport);

    // The transport expects raw Node.js req/res
    await transport.handleRequest(req, res);
  } catch (err) {
    console.error("MCP handler error:", err);
    if (!res.headersSent) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
