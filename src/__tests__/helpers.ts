import { type render } from '@testing-library/react';

function expectExportFC(component: (...args: any[]) => void): void {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(Function);
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

export { expectExportFC, capFirst, expectCellValue };
