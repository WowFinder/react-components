import * as Creature from '../index';
import { expectExportFC, mockTranslations } from '../../../__tests__/helpers';

mockTranslations();
describe('Creature components index', () => {
    it('Should export all components', () => {
        expectExportFC(Creature.ResistancesBlock);
        expectExportFC(Creature.SavesBlock);
        expectExportFC(Creature.ColumnStatsView);
        expectExportFC(Creature.InlineStatsView);
        expectExportFC(Creature.MultiColumnStatsView);
    });
    it('Should export a known count of components', () => {
        expect(Object.keys(Creature).length).toBe(5);
    });
});