# theholocron/monorepo-nextjs-template — agent operating contract

`CLAUDE.md` is a symlink to this file, so Claude, Codex, and every other agent
read the same rules. Put durable, repo-wide agent guidance here.

@../github-private/AGENTS.md

## What this repo is

<description>

## Architecture

- pnpm workspace monorepo with Turborepo for task orchestration.
- `apps/web` — Next.js application (webpack build, output: export).
- `packages/ui` — publishable React component library (Vite library build).
- `docs/` — Astro documentation site.
- Storybook runs via `@storybook/nextjs-vite` in `apps/web`, importing
  components from both `apps/web/src/` and `packages/ui`.

## Key decisions

- **Webpack only** — `next build --webpack` and `next dev --webpack`. Turbopack
  does not yet support `output: "export"` or the Codecov bundle plugin.
  Track: theholocron/nextjs-template#235.
- **Vite for packages/ui** — the component library uses Vite's library mode
  (not tsdown). React's JSX transform requires Vite; tsdown is for Node libs.
- **Storybook in apps/web** — `@storybook/nextjs-vite` handles Storybook's Vite
  pipeline independently of Next.js's webpack pipeline.

## Quality

- `pnpm build` — turbo: Next.js export (`out/`) + Vite library (`dist/`)
- `pnpm test` — vitest Storybook project in `apps/web` via Turbo
- `pnpm typecheck` — `tsc --noEmit` in each workspace via Turbo
- `pnpm lint` — ESLint via Turbo (each workspace has its own config)
