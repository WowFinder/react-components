import { expectExactExportFCs } from '../../../../__tests__/helpers';
import * as Speed from '../index';

describe('Creature Speed components index', () => {
    it('should export all the components', () => {
        expectExactExportFCs(Speed, Speed.Speeds);
    });
});
