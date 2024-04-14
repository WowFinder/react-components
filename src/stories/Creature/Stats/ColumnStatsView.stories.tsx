import { RawStats } from '@wowfinder/asset-schemas';
import { ViewProps, ColumnStatsView } from '../../..';

export default {
    title: 'Creature/Stats/ColumnStatsView',
    component: ColumnStatsView,
};

const Template = ({ data }: ViewProps<RawStats>): React.ReactNode => (
    <ColumnStatsView data={data} />
);

export const Default = Template.bind(this, {
    data: {
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
    },
});

export const Baddass = Template.bind(this, {
    data: {
        strength: 20,
        dexterity: 20,
        constitution: 20,
        intelligence: 20,
        wisdom: 20,
        charisma: 20,
    },
});
