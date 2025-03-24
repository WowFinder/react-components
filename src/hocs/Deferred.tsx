import React, { FC, useEffect, useState } from 'react';
import { Spinner, type SpinnerProps } from '../Components/Spinner';

type LoadingProps = {
    size?: SpinnerProps['size'];
};

const DefaultLoading: FC<LoadingProps> = ({ size }: any) => (
    <Spinner size={size} />
);

type DeferredProps<T> = LoadingProps & {
    promise: Promise<T>;
    Loading?: FC<LoadingProps>;
    Loaded: FC<T>;
};

const Deferred = <T,>({
    promise,
    size,
    Loading = DefaultLoading,
    Loaded,
}: DeferredProps<T>): React.JSX.Element => {
    const [state, setState] = useState<{
        status: 'loading' | 'loaded';
        data?: T;
    }>({ status: 'loading' });

    useEffect(() => {
        promise.then(data => setState({ status: 'loaded', data }));
    }, [promise]);

    return state.status === 'loading' ? (
        <Loading {...{ size }} />
    ) : (
        <Loaded {...(state.data as any)} />
    );
};

export { Deferred };
export type { DeferredProps };
