---
title: Web App
description: The Next.js application workspace in the monorepo.
---

`apps/web` is the Next.js 16 application with App Router. It consumes components from `packages/ui` and provides the production-ready web experience.

## Development

```bash
pnpm --filter web dev          # start Next.js dev server
pnpm --filter web start:storybook  # start Storybook on port 6006
```

## Scripts

| Script                              | Description                             |
| ----------------------------------- | --------------------------------------- |
| `pnpm --filter web dev`             | Start Next.js dev server                |
| `pnpm --filter web build`           | Production build (webpack)              |
| `pnpm --filter web preview`         | Serve the production build              |
| `pnpm --filter web start:storybook` | Start Storybook dev server on port 6006 |
| `pnpm --filter web test`            | Run Storybook interaction tests         |
| `pnpm --filter web test:coverage`   | Run tests with coverage                 |
| `pnpm --filter web test:cypress`    | Open Cypress for user flow tests        |
| `pnpm --filter web typecheck`       | Run TypeScript type-checking            |
| `pnpm --filter web lint`            | Run ESLint                              |

## Testing

- **Storybook + Vitest**: interaction and accessibility tests run via `@storybook/addon-vitest`
- **Cypress**: user flow tests live in `apps/web/cypress/`
- **Chromatic**: visual regression via CI; publishes Storybook on each PR

## Key directories

| Path                   | Description                                   |
| ---------------------- | --------------------------------------------- |
| `apps/web/app/`        | Next.js App Router pages and layouts          |
| `apps/web/components/` | App-level components (consumes `packages/ui`) |
| `apps/web/cypress/`    | Cypress user flow tests                       |
| `apps/web/stories/`    | Storybook stories for app components          |
