import styled from 'styled-components';

const ColumnDiv = styled.div`
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
