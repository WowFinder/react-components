import { expectExportFC } from '../../../../__tests__/helpers';
import * as Stats from '../index';
import { vi } from 'vitest';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('Creature Stats components index', () => {
    it('should export ColumnStatsView component', () => {
        expectExportFC(Stats.ColumnStatsView);
    });
    it('should export InlineStatsView component', () => {
        expectExportFC(Stats.InlineStatsView);
    });
    it('should export MultiColumnStatsView component', () => {
        expectExportFC(Stats.MultiColumnStatsView);
    });
    it('should export exactly 3 components', () => {
        expect(Object.keys(Stats).length).toBe(3);
    });
});
