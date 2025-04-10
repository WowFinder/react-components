import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InlineInitiative } from '../InlineInitiative';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('InlineInitiative', () => {
    it('should render correctly', () => {
        render(<InlineInitiative value={10} />);
        expect(screen.getByText('abbr.initiative')).toBeTruthy();
        expect(screen.getByText('10')).toBeTruthy();
    });
});
