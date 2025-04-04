import { vi } from 'vitest';

function mockTranslations(): void {
    vi.mock('@wowfinder/translations', () => ({
        useTranslation: () => ({ t: (key: string) => key }),
    }));
}

function expectExportFC(
    component: (...args: any[]) => void,
): void {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(Function);
}

export { mockTranslations, expectExportFC };
