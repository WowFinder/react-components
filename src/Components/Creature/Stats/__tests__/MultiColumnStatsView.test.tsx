import React from 'react';
import {
    defaultStatsMock,
    meleeBonusesStatsMock,
    mixedBonusStatsMock,
} from '@wowfinder/model';
import { render, screen } from '@testing-library/react';
import { MultiColumnStatsView } from '../MultiColumnStatsView';
import { vi } from 'vitest';

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
        expect(screen.findByText('STR')).toBeTruthy();
        expect(screen.findByText('DEX')).toBeTruthy();
        expect(screen.findByText('CON')).toBeTruthy();
        expect(screen.findByText('INT')).toBeTruthy();
        expect(screen.findByText('WIS')).toBeTruthy();
        expect(screen.findByText('CHA')).toBeTruthy();
        for (const key of multiColumnMockData.map(d => d.key)) {
            expect(screen.findByText(key)).toBeTruthy();
        }
    });
});
