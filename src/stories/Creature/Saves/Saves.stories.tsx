import { SavesBlock } from '../../../Components/Creature/Saves/SavesBlock';
import { exampleSavesMock } from '@wowfinder/model';

export default {
    title: 'Creature/Saves/Saves',
    component: SavesBlock,
};

const Template = (): React.ReactNode => <SavesBlock saves={exampleSavesMock} />;

export const Default = Template.bind({});
