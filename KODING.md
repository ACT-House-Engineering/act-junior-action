## Commands

- **Build:** This project doesn't have a separate build step.
- **Lint:** `pnpm lint` (Uses Biome for linting and formatting)
- **Format:** `pnpm format` (Uses Biome)
- **Typecheck:** `pnpm typecheck` (Uses TypeScript compiler)
- **Test:** `pnpm test` (Uses Vitest)
- **Run a single test:** `pnpm test -- <test_file_path_or_pattern>` (e.g., `pnpm test -- src/mastra/agents/index.test.ts`)

## Code Style

- **Language:** TypeScript
- **Module System:** ES Modules (`import`/`export`)
- **Formatting:** Use Biome (`pnpm format`). Key settings:
    - Indentation: 4 spaces
    - Quotes: Single quotes for JavaScript/TypeScript
- **Imports:** Organize imports using Biome (`pnpm lint` or `pnpm format`).
- **Types:** Use TypeScript for static typing. Ensure `pnpm typecheck` passes.
- **Naming Conventions:** Follow standard TypeScript conventions (e.g., `camelCase` for variables/functions, `PascalCase` for classes/types).
- **Error Handling:** Use standard `try...catch` blocks and throw `Error` objects. Ensure errors provide clear context.
- **Async/Await:** Prefer `async/await` over Promises for asynchronous operations.
- **Dependencies:** Use `pnpm` for package management.
