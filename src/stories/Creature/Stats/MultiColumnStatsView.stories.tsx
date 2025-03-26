import type { MultiStats, ViewProps } from '../../..';
import { MultiColumnStatsView } from '../../..';

export default {
    title: 'Creature/Stats/MultiColumnStatsView',
    component: MultiColumnStatsView,
};

const Template = ({ data }: ViewProps<MultiStats>): React.ReactNode => (
    <MultiColumnStatsView data={data} />
);

export const Default = Template.bind(this, {
    data: [
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
    ],
});
