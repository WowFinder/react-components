import styled from 'styled-components';
import { FontFamily, autoReverseColors, font } from '../../../styles';

const ColumnDiv = styled.div`
    ${font({ family: FontFamily.priori, size: 11 })}
    display: flex;
    flex-direction: column;
    & > p {
        display: inline-block;
        flex: 1;
        justify-content: space-between;
        margin: 0;
    }
    & > p > b,
    & > p > span {
        display: inline-block;
    }
    & > p > b {
        font-weight: bold;
        ${autoReverseColors}
        max-width: 3em;
        width: 3em;
    }
    & > p > span {
        min-width: 2em;
        padding: 0 0.15em;
        text-align: center;
        &.heading {
            text-align: left;
        }
        &.mod {
            text-align: right;
        }
    }
`;

export { ColumnDiv };
