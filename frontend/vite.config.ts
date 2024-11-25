import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		VitePWA({
			registerType: 'autoUpdate',
			workbox: {
				clientsClaim: true,
				skipWaiting: true,
				runtimeCaching: [
					{
						urlPattern: /^https?.*/,
						handler: 'NetworkFirst',
						options: {
							cacheName: 'http-cache',
							expiration: {
								maxEntries: 500,
								maxAgeSeconds: 24 * 60 * 60 // 24 horas
							}
						}
					}
				]
			},
			injectRegister: 'auto',
			includeManifestIcons: true,
			manifest: {
				icons: [
					{
						src: '/icons/maskable/maskable_icon_x192.png',
						type: 'image/png',
						sizes: '192x192'
					},
					{
						src: '/icons/maskable/maskable_icon_x512.png',
						type: 'image/png',
						sizes: '512x512'
					}
				],
				background_color: '#050416',
				display: 'standalone',
				scope: '/',
				categories: ['treinamento', 'bolso', 'treino', 'academia'],
				description: 'Não vacila no treino!',
				lang: 'pt-BR',
				id: '/',
				name: 'Treino de bolso: Não vacila no treino!',
				orientation: 'portrait',
				publicPath: '/',
				short_name: 'Treino de bolso',
				theme_color: '#FDA743',
				shortcuts: [
					{
						name: "How's weather today?",
						short_name: 'Today',
						description: 'View weather information for today',
						url: '/today',
						icons: [{ src: '/icons/maskable/maskable_icon_x192.png', sizes: '192x192' }]
					},
					{
						name: "How's weather tomorrow?",
						short_name: 'Tomorrow',
						description: 'View weather information for tomorrow',
						url: '/tomorrow',
						icons: [{ src: '/icons/maskable/maskable_icon_x192.png', sizes: '192x192' }]
					}
				],
				share_target: {
					action: '/share-target',
					method: 'GET',
					enctype: 'application/x-www-form-urlencoded',
					params: {
						title: 'title',
						text: 'text',
						url: 'url'
					}
				},
				screenshots: [
					{
						src: './screenshot/screenshot_1.png',
						type: 'image/png',
						sizes: '393x852',
						form_factor: 'narrow'
					},
					{
						src: './screenshot/screenshot_2.png',
						type: 'image/png',
						sizes: '393x852',
						form_factor: 'narrow'
					},
					{
						src: './screenshot/screenshot_3.png',
						type: 'image/png',
						sizes: '393x852',
						form_factor: 'narrow'
					},
					{
						src: './screenshot/screenshot_4.png',
						type: 'image/png',
						sizes: '393x852',
						form_factor: 'narrow'
					}
				]
			}
		})
	],
	build: {
		manifest: true
	}
});
