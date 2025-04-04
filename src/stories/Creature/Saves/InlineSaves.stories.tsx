import { exampleRawSavesMock } from '@wowfinder/model';
import { InlineSaves } from '../../../Components/Creature';

export default {
    title: 'Creature/Saves/InlineSaves',
    component: InlineSaves,
};
const Template = (): React.ReactNode => (
    <InlineSaves data={exampleRawSavesMock} />
);
export const Default = Template.bind({});
