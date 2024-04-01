import { ReactNode } from 'react';

interface ViewProps<T> {
    data: T;
}

type View<T> = ({ data }: ViewProps<T>) => ReactNode;

interface EditorProps<T> extends ViewProps<T> {
    onChange: (data: T) => void;
}

type Editor<T> = ({ data, onChange }: EditorProps<T>) => ReactNode;

export type { View, ViewProps, Editor, EditorProps };
