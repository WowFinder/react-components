import React from 'react';
import { InlineStatsView } from '../InlineStatsView';
import { render, screen } from '@testing-library/react';
import { defaultStatsMock } from '@wowfinder/model';
import { vi } from 'vitest';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}));

describe('InlineStatsView', () => {
    it('should render correctly', () => {
        render(<InlineStatsView data={defaultStatsMock} />);
        expect(screen.findByText('STR')).toBeTruthy();
        expect(screen.findByText('DEX')).toBeTruthy();
        expect(screen.findByText('CON')).toBeTruthy();
        expect(screen.findByText('INT')).toBeTruthy();
        expect(screen.findByText('WIS')).toBeTruthy();
        expect(screen.findByText('CHA')).toBeTruthy();
    });
});
