import "../app/app.css";

import { type Preview } from "@storybook/nextjs-vite";
import { createPreviewAnnotations } from "msw-storybook-addon/preview";
import { INITIAL_VIEWPORTS } from "storybook/viewport";

const mswAnnotations = createPreviewAnnotations();

const preview: Preview = {
	...mswAnnotations,
	beforeEach: async (context) => {
		// beforeEach is typed as BeforeEach | BeforeEach[]; narrow to callable form.
		const fn = typeof mswAnnotations.beforeEach === "function" ? mswAnnotations.beforeEach : undefined;
		const cleanup = await fn?.(context);

		const handlers = context.parameters?.msw?.handlers;
		if (handlers && context.msw) {
			const list = Array.isArray(handlers) ? handlers : [handlers];
			context.msw.use(...list);
		}

		return cleanup;
	},
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		html: {
			prettier: {
				tabWidth: 4,
				useTabs: true,
			},
		},
		nextjs: { appDirectory: true },
		test: {
			dangerouslyIgnoreUnhandledErrors: true,
		},
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
	tags: ["autodocs"],
};

export default preview;
