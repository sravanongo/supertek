import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Defaults to Cloudflare Pages (this repo ships a wrangler.jsonc for it).
// Override with NITRO_PRESET=node for local Node builds, or deploy on Vercel
// (which sets process.env.VERCEL automatically) to get the Vercel preset.
const NITRO_PRESET =
  process.env.NITRO_PRESET || (process.env.VERCEL ? "vercel" : "cloudflare-pages");

const nitroOptions =
  NITRO_PRESET === "node"
    ? { preset: "node" as const }
    : NITRO_PRESET === "vercel"
      ? { preset: "vercel" as const }
      : {
          preset: "cloudflare-pages" as const,
          cloudflare: { nodeCompat: true, deployConfig: true },
        };

export default defineConfig({
  plugins: [
    tanstackStart({
      server: { entry: "server" },
    }),
    nitro(nitroOptions),
    react(),
    tsconfigPaths(),
    tailwindcss(),
  ],
  ssr: {
    target: NITRO_PRESET === "cloudflare-pages" ? "webworker" : "node",
  },
});
