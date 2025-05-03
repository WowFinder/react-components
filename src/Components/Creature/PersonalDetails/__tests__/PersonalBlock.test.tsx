import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PersonalBlock, raceName } from '../PersonalBlock';
import { Race, CreatureBase, personalDefaults } from '@wowfinder/model';
import { expectInputValue } from '../../../../__tests__/helpers';

const mockTranslation: any = (key: string):string => key;

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: mockTranslation,
    }),
}));

const mockRace = {
    key: 'testRace.123',
} as Race;

const mockChar = {
    personal: personalDefaults,
    race: mockRace,
} as CreatureBase;

describe('raceName', () => {
    it('returns empty string for null', () => {
        expect(raceName(null, mockTranslation)).toBe('');
    });
    it('returns applies the correct translation key for an actual race object', () => {
        
        const result = raceName(mockRace, mockTranslation);
        expect(result).toBe('races.testRace');
    });
});

const expectedLabels = [
    'charName',
    'align',
    'tLevel',
    'xp',
    'nLevel',
    'faith',
    'origin',
    'race',
    'size',
    'gender',
    'age',
    'height',
    'weight',
    'hair',
    'eyes',
] as const;

function expectLabel(label: string): void {
    expect(screen.getByText(`charsheet.char.personal.${label}`)).toBeTruthy();
}

function expectLabels(): void {
    expectedLabels.forEach((label) => {
        expectLabel(label);
    });
}

describe('PersonalBlock', () => {
    it('renders with no args', () => {
        render(<PersonalBlock />);
        expectLabels();
    });
    it('renders with full args', () => {
        const result = render(<PersonalBlock char={mockChar} xp={7000} />);
        expectLabels();
        expectInputValue(result, 'txtExperience', '7k');
        expectInputValue(result, 'txtNextLevel', '12k');
        expectInputValue(result, 'txtTotalLevel', '3');
    });
});