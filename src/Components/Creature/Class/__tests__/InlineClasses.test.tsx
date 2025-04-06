import React from 'react';
import { vi } from 'vitest';
import { render } from '@testing-library/react';
import {
    type ClassEntries,
    mockArcaneClass,
    mockMeleeClass,
    mockStealthClass,
} from '@wowfinder/model';
import { InlineClasses } from '../InlineClasses';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

const baseTestEntries: ClassEntries = [
    { class: mockMeleeClass, level: 2 },
    { class: mockArcaneClass, level: 6 },
    { class: mockStealthClass, level: 1 },
];

const duplicatedTestEntries: ClassEntries = [
    { class: mockMeleeClass, level: 2 },
    { class: mockArcaneClass, level: 3 },
    { class: mockMeleeClass, level: 1 },
    { class: mockArcaneClass, level: 6 },
];

describe('InlineClasses', () => {
    it('should render the correct number of class entries', () => {
        const { container } = render(<InlineClasses data={baseTestEntries} />);
        const entries = container.querySelectorAll('span.inline-class-entry');
        expect(entries.length).toBe(baseTestEntries.length);
    });

    it('should render class names and levels correctly and in the correct order', () => {
        const { container } = render(<InlineClasses data={baseTestEntries} />);
        const entries = container.querySelectorAll('span.inline-class-entry');

        expect(entries[0].textContent).toContain(mockArcaneClass.key);
        expect(entries[0].textContent).toContain('6');
        expect(entries[1].textContent).toContain(mockMeleeClass.key);
        expect(entries[1].textContent).toContain('2');
        expect(entries[2].textContent).toContain(mockStealthClass.key);
        expect(entries[2].textContent).toContain('1');
    });

    it('should merge duplicate classes and sum their levels', () => {
        const { container } = render(
            <InlineClasses data={duplicatedTestEntries} />,
        );
        const entries = container.querySelectorAll('span.inline-class-entry');

        expect(entries.length).toBe(2); // Two unique classes
        expect(entries[0].textContent).toContain(mockArcaneClass.key);
        expect(entries[0].textContent).toContain('9'); // 6 + 3
        expect(entries[1].textContent).toContain(mockMeleeClass.key);
        expect(entries[1].textContent).toContain('3'); // 2 + 1
    });
});
