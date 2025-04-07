import { expectExactExportFCs } from '../../../../__tests__/helpers';
import * as AttackScores from '../index';

describe('Creature AttackScores components index', () => {
    it('should export all the components', () => {
        expectExactExportFCs(AttackScores, AttackScores.AttackScoresBlock);
    });
});
