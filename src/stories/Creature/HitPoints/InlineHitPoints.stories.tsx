import { FC } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import {
    InlineHitPoints,
    type InlineHitPointsProps,
} from '../../../Components/Creature/HitPoints';

type Story = StoryObj<InlineHitPointsProps>;

const numberControl = {
    control: {
        type: 'number',
        min: 0,
        max: 300,
        step: 1,
    },
} as const;

const meta: Meta<FC<InlineHitPointsProps>> = {
    title: 'Creature/HitPoints/InlineHitPoints',
    component: InlineHitPoints,
    argTypes: {
        max: {
            ...numberControl,
            description: 'Maximum Hit Points',
        },
        current: {
            ...numberControl,
            description: 'Current Hit Points',
        },
    },
    args: {
        max: 10,
    },
};

export const Default: Story = {};

export const AllArgs: Story = {
    args: {
        current: 8,
    },
};

export default meta;
