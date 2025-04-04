import * as Saves from '../index';
import { mockTranslations } from '../../../../__tests__/helpers';

mockTranslations();

describe('Creature Saves components index', () => {
    it('should export SavesBlock component', () => {
        expect(Saves.SavesBlock).toBeDefined();
        expect(Saves.SavesBlock).toBeInstanceOf(Function);
    });
});
