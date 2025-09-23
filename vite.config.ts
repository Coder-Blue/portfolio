import { paraglideVitePlugin as paraglide } from "@inlang/paraglide-js";
import { enhancedImages as enhanced } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { threeMinifier } from "@yushijinhun/three-minifier-rollup";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit(),
    enhanced(),
    paraglide({
      project: "./src/project.inlang",
      outdir: "./src/lib/paraglide",
      strategy: ["url", "cookie", "baseLocale", "preferredLanguage", "baseLocale"],
      disableAsyncLocalStorage: true,
      urlPatterns: [
        {
          pattern: "/:path(.*)?",
          localized: [
            ["en", "/en/:path(.*)?"],
            ["vi", "/vn/:path(.*)?"],
          ],
        },
      ],
    }),
    { ...threeMinifier(), enforce: "pre" },
  ],

  server: { port: 3000 },

  ssr: {
    noExternal: ["three"],
  },
});
