/**
 * Mastra vitest setup
 * https://mastra.ai/docs/evals/03-running-in-ci#storage-configuration
 */
import { beforeAll } from 'vitest';
import { attachListeners } from '@mastra/evals';
// import { mastra } from '../src/mastra';

 
beforeAll(async () => {
    await attachListeners(
        // mastra
    );
});