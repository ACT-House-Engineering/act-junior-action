import { evaluate } from '@mastra/evals';
import { ToneConsistencyMetric } from '@mastra/evals/nlp';
import { describe, expect, it } from 'vitest';

import { isPersonalDevice } from '../../utils';
import { weatherAgent } from './index';

describe('Weather Agent', () => {
    it.skip('should validate tone consistency', async () => {
        const metric = new ToneConsistencyMetric();
        const result = await evaluate(weatherAgent, 'London', metric);

        expect(result.score).toBeGreaterThan(0.9);
    });
});
