import { paraglideVitePlugin as paraglide } from "@inlang/paraglide-js";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit(),
    paraglide({
      project: "./project.inlang",
      outdir: "./src/lib/paraglide",
    }),
  ],

  server: { port: 3000 },
});
