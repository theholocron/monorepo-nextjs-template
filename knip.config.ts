import type { KnipConfig } from "knip";

const config: KnipConfig = {
	workspaces: {
		".": {
			entry: ["commitlint.config.ts", "eslint.config.ts", "holocron.config.ts", "prettier.config.ts"],
			project: ["*.ts"],
		},
		docs: {
			entry: ["src/content.config.ts", "astro.config.ts"],
			project: ["src/**/*.ts", "*.ts"],
		},
		"apps/*": {
			entry: [
				"next.config.ts",
				"vitest.config.ts",
				"cypress.config.ts",
				".storybook/main.ts",
				"src/index.ts",
			],
			project: ["src/**/*.{ts,tsx}", "app/**/*.{ts,tsx}", "page/**/*.{ts,tsx}", "*.{ts,cjs}"],
		},
		"packages/*": {
			entry: ["src/index.ts", "vite.config.ts", "vitest.config.ts"],
			project: ["src/**/*.{ts,tsx}", "*.ts"],
		},
	},
	ignoreDependencies: [
		"@theholocron/tsconfig",
		"@theholocron/commitlint-config",
		"@theholocron/lint-staged-config",
		"husky",
		"turbo",
	],
	ignoreExportsUsedInFile: true,
};

export default config;
