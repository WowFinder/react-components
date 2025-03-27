import React from 'react';
import { Spinner } from '../Spinner';
import { render, screen } from '@testing-library/react';

describe('Spinner', () => {
    it('should render a default spinner', async () => {
        await render(<Spinner />);
        const spinnerElement = await screen.findByTestId('spinner');
        expect(spinnerElement).toBeTruthy();
    });
});
