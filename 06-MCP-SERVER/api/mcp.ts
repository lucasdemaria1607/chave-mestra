/**
 * Vercel Serverless Function — MCP endpoint.
 *
 * Stateless mode: no sessions, JSON responses (not SSE).
 * Each request creates a fresh server+transport, responds, and closes.
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

  // MCP protocol on POST — stateless, no sessions
  try {
    const server = createServer();
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: undefined, // Stateless: no session tracking
      enableJsonResponse: true,      // JSON instead of SSE (serverless-friendly)
    });

    res.on("close", () => {
      transport.close();
      server.close();
    });

    await server.connect(transport);
    await transport.handleRequest(req, res);
  } catch (err) {
    console.error("MCP handler error:", err);
    if (!res.headersSent) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
