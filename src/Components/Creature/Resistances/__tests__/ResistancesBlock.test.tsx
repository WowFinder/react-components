import React from 'react';
import { vi } from 'vitest';
import { render } from '@testing-library/react';
import {
    FullResistances,
    mockDifferentFullResistances,
} from '@wowfinder/model';
import { BonusType, DamageType } from '@wowfinder/ts-enums';
import { expectCellValue } from '../../../../__tests__/helpers';
import { plusPrefixed } from '../../../../helpers';
import { ResistancesBlock } from '../ResistancesBlock';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

function expectResistanceOutput(
    result: ReturnType<typeof render>,
    category: BonusType,
    entry: DamageType,
    values: FullResistances,
): void {
    const value = values[category][entry];
    expectCellValue(result, 'txtResist', category, entry, plusPrefixed(value));
}

describe('ResistancesBlock', () => {
    it('should render the correct values', () => {
        const result = render(
            <ResistancesBlock resistances={mockDifferentFullResistances} />,
        );

        Object.keys(BonusType).forEach(category => {
            Object.keys(DamageType).forEach(entry => {
                expectResistanceOutput(
                    result,
                    category as BonusType,
                    entry as DamageType,
                    mockDifferentFullResistances,
                );
            });
        });
    });
});
