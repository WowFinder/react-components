import { RawStats } from '@wowfinder/asset-schemas';
import { View } from '../../../helpers/wrappers';
import { ColumnDiv } from './ColumnDiv.helper';

const ColumnStatsView: View<RawStats> = ({ data }) => {
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

export { ColumnStatsView };
