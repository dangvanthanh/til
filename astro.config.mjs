import alpinejs from '@astrojs/alpinejs'
import lit from '@astrojs/lit'
import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import preact from '@astrojs/preact'
import react from '@astrojs/react'
import solidJs from '@astrojs/solid-js'
import svelte from '@astrojs/svelte'
import vue from '@astrojs/vue'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
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
	],
	markdown: {
		shikiConfig: {
			theme: 'dracula',
			langs: [],
			wrap: true,
			transformers: [],
		},
	},
})
