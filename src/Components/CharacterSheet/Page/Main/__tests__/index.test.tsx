import { expectExactExportFCs } from '../../../../../__tests__/helpers';
import * as Main from '../index';

describe('Main', () => {
    it('should export all components', () => {
        expectExactExportFCs(Main, Main.MainPage);
    });
});
