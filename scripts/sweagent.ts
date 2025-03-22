/**
 * Mastra Client Integration Example
 * 
 * @example Command
 * $ pnpm tsx scripts/sweagent.ts
 */
import { mastra } from "../src/mastra/index";
 
;(async () => {
    // Get the workflow
    const weatherWorkflow = mastra.getWorkflow('weatherWorkflow');
    const { runId, start } = weatherWorkflow.createRun();

    console.log( '🏃‍♂️ Creating run, Starting workflow...', runId );

    // Start the workflow execution
    const { results } = await start({ triggerData: { city: 'Tulsa' } });

    console.log( '🏃‍♂️ Workflow result:', results['fetch-weather'] );
    console.log( '🏃‍♂️ Workflow result:', results['plan-activities'] );
})();
