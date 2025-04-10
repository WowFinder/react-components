import { FC } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import {
    InlineInitiative,
    type InlineInitiativeProps,
} from '../../../Components/Creature/Initiative';

type Story = StoryObj<InlineInitiativeProps>;

const numberControl = {
    control: {
        type: 'number',
        min: -20,
        max: 20,
        step: 1,
    },
} as const;

const meta: Meta<FC<InlineInitiativeProps>> = {
    title: 'Creature/Initiative/InlineInitiative',
    component: InlineInitiative,
    argTypes: {
        value: {
            ...numberControl,
            description: 'Initiative value',
        },
    },
    args: {
        value: 2,
    },
};

export const Default: Story = {
    args: {
        value: 2,
    },
};

export default meta;
