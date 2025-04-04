import { ColumnStatsView, ViewProps } from '../../..';
import { statMocks } from './helpers';
import { RawStats } from '@wowfinder/asset-schemas';

export default {
    title: 'Creature/Stats/ColumnStatsView',
    component: ColumnStatsView,
};

const Template = ({ data }: ViewProps<RawStats>): React.ReactNode => (
    <ColumnStatsView data={data} />
);

export const Default = Template.bind(this, {
    data: statMocks.defaults,
});

export const Baddass = Template.bind(this, {
    data: statMocks.twenty,
});
