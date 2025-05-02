import { expectExactExports } from '../../../__tests__/helpers';
import * as CharacterSheet from '../index';

describe('CharacterSheet', () => {
    it('should export all components', () => {
        expectExactExports(CharacterSheet, 'PageType', 'TypedPage');
    });
});
