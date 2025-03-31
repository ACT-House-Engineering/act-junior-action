# CLAUDE.md - Guidelines for Working with act-junior-action

## Build/Test/Lint Commands
- Run all tests: `pnpm test`
- Run single test: `pnpm vitest src/path/to/test.ts`
- Run focused test: `pnpm vitest --test-name="test description"`
- Lint code: `pnpm lint`
- Format code: `pnpm format`
- Type checking: `pnpm typecheck`
- Start development: `pnpm dev`

## Code Style Guidelines
- **Formatting**: 4-space indentation, single quotes for strings (enforced by Biome)
- **Imports**: Use ES modules, organize imports (enabled in Biome)
- **Types**: Use TypeScript with strict mode enabled
- **Naming**: Use camelCase for variables/functions, PascalCase for classes/types
- **Error Handling**: Use proper async/await with try/catch blocks
- **Component Architecture**: Follow Mastra workflow/agent patterns
- **Testing**: Write tests with Vitest (10s timeout default)
- **Documentation**: Include JSDoc comments for public APIs

This project uses [Biome](https://biomejs.dev/) for linting and formatting with the configured rules in biome.json.