import { useTranslation } from '@wowfinder/translations';
import { InlineP } from '../../helpers/InlineP';
import { Save } from '@wowfinder/ts-enums';
import { plusPrefixed, View } from '../../../helpers';

// TODO: Migrate definition to @wowfinder/model
type Saves = {
    [key in Save]: number;
};

const InlineSaves: View<Saves> = ({ data }) => {
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
