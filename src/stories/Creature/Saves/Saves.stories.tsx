import { Saves } from '../../../Components/Creature/Saves/Saves';
import { exampleSavesMock } from '@wowfinder/model';

export default {
    title: 'Creature/Saves/Saves',
    component: Saves,
};

const Template = (): React.ReactNode => <Saves saves={exampleSavesMock} />;

export const Default = Template.bind({});
