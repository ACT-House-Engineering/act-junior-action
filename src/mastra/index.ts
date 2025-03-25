
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { weatherWorkflow } from './workflows/weather';
import { weatherAgent } from './agents';
import { sweAgentWorkflow } from './workflows/sweagent';

export const mastra = new Mastra({
  workflows: {
    weatherWorkflow,
    sweAgentWorkflow
  },
  agents: { weatherAgent },
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
