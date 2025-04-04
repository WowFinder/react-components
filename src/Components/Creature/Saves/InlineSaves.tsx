import { RawSaves } from '@wowfinder/asset-schemas';
import { useTranslation } from '@wowfinder/translations';
import { type View, plusPrefixed } from '../../../helpers';
import { InlineP } from '../../helpers/InlineP';

const InlineSaves: View<RawSaves> = ({ data }) => {
    const { t } = useTranslation();
    const abbr = (save: 'fort' | 'refl' | 'will'): string => t(`charsheet.saves.abbr.${save}`);
    return (
        <InlineP>
            <b>{abbr('fort')}</b>
            <span>{plusPrefixed(data.fortitude)}</span>
            <b>{abbr('refl')}</b>
            <span>{plusPrefixed(data.reflexes)}</span>
            <b>{abbr('will')}</b>
            <span>{plusPrefixed(data.will)}</span>
        </InlineP>
    );
};

export { InlineSaves };
