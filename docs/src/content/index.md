---
title: Overview
description: A monorepo template combining a Next.js application and a Vite component library, with Storybook, Cypress, Chromatic, and full CI/CD.
---

A pnpm workspace monorepo for `@theholocron` projects that need a Next.js application (`apps/web`) alongside a shared component library (`packages/ui`).

## Structure

```
apps/
  web/          Next.js 16 app (App Router)
packages/
  ui/           Vite component library
```

All tasks run through [Turborepo](https://turbo.build/repo). The `web` app depends on `ui` — `turbo build` ensures `ui` is compiled before `web`.

## What's included

- **Next.js 16** with TypeScript and App Router (`apps/web`)
- **Vite** component library build with `packages/ui`
- **React 19** shared across both workspaces
- **Storybook** in both `apps/web` and `packages/ui`, built into `_site/sandbox/web/` and `_site/sandbox/ui/` on deploy
- **Vitest** with browser mode (Playwright + Chromium) for Storybook interaction tests
- **Cypress** for end-to-end and user-flow testing against the Next.js dev server
- **Chromatic** visual regression testing (separate tokens per project: `CHROMATIC_PROJECT_TOKEN_WEB`, `CHROMATIC_PROJECT_TOKEN_UI`)
- **MSW** for API mocking in tests and Storybook
- **Turborepo** for task orchestration across workspaces
- **pnpm workspaces** for dependency management
- Shared config via `@theholocron/eslint-config`, `@theholocron/tsconfig`, `@theholocron/prettier-config`, `@theholocron/vitest-config`, `@theholocron/storybook-config`
- Semantic release via `@theholocron/semantic-release-config`
- Husky + lint-staged via `@theholocron/lint-staged-config`
- Full CI/CD via reusable workflows in `theholocron/.github`

## Getting started

Use the [Holocron CLI](https://github.com/theholocron/holocron) to scaffold a new project from this template:

```bash
npx @theholocron/cli new monorepo-nextjs my-app \
  --description "My app description" \
  --homepage "https://my-app.example.com" \
  --vault doppler \
  --agent claude
```

## Development

```bash
pnpm dev              # start web + ui in watch mode
pnpm build            # build all workspaces via Turborepo
pnpm test             # run Storybook interaction tests
pnpm test:coverage    # run tests with coverage
pnpm typecheck        # tsc --noEmit in each workspace
pnpm lint             # ESLint across all workspaces
```

To work on a single workspace:

```bash
pnpm --filter web dev
pnpm --filter ui build:storybook
```
