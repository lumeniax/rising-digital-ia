import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin, type ViteDevServer } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

// =====================
// DEBUG COLLECTOR
// =====================

const PROJECT_ROOT = import.meta.dirname;
const LOG_DIR = path.join(PROJECT_ROOT, ".manus-logs");

const MAX_LOG_SIZE_BYTES = 1 * 1024 * 1024;
const TRIM_TARGET_BYTES = Math.floor(MAX_LOG_SIZE_BYTES * 0.6);

function ensureLogDir() {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }
}

function trimLogFile(logPath: string, maxSize: number) {
  try {
    if (!fs.existsSync(logPath) || fs.statSync(logPath).size <= maxSize) return;

    const lines = fs.readFileSync(logPath, "utf-8").split("\n");
    const kept: string[] = [];
    let size = 0;

    for (let i = lines.length - 1; i >= 0; i--) {
      const bytes = Buffer.byteLength(lines[i] + "\n", "utf-8");
      if (size + bytes > TRIM_TARGET_BYTES) break;
      kept.unshift(lines[i]);
      size += bytes;
    }

    fs.writeFileSync(logPath, kept.join("\n"), "utf-8");
  } catch {}
}

function writeToLogFile(source: string, entries: unknown[]) {
  if (!entries.length) return;

  ensureLogDir();
  const logPath = path.join(LOG_DIR, `${source}.log`);

  const lines = entries.map(e => `[${new Date().toISOString()}] ${JSON.stringify(e)}`);
  fs.appendFileSync(logPath, lines.join("\n") + "\n");

  trimLogFile(logPath, MAX_LOG_SIZE_BYTES);
}

function vitePluginManusDebugCollector(): Plugin {
  return {
    name: "manus-debug-collector",

    configureServer(server: ViteDevServer) {
      server.middlewares.use("/__manus__/logs", (req, res, next) => {
        if (req.method !== "POST") return next();

        let body = "";
        req.on("data", c => (body += c));
        req.on("end", () => {
          try {
            const payload = JSON.parse(body);

            if (payload.consoleLogs) writeToLogFile("browserConsole", payload.consoleLogs);
            if (payload.networkRequests) writeToLogFile("networkRequests", payload.networkRequests);
            if (payload.sessionEvents) writeToLogFile("sessionReplay", payload.sessionEvents);

            res.writeHead(200);
            res.end(JSON.stringify({ ok: true }));
          } catch (e) {
            res.writeHead(400);
            res.end(JSON.stringify({ error: String(e) }));
          }
        });
      });
    },
  };
}

// =====================
// VITE CONFIG FIXED
// =====================

const plugins = [
  react(),
  tailwindcss(),
  vitePluginManusRuntime(),
  vitePluginManusDebugCollector(),
  jsxLocPlugin(),
];

export default defineConfig({
  base: "/rising-digital-ia/",   // 🔥 CRITIQUE (FIX 404)

  plugins,

  resolve: {
    alias: {
      "@": path.resolve(PROJECT_ROOT, "client", "src"),
      "@shared": path.resolve(PROJECT_ROOT, "shared"),
      "@assets": path.resolve(PROJECT_ROOT, "attached_assets"),
    },
  },

  root: path.resolve(PROJECT_ROOT, "client"),

  build: {
    outDir: path.resolve(PROJECT_ROOT, "dist"), // 🔥 FIX GitHub Pages
    emptyOutDir: true,
  },

  server: {
    port: 5000,
    strictPort: true,
    host: "0.0.0.0",
  },
});
