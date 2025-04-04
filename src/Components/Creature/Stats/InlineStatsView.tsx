import { RawStats } from '@wowfinder/asset-schemas';
import { useTranslation } from '@wowfinder/translations';
import { View } from '../../../helpers/wrappers';
import { InlineP } from '../../helpers/InlineP';

const InlineStatsView: View<RawStats> = ({ data }) => {
    const { t } = useTranslation();
    const abbr = (stat: string): string => t(`stats.abbr.${stat}`);
    return (
        <InlineP>
            <b>{abbr('STR')}</b>
            <span>{data.strength}</span>
            <b>{abbr('DEX')}</b>
            <span>{data.dexterity}</span>
            <b>{abbr('CON')}</b>
            <span>{data.constitution}</span>
            <b>{abbr('INT')}</b>
            <span>{data.intelligence}</span>
            <b>{abbr('WIS')}</b>
            <span>{data.wisdom}</span>
            <b>{abbr('CHA')}</b>
            <span>{data.charisma}</span>
        </InlineP>
    );
};

export { InlineStatsView };
