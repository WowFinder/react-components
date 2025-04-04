import { expectExportFC } from '../../../../__tests__/helpers';
import * as Resistances from '../index';

describe('Creature Resistances components index', () => {
    it('should export InlineResistances component', () => {
        expectExportFC(Resistances.InlineResistances);
    });
    it('should export ResistancesBlock component', () => {
        expectExportFC(Resistances.ResistancesBlock);
    });
});
