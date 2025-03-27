import {
    Spinner,
    type SpinnerProps,
} from '../Components/Spinner';

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
