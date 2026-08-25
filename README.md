# `@theholocron/monorepo-nextjs-template`

<!-- holocron:description -->

A modern Next.js + React component library template for monorepos with pre-configured tools, best practices, and CI/CD setup for rapid application development.

<!-- /holocron:description -->

<!-- holocron:template-only -->

## Getting Started

Use the [Holocron CLI](https://github.com/theholocron/holocron) to scaffold a new Next.js monorepo. It clones the template, renames all placeholder references, wires up your vault provider, and runs `holocron setup` in one step:

```bash
npx @theholocron/cli new monorepo-nextjs my-app \
  --description "My app description" \
  --homepage "https://my-app.example.com" \
  --vault doppler \
  --agent claude
```

This will:

1. Create `theholocron/my-app` from this template on GitHub
2. Replace all `monorepo-nextjs-template` references with `my-app` throughout the repo
3. Run `pnpm install`
4. Run `holocron setup` to configure branch protection, labels, workflows, and repo settings

<!-- /holocron:template-only -->

## Development

<!-- holocron:development -->

This repo uses [pnpm workspaces](https://pnpm.io/workspaces) with [Turborepo](https://turbo.build/repo) for task orchestration.

```bash
pnpm dev              # start all dev servers concurrently
pnpm build            # build all workspaces (Next.js export + Vite library)
pnpm test             # run Storybook interaction tests (chromium)
pnpm test:coverage    # run tests with coverage
pnpm typecheck        # tsc --noEmit in each workspace
pnpm lint             # ESLint in each workspace
```

<!-- /holocron:development -->

## What's Included

| Tool                                                           | Purpose                                       |
| -------------------------------------------------------------- | --------------------------------------------- |
| [Next.js 16](https://nextjs.org)                               | React framework with App Router (`apps/web`)  |
| [Vite](https://vitejs.dev)                                     | Component library build (`packages/ui`)       |
| [React 19](https://react.dev)                                  | UI framework                                  |
| [TypeScript](https://www.typescriptlang.org)                   | Type safety                                   |
| [Storybook](https://storybook.js.org)                          | Component development and interaction testing |
| [Vitest](https://vitest.dev)                                   | Test runner with browser mode (Playwright)    |
| [Cypress](https://www.cypress.io)                              | End-to-end testing                            |
| [MSW](https://mswjs.io)                                        | API mocking                                   |
| [Turborepo](https://turbo.build/repo)                          | Monorepo task orchestration                   |
| [pnpm workspaces](https://pnpm.io/workspaces)                  | Package management                            |
| [ESLint](https://eslint.org)                                   | Linting                                       |
| [Stylelint](https://stylelint.io)                              | CSS linting                                   |
| [Prettier](https://prettier.io)                                | Formatting                                    |
| [Chromatic](https://www.chromatic.com)                         | Visual regression testing                     |
| [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) | Performance auditing                          |
| [semantic-release](https://semantic-release.gitbook.io)        | Automated releases                            |

## Releases

<!-- holocron:releases -->

Releases are automated via [semantic-release](https://semantic-release.gitbook.io) on push to `main`. See [CHANGELOG.md](CHANGELOG.md) for the release history.

<!-- /holocron:releases -->
