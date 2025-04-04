import { FC } from 'react';
import type { MultiStats, ViewProps } from '../../..';
import { MultiColumnStatsView } from '../../..';
import { DeferredViewProps } from '../../../helpers/wrappers';
import { Deferred } from '../../../hocs/Deferred';
import { statMocks } from './helpers';

type DeferredStatsProps = Omit<DeferredViewProps<MultiStats>, 'Loaded'>;

const DeferredStats: FC<DeferredStatsProps> = ({ promise }) => (
    <Deferred promise={promise} Loaded={MultiColumnStatsView} />
);

export default {
    title: 'Creature/Stats/DeferredMultiColumnStatsView',
    component: DeferredStats,
};

const delay = 5000;

const dataPromise = new Promise<ViewProps<MultiStats>>(resolve => {
    setTimeout(() => {
        resolve({ data: statMocks.multiStats });
    }, delay);
});

const Template = ({ promise }: DeferredStatsProps): React.ReactNode => (
    <DeferredStats promise={promise} />
);

export const Default = Template.bind(this, {
    promise: dataPromise,
});
