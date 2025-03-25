import { createLogger } from '@mastra/core/logger';
import { Mastra } from '@mastra/core/mastra';
import { weatherAgent } from './agents';
import { sweAgentWorkflow } from './workflows/sweagent';
import { weatherWorkflow } from './workflows/weather';

export const mastra = new Mastra({
    workflows: {
        weatherWorkflow,
        sweAgentWorkflow,
    },
    agents: { weatherAgent },
    logger: createLogger({
        name: 'Mastra',
        level: 'info',
    }),
});
