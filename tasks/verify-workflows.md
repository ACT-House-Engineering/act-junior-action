# Verifying GitHub Actions Workflows

## Overview

This task provides guidance on testing and verifying GitHub 
Actions workflows after making changes to the ACT Junior workflow.
Proper verification ensures that workflows continue to function 
as expected and helps identify potential issues early.

## Verification Process

### 1. Commit and Push Changes

After making workflow changes:

```bash
# Add your changes
git add .github/workflows/act-junior.yaml

# Commit with descriptive message
git commit -m "Update: Description of workflow changes"

# Push to trigger workflow run
git push
```

### 2. Monitor Workflow Execution

Use GitHub CLI to watch the workflow execution in real-time:

```bash
# List recent workflow runs
gh run list --workflow="🧒 ACT Junior" --limit=1

# Watch the most recent workflow run
gh run watch <run-id>
```

Alternatively, use the GitHub web interface to monitor the run.

### 3. Inspect Workflow Logs

Check the logs for each step to verify proper execution:

```bash
# View detailed logs for a specific run
gh run view <run-id> --log
```

Look for:
- Success/failure status of each step
- Expected outputs
- Error messages or warnings

### 4. Verify Output and Side Effects

Confirm that the workflow:
- Produces expected outputs (comments, labels, etc.)
- Creates expected artifacts
- Completes all required steps
- Maintains backward compatibility

### 5. Handle Failures

If the workflow fails:

1. **Diagnose the issue**:
   - Review error messages in the logs
   - Check if actions are correctly referenced
   - Verify input/output parameter usage

2. **Fix and iterate**:
   - Make necessary corrections
   - Commit and push to trigger another run
   - Continue until the workflow succeeds

## ACT Junior Verification Examples

### Example 1: Verifying Label Creation

After updating label-related functionality:

1. **Push changes**:
   ```bash
   git push
   ```

2. **Watch workflow run**:
   ```bash
   gh run list --workflow="🧒 ACT Junior" --limit=1
   gh run watch <run-id>
   ```

3. **Verify label creation steps**:
   - Check for "Creating required labels" messages
   - Confirm no errors in label creation steps
   - Verify workflow completion status

### Example 2: Testing Workflow URL Responses

After updating response functionality:

1. **Create a test issue** with trigger keyword
2. **Observe workflow response** (comments with URLs)
3. **Verify URL format and content**
4. **Check workflow completion**

## Advanced Verification Techniques

### GitHub CLI JSON Output

Use `--json` flag for programmatic verification:

```bash
gh run view <run-id> --json jobs | jq '.jobs[] | .name, .conclusion'
```

### Testing Individual Components

Consider creating test workflows for individual components:

```yaml
name: Test Workflow Component

on:
  workflow_dispatch:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Test component
        # Component-specific test steps
```

## Debugging Tips

- Add detailed error handling in workflow steps
- Use debug outputs for important variables
- Consider the `if: ${{ failure() }}` condition for debug steps
- Add status comments for visibility into long-running processes

## Best Practices

- **Test changes incrementally**: One change at a time
- **Monitor multiple runs**: Ensure consistency
- **Document verification steps**: Note how to test
- **Plan for rollback**: Know how to revert if needed
- **Set up regression tests**: For critical workflows

By thoroughly verifying workflow changes, you ensure reliable
automation and avoid disruptions to your development process. 