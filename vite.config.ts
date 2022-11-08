import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		splitVendorChunkPlugin(),
		// VitePWA({
		// 	includeAssets: ["vite.svg"],
		// 	srcDir: "src",
		// 	filename: "sw.ts",
		// 	strategies: "injectManifest",
		// 	injectRegister: "auto",
		// 	registerType: "autoUpdate",
		// 	workbox: {
		// 		globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
		// 	},
		// 	devOptions: {
		// 		enabled: true,
		// 	},
		// }),
	],
	server: {
		port: 3000,
		host: true,
	},
	resolve: {
		alias: {
			"~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
		},
	},
});
