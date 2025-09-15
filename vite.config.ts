import { paraglideVitePlugin as paraglide } from "@inlang/paraglide-js";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit(),
    paraglide({
      project: "./src/project.inlang",
      outdir: "./src/lib/paraglide",
      strategy: ["url", "cookie", "baseLocale", "preferredLanguage", "baseLocale"],
      disableAsyncLocalStorage: true,
      urlPatterns: [
        {
          pattern: "/",
          localized: [
            ["en", "/en"],
            ["vi", "/vn"],
          ],
        },
      ],
    }),
  ],

  server: { port: 3000 },
});
