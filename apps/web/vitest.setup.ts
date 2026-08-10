import { setProjectAnnotations } from "@storybook/nextjs-vite";
import { setupMSWBrowser } from "@theholocron/vitest-config/setup/msw";

// import { setupMSWNode } from "@theholocron/vitest-config/setup/msw";
import * as previewAnnotations from "./.storybook/preview";
import { worker } from "./app/msw/browser";
// import { server } from "./app/msw/node";

const annotations = setProjectAnnotations([previewAnnotations]);

// Both casts resolve mismatches between Storybook's wider types and the
// narrower Worker/Annotations interfaces the shared config defines.
setupMSWBrowser(
	worker as unknown as Parameters<typeof setupMSWBrowser>[0],
	annotations as unknown as Parameters<typeof setupMSWBrowser>[1]
);

// server-side MSW (uncomment and swap imports above to use)
// setupMSWNode(server, annotations);
