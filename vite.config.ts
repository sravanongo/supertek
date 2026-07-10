import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const isNodePreset = process.env.NITRO_PRESET === "node";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: { entry: "server" },
    }),
    ...(isNodePreset
      ? [nitro({ preset: "node" })]
      : [
          nitro({
            preset: "cloudflare-pages",
            cloudflare: { nodeCompat: true, deployConfig: true },
          }),
        ]),
    react(),
    tsconfigPaths(),
    tailwindcss(),
  ],
  ssr: {
    target: isNodePreset ? "node" : "webworker",
  },
});
