# 🧒 ACT Junior Action

ACT Junior is a GitHub Action that uses AI to automatically handle issues and pull requests. It leverages Claude AI to analyze and respond to tasks, create content, and generate solutions.

## Features

- Automatically responds to issues and pull requests when mentioned with `@act-junior`
- Creates AI-generated poems and content
- Self-updates and maintains its own workflow
- Creates pull requests with solutions
- Handles code changes and repository updates

## Setup

### Prerequisites

1. GitHub Personal Access Token (PAT) with the following permissions:
   - Read and Write access to actions, code, deployments, issues, pull requests, and workflows
   - Read access to code and metadata
   - (For Organizations) Read and Write access to organization private registries

2. Anthropic API Key for Claude AI access

### Configuration

1. Create the required secrets in your repository:
   - `PAT_GITHUB`: Your [GitHub Personal Access Token](https://github.com/settings/personal-access-tokens/new)
   - `ANTHROPIC_API_KEY`: Your Anthropic API Key

   [Add these secrets](https://github.com/settings/secrets/actions/new) to your repository's Actions secrets.

2. The action is configured via environment variables in the workflow:
   ```yaml
   env:
     ACT_TRIGGER_KEYWORD: '@act-junior'
     ACT_DEFAULT_MODEL: 'claude-3-5-sonnet-20241022'
     AIDER_MODEL: 'claude-3-5-sonnet-20241022'
   ```

## Usage

1. Create an issue or pull request
2. Mention `@act-junior` in your issue/PR
3. The action will analyze your request and respond accordingly

## Workflow Events

The action triggers on:
- Issues: opened, edited, labeled
- Pull Requests: opened, edited, labeled
- Issue Comments: created
- PR Review Comments: created
- Push events to specific files

## Security

- Uses secure token handling for GitHub and Anthropic authentication
- Implements safeguards against infinite loops
- Cleans up temporary files after execution

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For support, please open an issue in the repository.
