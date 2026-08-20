import starlight from "@astrojs/starlight";
import { defineConfig } from "@theholocron/astro-config";
import { docsTheme } from "@theholocron/docs-theme";

export default defineConfig({
	docs: {
		name: "Monorepo Next.js Template",
		github: "monorepo-nextjs-template",
		sidebar: [
			{ label: "Overview", slug: "" },
			{
				label: "Guide",
				items: [{ label: "Getting Started", slug: "getting-started" }],
			},
			{
				label: "Workspaces",
				items: [
					{ label: "Web App", slug: "web" },
					{ label: "UI Library", slug: "ui" },
				],
			},
		],
	},
	starlight,
	docsTheme,
	srcDir: "./docs/src",
	outDir: "./docs/dist",
	publicDir: "./docs/public",
});
