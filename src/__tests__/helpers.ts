import { vi } from 'vitest';

function mockTranslations(): void {
    vi.mock('@wowfinder/translations', () => ({
        useTranslation: () => ({ t: (key: string) => key }),
    }));
}

export { mockTranslations };
