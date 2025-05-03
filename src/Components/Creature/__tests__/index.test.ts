import { expectExactExportFCs } from '../../../__tests__/helpers';
import * as Creature from '../index';

describe('Creature components index', () => {
    it('Should export all components', () => {
        expectExactExportFCs(
            Creature,
            Creature.AttackScoresBlock,
            Creature.ClassPicker,
            Creature.InlineClasses,
            Creature.HitPoints,
            Creature.InlineHitPoints,
            Creature.Initiative,
            Creature.InlineInitiative,
            Creature.InlineResistances,
            Creature.ResistancesBlock,
            Creature.InlineSaves,
            Creature.SavesBlock,
            Creature.Speeds,
            Creature.ColumnStatsView,
            Creature.InlineStatsView,
            Creature.MultiColumnStatsView,
        );
    });
});
