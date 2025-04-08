import { expectExactExportFCs } from '../../../../__tests__/helpers';
import * as Class from '../index';

describe('Creature Class components index', () => {
    it('should export all the components', () => {
        expectExactExportFCs(Class, Class.ClassPicker, Class.InlineClasses);
    });
});
