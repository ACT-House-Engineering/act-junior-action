import { beforeAll } from 'vitest';
import { attachListeners } from '@mastra/evals';
import { mastra } from '../src/mastra';

 
beforeAll(async () => {
  await attachListeners( mastra );
});