import React, { FC } from 'react';
import { Deferred } from '../Deferred';
import { act, render, screen } from '@testing-library/react';

type SimpleTextProps = {
    text: string;
};
const SimpleText: FC<SimpleTextProps> = ({ text }) => (
    <p data-testid="simpleText">{text}</p>
);

const unendingPromise: Promise<string> = new Promise(() => {});

const instantTextPromise: (text: string) => Promise<string> = text =>
    new Promise(resolve => resolve(text));

const wrapPromise = (
    basePromise: Promise<string>,
): Promise<SimpleTextProps> => {
    return basePromise.then(text => ({ text }));
};

const SAMPLE_TEXT = 'SAMPLE TEXT';

const renderDeferredSimpleText = (promise: Promise<string>): void => {
    render(<Deferred promise={wrapPromise(promise)} Loaded={SimpleText} />);
};

describe('Deferred HOC', () => {
    it('should render a generic spinner while waiting for the promise to resolve', () => {
        renderDeferredSimpleText(unendingPromise);

        expect(screen.getByTestId('spinner')).toBeTruthy();
    });
    it('should render the loaded component with the resolved value', async () => {
        const promise = instantTextPromise(SAMPLE_TEXT);
        renderDeferredSimpleText(promise);
        await act(async () => {
            await promise;
        });
        expect(screen.getByTestId('simpleText')).toBeTruthy();
        expect(screen.getByTestId('simpleText').textContent).toBe(SAMPLE_TEXT);
        expect(screen.queryByTestId('spinner')).toBeFalsy();
    });
});
