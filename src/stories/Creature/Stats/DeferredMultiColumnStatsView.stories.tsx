import { FC } from 'react';
import type { MultiStats, ViewProps } from '../../..';
import { MultiColumnStatsView } from '../../..';
import { Deferred } from '../../../hocs/Deferred';
import { DeferredViewProps } from '../../../helpers/wrappers';

type DeferredStatsProps = Omit<DeferredViewProps<MultiStats>, 'Loaded'>;

const DeferredStats: FC<DeferredStatsProps> = ({ promise }) => (
    <Deferred promise={promise} Loaded={MultiColumnStatsView} />
);

export default {
    title: 'Creature/Stats/DeferredMultiColumnStatsView',
    component: DeferredStats,
};

const rawData: MultiStats = [
    {
        key: 'charsheet.common.base',
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
    },
    {
        key: 'charsheet.common.gear',
        isMod: true,
        strength: 2,
        dexterity: 3,
        constitution: 4,
        intelligence: 1,
        wisdom: 6,
        charisma: 5,
    },
    {
        key: 'charsheet.common.total',
        strength: 12,
        dexterity: 13,
        constitution: 14,
        intelligence: 11,
        wisdom: 16,
        charisma: 15,
    },
    {
        key: 'charsheet.common.mod',
        isMod: true,
        strength: 1,
        dexterity: 1,
        constitution: 2,
        intelligence: 0,
        wisdom: 3,
        charisma: 2,
    },
];

const delay = 5000;

const dataPromise = new Promise<ViewProps<MultiStats>>(resolve => {
    setTimeout(() => {
        resolve({ data: rawData });
    }, delay);
});

const Template = ({ promise }: DeferredStatsProps): React.ReactNode => (
    <DeferredStats promise={promise} />
);

export const Default = Template.bind(this, {
    promise: dataPromise,
});
