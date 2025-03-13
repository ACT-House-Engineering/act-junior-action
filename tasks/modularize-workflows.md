# Modularizing GitHub Action Workflows with Composite Actions

## Overview

This task provides guidance on breaking down large, monolithic 
GitHub Actions workflows into modular, reusable components using
composite actions. By following this approach, you can improve
maintainability, enable reuse, and simplify complex workflows.

## Why Modularize?

Monolithic workflows often become difficult to maintain as they
grow in complexity. Modularization offers several benefits:

- **Improved readability**: Shorter, focused workflow files
- **Code reuse**: Components can be shared across workflows
- **Easier maintenance**: Fix issues in one place
- **Better testing**: Test components independently
- **Simplified composition**: Mix and match components

## Step-by-Step Process

### 1. Identify Modularization Candidates

Look for steps that:
- Perform a discrete, focused function
- Could be reused in other workflows
- Have clear inputs and outputs
- Are reasonably self-contained

Good candidates include:
- Installation steps
- Environment setup
- Notification systems
- Common operational patterns

### 2. Create Composite Action Structure

```
.github/
  actions/
    action-name/
      action.yaml   # Define inputs, outputs, and steps
```

### 3. Define the Composite Action

Create an `action.yaml` file with:

```yaml
name: 'Action Name'
description: 'What the action does'

inputs:
  param-name:
    description: 'Parameter description'
    required: true/false
    default: 'optional default value'

outputs:
  output-name:
    description: 'Output description'
    value: ${{ steps.step-id.outputs.value }}

runs:
  using: "composite"
  steps:
    - name: Step name
      shell: bash  # Required for script steps
      run: |
        # Your commands here
```

### 4. Replace Workflow Steps with Action References

Replace the original steps in your workflow:

```yaml
- name: Original step name
  uses: ./.github/actions/action-name
  with:
    param-name: 'value'
```

## Examples from ACT Junior

### Example 1: Aider Installation

**Before**: Simple but repeated installation step.

```yaml
- name: Install Aider
  run: pip install aider-chat
```

**After**: Extracted to `.github/actions/setup-aider/action.yaml`:

```yaml
name: 'Setup Aider'
description: 'Installs Aider AI pair programming tool'

runs:
  using: "composite"
  steps:
    - name: Install Aider
      shell: bash
      run: |
        echo "Installing Aider..."
        pip install aider-chat
        echo "Aider installation completed."
```

### Example 2: Label Management

**Before**: Complex inline script for managing labels.

**After**: Extracted to `.github/actions/ensure-labels/action.yaml`:

```yaml
name: 'Ensure GitHub Labels'
description: 'Creates required labels if they do not exist'

inputs:
  github-token:
    description: 'GitHub token for API access'
    required: true
  labels:
    description: 'JSON array of label definitions'
    required: true

runs:
  using: "composite"
  steps:
    - name: Create missing labels
      shell: bash
      env:
        GH_TOKEN: ${{ inputs.github-token }}
        LABELS: ${{ inputs.labels }}
      run: |
        # Process the JSON array of labels
        echo "$LABELS" | jq -c '.[]' | while read -r label; do
          NAME=$(echo "$label" | jq -r '.name')
          COLOR=$(echo "$label" | jq -r '.color')
          DESCRIPTION=$(echo "$label" | jq -r '.description')
          
          # Check if label exists and create if missing
          if ! gh label list | grep -q "$NAME"; then
            echo "Creating label: $NAME"
            gh label create "$NAME" --color "$COLOR" \
              --description "$DESCRIPTION" || true
          else
            echo "Label already exists: $NAME"
          fi
        done
```

## Implementation Strategy

1. **Start small**: Begin with simple, self-contained steps
2. **Incrementally modularize**: Don't refactor everything at once
3. **Document inputs/outputs**: Make it clear how to use actions
4. **Use consistent patterns**: Keep interfaces consistent

## Next Candidates for Modularization

- **Issue Detail Extraction**: Extract issue/PR information
- **AI Solution Generation**: Generate solutions using Aider
- **PR Creation**: Create and configure pull requests

## Best Practices

- Keep composite actions focused on a single responsibility
- Limit the width of files to 60 columns for readability
- Document each action with clear descriptions
- Use inputs to make actions configurable
- Expose outputs for passing data between actions
- Include proper error handling in your actions
- Use consistent naming conventions

By breaking down complex workflows into modular, reusable
components, we can maintain cleaner code and enable easier
evolution of our CI/CD processes. 