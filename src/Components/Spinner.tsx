import styled from 'styled-components';

type LengthUnit = 'em' | 'px' | '%';
type Length = `${number}${LengthUnit}`;

type TimeUnit = 's' | 'ms';
type Time = `${number}${TimeUnit}`;

type SpinnerProps = {
    size?: Length;
    thickness?: Length;
    color?: string;
    strokeStyle?: 'solid' | 'dashed' | 'dotted';
    rotationPeriod?: Time;
    opacity?: number;
};

const defaults: Required<SpinnerProps> = {
    size: '2em',
    thickness: '0.2em',
    color: 'black',
    strokeStyle: 'solid',
    rotationPeriod: '0.6s',
    opacity: 0.5,
};

const Spinner = styled.div.attrs<SpinnerProps>(
    () =>
        ({
            'data-testid': 'spinner',
        }) as any,
)`
    width: ${props => props.size ?? defaults.size};
    height: ${props => props.size ?? defaults.size};
    border-radius: 50%;
    border: ${props => props.thickness ?? defaults.thickness}
        ${props => props.strokeStyle ?? defaults.strokeStyle} transparent;
    border-top-color: ${props => props.color ?? defaults.color};
    animation: spin ${props => props.rotationPeriod ?? defaults.rotationPeriod}
        linear infinite;
    opacity: ${props => props.opacity ?? defaults.opacity};
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;

export { Spinner, defaults as spinnerDefaultProps };
export type { SpinnerProps };
