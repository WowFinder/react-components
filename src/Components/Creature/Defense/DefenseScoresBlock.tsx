import { FullArmorValues } from '@wowfinder/model';
import { useTranslation } from '@wowfinder/translations';
import { InputCell, InputH } from '../../helpers/InputCell';
import { ArmorRow } from './Armor.Row';
import { DefenseScoresBlockTable } from './DefenseScoresBlock.Table';

type DefenseScoresBlockProps = {
    values: FullArmorValues;
};

function DefenseScoresBlock({
    values,
}: DefenseScoresBlockProps): React.JSX.Element {
    const { t } = useTranslation();
    return (
        <DefenseScoresBlockTable>
            <thead>
                <tr>
                    <th></th>
                    <th>{t('charsheet.armor.total')}</th>
                    <th></th>
                    <th>{t('charsheet.armor.armor')}</th>
                    <th>{t('stats.abbr.DEX')}</th>
                    <th>{t('charsheet.common.size')}</th>
                    <th>{t('charsheet.armor.nat')}</th>
                    <th>{t('charsheet.armor.defl')}</th>
                    <th>{t('charsheet.armor.misc')}</th>
                    <th>{t('charsheet.armor.temp')}</th>
                </tr>
            </thead>
            <tbody>
                <ArmorRow
                    label={t('charsheet.armor.AC')}
                    idPrefix="AcFull"
                    values={values}
                />
                <ArmorRow
                    label={t('charsheet.armor.touch')}
                    idPrefix="AcTouch"
                    values={values.touch}
                    skipPhysical={true}
                />
                <ArmorRow
                    label={t('charsheet.armor.flatf')}
                    idPrefix="AcFlat"
                    values={values.flatFooted}
                    skipEvasive={true}
                />
            </tbody>
            <thead>
                <tr>
                    <th></th>
                    <th>{t('charsheet.armor.total')}</th>
                    <th></th>
                    <th>{t('charsheet.attack.bab')}</th>
                    <th>{t('stats.abbr.STR')}</th>
                    <th>{t('stats.abbr.DEX')}</th>
                    <th>{t('charsheet.common.size')}</th>
                    <th>{t('charsheet.armor.defl')}</th>
                    <th>{t('charsheet.armor.misc')}</th>
                    <th>{t('charsheet.armor.temp')}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>{t('charsheet.armor.cmd')}</th>
                    <InputH id="txtCmdTotal" value={values.maneuverDefense} />
                    <td>=10+</td>
                    <InputCell id="txtCmdBab" value={values.baseAttack} />
                    <InputCell id="txtCmdStr" value={values.strength} />
                    <InputCell id="txtCmdDex" value={values.dexterity} />
                    <InputCell id="txtCmdSize" value={values.size} />
                    <InputCell
                        id="txtCmdDeflect"
                        value={values.deflection}
                        hideZero={true}
                    />
                    <InputCell
                        id="txtCmdMisc"
                        value={values.misc + values.miscEvasion}
                        hideZero={true}
                    />
                    <InputCell
                        id="txtCmdTemp"
                        value={values.temporary + values.temporaryEvasion}
                        hideZero={true}
                    />
                </tr>
            </tbody>
        </DefenseScoresBlockTable>
    );
}

export { DefenseScoresBlock, type DefenseScoresBlockProps };
