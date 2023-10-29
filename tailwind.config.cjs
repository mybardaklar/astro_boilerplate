/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				primary: ["Rubik", ...defaultTheme.fontFamily.serif],
				secondary: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: {
					50: "#ffe2ec",
					100: "#ffb1c5",
					200: "#ff7f9e",
					300: "#ff4d78",
					400: "#fe1d51",
					500: "#e50637",
					600: "#b3002b",
					700: "#81001f",
					800: "#4f0011",
					900: "#200005",
				},
				textColor: "#222d35",
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
			},
		},
	},
	plugins: [],
};
