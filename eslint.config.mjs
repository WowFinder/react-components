import prettier from 'eslint-plugin-prettier';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import misc from 'eslint-plugin-misc';
import stylisticJs from '@stylistic/eslint-plugin-js';
import deprecationPlugin from 'eslint-plugin-deprecation';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    {
        ignores: [
            '*/.js',
            '**/*.js*',
            '*.*js',
            '**/tests',
            '**/electron',
            '**/node_modules',
            '**/dist',
            'webpack/*.js',
            '**/.webpack',
            '**/out',
            '**/.yarn',
            'vitest.config.*',
        ],
    },
    ...compat.extends(),
    {
        plugins: {
            prettier,
            '@typescript-eslint': typescriptEslint,
            ['deprecation']: fixupPluginRules(deprecationPlugin),
            '@stylistic/js': stylisticJs,
            misc,
        },

        languageOptions: {
            globals: { ...globals.browser, ...globals.node, ...globals.jest },

            parser: tsParser,
            ecmaVersion: 12,
            sourceType: 'module',

            parserOptions: {
                ecmaFeatures: { jsx: true },

                project: [
                    './tsconfig.json',
                    './tsconfig.tests.json',
                    './tsconfig.storybook.json',
                ],
            },
        },

        rules: {
            'max-lines': [
                'error',
                { max: 200, skipBlankLines: true, skipComments: true },
            ],
            //'istanbul/no-ignore-file': 'error',
            //'istanbul/prefer-ignore-reason': 'error',
            'deprecation/deprecation': 'warn',
            quotes: ['error', 'single', { avoidEscape: true }],
            'react/prop-types': 'off',
            '@typescript-eslint/explicit-function-return-type': [
                'error',
                { allowExpressions: true },
            ],
            'no-return-assign': 'off',
            '@stylistic/js/semi': ['error'],
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': ['error'],
            'no-use-before-define': 'off',
            '@typescript-eslint/no-use-before-define': [
                'error',
                { ignoreTypeReferences: true },
            ],
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/prefer-enum-initializers': 'warn',

            complexity: ['error', 15],
            '@typescript-eslint/no-non-null-assertion': 'off',
            // https://iliubinskii.github.io/eslint-plugin-misc/#rules
            'misc/no-shadow': 'warn',
        },
    },
    {
        files: ['**/*.test.ts*', '**/*.test.tsx'],

        rules: {
            '@typescript-eslint/no-empty-function': 'off',
            'deprecation/deprecation': 'off',
            'max-lines': [
                'error',
                { max: 500, skipBlankLines: true, skipComments: true },
            ],
            'misc/typescript/no-unsafe-object-assignment': 'off',
            'misc/class-match-filename': 'off',
        },
    },
];
