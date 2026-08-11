import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { reactApp } from "@theholocron/eslint-config/bundles/react-app";
import type { Linter } from "eslint";

const config: Linter.Config[] = [
	...reactApp(),
	{
		languageOptions: {
			parserOptions: {
				tsconfigRootDir: dirname(fileURLToPath(import.meta.url)),
			},
		},
		settings: { react: { version: "19" } },
		rules: {
			"react/react-in-jsx-scope": "off",
			"n/no-missing-import": "off",
		},
	},
	{
		files: [".storybook/main.@(js|cjs|mjs|ts)"],
		rules: {
			"storybook/no-uninstalled-addons": [
				"error",
				{ packageJsonLocation: join(dirname(fileURLToPath(import.meta.url)), "package.json") },
			],
		},
	},
	{ ignores: ["dist/**", "coverage/**"] },
];

export default config;
