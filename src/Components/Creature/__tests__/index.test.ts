import * as Creature from '../index';
import { expectExportFC } from '../../../__tests__/helpers';

import { vi } from 'vitest';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('Creature components index', () => {
    it('Should export all components', () => {
        // expectExportFC(Creature.InlineResistances);
        expectExportFC(Creature.ResistancesBlock);
        expectExportFC(Creature.InlineSaves);
        expectExportFC(Creature.SavesBlock);
        expectExportFC(Creature.ColumnStatsView);
        expectExportFC(Creature.InlineStatsView);
        expectExportFC(Creature.MultiColumnStatsView);
    });
    it('Should export a known count of components', () => {
        expect(Object.keys(Creature).length).toBe(6);
    });
});
