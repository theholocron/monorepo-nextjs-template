import { defineConfig } from "cypress";

/*
 * @see https://docs.cypress.io/app/references/configuration
 */
export default defineConfig({
	e2e: {
		baseUrl: "http://localhost:3000/",
		specPattern: "apps/web/src/**/*.{cy.js,cy.ts}",
		supportFile: false,
		retries: 2,
	},
	projectId: "1jeiz3",
});
