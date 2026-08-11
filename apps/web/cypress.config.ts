import { defineConfig } from "cypress";
// import { mergeConfig, loadEnv } from "vite";

/*
 * @see https://docs.cypress.io/app/references/configuration
 */
export default defineConfig({
	component: {
		devServer: {
			framework: "next",
			bundler: "vite",
			/*
			viteConfig: () => {
				const viteConfig = require("./vite.config.ts");
				const conf = {
					define: {
						"process.env": loadEnv("development", process.cwd(), "VITE"),
					},
					server: {
						/**
						* start the CT dev server on a different port than the full RWA
						* so users can switch between CT and E2E testing without having to
						* stop/start the RWA dev server.
						port: 3002,
					},
				};
				const resolvedViteConfig = mergeConfig(viteConfig, conf);
				return resolvedViteConfig;
			},
			*/
		},
	},
	e2e: {
		// setupNodeEvents(on, config) {},
		baseUrl: "http://localhost:3000/", // this is the default port for `next` that runs a server
		specPattern: "src/**/*.{cy.js,cy.ts}",
		supportFile: false,
		retries: 2,
	},
	projectId: "etpgyt",
});
