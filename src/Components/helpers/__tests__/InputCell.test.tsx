import React from 'react';
import { vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderInTable } from '../../../__tests__/helpers';
import {
    CheckCell,
    EmptyTd,
    InputCell,
    InputH,
    InputSuffixedCell,
    ModCell,
} from '../InputCell';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('InputH', () => {
    it('renders with basic props', () => {
        renderInTable(<InputH id="test" value={0} />);
        const input = screen.getByTestId('InputH') as HTMLInputElement;
        expect(input instanceof HTMLInputElement).toBe(true);
        expect(input.value).toBe('0');
        expect(input.parentElement?.className).toBe('');
    });
    it('renders with unusual props', () => {
        renderInTable(
            <InputH id="" value={0} hideZero={true} classes={['test']} />,
        );
        const input = screen.getByTestId('InputH') as HTMLInputElement;
        expect(input instanceof HTMLInputElement).toBe(true);
        expect(input.value).toBe('');
        expect(input.id).toBe('');
        expect(input.parentElement?.className).toBe('test');
    });
    it('renders with an empty string when value is null', () => {
        renderInTable(<InputH id="test" value={null as any} />);
        const input = screen.getByTestId('InputH') as HTMLInputElement;
        expect(input instanceof HTMLInputElement).toBe(true);
        expect(input.value).toBe('');
    });
});

describe('InputCell', () => {
    it('renders with basic props', () => {
        renderInTable(<InputCell id="test" value={0} />);
        const input = screen.getByTestId('InputCell') as HTMLInputElement;
        expect(input instanceof HTMLInputElement).toBe(true);
        expect(input.value).toBe('0');
        expect(input.parentElement?.className).toBe('');
    });
    it('renders with unusual props', () => {
        renderInTable(
            <InputCell id="" value={0} hideZero={true} classes={['test']} />,
        );
        const input = screen.getByTestId('InputCell') as HTMLInputElement;
        expect(input instanceof HTMLInputElement).toBe(true);
        expect(input.value).toBe('');
        expect(input.id).toBe('');
        expect(input.parentElement?.className).toBe('test');
    });
    it('renders with an empty string when value is null', () => {
        renderInTable(<InputCell id="test" value={null as any} />);
        const input = screen.getByTestId('InputCell') as HTMLInputElement;
        expect(input instanceof HTMLInputElement).toBe(true);
        expect(input.value).toBe('');
    });
});

describe('ModCell', () => {
    it('renders with basic props', () => {
        renderInTable(<ModCell id="test" value={0} hideZero={false} />);
        const input = screen.getByTestId('InputCell') as HTMLInputElement;
        expect(input instanceof HTMLInputElement).toBe(true);
        expect(input.value).toBe('+0');
        expect(input.parentElement?.className).toBe('');
    });
    it('renders with unusual props', () => {
        renderInTable(<ModCell id="" value={0} hideZero={true} />);
        const input = screen.getByTestId('InputCell') as HTMLInputElement;
        expect(input instanceof HTMLInputElement).toBe(true);
        expect(input.value).toBe('');
        expect(input.id).toBe('');
    });
});

describe('CheckCell', () => {
    it('renders with basic props', () => {
        renderInTable(<CheckCell id="test" value={true} />);
        const input = screen.getByTestId('CheckCell') as HTMLInputElement;
        expect(input instanceof HTMLInputElement).toBe(true);
        expect(input.checked).toBe(true);
        expect(input.parentElement?.className).toBe('check-box');
    });
    it('renders with unusual props', () => {
        renderInTable(<CheckCell id="" value={false} classes={['test']} />);
        const input = screen.getByTestId('CheckCell') as HTMLInputElement;
        expect(input instanceof HTMLInputElement).toBe(true);
        expect(input.checked).toBe(false);
        expect(input.id).toBe('');
        const classes = input.parentElement?.className.split(' ');
        expect(classes).toContain('check-box');
        expect(classes).toContain('test');
    });
});

describe('InputSuffixedCell', () => {
    it('renders with basic props', () => {
        renderInTable(<InputSuffixedCell id="test" value={0} suffix="%" />);
        const input = screen.getByTestId(
            'InputSuffixedCell',
        ) as HTMLInputElement;
        expect(input instanceof HTMLInputElement).toBe(true);
        expect(input.value).toBe('0');
        const span = screen.getByTestId('InputSuffixedCell-span');
        expect(span.textContent).toBe('%');
        expect(span.className).toBe('suffix');
    });
    it('renders with unusual props', () => {
        renderInTable(<InputSuffixedCell id="" value={0} suffix="%" />);
        const input = screen.getByTestId(
            'InputSuffixedCell',
        ) as HTMLInputElement;
        expect(input instanceof HTMLInputElement).toBe(true);
        expect(input.value).toBe('0');
        expect(input.id).toBe('');
        const span = screen.getByTestId('InputSuffixedCell-span');
        expect(span.textContent).toBe('%');
        expect(span.className).toBe('suffix');
    });
});

describe('EmptyTd', () => {
    it('renders an empty table cell', () => {
        const result = renderInTable(<EmptyTd />);
        const tds = result.container.querySelectorAll('td');
        expect(tds.length).toBe(1);
        expect(tds[0].textContent).toBe('');
    });
});
