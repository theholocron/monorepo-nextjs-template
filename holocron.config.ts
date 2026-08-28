import type { HolocronConfig } from "@theholocron/cli";
import { defineConfig } from "@theholocron/cli";
import { monorepo, nextjs } from "@theholocron/holocron-config";

const { repo, workflows, providers, org, domain } = monorepo(nextjs());
export default defineConfig({
	description:
		"A modern Next.js + React component library template for monorepos with pre-configured tools, best practices, and CI/CD setup for rapid application development.",
	homepage: "https://docs.theholocron.dev/monorepo-nextjs-template/",
	org,
	domain,
	repo: {
		name: "theholocron/monorepo-nextjs-template",
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["monorepo", "nextjs", "pnpm", "react", "template", "typescript", "vite"],
		...repo,
		requiredChecks: [
			...(repo.requiredChecks ?? []),
			"Storybook Publish: monorepo-nextjs-template-app",
			"Storybook Publish: monorepo-nextjs-template_ui",
			"UI Review: monorepo-nextjs-template-app",
			"UI Review: monorepo-nextjs-template_ui",
			"UI Tests: monorepo-nextjs-template-app",
			"UI Tests: monorepo-nextjs-template_ui",
			"Test / Run Storybook interaction tests",
			"Test / Test Interactions and Accessibility",
			"Test / Test User Flow (1)",
			"Test / Test User Flow (2)",
			"Test / Test Visual and Composition (UI)",
			"Test / Test Visual and Composition (WEB)",
			"audit / Audit the bundle size",
			"audit / Audit the performance",
			"codecov/patch/ui",
			"codecov/patch/web",
		],
		properties: {
			...repo.properties,
			uses_external_packages: false,
		},
	},
	workflows: [
		...workflows,
		{
			name: "test",
			with: {
				"wait-on-url": "http://localhost:3000",
				"run-chromatic": {
					projects: [
						{ tokenName: "WEB", workingDir: "apps/web" },
						{ tokenName: "UI", workingDir: "packages/ui" },
					],
				},
			},
		},
		{ name: "release", with: { "run-build": true } },
		"sync",
		{
			name: "deploy",
			with: {
				type: "docs",
				name: "monorepo-nextjs-template",
				"storybook-projects": [
					{ name: "web", workingDir: "apps/web" },
					{ name: "ui", workingDir: "packages/ui" },
				],
			},
			paths: [
				"docs/**",
				"apps/web/src/**",
				"apps/web/.storybook/**",
				"packages/ui/src/**",
				"packages/ui/.storybook/**",
			],
		},
	],
	providers: { ...providers, deployment: "vercel" },
	docs: { build: "workflow", https: true },
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
} satisfies HolocronConfig);
