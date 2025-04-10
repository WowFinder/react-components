import { FC } from 'react';
import { styled } from 'styled-components';
import { useTranslation } from '@wowfinder/translations';

type InlineInitiativeProps = {
    readonly value: number;
};

const StyledSpan = styled.span`
    display: inline-block;
`;

const InlineInitiative: FC<InlineInitiativeProps> = ({ value }) => {
    const { t } = useTranslation();
    const heading = t('abbr.initiative');
    return (
        <StyledSpan>
            <strong>{heading}</strong>: <span>{value}</span>
        </StyledSpan>
    );
};

export { InlineInitiative, type InlineInitiativeProps };
