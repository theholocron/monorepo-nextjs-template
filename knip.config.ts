import type { KnipConfig } from "knip";

const config: KnipConfig = {
	workspaces: {
		".": {
			// commitlint.config.ts, eslint.config.ts, prettier.config.ts auto-detected by Knip plugins
			entry: ["holocron.config.ts"],
			project: ["*.ts"],
			// astro.config.ts is the docs build config, not an Astro workspace — disable plugin
			astro: false,
		},
		docs: {
			entry: ["src/content.config.ts"],
			project: ["src/**/*.ts"],
		},
		"apps/*": {
			// vitest.setup.ts referenced via setupFiles string in vitest.config — not a static import
			entry: ["src/index.ts", "vitest.setup.ts", ".storybook/decorators.tsx", "app/msw/node.ts"],
			project: ["src/**/*.{ts,tsx,mdx}", "app/**/*.{ts,tsx}", "page/**/*.{ts,tsx}", "*.{ts,cjs}"],
		},
		"packages/*": {
			project: ["src/**/*.{ts,tsx,mdx}", "*.ts"],
		},
	},
	ignoreDependencies: [
		// passed as --config arg to lint-staged binary in .husky/pre-commit
		"@theholocron/lint-staged-config",
		// loaded at runtime by the holocron plugin system — not a static import
		"@theholocron/holocron-plugin-github",
		"@theholocron/holocron-plugin-vercel",
		// skills referenced as strings in holocron.config.ts
		"@theholocron/skills",
		// config packages loaded via config file resolution — not static imports
		"@theholocron/lighthouse-config",
		"@theholocron/prettier-config",
		"@theholocron/storybook-config",
		// storybook addon referenced as a string in main.ts addons array
		"storybook-addon-pseudo-states",
		// binary tools — invoked via CLI or hooks, not module imports
		"alex",
		"chromatic",
		"playwright",
		"sort-package-json",
	],
	ignoreExportsUsedInFile: true,
};

export default config;
