<!-- Purpose: concise, actionable guidance for AI coding agents working on this repo -->
# Copilot instructions — portfolioDIARYATOU

Purpose: quickly orient an AI agent to the repository structure, developer workflows, and project-specific conventions so changes are correct and low-risk.

- Quick-start (run & build):
  - Install project deps: `npm install`.
  - This repo only includes a `build` script. To run a dev server use `npx vite` (or add a `dev` script: `"dev":"vite"`). Production build: `npm run build`.
  - Important: React and ReactDOM are listed as peerDependencies (optional). Ensure they are installed locally to run the app: `npm install react@18.3.1 react-dom@18.3.1`.

- Architecture / where to look first:
  - Single-page React app under [src/app](src/app#L1). The root component is [src/app/App.tsx](src/app/App.tsx#L1-L40) which composes the main sections (Hero, About, Academic, etc.).
  - Reusable UI primitives live under [src/app/components/ui](src/app/components/ui#L1). Prefer using the small wrappers there (e.g. `button.tsx`, `input.tsx`) rather than introducing raw Radix API usage.
  - Pages/sections are in [src/app/components](src/app/components#L1) and are imported as named exports in `App.tsx` (follow that pattern).
  - Styling: Tailwind CSS files are in [src/app/styles](src/app/styles#L1). Tailwind is applied via the Vite plugin in [vite.config.ts](vite.config.ts#L1-L40) — do not remove the `tailwindcss()` plugin.
  - Path alias: `@` → `src` is configured in [vite.config.ts](vite.config.ts#L1-L40). Use `@/...` imports for cross-cutting modules when appropriate.

- Conventions and patterns to preserve:
  - Components: PascalCase filenames, exported as named exports (see [src/app/App.tsx](src/app/App.tsx#L1-L40)).
  - Styling: utility-first Tailwind classes (`className`) and theme variables in `theme.css`; prefer small, composable UI primitives in `components/ui` over ad-hoc CSS.
  - Vite config comment: the repo explicitly requires both `react()` and `tailwindcss()` plugins — avoid removing these (see [vite.config.ts](vite.config.ts#L1-L40)).
  - External UI libs: project already depends on many Radix and MUI packages; when adding features, prefer using existing `ui` wrappers rather than direct 3rd-party calls unless necessary.

- Integration & dependencies notes:
  - Primary build: Vite. Dev-run: `npx vite` (default port 5173).
  - Tailwind is configured via `@tailwindcss/vite`; configuration entry points are in [src/app/styles/tailwind.css](src/app/styles/tailwind.css#L1-L200).
  - Peer deps `react`/`react-dom` are optional in `package.json` — ensure these exist in the environment before running.

- Editing & PR guidance for agents:
  - When adding a new UI primitive: put it under `src/app/components/ui`, export as a named export, and update any consuming sections in `src/app/components`.
  - For global styles or theme variables, change files under [src/app/styles](src/app/styles#L1).
  - Keep changes small and localized: prefer composition (new primitive + small wiring in a section) over large cross-cutting refactors.

- Debugging common issues:
  - If `npm start` fails: there is no `start` script here — use `npx vite` or `npm run build`.
  - Missing React at runtime is common because React is a peer dependency; install proper versions before starting.

If any section is unclear or you want more examples (component templates, preferred test harness, or a recommended `dev` script), tell me which area to expand and I will iterate.
