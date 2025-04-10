/**
 * AI Specific rules for keeping your making LLMs better coders
 * 
 * Can be used with a custom .eslintrc.local.js file to extend 
 * rules for local development
 * 
 * @example Command
 * $ pnpm lint --config ./.eslintrc.ai.js
 * $ pnpm lint --config ./.eslintrc.ai.js --file ./features/classic-assessment/utils/parse-qualtrics.ts
 */
const MAX_FILE_LINES = 1000;
const MAX_PARAMS = 2;

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    'plugin:eslint-comments/recommended',
    './.eslintrc.tiger.jsonc',
    './.eslintrc.json'
  ],
  ignorePatterns: [
    // Test files
    '**/*.test.ts', '**/*.test.tsx'    
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    // Limit functions to 100 lines
    'max-lines-per-function': ['error', {
      max: 30,
      skipBlankLines: true,
      skipComments: true,
    }],
    'max-params': ["error", MAX_PARAMS],
    'max-lines': ['error', {
      max: MAX_FILE_LINES,
      skipBlankLines: true,
      skipComments: true,
    }],
    // Require explanation for disabled rules
    'eslint-comments/require-description': ['error', {
      ignore: [],
    }],
    // Reject lazy variable names that contain no context
    'id-denylist': ["error",
      "data", "err", "e", "cb", "callback",
      "object", "result", "info", "tmp",
      "ctx", "context", "req", "request",
      "res", "response", "doc", "document",
      "row", "item", "val", "value",
      "key", "index", "id"
    ]
  },
  overrides: [
    // Turn off max-lines-per-function in test files
    // For describe()
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      rules: {
        'max-lines-per-function': 'off',
      },
    },
  ]
}; 