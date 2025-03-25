import { isMacOS, provider } from 'std-env';

export function isPersonalDevice() {
    // False if running in GitHub Actions
    if (provider === 'github_actions') {
        return false;
    }

    return isMacOS;
}
