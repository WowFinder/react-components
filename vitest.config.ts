import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        coverage: {
            provider: 'v8',
            reporter: ['text', 'lcov'],
            reportsDirectory: './coverage',
            include: ['src/**/*.{ts,tsx}'],
            exclude: [
                '**/node_modules/**',
                '**/__tests__/**',
                '**/__mocks__/**',
                '**/stories/**',
                '**/*.setup.ts',
                '**/*.config.ts',
            ],
            thresholds: {
                global: {
                    branches: 100,
                    functions: 100,
                    lines: 100,
                    statements: 100,
                },
            },
        },
    },
});


