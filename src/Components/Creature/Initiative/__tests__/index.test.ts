import { expectExactExportFCs } from '../../../../__tests__/helpers';
import * as Ini from '../index';

describe('Creature Initiative components index', () => {
    it('should export all the components', () => {
        expectExactExportFCs(Ini, Ini.Initiative, Ini.InlineInitiative);
    });
});
