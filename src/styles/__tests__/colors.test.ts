import {
    autoReverseColors,
    colors,
    linkColors,
    mainColor,
    reverseColors,
} from '../colors';

describe('colors', () => {
    it('should export colors', () => {
        expect(colors).toBeDefined();
    });
    it('should export reverseColors', () => {
        expect(reverseColors).toBeDefined();
    });
    it('should export linkColors', () => {
        expect(linkColors).toBeDefined();
    });
    it('should export mainColor', () => {
        expect(mainColor).toBeDefined();
    });
    it('should export autoReverseColors', () => {
        expect(autoReverseColors).toBeDefined();
    });
});
