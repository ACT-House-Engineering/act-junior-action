import { describe, it, expect } from 'vitest';
import { evaluate } from "@mastra/evals";
import { ToneConsistencyMetric } from "@mastra/evals/nlp";

import { weatherAgent } from './index';
import { isPersonalDevice } from '../../utils';

describe('Weather Agent', () => {
  it.skip('should validate tone consistency', async () => {
    const metric = new ToneConsistencyMetric();
    const result = await evaluate(weatherAgent, 'London', metric)
 
    expect(result.score).toBeGreaterThan(0.9);
  });
});