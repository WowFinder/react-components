import { RawStats } from '@wowfinder/asset-schemas';
import { useTranslation } from '@wowfinder/translations';
import { View } from '../../../helpers/wrappers';
import { ColumnDiv } from './ColumnDiv.helper';

const ColumnStatsView: View<RawStats> = ({ data }) => {
    const { t } = useTranslation();
    const abbr = (stat: string): string => t(`stats.abbr.${stat}`);
    return (
        <ColumnDiv>
            <p>
                <b>{abbr('STR')}</b>
                <span>{data.strength}</span>
            </p>
            <p>
                <b>{abbr('DEX')}</b>
                <span>{data.dexterity}</span>
            </p>
            <p>
                <b>{abbr('CON')}</b>
                <span>{data.constitution}</span>
            </p>
            <p>
                <b>{abbr('INT')}</b>
                <span>{data.intelligence}</span>
            </p>
            <p>
                <b>{abbr('WIS')}</b>
                <span>{data.wisdom}</span>
            </p>
            <p>
                <b>{abbr('CHA')}</b>
                <span>{data.charisma}</span>
            </p>
        </ColumnDiv>
    );
};

export { ColumnStatsView };
