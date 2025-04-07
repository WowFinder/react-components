import { styled } from 'styled-components';
import { useTranslation } from '@wowfinder/translations';
import { ChildlessFC } from '../../../helpers';

type InlineHitPointsProps = {
    readonly max: number;
    readonly current?: number;
};

const StyledSpan = styled.span`
    display: inline-block;
`;

const InlineHitPoints: ChildlessFC<InlineHitPointsProps> = ({
    max,
    current = max,
}) => {
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
