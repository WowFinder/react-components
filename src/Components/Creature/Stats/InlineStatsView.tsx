import { RawStats } from '@wowfinder/asset-schemas';
import { useTranslation } from '@wowfinder/translations';
import styled from 'styled-components';
import { View } from '../../../helpers/wrappers';
import { font, FontFamily } from '../../../styles/font';

const InlineP = styled.p`
    display: inline-block;
    margin: 0 1em;
    & > b {
        ${font({ family: FontFamily.priori, size: 11 })}
        font-weight: bold;
        margin-left: 0.5em;
    }
    & > span::before {
        content: ': ';
    }
`;

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
