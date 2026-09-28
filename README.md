# create-tauri-app-nuxt

[![CI](https://github.com/xcvzmoon/create-tauri-app-nuxt/actions/workflows/ci.yaml/badge.svg)](https://github.com/xcvzmoon/create-tauri-app-nuxt/actions/workflows/ci.yaml)
[![Release](https://github.com/xcvzmoon/create-tauri-app-nuxt/actions/workflows/release.yaml/badge.svg)](https://github.com/xcvzmoon/create-tauri-app-nuxt/actions/workflows/release.yaml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

A desktop app starter using Nuxt 4 for the frontend and Tauri 2 for the native app.

## Requirements

- Node.js 26 and pnpm 12.6.0, as used in CI
- Rust 1.90 or newer
- The [Tauri prerequisites](https://v2.tauri.app/start/prerequisites/) for your operating system

## Get started

```bash
cp .env.example .env
pnpm install
pnpm dev
```

The development app uses port `65432`, set in `.env.example` and `tauri-nuxt-dev.config.ts`.

## Commands

| Command          | Purpose                                            |
| ---------------- | -------------------------------------------------- |
| `pnpm dev`       | Start Nuxt and the Tauri development app           |
| `pnpm check`     | Check web and Rust formatting                      |
| `pnpm lint`      | Run Oxlint and Clippy                              |
| `pnpm typecheck` | Typecheck the Nuxt app                             |
| `pnpm test`      | Run Rust tests                                     |
| `pnpm build`     | Generate the Nuxt frontend and build Tauri bundles |

The frontend lives in `app/`, and the native app lives in `src-tauri/`. Tauri runs `pnpm nuxt:generate` before a production build and loads the generated frontend from `dist`.

## Contributing and security

Read [CONTRIBUTING.md](./CONTRIBUTING.md) before sending a pull request and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) when participating in the project. Report vulnerabilities using [SECURITY.md](./SECURITY.md).

## License

MIT. See [LICENSE.md](./LICENSE.md).
