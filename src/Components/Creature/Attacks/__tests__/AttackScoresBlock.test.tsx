import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { mixedStatsMock, statMod } from '@wowfinder/model';
import {
    AttackScoresBlock,
    AttackScoresBlockProps,
} from '../AttackScoresBlock';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('AttackScoresBlock', () => {
    it('should render correctly', async () => {
        const attackScoresMockData: AttackScoresBlockProps = {
            baseAttackBonus: 3,
            stats: mixedStatsMock,
            sizeModifier: 1,
        };

        const strMod = statMod(mixedStatsMock.strength);
        const dexMod = statMod(mixedStatsMock.dexterity);

        const rendered = render(
            <AttackScoresBlock {...attackScoresMockData} />,
        );
        expect(await screen.findByText('charsheet.attack.melee')).toBeTruthy();
        expect(await screen.findByText('charsheet.attack.ranged')).toBeTruthy();
        expect(await screen.findByText('charsheet.attack.cmb')).toBeTruthy();
        expect(await screen.findByText('charsheet.common.total')).toBeTruthy();
        expect(await screen.findByText('charsheet.common.stat')).toBeTruthy();
        expect(await screen.findByText('charsheet.common.size')).toBeTruthy();
        const meleeTotal = rendered.container.querySelector(
            '#txtTotalMelee',
        ) as HTMLInputElement;
        expect(meleeTotal instanceof HTMLInputElement).toBeTruthy();
        expect(meleeTotal.value).toBe(`+${4 + strMod}`);
        const rangedTotal = rendered.container.querySelector(
            '#txtTotalRanged',
        ) as HTMLInputElement;
        expect(rangedTotal instanceof HTMLInputElement).toBeTruthy();
        expect(rangedTotal.value).toBe(`+${4 + dexMod}`);
        const cmbTotal = rendered.container.querySelector(
            '#txtTotalCmb',
        ) as HTMLInputElement;
        expect(cmbTotal instanceof HTMLInputElement).toBeTruthy();
        expect(cmbTotal.value).toBe(`+${4 + strMod}`);
    });
    it('should take unspecified stats as having a mod of 0', async () => {
        const attackScoresMockData: AttackScoresBlockProps = {
            baseAttackBonus: 3,
            sizeModifier: 1,
        };
        const rendered = render(
            <AttackScoresBlock {...attackScoresMockData} />,
        );
        const meleeTotal = rendered.container.querySelector(
            '#txtTotalMelee',
        ) as HTMLInputElement;
        expect(meleeTotal instanceof HTMLInputElement).toBeTruthy();
        expect(meleeTotal.value).toBe('+4');
        const rangedTotal = rendered.container.querySelector(
            '#txtTotalRanged',
        ) as HTMLInputElement;
        expect(rangedTotal instanceof HTMLInputElement).toBeTruthy();
        expect(rangedTotal.value).toBe('+4');
        const cmbTotal = rendered.container.querySelector(
            '#txtTotalCmb',
        ) as HTMLInputElement;
        expect(cmbTotal instanceof HTMLInputElement).toBeTruthy();
        expect(cmbTotal.value).toBe('+4');
    });
    it('should take null values in stats as having a value of 0', async () => {
        const attackScoresMockData: AttackScoresBlockProps = {
            baseAttackBonus: 3,
            stats: {
                strength: null,
                dexterity: null,
            } as any,
            sizeModifier: 1,
        };
        const rendered = render(
            <AttackScoresBlock {...attackScoresMockData} />,
        );
        const meleeTotal = rendered.container.querySelector(
            '#txtTotalMelee',
        ) as HTMLInputElement;
        expect(meleeTotal instanceof HTMLInputElement).toBeTruthy();
        expect(meleeTotal.value).toBe('-1');
        const rangedTotal = rendered.container.querySelector(
            '#txtTotalRanged',
        ) as HTMLInputElement;
        expect(rangedTotal instanceof HTMLInputElement).toBeTruthy();
        expect(rangedTotal.value).toBe('-1');
        const cmbTotal = rendered.container.querySelector(
            '#txtTotalCmb',
        ) as HTMLInputElement;
        expect(cmbTotal instanceof HTMLInputElement).toBeTruthy();
        expect(cmbTotal.value).toBe('-1');
    });
});
