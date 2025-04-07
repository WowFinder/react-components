import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InlineHitPoints } from '../InlineHitPoints';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('InlineHitPoints', () => {
    it('should render correctly with minimal args', () => {
        render(<InlineHitPoints max={10} />);
        expect(screen.getByText('class.ui.hp')).toBeTruthy();
        expect(screen.getByText('10/10')).toBeTruthy();
    });

    it('should render correctly with current value', () => {
        render(<InlineHitPoints max={20} current={15} />);
        expect(screen.getByText('class.ui.hp')).toBeTruthy();
        expect(screen.getByText('15/20')).toBeTruthy();
    });
});
