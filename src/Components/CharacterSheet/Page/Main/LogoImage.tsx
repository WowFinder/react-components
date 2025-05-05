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
};

const LogoImage: FC<LogoImageProps> = ({ src }) => {
    return <LogoImg src={src} />;
};

export { LogoImage, type LogoImageProps };
