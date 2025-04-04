import { mockDifferentResistances } from '@wowfinder/model';
import { InlineResistances } from '../../../Components/Creature/Resistances/InlineResistances';

export default {
    title: 'Creature/Resistances/InlineResistances',
    component: InlineResistances,
};

const Template = (): React.ReactNode => (
    <InlineResistances data={mockDifferentResistances} />
);

export const Default = Template.bind({});
