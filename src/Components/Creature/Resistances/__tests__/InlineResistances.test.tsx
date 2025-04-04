import { vi } from 'vitest';
import React from 'react';
import { InlineResistances } from '../InlineResistances';
import { render, screen } from '@testing-library/react';
import { type RawResistances } from '@wowfinder/asset-schemas';
import { mockZeroResistances } from '@wowfinder/model';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('InlineResistances', () => {
    it('should render the correct values', () => {
        const resistances: RawResistances = {
            ...mockZeroResistances,
            fire: 5,
            nature: -2,
        };

        render(<InlineResistances data={resistances} />);

        expect(screen.getByText('5')).toBeTruthy();
        expect(screen.getByText('-2')).toBeTruthy();
    });
});
