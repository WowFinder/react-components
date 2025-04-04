import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
    defaultStatsMock,
    meleeBonusesStatsMock,
    mixedBonusStatsMock,
} from '@wowfinder/model';
import { MultiColumnStatsView } from '../MultiColumnStatsView';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

const multiColumnMockData = [
    { key: 'base', ...defaultStatsMock },
    { key: 'racial', isMod: true, ...meleeBonusesStatsMock },
    { key: 'class', isMod: true, ...mixedBonusStatsMock },
];

describe('MultiColumnStatsView', async () => {
    it('should render correctly', async () => {
        render(<MultiColumnStatsView data={multiColumnMockData} />);
        expect(await screen.findByText('stats.abbr.STR')).toBeTruthy();
        expect(await screen.findByText('stats.abbr.DEX')).toBeTruthy();
        expect(await screen.findByText('stats.abbr.CON')).toBeTruthy();
        expect(await screen.findByText('stats.abbr.INT')).toBeTruthy();
        expect(await screen.findByText('stats.abbr.WIS')).toBeTruthy();
        expect(await screen.findByText('stats.abbr.CHA')).toBeTruthy();
        for (const key of multiColumnMockData.map(d => d.key)) {
            expect(await screen.findByText(key)).toBeTruthy();
        }
    });
});
