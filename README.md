# monorepo-nextjs-template

<!-- holocron:description -->
A modern Next.js + React component library template for monorepos with pre-configured tools, best practices, and CI/CD setup for rapid application development.
<!-- /holocron:description -->

<!-- holocron:installation -->
## Usage

Use this template via `holocron new`:

```sh
holocron new monorepo-nextjs my-app
```

Or use the GitHub template button on this repo.
<!-- /holocron:installation -->

## What's Included

| Workspace | Description |
| --- | --- |
| `apps/web` | Next.js application with MSW, Storybook, Cypress E2E |
| `packages/ui` | Publishable React component library (Vite, vitest) |
| `docs/` | Astro documentation site |

## Development

| Script | Description |
| --- | --- |
| `pnpm dev` | Start all dev servers concurrently |
| `pnpm build` | Build all workspaces |
| `pnpm test` | Run all tests via Turbo |
| `pnpm lint` | Lint all workspaces |
| `pnpm typecheck` | Type-check all workspaces |

## Releases

Automated via semantic-release. See [CHANGELOG.md](CHANGELOG.md).

## Documentation

https://docs.theholocron.dev/monorepo-nextjs-template/
