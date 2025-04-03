import React from 'react';
import { Saves } from '../Saves';
import { render, screen } from '@testing-library/react';
import { exampleSavesMock } from '@wowfinder/model';
import { mockTranslations } from '../../../../__tests__/helpers';

mockTranslations();

function capFirst(val: string): string {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function expectCellValue(
    result: ReturnType<typeof render>,
    category: string,
    save: string,
    value: string,
): void {
    const selector = `#txt${capFirst(category)}${capFirst(save)}`;
    const cell = result.container.querySelector(selector);
    if (!cell) {
        console.error(`Cell not found for selector: ${selector}`);
    }
    expect(cell?.getAttribute('value')).toBe(value);
}

describe('Saves', () => {
    it('should render the correct values', () => {
        const result = render(<Saves saves={exampleSavesMock} />);
        console.warn(result.container.innerHTML);
        expect(screen.getByText('charsheet.saves.abbr.fort')).toBeTruthy();
        expectCellValue(result, 'base', 'fort', '+5');
        expectCellValue(result, 'enhance', 'fort', '+1');
        expectCellValue(result, 'gear', 'fort', '');
        expectCellValue(result, 'misc', 'fort', '+1');
        expectCellValue(result, 'temp', 'fort', '');

        expect(screen.getByText('charsheet.saves.abbr.refl')).toBeTruthy();
        expectCellValue(result, 'base', 'refl', '+4');
        expectCellValue(result, 'enhance', 'refl', '');
        expectCellValue(result, 'gear', 'refl', '+1');
        expectCellValue(result, 'misc', 'refl', '+1');
        expectCellValue(result, 'temp', 'refl', '');

        expect(screen.getByText('charsheet.saves.abbr.will')).toBeTruthy();
        expectCellValue(result, 'base', 'will', '+4');
        expectCellValue(result, 'enhance', 'will', '+1');
        expectCellValue(result, 'gear', 'will', '+2');
        expectCellValue(result, 'misc', 'will', '+1');
        expectCellValue(result, 'temp', 'will', '+3');
    });
});
