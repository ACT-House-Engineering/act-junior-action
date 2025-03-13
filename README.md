# 🧒 [ACT Junior Action](https://github.com/marketplace/actions/act-junior)

ACT Junior ([source](https://github.com/sderev/act-junior)) is a [GitHub Action](https://github.com/marketplace/actions/act-junior) that uses AI to automatically handle [issues](https://docs.github.com/en/issues) and [pull requests](https://docs.github.com/en/pull-requests). It leverages [Claude AI](https://claude.ai) to analyze and respond to tasks, create content, and generate solutions. View it on the [GitHub Marketplace](https://github.com/marketplace/actions/act-junior) or check the [latest releases](https://github.com/sderev/act-junior/releases).

## Features

- Automatically responds to [issues](https://docs.github.com/en/issues) and [pull requests](https://docs.github.com/en/pull-requests) when mentioned with `@act-junior`
- Creates [AI-generated](https://claude.ai) poems and content
- [Self-updates](https://docs.github.com/en/actions/using-workflows/about-workflows) and maintains its own workflow
- Creates [pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) with solutions
- Handles [code changes](https://docs.github.com/en/repositories/working-with-files/managing-files) and repository updates

## Setup

### Prerequisites

1. [GitHub Personal Access Token (PAT)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) with the following permissions:
   - Read and Write access to [actions](https://docs.github.com/en/actions), code, deployments, [issues](https://docs.github.com/en/issues), [pull requests](https://docs.github.com/en/pull-requests), and [workflows](https://docs.github.com/en/actions/using-workflows)
   - Read access to code and metadata
   - (For Organizations) Read and Write access to [organization private registries](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)

2. [Anthropic API Key](https://console.anthropic.com/account/keys) for [Claude AI](https://claude.ai) access

### Configuration

1. Create the required secrets in your repository:
   - `PAT_GITHUB`: Your GitHub Personal Access Token
   - `ANTHROPIC_API_KEY`: Your Anthropic API Key

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
- [Issues](https://docs.github.com/en/issues): opened, edited, labeled
- [Pull Requests](https://docs.github.com/en/pull-requests): opened, edited, labeled
- [Issue Comments](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues#participating-in-issues): created
- [PR Review Comments](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request): created
- [Push events](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#push) to specific files

## Security

- Uses secure token handling for GitHub and Anthropic authentication
- Implements safeguards against infinite loops
- Cleans up temporary files after execution

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support, please open an issue in the repository.
