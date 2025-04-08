import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
    Speed,
    Speeds as SpeedValues,
    commonSpeedUnits,
} from '@wowfinder/model';
import { FlyManeuverability } from '@wowfinder/ts-enums';
import { Speeds } from '../Speeds';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => {
            // Need to cover the cases where the key is not found, so we have to mock those as well
            if (key === 'charsheet.speed.climb') {
                return;
            }
            return key;
        },
    }),
}));

const mkSpeed = (feetPerTurn: number): Speed => {
    return new Speed({ value: feetPerTurn, unit: commonSpeedUnits.feetTurn });
};

const defaultSpeeds = new SpeedValues({
    base: mkSpeed(30),
    swim: mkSpeed(15),
    fly: mkSpeed(60),
    climb: mkSpeed(10),
    burrow: mkSpeed(5),
    maneuverability: FlyManeuverability.good,
});

describe('Speeds', () => {
    it('renders with a value', () => {
        render(<Speeds speeds={defaultSpeeds} />);
        expect(screen.getByText('charsheet.speed.base')).toBeTruthy();
        expect(screen.getByDisplayValue('30')).toBeTruthy();
        expect(screen.getByDisplayValue('9')).toBeTruthy();
        expect(screen.getAllByDisplayValue('6').length).toBe(2);
        expect(screen.getByText('charsheet.speed.reduced')).toBeTruthy();
        expect(screen.getByDisplayValue('20')).toBeTruthy();
        // 20' converts to 6m, which is already checked above
        expect(screen.getByDisplayValue('4')).toBeTruthy();
        expect(screen.getByText('charsheet.speed.fly')).toBeTruthy();
        expect(screen.getByDisplayValue('60')).toBeTruthy();
        expect(screen.getByDisplayValue('18')).toBeTruthy();
        expect(screen.getByDisplayValue('12')).toBeTruthy();
        expect(
            screen.getByDisplayValue('charsheet.speed.maneuverability.good'),
        ).toBeTruthy();
        expect(screen.getByText('charsheet.speed.swim')).toBeTruthy();
        expect(screen.getByDisplayValue('15')).toBeTruthy();
        expect(screen.getAllByDisplayValue('5').length).toBe(2);
        expect(screen.getAllByDisplayValue('3').length).toBe(2);
        // Can't directly check for the `climb` key because we are mocking it as empty
        expect(screen.getByDisplayValue('10')).toBeTruthy();
        // 10' converts to 3m, which is already checked above
        expect(screen.getAllByDisplayValue('2').length).toBe(2);
        expect(screen.getByText('charsheet.speed.burrow')).toBeTruthy();
        // Value 5 is already checked above
        // 5' converts to 2m, which is already checked above
        expect(screen.getByDisplayValue('1')).toBeTruthy();
    });
});
