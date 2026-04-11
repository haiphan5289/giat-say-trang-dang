#!/usr/bin/env node
/**
 * Figma MCP Proxy Server
 * Created by haiphan on 2026-04-03
 * Copyright © 2024 Cho Tot. All rights reserved.
 *
 * A stable MCP server that wraps Figma REST API — works even when
 * Figma Desktop is closed. No dependency on port 3845.
 *
 * Usage:
 *   FIGMA_TOKEN=<your_token> node server.js
 *
 * Transport: stdio (VS Code spawns this process directly)
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env file if present (simple key=value parser, no external deps)
const envPath = resolve(__dirname, ".env");
if (existsSync(envPath)) {
  const lines = readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
    if (!process.env[key]) process.env[key] = value;
  }
}

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_API_BASE = "https://api.figma.com/v1";

// Simple in-memory cache: key → { data, expiresAt }
const cache = new Map();
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function cached(key, fetchFn) {
  const entry = cache.get(key);
  if (entry && Date.now() < entry.expiresAt) return Promise.resolve(entry.data);
  return fetchFn().then((data) => {
    cache.set(key, { data, expiresAt: Date.now() + CACHE_TTL_MS });
    return data;
  });
}

async function figmaFetch(path) {
  if (!FIGMA_TOKEN) {
    throw new Error(
      "FIGMA_TOKEN is not set. Set it in scripts/figma-mcp-proxy/.env or export FIGMA_TOKEN=<token>."
    );
  }
  const url = `${FIGMA_API_BASE}${path}`;
  const res = await fetch(url, {
    headers: {
      "X-Figma-Token": FIGMA_TOKEN,
    },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Figma API error ${res.status}: ${body}`);
  }
  return res.json();
}

// Extracts fileKey from a Figma URL or returns as-is if already a key
function parseFileKey(input) {
  const match = input.match(/figma\.com\/(?:design|file)\/([A-Za-z0-9]+)/);
  return match ? match[1] : input;
}

// Format node data into readable design context
function formatNodeContext(node, depth = 0) {
  if (!node) return "";
  const indent = "  ".repeat(depth);
  let out = `${indent}[${node.type}] ${node.name || ""}`;
  if (node.absoluteBoundingBox) {
    const b = node.absoluteBoundingBox;
    out += ` (${Math.round(b.width)}x${Math.round(b.height)})`;
  }
  if (node.fills && node.fills.length) {
    const fills = node.fills
      .filter((f) => f.visible !== false)
      .map((f) => {
        if (f.type === "SOLID" && f.color) {
          const { r, g, b, a } = f.color;
          return `rgba(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)},${(a ?? 1).toFixed(2)})`;
        }
        return f.type;
      });
    if (fills.length) out += ` fills=[${fills.join(", ")}]`;
  }
  if (node.style) {
    const s = node.style;
    const parts = [];
    if (s.fontFamily) parts.push(s.fontFamily);
    if (s.fontSize) parts.push(`${s.fontSize}px`);
    if (s.fontWeight) parts.push(`weight=${s.fontWeight}`);
    if (parts.length) out += ` font=[${parts.join(", ")}]`;
  }
  out += "\n";
  if (node.children && depth < 4) {
    for (const child of node.children) {
      out += formatNodeContext(child, depth + 1);
    }
  }
  return out;
}

// ---------------------------------------------------------------------------
// MCP Server
// ---------------------------------------------------------------------------

const server = new Server(
  { name: "figma-proxy", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

// Tool definitions
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "get_design_context",
      description:
        "Fetch design context for a Figma node. Returns structured layout, color, and typography info. Works via Figma REST API — no Figma Desktop required.",
      inputSchema: {
        type: "object",
        properties: {
          file_key: {
            type: "string",
            description: "Figma file key or full Figma URL",
          },
          node_id: {
            type: "string",
            description: "Node ID (e.g. 2703-10882 or 2703:10882)",
          },
          depth: {
            type: "number",
            description: "Tree depth to fetch (1-5, default 3)",
          },
        },
        required: ["file_key", "node_id"],
      },
    },
    {
      name: "get_metadata",
      description: "Fetch Figma file metadata: name, last modified, pages.",
      inputSchema: {
        type: "object",
        properties: {
          file_key: {
            type: "string",
            description: "Figma file key or full Figma URL",
          },
        },
        required: ["file_key"],
      },
    },
    {
      name: "get_node_screenshot",
      description:
        "Get a screenshot/export URL for a Figma node (PNG at 2x scale).",
      inputSchema: {
        type: "object",
        properties: {
          file_key: {
            type: "string",
            description: "Figma file key or full Figma URL",
          },
          node_id: {
            type: "string",
            description: "Node ID",
          },
          scale: {
            type: "number",
            description: "Export scale (1-4, default 2)",
          },
          format: {
            type: "string",
            description: "Export format: png, jpg, svg (default png)",
          },
        },
        required: ["file_key", "node_id"],
      },
    },
    {
      name: "get_screenshot",
      description:
        "Alias for get_node_screenshot. Get a screenshot/export URL for a Figma node (PNG at 2x scale).",
      inputSchema: {
        type: "object",
        properties: {
          file_key: {
            type: "string",
            description: "Figma file key or full Figma URL",
          },
          node_id: {
            type: "string",
            description: "Node ID",
          },
          scale: {
            type: "number",
            description: "Export scale (1-4, default 2)",
          },
          format: {
            type: "string",
            description: "Export format: png, jpg, svg (default png)",
          },
        },
        required: ["file_key", "node_id"],
      },
    },
    {
      name: "get_variable_defs",
      description:
        "Fetch all design variable definitions (colors, spacing tokens) from a Figma file.",
      inputSchema: {
        type: "object",
        properties: {
          file_key: {
            type: "string",
            description: "Figma file key or full Figma URL",
          },
        },
        required: ["file_key"],
      },
    },
    {
      name: "get_components",
      description: "List all published components in a Figma file.",
      inputSchema: {
        type: "object",
        properties: {
          file_key: {
            type: "string",
            description: "Figma file key or full Figma URL",
          },
        },
        required: ["file_key"],
      },
    },
  ],
}));

// Tool handlers
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case "get_design_context": {
        const fileKey = parseFileKey(args.file_key);
        // Figma API uses : as separator, but URLs use -
        const nodeId = String(args.node_id).replaceAll("-", ":");
        const depth = Math.min(Math.max(Number(args.depth) || 3, 1), 5);
        const cacheKey = `node:${fileKey}:${nodeId}:${depth}`;

        const data = await cached(cacheKey, () =>
          figmaFetch(`/files/${fileKey}/nodes?ids=${encodeURIComponent(nodeId)}&depth=${depth}`)
        );

        const node = data.nodes?.[nodeId]?.document;
        if (!node) {
          return {
            content: [{ type: "text", text: `Node ${nodeId} not found in file ${fileKey}.` }],
          };
        }

        const context = formatNodeContext(node);
        const summary = [
          `# Figma Node: ${node.name} (${node.type})`,
          `File: ${fileKey} | Node: ${nodeId}`,
          ``,
          `## Structure`,
          "```",
          context.trim(),
          "```",
          ``,
          `## Raw Data (truncated)`,
          "```json",
          JSON.stringify(node, null, 2).slice(0, 4000),
          "```",
        ].join("\n");

        return { content: [{ type: "text", text: summary }] };
      }

      case "get_metadata": {
        const fileKey = parseFileKey(args.file_key);
        const data = await cached(`meta:${fileKey}`, () =>
          figmaFetch(`/files/${fileKey}?depth=1`)
        );
        const pages = data.document?.children?.map((p) => `- ${p.name} (${p.id})`).join("\n") || "";
        const text = [
          `# ${data.name}`,
          `Last modified: ${data.lastModified}`,
          `Version: ${data.version}`,
          ``,
          `## Pages`,
          pages,
        ].join("\n");
        return { content: [{ type: "text", text }] };
      }

      case "get_screenshot":
      case "get_node_screenshot": {
        const fileKey = parseFileKey(args.file_key);
        const nodeId = String(args.node_id).replaceAll("-", ":");
        const scale = Math.min(Math.max(Number(args.scale) || 2, 1), 4);
        const format = ["png", "jpg", "svg"].includes(args.format) ? args.format : "png";
        const cacheKey = `img:${fileKey}:${nodeId}:${scale}:${format}`;

        const data = await cached(cacheKey, () =>
          figmaFetch(
            `/images/${fileKey}?ids=${encodeURIComponent(nodeId)}&scale=${scale}&format=${format}`
          )
        );
        const imageUrl = data.images?.[nodeId];
        if (!imageUrl) {
          return {
            content: [{ type: "text", text: `Could not generate image for node ${nodeId}.` }],
          };
        }
        return {
          content: [
            { type: "text", text: `Screenshot URL (${format} @${scale}x):\n${imageUrl}` },
          ],
        };
      }

      case "get_variable_defs": {
        const fileKey = parseFileKey(args.file_key);
        const data = await cached(`vars:${fileKey}`, () =>
          figmaFetch(`/files/${fileKey}/variables/local`)
        );
        const text = JSON.stringify(data, null, 2).slice(0, 8000);
        return { content: [{ type: "text", text }] };
      }

      case "get_components": {
        const fileKey = parseFileKey(args.file_key);
        const data = await cached(`components:${fileKey}`, () =>
          figmaFetch(`/files/${fileKey}/components`)
        );
        const lines = Object.values(data.meta?.components || {})
          .slice(0, 50)
          .map((c) => `- ${c.name} (${c.node_id}) — ${c.description || "no description"}`)
          .join("\n");
        return { content: [{ type: "text", text: `## Components\n${lines}` }] };
      }

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (err) {
    return {
      content: [{ type: "text", text: `Error: ${err.message}` }],
      isError: true,
    };
  }
});

// ---------------------------------------------------------------------------
// Start
// ---------------------------------------------------------------------------

const transport = new StdioServerTransport();
await server.connect(transport);
// Server is running — VS Code communicates via stdin/stdout
