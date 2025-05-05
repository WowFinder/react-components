import React from 'react';
import { vi } from 'vitest';
import { render } from '@testing-library/react';
import { TypedPage } from '../TypedPage';
import { PageType } from '../types';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('TypedPage', () => {
    it('renders with basic props', () => {
        const result = render(<TypedPage type={PageType.main} />);
        const elements = result.container.querySelectorAll('#pagemain');
        expect(elements.length).toBe(1);
        const element = elements[0] as HTMLElement;
        expect(element instanceof HTMLElement).toBe(true);
        expect(element.id).toBe('pagemain');
    });
    it('renders without errors for all page types', () => {
        Object.keys(PageType).forEach(key => {
            const pageType = key as PageType;
            const result = render(<TypedPage type={pageType} />);
            const elements = result.container.querySelectorAll(`#${pageType}`);
            expect(elements.length).toBeLessThanOrEqual(1);
            if (elements.length > 0) {
                const element = elements[0] as HTMLElement;
                expect(element instanceof HTMLElement).toBe(true);
                expect(element.id).toBe(pageType);
            }
        });
    });
});
