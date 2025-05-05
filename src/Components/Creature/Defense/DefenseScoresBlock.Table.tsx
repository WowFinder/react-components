import styled from 'styled-components';
import {
    borderThin,
    borderless,
    colors,
    printableBottomBorder,
    reverseColors,
} from '../../../styles';

const DefenseScoresBlockTable = styled.table`
    border-spacing: 0;
    & th {
        overflow: hidden;
    }
    & th,
    & td {
        padding: 0;
        ${borderless}
        font-size: 8pt;
    }
    & th,
    & td,
    & input {
        box-sizing: border-box;
        width: 7.8mm;
        text-align: center;
    }
    & th input {
        width: 100%;
    }
    & input {
        font-size: 10pt;
    }
    & tbody th {
        ${reverseColors}
    }
    & tbody th input {
        background: ${colors.white};
    }
    & tbody input {
        ${borderThin}
    }
    ${printableBottomBorder('& tbody input')}
`;

export { DefenseScoresBlockTable };
