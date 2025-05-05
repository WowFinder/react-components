import { mockBasicCreatureProfile } from '@wowfinder/model';
import { MainPage, type PageArgs } from '../../../Components/CharacterSheet';

export default {
    title: 'CharacterSheet/Pages/Main',
    component: MainPage,
};

const Template = (args: PageArgs): React.ReactNode => <MainPage {...args} />;

export const Default = Template.bind(this, {
    visible: true,
    xp: 0,
    char: {
        intrinsicProfile: mockBasicCreatureProfile,
        fullProfile: mockBasicCreatureProfile,
    },
});

export const Blank = Template.bind(this, {
    visible: true,
});
