# Voyage

A React + TypeScript travel discovery and tour-booking interface.

## Requirements

- Node.js 20.19+ or 22.12+
- npm 10+

## Setup

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Project structure

- `src/App.tsx` — Voyage application UI and current prototype data/state.
- `src/main.tsx` — React entry point.
- `src/index.css` — Tailwind directives and global styles.
- `index.html` — Vite HTML entry point.

The current booking, traveler, destination, and tour data remain frontend prototype data. No backend or payment integration is configured by this project-structure change.


## Quality checks

```bash
npm run lint
npm run build
```

The repository commits `package-lock.json` so CI and local installs use the same dependency graph. GitHub Actions runs dependency installation, linting, and the production build for pushes and pull requests.
