import { FC } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import {
    Initiative,
    type InitiativeProps,
} from '../../../Components/Creature/Initiative';

type Story = StoryObj<InitiativeProps>;

const numberControl = {
    control: {
        type: 'number',
        min: 0,
        max: 30,
        step: 1,
    },
} as const;

const meta: Meta<FC<InitiativeProps>> = {
    title: 'Creature/Initiative/Initiative',
    component: Initiative,
    argTypes: {
        dexterity: {
            ...numberControl,
            description: 'Dexterity score (modifier will be computed)',
        },
        misc: {
            ...numberControl,
            description: 'Misc bonuses (e.g. from items, feats, etc)',
        },
        temporary: {
            ...numberControl,
            description: 'Temporary bonuses (e.g. from spells)',
        },
    },
    args: {
        dexterity: 10,
        misc: 0,
        temporary: 0,
    },
};

export const Default: Story = {};

export const AllArgs: Story = {
    args: {
        dexterity: 14,
        misc: 2,
        temporary: 5,
    },
};

export default meta;
