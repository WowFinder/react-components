import { screenZoom } from '../zoom';

describe('screenZoom', () => {
    it('should export screenZoom', () => {
        expect(screenZoom).toBeDefined();
    });
    it('should return a string with zoom', () => {
        const result = screenZoom(1.6);
        expect(result).toContain('zoom: 1.6;');
    });
    it('should use a well-defined value for the zoom factor', () => {
        const result = screenZoom();
        expect(result).toMatch(/zoom:\s*\d+(.\d*)*\s*;/);
    });
    it('should return a string with min-width', () => {
        const result = screenZoom(1.6, 100);
        expect(result).toContain('min-width: 100px');
    });
});
