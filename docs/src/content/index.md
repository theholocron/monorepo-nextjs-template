---
title: Monorepo Next.js Template
description: A monorepo template combining a Next.js application and a Vite component library, with Storybook, Cypress, Chromatic, and full CI/CD.
sidebar:
  hidden: true
---

`@theholocron/monorepo-nextjs-template` is an opinionated monorepo starter combining a Next.js app (`apps/web`) and a React component library (`packages/ui`). It ships with a full development, testing, and release pipeline ready to go.

## Structure

```
apps/
  web/          Next.js 16 app (App Router)
packages/
  ui/           Vite component library
```

All tasks run through [Turborepo](https://turbo.build/repo). The `web` app depends on `ui` — `turbo build` ensures `ui` is compiled before `web`.

## What's Included

| Tool                                                           | Purpose                                                      |
| -------------------------------------------------------------- | ------------------------------------------------------------ |
| [Next.js 16](https://nextjs.org)                               | React framework with App Router (`apps/web`)                 |
| [Vite](https://vitejs.dev)                                     | Component library build (`packages/ui`)                      |
| [React 19](https://react.dev)                                  | UI framework                                                 |
| [TypeScript](https://www.typescriptlang.org)                   | Type safety                                                  |
| [Storybook](https://storybook.js.org)                          | Component development and interaction testing (both apps)    |
| [Vitest](https://vitest.dev)                                   | Test runner with browser mode (Playwright)                   |
| [Cypress](https://www.cypress.io)                              | End-to-end and user-flow testing                             |
| [Chromatic](https://www.chromatic.com)                         | Visual regression (separate tokens per project)              |
| [MSW](https://mswjs.io)                                        | API mocking                                                  |
| [Turborepo](https://turbo.build/repo)                          | Monorepo task orchestration                                  |
| [pnpm workspaces](https://pnpm.io/workspaces)                  | Package management                                           |
| [ESLint](https://eslint.org)                                   | Linting                                                      |
| [Stylelint](https://stylelint.io)                              | CSS linting                                                  |
| [Prettier](https://prettier.io)                                | Formatting                                                   |
| [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) | Performance auditing                                         |
| [semantic-release](https://semantic-release.gitbook.io)        | Automated releases                                           |

## Getting Started

```bash
npx @theholocron/cli new monorepo-nextjs my-app \
  --description "My app description" \
  --homepage "https://my-app.example.com" \
  --vault doppler \
  --agent claude
```

See [Getting Started](./getting-started) for the full walkthrough including manual setup and available scripts.

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
pnpm --filter ui start:storybook
```

## Workspaces

| Workspace     | Package                        | Description             |
| ------------- | ------------------------------ | ----------------------- |
| `apps/web`    | `monorepo-nextjs-template-web` | Next.js application     |
| `packages/ui` | `monorepo-nextjs-template-ui`  | React component library |

## Quick links

- [Getting started](./getting-started) — scaffold a new project with the Holocron CLI
- [Web app](./web) — the Next.js application workspace
- [UI library](./ui) — the React component library workspace
