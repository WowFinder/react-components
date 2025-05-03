import { FC } from 'react';
import { styled } from 'styled-components';

const LogoImg = styled.img`
    display: inline-block;
    flex: auto;
    height: auto;
    width: 65mm;
    aspect-ratio: auto 481 / 178;
`;

type LogoImageProps = {
    readonly src: string;
    readonly alt?: string;
    readonly width?: number;
    readonly height?: number;
};

const logoImageDefaultProps = {
    alt: 'Logo',
    width: 481,
    height: 178,
} as const;

const LogoImage: FC<LogoImageProps> = props => {
    return <LogoImg {...{ logoImageDefaultProps, ...props }} />;
};

export { LogoImage, type LogoImageProps };
