import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Speed, type SpeedsProfile, commonSpeedUnits } from '@wowfinder/model';
import { FlyManeuverability } from '@wowfinder/ts-enums';
import { expectInputValue } from '../../../../__tests__/helpers';
import { Speeds } from '../Speeds';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

const mkSpeed = (feetPerTurn: number): Speed => {
    return new Speed({ value: feetPerTurn, unit: commonSpeedUnits.feetTurn });
};

const minimalSpeeds: SpeedsProfile = {
    baseSpeed: mkSpeed(30),
    reducedSpeed: mkSpeed(20),
    initiative: 0,
};

const fullSpeeds: SpeedsProfile = {
    ...minimalSpeeds,
    swimSpeed: mkSpeed(15),
    flySpeed: mkSpeed(60),
    climbSpeed: mkSpeed(10),
    burrowSpeed: mkSpeed(5),
    flyManeuverability: FlyManeuverability.good,
};

describe('Speeds', () => {
    it('renders with full values', () => {
        const result = render(<Speeds speeds={fullSpeeds} />);
        expect(screen.getByText('charsheet.speed.base')).toBeTruthy();
        expectInputValue(result, 'txtSpeedBaseFeet', '30');
        expectInputValue(result, 'txtSpeedBaseMeters', '9');
        expectInputValue(result, 'txtSpeedBaseSquares', '6');
        expect(screen.getByText('charsheet.speed.reduced')).toBeTruthy();
        expectInputValue(result, 'txtSpeedReducedFeet', '20');
        expectInputValue(result, 'txtSpeedReducedMeters', '6');
        expectInputValue(result, 'txtSpeedReducedSquares', '4');
        expect(screen.getByText('charsheet.speed.fly')).toBeTruthy();
        expectInputValue(result, 'txtSpeedFlyFeet', '60');
        expectInputValue(result, 'txtSpeedFlyMeters', '18');
        expectInputValue(result, 'txtSpeedFlySquares', '12');
        expect(
            screen.getByDisplayValue('charsheet.speed.maneuverability.good'),
        ).toBeTruthy();
        expect(screen.getByText('charsheet.speed.swim')).toBeTruthy();
        expectInputValue(result, 'txtSpeedSwimFeet', '15');
        expectInputValue(result, 'txtSpeedSwimMeters', '5');
        expectInputValue(result, 'txtSpeedSwimSquares', '3');
        expect(screen.getByText('charsheet.speed.climb')).toBeTruthy();
        expectInputValue(result, 'txtSpeedClimbFeet', '10');
        expectInputValue(result, 'txtSpeedClimbMeters', '3');
        expectInputValue(result, 'txtSpeedClimbSquares', '2');
        expect(screen.getByText('charsheet.speed.burrow')).toBeTruthy();
        expectInputValue(result, 'txtSpeedBurrowFeet', '5');
        expectInputValue(result, 'txtSpeedBurrowMeters', '2');
        expectInputValue(result, 'txtSpeedBurrowSquares', '1');
    });
    it('renders with minimal values', () => {
        const result = render(<Speeds speeds={minimalSpeeds} />);
        expect(screen.getByText('charsheet.speed.base')).toBeTruthy();
        expectInputValue(result, 'txtSpeedBaseFeet', '30');
        expectInputValue(result, 'txtSpeedBaseMeters', '9');
        expectInputValue(result, 'txtSpeedBaseSquares', '6');
        expect(screen.getByText('charsheet.speed.reduced')).toBeTruthy();
        expectInputValue(result, 'txtSpeedReducedFeet', '20');
        expectInputValue(result, 'txtSpeedReducedMeters', '6');
        expectInputValue(result, 'txtSpeedReducedSquares', '4');
        ['Fly', 'Swim', 'Climb', 'Burrow'].forEach(speedTypeInfix => {
            ['Feet', 'Meters', 'Squares'].forEach(unit => {
                result.container.querySelectorAll(
                    `#txtSpeed${speedTypeInfix}${unit}`,
                ).length === 0;
            });
        });
    });
});
