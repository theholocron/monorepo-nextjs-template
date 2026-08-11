import { coverage, storybook } from "@theholocron/vitest-config";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		coverage: {
			...coverage,
			include: ["src/**/*.{ts,tsx}"],
			exclude: [...coverage.exclude, "**/*.story.*", "src/index.ts"],
			thresholds: { lines: 80, branches: 80, functions: 80, statements: 80 },
		},
		projects: [
			{
				plugins: [react()],
				test: {
					name: "unit",
					environment: "jsdom",
					globals: true,
					include: ["src/**/*.{test,spec}.{ts,tsx}"],
					setupFiles: ["@theholocron/vitest-config/setup/jest-dom"],
				},
			},
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			storybook(".storybook") as any,
		],
	},
});
