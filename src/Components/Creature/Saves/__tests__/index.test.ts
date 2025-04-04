import * as Saves from '../index';
import { expectExportFC } from '../../../../__tests__/helpers';
import { vi } from 'vitest';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));
describe('Creature Saves components index', () => {
    it('should export InlineSaves component', () => {
        expectExportFC(Saves.InlineSaves);
    });
    it('should export SavesBlock component', () => {
        expectExportFC(Saves.SavesBlock);
    });
    it('should export exactly 2 components', () => {
        expect(Object.keys(Saves).length).toBe(2);
    });
});
