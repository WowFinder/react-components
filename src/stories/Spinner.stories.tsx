import type { Meta, StoryObj } from '@storybook/react';
import { Spinner, type SpinnerProps } from '../Components/helpers/Spinner';
import { type ChildlessFC } from '../helpers';

type WrapperProps = Pick<SpinnerProps, 'color' | 'strokeStyle' | 'opacity'> & {
    size: number;
    thickness: number;
    rotationPeriod: number;
};

const Wrapper: ChildlessFC<WrapperProps> = ({
    size,
    thickness,
    color,
    strokeStyle,
    rotationPeriod,
    opacity,
}) => (
    <Spinner
        size={`${size}em`}
        thickness={`${thickness}em`}
        color={color}
        strokeStyle={strokeStyle}
        rotationPeriod={`${rotationPeriod}s`}
        opacity={opacity}
    />
);

type Story = StoryObj<WrapperProps>;

const meta: Meta<ChildlessFC<WrapperProps>> = {
    title: 'Spinner',
    component: Wrapper,
    argTypes: {
        size: {
            control: {
                type: 'number',
                min: 0.5,
                max: 10,
                step: 0.5,
            },
            description: 'Size of the spinner (in em units)',
        },
        thickness: {
            control: {
                type: 'number',
                min: 0.1,
                max: 2,
                step: 0.1,
            },
            description: 'Thickness of the spinning arc (in em units)',
        },
        color: {
            control: 'color',
            description: 'Color of the spinner',
        },
        strokeStyle: {
            control: 'select',
            options: ['solid', 'dashed', 'dotted'],
            description: 'Stroke style of the spinner',
        },
        rotationPeriod: {
            control: {
                type: 'number',
                min: 0.1,
                max: 5,
                step: 0.1,
            },
            description: 'Rotation period of the spinner (in seconds)',
        },
        opacity: {
            control: {
                type: 'number',
                min: 0,
                max: 1,
                step: 0.1,
            },
            description: 'Opacity of the spinner',
        },
    },
    args: {
        size: 2,
        thickness: 0.2,
        color: 'black',
        strokeStyle: 'solid',
        rotationPeriod: 0.6,
        opacity: 0.5,
    },
};

export const Default: Story = {};

export const Custom: Story = {
    args: {
        size: 10,
        color: '#ff99cc',
        opacity: 1,
        strokeStyle: 'dotted',
        rotationPeriod: 0.2,
        thickness: 0.8,
    },
};

export default meta;
