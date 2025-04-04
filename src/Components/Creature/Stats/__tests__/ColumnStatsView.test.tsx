import { vi } from 'vitest';
import React from 'react';
import { ColumnStatsView } from '../ColumnStatsView';
import { render, screen } from '@testing-library/react';
import { defaultStatsMock } from '@wowfinder/model';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('ColumnStatsView', () => {
    it('should render correctly', () => {
        render(<ColumnStatsView data={defaultStatsMock} />);
        expect(screen.findByText('STR')).toBeTruthy();
        expect(screen.findByText('DEX')).toBeTruthy();
        expect(screen.findByText('CON')).toBeTruthy();
        expect(screen.findByText('INT')).toBeTruthy();
        expect(screen.findByText('WIS')).toBeTruthy();
        expect(screen.findByText('CHA')).toBeTruthy();
    });
});
