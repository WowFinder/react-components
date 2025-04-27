import { FC } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import { FullArmorValues, mixedStatsMock, statMod } from '@wowfinder/model';
import { type FullArmorValuesBuilder } from '@wowfinder/model/Creature/ArmorValues/builder';
import { DefenseScoresBlock } from '../../../Components/Creature/Defense';

type WrapperProps = FullArmorValuesBuilder;

const Wrapper: FC<WrapperProps> = props => (
    <DefenseScoresBlock values={new FullArmorValues(props)} />
);

type Story = StoryObj<WrapperProps>;

const numberControl = {
    control: {
        type: 'number',
        min: 0,
        max: 30,
        step: 1,
    },
} as const;

const meta: Meta<FC<WrapperProps>> = {
    title: 'Creature/Defense/DefenseScoresBlock',
    component: Wrapper,
    argTypes: {
        armor: {
            ...numberControl,
            description: 'Armor bonus',
        },
        natural: {
            ...numberControl,
            description: 'Natural armor bonus',
        },
        deflection: {
            ...numberControl,
            description: 'Deflection bonus',
        },
        misc: {
            ...numberControl,
            description: 'Miscellaneous bonus',
        },
        miscPhysical: {
            ...numberControl,
            description: 'Miscellaneous physical bonus',
        },
        miscEvasion: {
            ...numberControl,
            description: 'Miscellaneous evasion bonus',
        },
        temporary: {
            ...numberControl,
            description: 'Temporary bonus',
        },
        temporaryPhysical: {
            ...numberControl,
            description: 'Temporary physical bonus',
        },
        temporaryEvasion: {
            ...numberControl,
            description: 'Temporary evasion bonus',
        },
        strength: {
            ...numberControl,
            description: 'Strength modifier',
        },
        dexterity: {
            ...numberControl,
            description: 'Dexterity modifier',
        },
    },
    args: {
        armor: 1,
        natural: 2,
        deflection: 3,
        misc: 4,
        miscPhysical: 5,
        miscEvasion: 6,
        temporary: 7,
        temporaryPhysical: 8,
        temporaryEvasion: 9,
        strength: statMod(mixedStatsMock.strength),
        dexterity: statMod(mixedStatsMock.dexterity),
        baseAttack: -2,
        size: 0,
    },
};

export const Default: Story = {};
export default meta;
