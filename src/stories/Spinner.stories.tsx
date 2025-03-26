import {
    Spinner,
    // spinnerDefaultProps,
    type SpinnerProps,
} from '../Components/Spinner';

/*const mkControl = (type: 'text' | 'color' | 'number' = 'text') => {
    return {
        control: {
            type,
        },
    };
};*/

export default {
    title: 'Spinner',
    component: Spinner,
};

const Template = (args: SpinnerProps): React.ReactNode => <Spinner {...args} />;

export const Default = Template.bind(this, {});

export const Custom = Template.bind(this, {
    size: '10em',
    color: '#ff99cc',
    opacity: 1,
    rotationPeriod: '0.2s',
});
