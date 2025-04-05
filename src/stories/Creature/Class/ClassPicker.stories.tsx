import { mockedClasses } from '@wowfinder/model';
import { ClassPicker } from '../../../Components/Creature/Class/ClassPicker';

export default {
    title: 'Creature/Class/ClassPicker',
    component: ClassPicker,
};
const Template = (): React.ReactNode => (
    <ClassPicker
        classes={[...mockedClasses]}
        initialSelection="mocked-melee-class"
        allowEmpty={true}
    />
);
export const Default = Template.bind({});
