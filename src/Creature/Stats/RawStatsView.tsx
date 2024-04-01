import { RawStats } from '@wowfinder/asset-schemas';
import { View } from 'helpers';

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
        max-width: 3.5em;
        width: 3.5em;
    }
    & > p > span {
        max-width: 2em;
        width: 2em;
    }
`;

const RawStatsView: View<RawStats> = ({ data }) => {
    // TODO: i18n
    return (
        <ColumnDiv>
            <p>
                <b>STR</b>
                <span>{data.strength}</span>
            </p>
            <p>
                <b>DEX</b>
                <span>{data.dexterity}</span>
            </p>
            <p>
                <b>CON</b>
                <span>{data.constitution}</span>
            </p>
            <p>
                <b>INT</b>
                <span>{data.intelligence}</span>
            </p>
            <p>
                <b>WIS</b>
                <span>{data.wisdom}</span>
            </p>
            <p>
                <b>CHA</b>
                <span>{data.charisma}</span>
            </p>
        </ColumnDiv>
    );
};

export { RawStatsView };
