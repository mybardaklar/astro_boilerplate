/** @type {import("prettier").Config} */
module.exports = {
	useTabs: true,
	printWidth: 100,
	tabWidth: 4,
	semi: true,
	arrowParens: "always",
	singleQuote: false,
	bracketSpacing: true,
	bracketSameLine: true,
	jsxBracketSameLine: true,
	fluid: false,
	sortTailwindcssClasses: true,
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
