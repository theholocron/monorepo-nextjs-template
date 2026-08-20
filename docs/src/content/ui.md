---
title: UI Library
description: The React component library workspace in the monorepo.
---

`packages/ui` is a Vite-built React component library shared across the monorepo. It contains the base components, Storybook stories, and exports a typed ESM bundle consumed by `apps/web`.

## Development

```bash
pnpm --filter ui start:storybook   # start Storybook on port 6007
pnpm --filter ui build             # compile the library
```

## Scripts

| Script                             | Description                             |
| ---------------------------------- | --------------------------------------- |
| `pnpm --filter ui start:storybook` | Start Storybook dev server on port 6007 |
| `pnpm --filter ui build`           | Compile the component library (Vite)    |
| `pnpm --filter ui build:storybook` | Build static Storybook                  |
| `pnpm --filter ui test`            | Run unit tests                          |
| `pnpm --filter ui test:coverage`   | Run unit tests with coverage            |
| `pnpm --filter ui test:storybook`  | Run Storybook interaction tests         |
| `pnpm --filter ui typecheck`       | Run TypeScript type-checking            |
| `pnpm --filter ui lint`            | Run ESLint                              |

## Testing

- **Vitest unit tests**: fast, headless unit tests for component logic
- **Storybook + Vitest**: interaction tests via `@storybook/addon-vitest`
- **Chromatic**: visual regression via CI; publishes Storybook on each PR

## Key directories

| Path                       | Description            |
| -------------------------- | ---------------------- |
| `packages/ui/src/`         | Component source files |
| `packages/ui/src/index.ts` | Public exports         |

## Adding a component

1. Create `packages/ui/src/<component>.tsx` with the component
2. Add a story at `packages/ui/src/<component>.story.tsx`
3. Export from `packages/ui/src/index.ts`
