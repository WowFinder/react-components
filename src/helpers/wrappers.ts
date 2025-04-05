import type { ReactNode } from 'react';
import type { DeferredProps } from '../hocs/Deferred';

type ChildlessFC<T> = (props: T) => ReactNode;

interface ViewProps<T> {
    data: T;
}

type View<T> = ChildlessFC<ViewProps<T>>;

type DeferredViewProps<T> = DeferredProps<ViewProps<T>>;

type DeferredView<T> = ChildlessFC<DeferredViewProps<T>>;

interface EditorProps<T> extends ViewProps<T> {
    onChange: (data: T) => void;
}

type Editor<T> = ({ data, onChange }: EditorProps<T>) => ReactNode;

export type {
    ChildlessFC,
    View,
    ViewProps,
    DeferredView,
    DeferredViewProps,
    Editor,
    EditorProps,
};
