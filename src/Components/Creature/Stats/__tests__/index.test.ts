import { mockTranslations } from '../../../../__tests__/helpers';
import * as Stats from '../index';

mockTranslations();

describe('Creature Stats components index', () => {
    it('should export ColumnStatsView component', () => {
        expect(Stats.ColumnStatsView).toBeDefined();
        expect(Stats.ColumnStatsView).toBeInstanceOf(Function);
    });
    it('should export InlineStatsView component', () => {
        expect(Stats.InlineStatsView).toBeDefined();
        expect(Stats.InlineStatsView).toBeInstanceOf(Function);
    });
    it('should export MultiColumnStatsView component', () => {
        expect(Stats.MultiColumnStatsView).toBeDefined();
        expect(Stats.MultiColumnStatsView).toBeInstanceOf(Function);
    });
});
