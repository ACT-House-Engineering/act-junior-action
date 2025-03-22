import { config } from "dotenv";
import { defineConfig } from 'vitest/config'
 
export default defineConfig({
  test: {
    globalSetup: './test/global-setup.ts',
    setupFiles: [
        './test/test-setup.ts'
    ],
    env: {
        ...config({ path: ".env.development" }).parsed,
    },
  },
})