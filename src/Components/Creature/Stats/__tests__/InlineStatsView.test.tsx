import React from 'react';
import { InlineStatsView } from '../InlineStatsView';
import { render, screen } from '@testing-library/react';

describe('InlineStatsView', () => {
    it('should render correctly', () => {
        // TODO: import from @wowfinder/model (requires > 0.0.2)
        const data = {
            strength: 10,
            dexterity: 10,
            constitution: 10,
            intelligence: 10,
            wisdom: 10,
            charisma: 10,
        };
        render(<InlineStatsView data={data} />);
        expect(screen.findByText('STR')).toBeTruthy();
        expect(screen.findByText('DEX')).toBeTruthy();
        expect(screen.findByText('CON')).toBeTruthy();
        expect(screen.findByText('INT')).toBeTruthy();
        expect(screen.findByText('WIS')).toBeTruthy();
        expect(screen.findByText('CHA')).toBeTruthy();
    });
});
