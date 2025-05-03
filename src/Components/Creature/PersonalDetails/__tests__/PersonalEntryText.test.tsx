import React from 'react';
import { render, screen } from '@testing-library/react';
import { PersonalEntryText, PersonalEntryTextCentered } from '../PersonalEntryText';

describe('PersonalEntryText', () => {
    it('renders with full args', () => {
        render(
            <PersonalEntryText
                id="test"
                label="Test Label"
                value="Test Value"
                width={100}
            />,
        );
        expect(screen.getByText('Test Label')).toBeTruthy();
        expect(screen.getByDisplayValue('Test Value')).toBeTruthy();
    });
    it('renders with empty value', () => {
        render(
            <PersonalEntryText
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
            <PersonalEntryText
                id="test"
                label="Test Label"
                width={100}
            />,
        );
        expect(screen.getByText('Test Label')).toBeTruthy();
        expect(screen.getByDisplayValue('')).toBeTruthy();
    });
});

describe('PersonalEntryTextCentered', () => {
    it('renders with full args', () => {
        render(
            <PersonalEntryTextCentered
                id="test"
                label="Test Label"
                value="Test Value"
                width={100}
            />,
        );
        expect(screen.getByText('Test Label')).toBeTruthy();
        expect(screen.getByDisplayValue('Test Value')).toBeTruthy();
    });
    it('renders with empty value', () => {
        render(
            <PersonalEntryTextCentered
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
            <PersonalEntryTextCentered
                id="test"
                label="Test Label"
                width={100}
            />,
        );
        expect(screen.getByText('Test Label')).toBeTruthy();
        expect(screen.getByDisplayValue('')).toBeTruthy();
    });
});
