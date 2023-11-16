import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin = {
	registerType: "prompt",
	includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
	manifest: {
		name: "DnD Companion",
		short_name: "DnD",
		description: "A companion to your DnD adventures",
		icons: [
			{
				src: "./src/images/favicon/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "./src/images/favicon/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},

			{
				src: "./src/images/favicon/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
				purpose: "apple touch icon",
			},
			{
				src: "./src/images/favicon/maskable-icon.png",
				sizes: "255x255",
				type: "image/png",
				purpose: "any maskable",
			},
		],
		theme_color: "#fefefe",
		background_color: "#efefef",
		display: "standalone",
		scope: "/",
		start_url: "/",
		orientation: "portrait",
	},
};

// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
	plugins: [react(), VitePWA(manifestForPlugin)],
});
