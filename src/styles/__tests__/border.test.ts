import {
    border,
    borderThin,
    borderThick,
    borderless,
    bottomLine,
    printableBottomBorder,
} from '../border';

describe('border', () => {
    it('should export border', () => {
        expect(border).toBeDefined();
    });
    it('should export borderThin', () => {
        expect(borderThin).toBeDefined();
    });
    it('should export borderThick', () => {
        expect(borderThick).toBeDefined();
    });
    it('should export borderless', () => {
        expect(borderless).toBeDefined();
    });
    it('should export bottomLine', () => {
        expect(bottomLine).toBeDefined();
    });
    describe('printableBottomBorder', () => {
        it('should export printableBottomBorder', () => {
            expect(printableBottomBorder).toBeDefined();
        });
        it('should return a string with media print', () => {
            const result = printableBottomBorder('selector');
            expect(result).toContain('@media print');
        });
        it('should return a string with the given selector', () => {
            const result = printableBottomBorder('selector');
            expect(result).toContain('selector');
        });
    });
});
