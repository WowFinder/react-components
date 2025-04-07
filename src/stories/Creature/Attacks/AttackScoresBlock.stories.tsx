import { type Meta, type StoryObj } from '@storybook/react';
import { mixedStatsMock } from '@wowfinder/model';
import {
    AttackScoresBlock,
    type AttackScoresBlockProps,
} from '../../../Components/Creature/Attacks';
import { type ChildlessFC } from '../../../helpers';

type WrapperProps = Pick<
    AttackScoresBlockProps,
    'baseAttackBonus' | 'sizeModifier'
> & {
    str: number;
    dex: number;
};

const Wrapper: ChildlessFC<WrapperProps> = ({
    baseAttackBonus,
    sizeModifier,
    str,
    dex,
}) => (
    <AttackScoresBlock
        baseAttackBonus={baseAttackBonus}
        stats={{
            strength: str,
            dexterity: dex,
        }}
        sizeModifier={sizeModifier}
    />
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

const meta: Meta<ChildlessFC<WrapperProps>> = {
    title: 'Creature/Attacks/AttackScoresBlock',
    component: Wrapper,
    argTypes: {
        baseAttackBonus: {
            ...numberControl,
            description: 'Base Attack Bonus',
        },
        sizeModifier: {
            control: {
                type: 'number',
                min: -4,
                max: 4,
                step: 1,
            },
            description: 'Size modifier (e.g. for Large or Small creatures)',
        },
        str: {
            ...numberControl,
            description: 'Strength score (modifier will be calculated)',
        },
        dex: {
            ...numberControl,
            description: 'Dexterity score (modifier will be calculated)',
        },
    },
    args: {
        baseAttackBonus: 3,
        sizeModifier: 1,
        str: mixedStatsMock.strength,
        dex: mixedStatsMock.dexterity,
    },
};

export const Default: Story = {};

export default meta;
