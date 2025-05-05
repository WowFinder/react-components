import React from 'react';
import { render } from '@testing-library/react';

import { LogoImage } from '../LogoImage';

describe('LogoImage', () => {
    it('renders with basic props', () => {
        const imgSource = 'http://localhost:3000/test';
        const result = render(<LogoImage src={imgSource} />);
        const imgs = result.container.querySelectorAll('img');
        expect(imgs.length).toBe(1);
        const img = imgs[0] as HTMLImageElement;
        expect(img instanceof HTMLImageElement).toBe(true);
        expect(img.src).toBe(imgSource);
        expect(img.parentElement?.className).toBe('');
    });
});