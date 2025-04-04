import { vi } from 'vitest';
import React from 'react';
import { expectCellValue } from '../../../../__tests__/helpers';
import { SavesBlock } from '../SavesBlock';
import { render, screen } from '@testing-library/react';
import { exampleSavesMock } from '@wowfinder/model';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('Saves', () => {
    it('should render the correct values', () => {
        const result = render(<SavesBlock saves={exampleSavesMock} />);
        expect(screen.getByText('charsheet.saves.abbr.fort')).toBeTruthy();
        expectCellValue(result, 'txt', 'base', 'fort', '+5');
        expectCellValue(result, 'txt', 'enhance', 'fort', '+1');
        expectCellValue(result, 'txt', 'gear', 'fort', '');
        expectCellValue(result, 'txt', 'misc', 'fort', '+1');
        expectCellValue(result, 'txt', 'temp', 'fort', '');

        expect(screen.getByText('charsheet.saves.abbr.refl')).toBeTruthy();
        expectCellValue(result, 'txt', 'base', 'refl', '+4');
        expectCellValue(result, 'txt', 'enhance', 'refl', '');
        expectCellValue(result, 'txt', 'gear', 'refl', '+1');
        expectCellValue(result, 'txt', 'misc', 'refl', '+1');
        expectCellValue(result, 'txt', 'temp', 'refl', '');

        expect(screen.getByText('charsheet.saves.abbr.will')).toBeTruthy();
        expectCellValue(result, 'txt', 'base', 'will', '+4');
        expectCellValue(result, 'txt', 'enhance', 'will', '+1');
        expectCellValue(result, 'txt', 'gear', 'will', '+2');
        expectCellValue(result, 'txt', 'misc', 'will', '+1');
        expectCellValue(result, 'txt', 'temp', 'will', '+3');
    });
});
