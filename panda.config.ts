import { defineConfig } from '@pandacss/dev'

export default defineConfig({
	lightningcss: true,
	preflight: true,
	include: [
		'./src/**/*.{js,jsx,ts,tsx,vue,astro}',
		'./pages/**/*.{js,jsx,ts,tsx,vue,astro}',
    './components/**/*.{js,jsx,ts,tsx,vue,astro}',
    './layouts/**/*.{js,jsx,ts,tsx,vue,astro}',
	],
	exclude: [],
	theme: {
		extend: {
			keyframes: {
				scroll: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' },
				},
			},
		},
	},
	outdir: 'styled-system',
})
