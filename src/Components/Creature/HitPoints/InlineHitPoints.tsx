import { FC } from 'react';
import { styled } from 'styled-components';
import { useTranslation } from '@wowfinder/translations';

type InlineHitPointsProps = {
    readonly max: number;
    readonly current?: number;
};

const StyledSpan = styled.span`
    display: inline-block;
`;

const InlineHitPoints: FC<InlineHitPointsProps> = ({ max, current = max }) => {
    const { t } = useTranslation();
    const heading = t('class.ui.hp');
    const value = `${current}/${max}`;
    return (
        <StyledSpan>
            <strong>{heading}</strong>: <span>{value}</span>
        </StyledSpan>
    );
};

export { InlineHitPoints, type InlineHitPointsProps };
