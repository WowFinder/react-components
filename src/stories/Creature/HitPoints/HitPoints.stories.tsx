import { type Meta, type StoryObj } from '@storybook/react';
import {
    type HitPointProps,
    HitPoints,
} from '../../../Components/Creature/HitPoints';
import { type ChildlessFC } from '../../../helpers';

type Story = StoryObj<HitPointProps>;

const numberControl = {
    control: {
        type: 'number',
        min: 0,
        max: 300,
        step: 1,
    },
} as const;

const meta: Meta<ChildlessFC<HitPointProps>> = {
    title: 'Creature/HitPoints/HitPoints',
    component: HitPoints,
    argTypes: {
        base: {
            ...numberControl,
            description: 'Base Hit Points',
        },
        current: {
            ...numberControl,
            description: 'Current Hit Points',
        },
        misc: {
            ...numberControl,
            description: 'Miscellaneous Hit Points (e.g. from items)',
        },
        temporary: {
            ...numberControl,
            description: 'Temporary Hit Points (e.g. from spells)',
        },
    },
    args: {
        base: 10,
    },
};

export const Default: Story = {};

export const AllArgs: Story = {
    args: {
        current: 8,
        misc: 2,
        temporary: 5,
    },
};

export const NoCurrent: Story = {
    args: {
        misc: 2,
        temporary: 5,
    },
};

export default meta;
