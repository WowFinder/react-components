import { expectExactExports } from '../../../../__tests__/helpers';
import * as PersonalDetails from '../index';

describe('Creature PersonalDetails', () => {
    it('should export all components', () => {
        expectExactExports(PersonalDetails, 'PersonalBlock');
    });
});
