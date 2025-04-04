import { mockDifferentFullResistances } from '@wowfinder/model';
import { ResistancesBlock } from '../../../Components/Creature/Resistances/ResistancesBlock';

export default {
    title: 'Creature/Resistances/ResistancesBlock',
    component: ResistancesBlock,
};

const Template = (): React.ReactNode => (
    <ResistancesBlock resistances={mockDifferentFullResistances} />
);

export const Default = Template.bind({});
