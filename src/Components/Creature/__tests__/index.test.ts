import { expectExactExportFCs } from '../../../__tests__/helpers';
import * as Creature from '../index';

describe('Creature components index', () => {
    it('Should export all components', () => {
        expectExactExportFCs(
            Creature,
            Creature.InlineResistances,
            Creature.ResistancesBlock,
            Creature.InlineSaves,
            Creature.SavesBlock,
            Creature.ColumnStatsView,
            Creature.InlineStatsView,
            Creature.MultiColumnStatsView,
        );
    });
});
