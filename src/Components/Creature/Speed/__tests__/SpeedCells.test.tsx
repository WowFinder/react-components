import React from 'react';
import { screen } from '@testing-library/react';
import { Speed, commonSpeedUnits } from '@wowfinder/model';
import { renderInTable } from '../../../../__tests__/helpers';
import { SpeedCells } from '../SpeedCells';

const defaultSpeed = new Speed({ value: 30, unit: commonSpeedUnits.feetTurn });

describe('SpeedCells', () => {
    it('renders with a valid value and heading', () => {
        const props = {
            name: 'test',
            speed: defaultSpeed,
            heading: 'Test Heading',
        } as const;
        renderInTable(<SpeedCells {...props} />);
        expect(screen.getByText('Test Heading')).toBeTruthy();
        expect(screen.getByDisplayValue('30')).toBeTruthy();
        // 30' converts to 9m and 6 squares
        expect(screen.getByDisplayValue('9')).toBeTruthy();
        expect(screen.getByDisplayValue('6')).toBeTruthy();
    });
    it('renders with value and no heading', () => {
        const props = {
            name: 'test',
            speed: defaultSpeed,
        } as const;
        const rendered = renderInTable(<SpeedCells {...props} />);
        expect(rendered.container.querySelector('th')).toBeFalsy();
        expect(screen.getByDisplayValue('30')).toBeTruthy();
        // 30' converts to 9m and 6 squares
        expect(screen.getByDisplayValue('9')).toBeTruthy();
        expect(screen.getByDisplayValue('6')).toBeTruthy();
    });
    it('renders with no value and no heading', () => {
        const props = {
            name: 'test',
            speed: null as any,
        } as const;
        const rendered = renderInTable(<SpeedCells {...props} />);
        expect(rendered.container.querySelector('th')).toBeFalsy();
        expect(rendered.container.querySelectorAll('td').length).toBe(3);
    });
    it('renders with no value and a heading', () => {
        const props = {
            name: 'test',
            speed: null as any,
            heading: 'Test Heading',
        } as const;
        const rendered = renderInTable(<SpeedCells {...props} />);
        expect(rendered.container.querySelector('th')).toBeTruthy();
        expect(screen.getByText('Test Heading')).toBeTruthy();
        expect(rendered.container.querySelectorAll('td').length).toBe(3);
    });
});
