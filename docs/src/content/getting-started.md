---
title: Getting Started
description: How to use the Monorepo Next.js template to start a new project.
---

## Use this template

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

### Manual clone

If you prefer to set things up yourself:

```bash
git clone https://github.com/theholocron/monorepo-nextjs-template.git my-app
cd my-app
pnpm install
```

## Development

```bash
pnpm dev           # start all dev servers concurrently
```

Individual workspaces:

```bash
pnpm --filter web dev              # Next.js app only
pnpm --filter ui start:storybook   # UI Storybook only
```

## Scripts

| Script               | Description                                      |
| -------------------- | ------------------------------------------------ |
| `pnpm dev`           | Start all dev servers concurrently (Turbo)       |
| `pnpm build`         | Build all workspaces (Next.js export + Vite lib) |
| `pnpm test`          | Run all tests (Storybook interaction + Cypress)  |
| `pnpm test:coverage` | Run tests with coverage                          |
| `pnpm typecheck`     | TypeScript check in each workspace               |
| `pnpm lint`          | ESLint in each workspace                         |
