import { Step, Workflow } from '@mastra/core/workflows';
import { z } from 'zod';

/**
 * Step that lists directories at the given path
 */
const listDirectories = new Step({
    id: 'list-directories',
    description: 'Lists directories at the given path',
    inputSchema: z.object({
        path: z.string().describe('Directory path to analyze'),
        includeHidden: z
            .boolean()
            .optional()
            .default(false)
            .describe('Include hidden directories'),
    }),
    execute: async ({ context }) => {
        return {
            path: context.inputData.path,
            directories: [],
            directoryCount: 0,
            fileCount: 0,
            fileTypes: {},
        };
    },
});

/**
 * Workflow that lists directories at a given path
 */
const sweAgentWorkflow = new Workflow({
    name: 'swe-agent-workflow',
    triggerSchema: z.object({
        path: z.string().describe('Path to analyze'),
        includeHidden: z
            .boolean()
            .optional()
            .default(false)
            .describe('Include hidden directories'),
    }),
}).step(listDirectories);

// Commit the workflow
sweAgentWorkflow.commit();

export { sweAgentWorkflow };
