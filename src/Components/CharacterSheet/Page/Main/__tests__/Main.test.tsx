import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MainPage } from '../Main';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

function expectContainId(result: ReturnType<typeof render>, id: string): void {
    const elements = result.container.querySelectorAll(`#${id}`);
    expect(elements.length).toBe(1);
    const element = elements[0] as HTMLElement;
    expect(element instanceof HTMLElement).toBe(true);
    expect(element.id).toBe(id);
}

describe('Main', async () => {
    it('renders with basic props', async () => {
        const result = render(<MainPage />);
        expectContainId(result, 'pagemain');
        expectContainId(result, 'lblCharacterName');
        expectContainId(result, 'column-MainLeft');
        expectContainId(result, 'column-MainRight');
        expect((await screen.findAllByText('stats.abbr.CON')).length).toBe(1);
        expectContainId(result, 'tblHp');
        expectContainId(result, 'txtAcFullTotal');
        expectContainId(result, 'txtTotalFort');
        expectContainId(result, 'trResistBludgeoning');
        expectContainId(result, 'txtTotalMelee');
        // TODO: Check for the classes block once implemented
        expectContainId(result, 'tblInitiative');
        expectContainId(result, 'txtSpeedBaseFeet');
        // TODO: Check for the feats & traits list once implemented
    });
});
