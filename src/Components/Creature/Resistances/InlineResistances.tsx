import { RawResistances } from '@wowfinder/asset-schemas';
import { useTranslation } from '@wowfinder/translations';
import { DamageType } from '@wowfinder/ts-enums';
import { type View } from '../../../helpers';
import { InlineP } from '../../helpers/InlineP';

const InlineResistances: View<RawResistances> = ({ data }) => {
    const { t } = useTranslation();
    const abbr = (type: DamageType): string => t(`damageTypes.abbr.${type}`);
    return (
        <InlineP>
            {Object.keys(data)
                .filter(key => data[key as DamageType] !== 0)
                .map(key => (
                    <span key={key}>
                        <b>{abbr(key as DamageType)}</b>
                        <span>{data[key as DamageType]}</span>
                    </span>
                ))}
        </InlineP>
    );
};

export { InlineResistances };
