import type { ReactNode } from 'react';
import type { DeferredProps } from '../hocs/Deferred';

interface ViewProps<T> {
    data: T;
}

type View<T> = ({ data }: ViewProps<T>) => ReactNode;

type DeferredViewProps<T> = DeferredProps<ViewProps<T>>;

type DeferredView<T> = (props: DeferredViewProps<T>) => ReactNode;

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
