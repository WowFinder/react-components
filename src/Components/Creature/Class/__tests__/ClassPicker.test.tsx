import React, { act } from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { mockedClasses } from '@wowfinder/model';
import { ClassPicker } from '../ClassPicker';

vi.mock('@wowfinder/translations', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

const initialSelection = 'mocked-melee-class';

const getSelectedOption = (): HTMLOptionElement => {
    const selectedOption = screen.getByRole('option', {
        selected: true,
    }) as HTMLOptionElement;
    expect(selectedOption).toBeInstanceOf(HTMLOptionElement);
    return selectedOption;
};

const getOptionByValue = (rendered: ReturnType<typeof render>, value: string): HTMLOptionElement => {
    const option = rendered.container.querySelector(`option[value="${value}"]`) as HTMLOptionElement;
    expect(option).toBeInstanceOf(HTMLOptionElement);
    return option;
};

describe('ClassPicker', () => {
    it('should render the correct number of options', () => {
        render(
            <ClassPicker
                classes={[...mockedClasses]}
                allowEmpty={true}
            />
        );

        const options = screen.getAllByRole('option');
        expect(options.length).toBe(mockedClasses.length + 1); // +1 for the default empty option
        expect(getSelectedOption().value).toBe('');
    });

    it('should select the correct option', () => {
        render(
            <ClassPicker
                classes={[...mockedClasses]}
                initialSelection={initialSelection}
            />
        );

        const options = screen.getAllByRole('option');
        expect(options.length).toBe(mockedClasses.length); // no default empty option
        expect(getSelectedOption().value).toBe(initialSelection);
    });
    it('should update the selection when the user picks another entry', async () => {
        const rendered = render(<ClassPicker
            classes={[...mockedClasses]}
            initialSelection={initialSelection}
            allowEmpty={true}
        />);
        const parentSelect = rendered.container.querySelector('select') as HTMLSelectElement;
        expect(getSelectedOption().value).toBe(initialSelection);
        const manualSelection = 'mocked-arcane-class';
        const emptyOption = getOptionByValue(rendered, '');
        const manualSelectionOption = getOptionByValue(rendered, manualSelection);
        await act(async () => {
            emptyOption.selected = true;
            emptyOption.dispatchEvent(new Event('change', { bubbles: true }));
            parentSelect.dispatchEvent(new Event('change', { bubbles: true }));
        });
        expect(getSelectedOption().value).toBe('');
        await act(async () => {
            manualSelectionOption.selected = true;
            manualSelectionOption.dispatchEvent(new Event('change', { bubbles: true }));
            parentSelect.dispatchEvent(new Event('change', { bubbles: true }));
        });
        expect(getSelectedOption().value).toBe(manualSelection);
    });
});
