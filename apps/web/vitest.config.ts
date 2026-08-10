import { coverage, storybook } from "@theholocron/vitest-config";
import { defineConfig } from "vitest/config";

/*
 * @see https://vitest.dev/config/
 */
export default defineConfig({
	test: {
		coverage: {
			...coverage,
			exclude: [...coverage.exclude, "**/handlers.*", "**/*.{mock}.*", "**/*.css"],
		},
		// @theholocron/vitest-config 7.15.0 types storybook() plugins as Promise<Plugin[]>[]
		// which doesn't satisfy Vite's Plugin[]; cast until the shared config fixes the type.
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		projects: [storybook(".storybook", { setupFiles: ["./vitest.setup.ts"] }) as any],
	},
});
