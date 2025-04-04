import { vi } from 'vitest';
import React from 'react';
import { InlineSaves } from '../InlineSaves';
import { render, screen } from '@testing-library/react';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('InlineSaves', () => {
    it('should render the correct values', () => {
        const saves = {
            fortitude: 5,
            reflexes: 0,
            will: -2,
        };

        render(<InlineSaves data={saves} />);

        expect(screen.getByText('+5')).toBeTruthy();
        expect(screen.getByText('+0')).toBeTruthy();
        expect(screen.getByText('-2')).toBeTruthy();
    });
});
