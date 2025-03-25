import { attachListeners } from '@mastra/evals';
/**
 * Mastra vitest setup
 * https://mastra.ai/docs/evals/03-running-in-ci#storage-configuration
 */
import { beforeAll } from 'vitest';
// import { mastra } from '../src/mastra';

beforeAll(async () => {
    await attachListeners(
        // mastra
    );
});
