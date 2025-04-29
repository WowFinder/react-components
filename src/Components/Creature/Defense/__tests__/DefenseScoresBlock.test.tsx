import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FullArmorValues, mixedStatsMock, statMod } from '@wowfinder/model';
import {
    DefenseScoresBlock,
    type DefenseScoresBlockProps,
} from '../DefenseScoresBlock';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('DefenseScoresBlock', () => {
    it('should render correctly', async () => {
        const defenseScoresMockData: DefenseScoresBlockProps = {
            values: new FullArmorValues({
                gear: 1,
                natural: 2,
                deflection: 3,
                misc: 4,
                miscPhysical: 5,
                miscEvasion: 6,
                temporary: 7,
                temporaryPhysical: 8,
                temporaryEvasion: 9,
                strength: statMod(mixedStatsMock.strength),
                dexterity: statMod(mixedStatsMock.dexterity),
                baseAttack: -2,
                size: 0,
            }),
        };

        const rendered = render(
            <DefenseScoresBlock {...defenseScoresMockData} />,
        );
        expect(await screen.findByText('charsheet.armor.AC')).toBeTruthy();
        expect(await screen.findByText('charsheet.armor.touch')).toBeTruthy();
        expect(await screen.findByText('charsheet.armor.flatf')).toBeTruthy();
        expect(
            (await screen.findAllByText('charsheet.armor.total')).length,
        ).toBe(2);
        expect((await screen.findAllByText('stats.abbr.DEX')).length).toBe(2);
        expect(
            (await screen.findAllByText('charsheet.common.size')).length,
        ).toBe(2);
        const acFullTotal = rendered.container.querySelector(
            '#txtAcFullTotal',
        ) as HTMLInputElement;
        expect(acFullTotal instanceof HTMLInputElement).toBeTruthy();
        expect(acFullTotal.value).toBe('57');
        const acTouchTotal = rendered.container.querySelector(
            '#txtAcTouchTotal',
        ) as HTMLInputElement;
        expect(acTouchTotal instanceof HTMLInputElement).toBeTruthy();
        expect(acTouchTotal.value).toBe('41');
        const acFlatTotal = rendered.container.querySelector(
            '#txtAcFlatTotal',
        ) as HTMLInputElement;
        expect(acFlatTotal instanceof HTMLInputElement).toBeTruthy();
        expect(acFlatTotal.value).toBe('40');
        const cmdTotal = rendered.container.querySelector(
            '#txtCmdTotal',
        ) as HTMLInputElement;
        expect(cmdTotal instanceof HTMLInputElement).toBeTruthy();
        expect(cmdTotal.value).toBe('42');
    });
});
