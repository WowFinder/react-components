import type { FC, ReactNode } from 'react';
import type { DeferredProps } from '../hocs/Deferred';

interface ViewProps<T> {
    data: T;
}

type View<T> = FC<ViewProps<T>>;

type DeferredViewProps<T> = DeferredProps<ViewProps<T>>;

type DeferredView<T> = FC<DeferredViewProps<T>>;

interface EditorProps<T> extends ViewProps<T> {
    onChange: (data: T) => void;
}

type Editor<T> = ({ data, onChange }: EditorProps<T>) => ReactNode;

export type {
    View,
    ViewProps,
    DeferredView,
    DeferredViewProps,
    Editor,
    EditorProps,
};
