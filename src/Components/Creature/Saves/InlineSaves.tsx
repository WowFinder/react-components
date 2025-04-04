import { type View, plusPrefixed } from '../../../helpers';
import { InlineP } from '../../helpers/InlineP';
import { RawSaves } from '@wowfinder/asset-schemas';
import { useTranslation } from '@wowfinder/translations';
import { Save } from '@wowfinder/ts-enums';

const InlineSaves: View<RawSaves> = ({ data }) => {
    const { t } = useTranslation();
    const abbr = (save: Save): string => t(`saves.abbr.${save}`);
    return (
        <InlineP>
            <b>{abbr(Save.fortitude)}</b>
            <span>{plusPrefixed(data.fortitude)}</span>
            <b>{abbr(Save.reflexes)}</b>
            <span>{plusPrefixed(data.reflexes)}</span>
            <b>{abbr(Save.will)}</b>
            <span>{plusPrefixed(data.will)}</span>
        </InlineP>
    );
};

export { InlineSaves };
