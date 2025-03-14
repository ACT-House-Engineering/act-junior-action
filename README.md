# ACT Junior GitHub Action

An AI assistant that autonomously solves issues, responds to comments, 
and creates pull requests using Claude AI models.

## Overview

ACT Junior is a GitHub Action that leverages the power of Anthropic's 
Claude AI to automatically:

1. Respond to issues, pull requests, and comments
2. Analyze code problems and implement solutions 
3. Create pull requests with fixes

The action is triggered by mentioning `@act-junior` in issues, PRs, or 
comments, or by applying the `ai-solve` label.

## Features

- 🤖 Autonomous issue resolution
- 💬 Responds to comments and mentions
- 🛠️ Creates branches with fixes
- 🔄 Opens pull requests automatically
- 📝 Documents changes with proper commit messages

## Usage

### Basic Configuration

Create a workflow file in `.github/workflows/act-junior.yml`:

```yaml
name: ACT Junior

on:
  issues:
    types: [opened, edited, labeled]
  pull_request:
    types: [opened, edited, labeled]
  issue_comment:
    types: [created]
  pull_request_review_comment:
    types: [created]

permissions:
  contents: write
  issues: write
  pull-requests: write
  id-token: write

jobs:
  act-junior:
    runs-on: ubuntu-latest
    steps:
      - name: Run ACT Junior
        uses: ACT-House-Engineering/act-junior-action@v1
        with:
          github-token: ${{ secrets.PAT_GITHUB }}  
          anthropic-api-key: ${{ secrets.ANTHROPIC_API_KEY }}
```

### Required Secrets

You need to set up the following secrets in your repository:

1. `PAT_GITHUB`: A Personal Access Token with:
   - Read and Write access to actions, code, issues, and pull requests
   - Read access to metadata

2. `ANTHROPIC_API_KEY`: Your Anthropic API key for Claude models

### Advanced Configuration

```yaml
name: ACT Junior Advanced

on:
  issues:
    types: [opened, edited, labeled]
  pull_request:
    types: [opened, edited, labeled]
  issue_comment:
    types: [created]
  pull_request_review_comment:
    types: [created]

permissions:
  contents: write
  issues: write
  pull-requests: write
  id-token: write

jobs:
  act-junior:
    runs-on: ubuntu-latest
    steps:
      - name: Run ACT Junior
        uses: ACT-House-Engineering/act-junior-action@v1
        with:
          github-token: ${{ secrets.PAT_GITHUB }}
          anthropic-api-key: ${{ secrets.ANTHROPIC_API_KEY }}
          trigger-keyword: '@my-ai-assistant'
          aider-model: 'claude-3-opus-20240229'
          bot-username: 'AI Assistant'
          git-email: 'ai-bot@example.com'
```

## Inputs

| Input | Description | Required | Default |
|-------|-------------|----------|---------|
| `github-token` | GitHub token with repository access | Yes | - |
| `anthropic-api-key` | Anthropic API key for Claude | Yes | - |
| `trigger-keyword` | Keyword to trigger the action | No | `@act-junior` |
| `aider-model` | AI model to use with Aider | No | `claude-3-5-sonnet-20241022` |
| `bot-username` | Name for bot comments | No | `🧒 ACT Junior` |
| `git-email` | Email for git commits | No | `beta@act.house` |
| `task-file` | Task file for AI verification | No | - |

## Outputs

| Output | Description |
|--------|-------------|
| `pull-request-url` | URL of the created pull request |
| `success` | Whether the action completed successfully |
| `modified-files` | List of files modified by the action |

## How It Works

1. The action is triggered when:
   - An issue or PR is created or edited with the trigger keyword
   - A comment is posted with the trigger keyword
   - The `ai-solve` label is applied

2. ACT Junior:
   - Analyzes the issue/PR content
   - Creates a new branch
   - Uses Aider and Claude to implement a solution
   - Commits changes and creates a pull request
   - Comments on the original issue with a link to the PR

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Developed by [ACT House Engineering](https://github.com/ACT-House-Engineering)
