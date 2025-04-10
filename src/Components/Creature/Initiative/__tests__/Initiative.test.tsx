import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { expectInputValue } from '../../../../__tests__/helpers';
import { Initiative } from '../Initiative';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('Initiative', () => {
    it('renders with minimal args', () => {
        const rendered = render(<Initiative dexterity={10} />);
        expect(screen.getByText('charsheet.initiative.total')).toBeTruthy();
        expectInputValue(rendered, 'txtInitiativeTotal', '0');
        expectInputValue(rendered, 'txtInitiativeDex', '0');
        expectInputValue(rendered, 'txtInitiativeMisc', '0');
        expectInputValue(rendered, 'txtInitiativeTemp', '0');
    });
    it('renders with all args', () => {
        const rendered = render(
            <Initiative dexterity={12} misc={2} temporary={3} />,
        );
        expect(screen.getByText('charsheet.initiative.total')).toBeTruthy();
        expectInputValue(rendered, 'txtInitiativeTotal', '6');
        expectInputValue(rendered, 'txtInitiativeDex', '1');
        expectInputValue(rendered, 'txtInitiativeMisc', '2');
        expectInputValue(rendered, 'txtInitiativeTemp', '3');
    });
});
