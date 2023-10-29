import { defineConfig } from "astro/config";
import compress from "astro-compress";
import alpine from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
	build: {
		assetsPrefix: ".",
		format: "file",
		assets: "assets",
		inlineStylesheets: "auto",
		/* rollupOptions: {
			output: {
				manualChunks: undefined,
			},
		}, */
	},
	vite: {
		build: {
			rollupOptions: {
				output: {
					entryFileNames: "assets/js/[name].[hash].js",
					assetFileNames: ({ name }) => {
						/* if (/\.(woff(2)?|ttf|otf|eot|svg)$/.test(name ?? "")) {
							return "assets/fonts/[name]/[name].[hash][extname]";
						} */

						if (/\.(gif|jpe?g|png|svg|webp|ico)$/.test(name ?? "")) {
							return "assets/img/[name].[hash][extname]";
						}

						if (/\.css$/.test(name ?? "")) {
							return "assets/css/[name].[hash][extname]";
						}

						// default value
						// ref: https://rollupjs.org/guide/en/#outputassetfilenames
						return "assets/[name].[hash][extname]";
					},
				},
			},
		},
	},
	integrations: [
		tailwind({
			config: {
				applyBaseStyles: true,
			},
		}),
		alpine(),
		sanity({
			projectId: "zjooigsf",
			dataset: "production",
			// Set useCdn to false if you're building statically.
			useCdn: false,
		}),
	],
});
