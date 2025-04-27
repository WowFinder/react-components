import { expectExactExportFCs } from '../../../../__tests__/helpers';
import * as DefenseScores from '../index';

describe('Creature DefenseScores components index', () => {
    it('should export all the components', () => {
        expectExactExportFCs(DefenseScores, DefenseScores.DefenseScoresBlock);
    });
});
