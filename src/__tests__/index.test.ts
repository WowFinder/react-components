import * as exported from '../index';

describe('index', () => {
    it('should export ColumnStatsView (function component)', () => {
        expect(exported.ColumnStatsView).toBeInstanceOf(Function);
    });
    it('should export MultiColumnStatsView (function component)', () => {
        expect(exported.MultiColumnStatsView).toBeInstanceOf(Function);
    });
    it('should export InlineStatsView (function component)', () => {
        expect(exported.InlineStatsView).toBeInstanceOf(Function);
    });
});
