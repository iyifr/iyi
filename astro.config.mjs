import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import vercel from '@astrojs/vercel/serverless'
import tailwind from '@astrojs/tailwind'

import expressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
	site: 'https://iyimide.vercel.app',
	integrations: [
		sitemap(),
		vue(),
		tailwind(),
		expressiveCode({
			themes: ['rose-pine'],
			styleOverrides: {
				borderRadius: '0.5rem',
				codeFontFamily: 'Cascadia Code, Consolas, Liberation Mono, Courier New',
				codeFontSize: '0.95rem',
			},
		}),
		mdx(),
	],
	output: 'server',
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
})
