import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { defaultStatsMock } from '@wowfinder/model';
import { InlineStatsView } from '../InlineStatsView';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('InlineStatsView', async () => {
    it('should render correctly', async () => {
        render(<InlineStatsView data={defaultStatsMock} />);
        expect(await screen.findByText('stats.abbr.STR')).toBeTruthy();
        expect(await screen.findByText('stats.abbr.DEX')).toBeTruthy();
        expect(await screen.findByText('stats.abbr.CON')).toBeTruthy();
        expect(await screen.findByText('stats.abbr.INT')).toBeTruthy();
        expect(await screen.findByText('stats.abbr.WIS')).toBeTruthy();
        expect(await screen.findByText('stats.abbr.CHA')).toBeTruthy();
    });
});
