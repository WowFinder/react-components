import * as Resistances from '../index';
import { mockTranslations } from '../../../../__tests__/helpers';

mockTranslations();

describe('Creature Resistances components index', () => {
    it('should export ResistancesBlock component', () => {
        expect(Resistances.ResistancesBlock).toBeDefined();
        expect(Resistances.ResistancesBlock).toBeInstanceOf(Function);
    });
});
