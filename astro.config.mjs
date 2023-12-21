import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import preact from "@astrojs/preact";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";
import alpinejs from "@astrojs/alpinejs";

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      include: ["**/react/*"],
    }),
    tailwind(),
    partytown(),
    preact({
      include: ["**/preact/*"],
    }),
    solidJs({
      include: ["**/solid/*"],
    }),
    svelte(),
    vue(),
    mdx(),
    alpinejs(),
    lit(),
  ],
});
