import type { MultiStats, ViewProps } from '../../..';
import { MultiColumnStatsView } from '../../..';
import { statMocks } from './helpers';

export default {
    title: 'Creature/Stats/MultiColumnStatsView',
    component: MultiColumnStatsView,
};

const Template = ({ data }: ViewProps<MultiStats>): React.ReactNode => (
    <MultiColumnStatsView data={data} />
);

export const Default = Template.bind(this, {
    data: statMocks.multiStats,
});
