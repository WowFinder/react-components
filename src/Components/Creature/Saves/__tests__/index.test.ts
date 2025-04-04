import { expectExactExportFCs } from '../../../../__tests__/helpers';
import * as Saves from '../index';

describe('Creature Saves components index', () => {
    it('should export all the components', () => {
        expectExactExportFCs(Saves, Saves.InlineSaves, Saves.SavesBlock);
    });
});
