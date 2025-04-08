import React from 'react';
import { render } from '@testing-library/react';

function expectExportFC(component: Function): void {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(Function);
}

function expectExactExportFCs(module: {}, ...components: Function[]): void {
    components.forEach(component => {
        expectExportFC(module[component.name]);
    });
    expect(Object.keys(module).length).toBe(components.length);
}

function capFirst(val: string): string {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function expectCellValue(
    result: ReturnType<typeof render>,
    prefix: string,
    category: string,
    entry: string,
    value: string,
): void {
    const selector = `#${prefix}${capFirst(category)}${capFirst(entry)}`;
    const cell = result.container.querySelector(selector);
    if (!cell) {
        console.error(`Cell not found for selector: ${selector}`);
    }
    expect(cell?.getAttribute('value')).toBe(value);
}

function expectInputValue(
    result: ReturnType<typeof render>,
    id: string,
    value: string,
): void {
    const input = result.container.querySelector(`#${id}`) as HTMLInputElement;
    if (!input) {
        console.error(`Input not found for selector: #${id}`);
    }
    expect(input instanceof HTMLInputElement).toBeTruthy();
    expect(input?.value).toBe(value);
}

function renderInTable(element: React.ReactElement): ReturnType<typeof render> {
    return render(
        <table>
            <tbody>
                <tr>{element}</tr>
            </tbody>
        </table>,
    );
}

export {
    expectExportFC,
    expectExactExportFCs,
    capFirst,
    expectCellValue,
    expectInputValue,
    renderInTable,
};
