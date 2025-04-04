import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Spinner } from '../Spinner';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('Spinner', () => {
    it('should render a default spinner', async () => {
        await render(<Spinner />);
        const spinnerElement = await screen.findByTestId('spinner');
        expect(spinnerElement).toBeTruthy();
    });
});
