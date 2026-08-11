import type { HolocronConfig } from "@theholocron/cli";
import { defineConfig } from "@theholocron/cli";
import { node } from "@theholocron/holocron-config";

const { repo, workflows, providers } = node();
export default defineConfig({
	description:
		"A modern Next.js + React component library template for monorepos with pre-configured tools, best practices, and CI/CD setup for rapid application development.",
	homepage: "https://docs.theholocron.dev/monorepo-nextjs-template/",
	repo: {
		name: "theholocron/monorepo-nextjs-template",
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["monorepo", "nextjs", "pnpm", "react", "template", "typescript", "vite"],
		...repo,
		protection: "balanced",
		properties: {
			...repo.properties,
			runtime_environment: "browser",
			open_source: true,
			uses_external_packages: false,
		},
	},
	workflows: [
		...workflows,
		{
			name: "audit",
			with: { "run-performance": true, "lighthouse-config": "lighthouse.config.cjs" },
		},
		{
			name: "test",
			with: {
				"run-unit": false,
				"run-storybook": true,
				"run-interaction": true,
				"run-user-flow": false,
				"wait-on-url": "http://localhost:3000",
				"run-chromatic": true,
			},
		},
		{ name: "release", with: { "run-build": true } },
		{
			name: "deploy-storybook",
			paths: ["apps/web/src/**", "apps/web/.storybook/**"],
		},
		{
			name: "deploy-docs",
			with: { name: "monorepo-nextjs-template", "skip-content": true },
			paths: ["docs/**"],
		},
	],
	providers: {
		...providers,
		deployment: "vercel",
		secrets: "github",
	},
	docs: { build: "workflow", https: true },
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
} satisfies HolocronConfig);
