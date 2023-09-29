/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				whiteGlass: 'ffffff10',
				linearBlue: 'A0DDFF',
			},
			fontFamily: {
				'figtree': ['Figtree']
			}
		},
	},
	plugins: [],
}
