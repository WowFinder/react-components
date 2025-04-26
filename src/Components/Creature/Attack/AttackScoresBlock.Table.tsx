import styled from 'styled-components';
import {
    borderThick,
    borderThin,
    borderless,
    printableBottomBorder,
    reverseColors,
    smallText,
} from '../../../styles';

const AttackScoresBlockTable = styled.table`
    & th,
    & td,
    & input {
        box-sizing: border-box;
        width: 11mm;
        text-align: center;
        ${borderless}
    }
    & td {
        ${borderThin}
    }
    ${printableBottomBorder('& td')}
    & td.thick {
        ${borderThick}
    }
    & tbody th {
        ${reverseColors}
    }
    & th {
        ${smallText}
    }
`;

export { AttackScoresBlockTable };
