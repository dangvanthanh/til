import { defineConfig } from '@pandacss/dev'

export default defineConfig({
	lightningcss: true,
	preflight: true,
	include: [
		'./src/**/*.{js,jsx,ts,tsx,astro}',
		'./pages/**/*.{js,jsx,ts,tsx,astro}',
	],
	exclude: [],
	theme: {
		extend: {},
	},
	outdir: 'styled-system',
})
