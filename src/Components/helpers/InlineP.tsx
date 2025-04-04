import styled from 'styled-components';
import { FontFamily, font } from '../../styles';

const InlineP = styled.p`
    display: inline-block;
    margin: 0 1em;
    ${font({ family: FontFamily.priori, size: 11 })}
    & b {
        font-weight: bold;
        margin-left: 0.5em;
    }
    b ~ span::before {
        content: ': ';
    }
`;

export { InlineP };
