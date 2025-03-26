import { FontFamily, baseFont, font, smallText } from '../font';

describe('font', () => {
    it('should export smallText', () => {
        expect(smallText).toBeDefined();
    });
    it('should export baseFont', () => {
        expect(baseFont).toBeDefined();
    });
    describe('font', () => {
        it('should return a string with font-family', () => {
            const result = font({ family: FontFamily.priori, size: 11 });
            expect(result).toContain('font-family:');
            for (const family of FontFamily.priori) {
                expect(result).toContain(family);
            }
        });
        it('should return a string with font-size', () => {
            const result = font({ size: 11 });
            expect(result).toContain('font-size: 11pt;');
        });
    });
});
