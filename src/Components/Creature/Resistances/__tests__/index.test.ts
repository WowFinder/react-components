import * as Resistances from '../index';
import { expectExportFC } from '../../../../__tests__/helpers';

import { vi } from 'vitest';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('Creature Resistances components index', () => {
    it('should export ResistancesBlock component', () => {
        expectExportFC(Resistances.ResistancesBlock);
    });
});
