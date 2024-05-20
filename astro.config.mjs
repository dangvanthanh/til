import alpinejs from '@astrojs/alpinejs'
import lit from '@astrojs/lit'
import markdoc from '@astrojs/markdoc'
import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import preact from '@astrojs/preact'
import react from '@astrojs/react'
import solidJs from '@astrojs/solid-js'
import svelte from '@astrojs/svelte'
import vercel from '@astrojs/vercel/serverless'
import vue from '@astrojs/vue'
import keystatic from '@keystatic/astro'
import { defineConfig } from 'astro/config'
import rehypePrettyCode from 'rehype-pretty-code'
import moonlightTheme from './public/theme/moonlight-ii.json'

const options = {
  // Specify the theme to use or a custom theme json, in our case
  // it will be a moonlight-II theme from
  // https://github.com/atomiks/moonlight-vscode-theme/blob/master/src/moonlight-ii.json
  theme: moonlightTheme,
  // Callbacks to customize the output of the nodes
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [
        {
          type: 'text',
          value: ' ',
        },
      ]
    }
  },
  onVisitHighlightedLine(node) {
    // Adding a class to the highlighted line
    node.properties.className.push('highlighted')
  },
}

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, options]],
  },
  integrations: [
    react({
      include: ['**/react/*'],
    }),
    partytown(),
    preact({
      include: ['**/preact/*'],
    }),
    solidJs({
      include: ['**/solid/*'],
    }),
    svelte(),
    vue(),
    mdx(),
    alpinejs(),
    lit(),
    markdoc(),
    keystatic(),
  ],
  output: 'hybrid',
  adapter: vercel(),
})
