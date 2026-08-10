import { library } from "@theholocron/eslint-config/bundles/library";
import type { Linter } from "eslint";

const config: Linter.Config[] = [
	...library(),
	{
		rules: {
			"n/no-unpublished-import": "off",
		},
	},
	{ ignores: ["apps/**", "packages/**", "**/dist/**", "**/coverage/**"] },
];

export default config;
