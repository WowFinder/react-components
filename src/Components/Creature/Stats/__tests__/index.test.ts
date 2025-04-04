import { expectExactExportFCs } from '../../../../__tests__/helpers';
import * as Stats from '../index';

describe('Creature Stats components index', () => {
    it('should export all the components', () => {
        expectExactExportFCs(
            Stats,
            Stats.ColumnStatsView,
            Stats.InlineStatsView,
            Stats.MultiColumnStatsView,
        );
    });
});
