import { debugOutline } from '../outline';

describe('outline', () => {
    let originalEnv: typeof process.env.NODE_ENV;
    beforeEach(() => {
        originalEnv = process.env.NODE_ENV;
    });
    afterEach(() => {
        process.env.NODE_ENV = originalEnv;
    });
    it('should export debugOutline', () => {
        expect(debugOutline).toBeDefined();
    });
    describe('debugOutline', () => {
        it('should return empty style when not in development environment', () => {
            process.env.NODE_ENV = 'production';
            const result = debugOutline({});
            expect(result).toBe('');
        });
        it('should contain outline style for screen media when in development environment', () => {
            process.env.NODE_ENV = 'development';
            const result = debugOutline({
                selector: '.test',
                width: '2px',
                style: 'solid',
                color: '#000',
            });
            expect(result).toContain('@media screen');
            expect(result).toContain('.test');
            expect(result).toContain('outline: 2px solid #000');
        });
        it('should use default values when no arguments are provided', () => {
            process.env.NODE_ENV = 'development';
            const result = debugOutline({});
            expect(result).toContain('@media screen');
            expect(result).toContain('&');
            expect(result).toContain('outline: 1px dashed #ccc');
        });
    });
});
