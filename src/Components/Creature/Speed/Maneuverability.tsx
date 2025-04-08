import { ManeuverabilitySortedValues } from '@wowfinder/model';
import { useTranslation } from '@wowfinder/translations';
import { FlyManeuverability } from '@wowfinder/ts-enums';
import { ChildlessFC } from '../../../helpers';

type ManeuverabilityProps = {
    readonly value?: FlyManeuverability;
};

const Maneuverability: ChildlessFC<ManeuverabilityProps> = ({ value }) => {
    const { t: translate } = useTranslation();
    const t = (key: string): string =>
        translate(`charsheet.speed.maneuverability.${key}`);
    return (
        <>
            <td colSpan={2}>{t('h')}</td>
            <td colSpan={2}>
                <select id="mnuFlyManeuverability" defaultValue={value}>
                    <option value=""></option>
                    {ManeuverabilitySortedValues.map(v => (
                        <option key={v} value={v}>
                            {t(v)}
                        </option>
                    ))}
                </select>
            </td>
        </>
    );
};

export { Maneuverability, type ManeuverabilityProps };
