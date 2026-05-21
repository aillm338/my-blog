import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://aillm338.github.io",
  base: "/my-blog/",
  integrations: [tailwind()],
});
