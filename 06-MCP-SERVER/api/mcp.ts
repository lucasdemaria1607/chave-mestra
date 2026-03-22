/**
 * Vercel Serverless Function — MCP endpoint (stateless, JSON response mode).
 *
 * Based on the official MCP SDK jsonResponseStreamableHttp example.
 * Each request creates a fresh server — no session persistence needed
 * since all tools are stateless reads.
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { isInitializeRequest } from "@modelcontextprotocol/sdk/types.js";
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

  // DELETE — close session (no-op for stateless)
  if (req.method === "DELETE") {
    res.status(200).json({ ok: true });
    return;
  }

  // POST — MCP protocol
  if (req.method === "POST") {
    try {
      const server = createServer();
      const transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: () => crypto.randomUUID(),
        enableJsonResponse: true,
      });

      await server.connect(transport);
      await transport.handleRequest(req, res, req.body);
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
