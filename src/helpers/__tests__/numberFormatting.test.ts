import { plusPrefixed } from '../numberFormatting';

describe('numberFormatting', () => {
    describe('plusPrefixed', () => {
        it('should return a string with a minus sign for negative values', () => {
            const result = plusPrefixed(-5);
            expect(result).toBe('-5');
        });
        it('should return a string with a plus sign for positive mod values', () => {
            const result = plusPrefixed(5);
            expect(result).toBe('+5');
        });
        it('should return a string without a sign for positive non-mod values', () => {
            const result = plusPrefixed(5, false);
            expect(result).toBe('5');
        });
        it('should return a string with a plus sign for zero mod values', () => {
            const result = plusPrefixed(0);
            expect(result).toBe('+0');
        });
        it('should return a string without a sign for zero non-mod values', () => {
            const result = plusPrefixed(0, false);
            expect(result).toBe('0');
        });
    });
});
