import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { expectInputValue } from '../../../../__tests__/helpers';
import { HitPoints } from '../HitPoints';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

function expectInputValues(
    result: ReturnType<typeof render>,
    inputValues: Record<string, string>,
): void {
    Object.entries(inputValues).forEach(([key, value]) => {
        expectInputValue(result, key, value);
    });
}

describe('HitPoints', () => {
    it('should render correctly with minimal args', () => {
        const rendered = render(<HitPoints base={10} />);
        expect(screen.getByText('charsheet.hitpoints.curr')).toBeTruthy();
        expect(screen.getByText('charsheet.hitpoints.total')).toBeTruthy();
        expect(screen.getByText('charsheet.hitpoints.base')).toBeTruthy();
        expect(screen.getByText('charsheet.hitpoints.misc')).toBeTruthy();
        expect(screen.getByText('charsheet.hitpoints.temp')).toBeTruthy();
        expectInputValues(rendered, {
            txtHpTotal: '10',
            txtHpBase: '10',
            txtHpMisc: '0',
            txtHpTemp: '0',
            txtHpCurrent: '10',
        });
    });

    it('should render correctly with all args', () => {
        const rendered = render(
            <HitPoints base={10} current={8} misc={2} temporary={5} />,
        );
        expect(screen.getByText('charsheet.hitpoints.curr')).toBeTruthy();
        expect(screen.getByText('charsheet.hitpoints.total')).toBeTruthy();
        expect(screen.getByText('charsheet.hitpoints.base')).toBeTruthy();
        expect(screen.getByText('charsheet.hitpoints.misc')).toBeTruthy();
        expect(screen.getByText('charsheet.hitpoints.temp')).toBeTruthy();
        expectInputValues(rendered, {
            txtHpTotal: '12',
            txtHpBase: '10',
            txtHpMisc: '2',
            txtHpTemp: '5',
            txtHpCurrent: '8',
        });
    });

    it('should compute default current value correctly', () => {
        const rendered = render(<HitPoints base={10} misc={2} temporary={5} />);
        expect(screen.getByText('charsheet.hitpoints.curr')).toBeTruthy();
        expect(screen.getByText('charsheet.hitpoints.total')).toBeTruthy();
        expect(screen.getByText('charsheet.hitpoints.base')).toBeTruthy();
        expect(screen.getByText('charsheet.hitpoints.misc')).toBeTruthy();
        expect(screen.getByText('charsheet.hitpoints.temp')).toBeTruthy();
        expectInputValues(rendered, {
            txtHpTotal: '12',
            txtHpBase: '10',
            txtHpMisc: '2',
            txtHpTemp: '5',
            txtHpCurrent: '17',
        });
    });
});
