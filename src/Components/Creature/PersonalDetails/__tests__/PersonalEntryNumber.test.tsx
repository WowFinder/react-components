import React from 'react';
import { render, screen } from '@testing-library/react';
import {
    PersonalEntryBigNumber,
    PersonalEntryNumber,
} from '../PersonalEntryNumber';

describe('PersonalEntryNumber', () => {
    it('renders with full args', () => {
        render(
            <PersonalEntryNumber
                id="test"
                label="Test Label"
                value={1234}
                width={100}
            />,
        );
        expect(screen.getByText('Test Label')).toBeTruthy();
        expect(screen.getByDisplayValue('1234')).toBeTruthy();
    });
    it('renders with empty value', () => {
        render(
            <PersonalEntryNumber
                id="test"
                label="Test Label"
                value={null}
                width={100}
            />,
        );
        expect(screen.getByText('Test Label')).toBeTruthy();
        expect(screen.getByDisplayValue('')).toBeTruthy();
    });
    it('renders with no value', () => {
        render(
            <PersonalEntryNumber id="test" label="Test Label" width={100} />,
        );
        expect(screen.getByText('Test Label')).toBeTruthy();
        expect(screen.getByDisplayValue('')).toBeTruthy();
    });
});

describe('PersonalEntryBigNumber', () => {
    it('renders with full args', () => {
        render(
            <PersonalEntryBigNumber
                id="test"
                label="Test Label"
                value={1234567}
                width={100}
            />,
        );
        expect(screen.getByText('Test Label')).toBeTruthy();
        expect(screen.getByDisplayValue('1.234567M')).toBeTruthy();
    });
    it('renders with empty value', () => {
        render(
            <PersonalEntryBigNumber
                id="test"
                label="Test Label"
                value={null}
                width={100}
            />,
        );
        expect(screen.getByText('Test Label')).toBeTruthy();
        expect(screen.getByDisplayValue('')).toBeTruthy();
    });
    it('renders with no value', () => {
        render(
            <PersonalEntryBigNumber id="test" label="Test Label" width={100} />,
        );
        expect(screen.getByText('Test Label')).toBeTruthy();
        expect(screen.getByDisplayValue('')).toBeTruthy();
    });
    it('renders without suffix for small enough numbers', () => {
        render(
            <PersonalEntryBigNumber
                id="test"
                label="Test Label"
                value={999}
                width={100}
            />,
        );
        expect(screen.getByText('Test Label')).toBeTruthy();
        expect(screen.getByDisplayValue('999')).toBeTruthy();
    });
    it('renders with thousands separator and suffix for large enough numbers', () => {
        const veryLargeNumber = Math.pow(1000, 10);
        const result = render(
            <PersonalEntryBigNumber
                id="test"
                label="Test Label"
                value={veryLargeNumber}
                width={100}
            />,
        );
        expect(screen.getByText('Test Label')).toBeTruthy();
        const input = result.container.querySelector(
            '#txttest',
        ) as HTMLInputElement;
        expect(input).toBeDefined();
        expect(input).toBeInstanceOf(HTMLInputElement);
        expect(input.value).toBe('1 000 000Y');
    });
});
