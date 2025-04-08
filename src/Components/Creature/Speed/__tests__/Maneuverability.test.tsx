import React from 'react';
import { vi } from 'vitest';
import { screen } from '@testing-library/react';
import { FlyManeuverability } from '@wowfinder/ts-enums';
import { renderInTable } from '../../../../__tests__/helpers';
import { Maneuverability } from '../Maneuverability';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('Maneuverability', () => {
    it('renders with a value', () => {
        renderInTable(<Maneuverability value={FlyManeuverability.average} />);
        expect(
            screen.getByDisplayValue('charsheet.speed.maneuverability.average'),
        ).toBeTruthy();
    });

    it('renders with no value', () => {
        renderInTable(<Maneuverability value={undefined} />);
        expect(screen.getByDisplayValue('')).toBeTruthy();
    });
});
