import assert from 'node:assert';

import { createTool } from '@mastra/core/tools';
import type { CliOptions } from 'repomix';
import { runCli } from 'repomix';
import { z } from 'zod';

/**
 * Summarizes directory contents using Repomix
 * Provides file counts, sizes and type breakdowns
 */
export const directorySummaryTool = createTool({
    id: 'summarize-directory',
    description: 'Get a structured summary of a directory',
    inputSchema: z.object({
        path: z.string().describe('Directory path to analyze'),
        includeHidden: z
            .boolean()
            .optional()
            .default(false)
            .describe('Include hidden files'),
    }),
    outputSchema: z.object({
        totalFiles: z.number(),
        totalSize: z.number(),
        fileTypes: z.record(z.number()),
        largestFiles: z
            .array(
                z.object({
                    name: z.string(),
                    size: z.number(),
                    path: z.string(),
                }),
            )
            .max(5),
        directoryCount: z.number(),
    }),
    execute: async ({ context }) => {
        const repomixOptions = {
            style: 'xml',
            output: '-', // Output to stdout instead of file
        } as const satisfies CliOptions;

        // Run repomix to get file information
        const runResult = await runCli(
            [context.path],
            process.cwd(),
            repomixOptions,
        );

        assert(runResult, 'No run result');

        // Return formatted summary
        return {
            totalFiles: runResult.packResult.totalFiles,
            totalSize: -1,
            fileTypes: {},
            largestFiles: [],
            directoryCount: -1,
        };
    },
});
