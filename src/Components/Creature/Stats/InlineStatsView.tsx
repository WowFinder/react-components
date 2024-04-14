import { RawStats } from '@wowfinder/asset-schemas';
import { View } from '../../../helpers/wrappers';
import styled from 'styled-components';

const InlineP = styled.p`
    display: inline-block;
    margin: 0 1em;
    & > b {
        font-weight: bold;
        margin-left: 0.5em;
    }
    & > span::before {
        content: ': ';
    }
`;

const InlineStatsView: View<RawStats> = ({ data }) => {
    // TODO: i18n
    return (
        <InlineP>
            <b>STR</b>
            <span>{data.strength}</span>
            <b>DEX</b>
            <span>{data.dexterity}</span>
            <b>CON</b>
            <span>{data.constitution}</span>
            <b>INT</b>
            <span>{data.intelligence}</span>
            <b>WIS</b>
            <span>{data.wisdom}</span>
            <b>CHA</b>
            <span>{data.charisma}</span>
        </InlineP>
    );
};

export { InlineStatsView };
