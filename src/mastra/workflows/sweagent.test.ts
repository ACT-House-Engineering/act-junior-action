/**
 *
 * @example Command
 * $ pnpm test run src/mastra/workflows/sweagent.test.ts
 */
import { describe, expect, it } from 'vitest';

import { mastra } from '../index';

describe('Weather Agent', () => {
    it('should run directory workflow with no errors', async () => {
        // Get the workflow
        const sweAgentWorkflow = mastra.getWorkflow('sweAgentWorkflow');
        const { start } = sweAgentWorkflow.createRun();

        // Start the workflow execution
        const { results } = await start({
            triggerData: { path: './', includeHidden: false },
        });

        expect(results).toBeDefined();
    });
});
