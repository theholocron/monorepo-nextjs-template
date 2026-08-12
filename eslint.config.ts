import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { library } from "@theholocron/eslint-config/bundles/library";
import type { Linter } from "eslint";
import globals from "globals";

const config: Linter.Config[] = [
	...library(),
	{
		languageOptions: {
			parserOptions: {
				tsconfigRootDir: dirname(fileURLToPath(import.meta.url)),
			},
		},
		rules: {
			"n/no-unpublished-import": "off",
		},
	},
	{
		files: ["**/*.cjs"],
		languageOptions: {
			sourceType: "commonjs",
			globals: globals.commonjs,
		},
	},
	{ ignores: ["apps/**", "packages/**", "docs/.astro/**", "**/dist/**", "**/coverage/**"] },
];

export default config;
