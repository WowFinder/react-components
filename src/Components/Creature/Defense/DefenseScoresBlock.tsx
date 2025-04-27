import { FullArmorValues } from '@wowfinder/model';
import { useTranslation } from '@wowfinder/translations';
import { InputCell, InputH } from '../../helpers/InputCell';
import { ArmorRow } from './Armor.Row';
import { DefenseScoresBlockTable } from './DefenseScoresBlock.Table';

const commonInitialHeadings: string[] = ['', 'total', ''] as const;
const commonFinalHeadings: string[] = ['size', 'defl', 'misc', 'temp'] as const;

const armorHeadings: string[] = [
    ...commonInitialHeadings,
    'armor',
    'DEX',
    'nat',
    ...commonFinalHeadings,
] as const;
const cmdHeadings: string[] = [
    ...commonInitialHeadings,
    'bab',
    'STR',
    'DEX',
    ...commonFinalHeadings,
] as const;

const statKeys = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'] as const;
const attackKeys = ['bab' ] as const;
const commonKeys = ['size'] as const;

function useTranslatedHeading(key: string): string {
    if (!key) {
        return '';
    }

    let prefix: string = 'charsheet.armor.';
    if (statKeys.includes(key as any)) {
        prefix = 'stats.abbr.';
    } else if (commonKeys.includes(key as any)) {
        prefix = 'charsheet.common.';
    } else if (attackKeys.includes(key as any)) {
        prefix = 'charsheet.attack.';
    }

    const { t } = useTranslation();
    return t(`${prefix}${key}`);
}

type DefensesHeadingsProps = {
    readonly headings: string[];
};
function DefensesHeadings({
    headings,
}: DefensesHeadingsProps): React.JSX.Element {
    return (
        <thead>
            <tr>
                {headings.map((heading, index) => (
                    <th key={`${heading}-${index}`}>
                        {useTranslatedHeading(heading)}
                    </th>
                ))}
            </tr>
        </thead>
    );
}

type DefenseScoresBlockProps = {
    readonly values: FullArmorValues;
};

function DefenseScoresBlock({
    values,
}: DefenseScoresBlockProps): React.JSX.Element {
    const { t } = useTranslation();
    return (
        <DefenseScoresBlockTable>
            <DefensesHeadings headings={armorHeadings} />
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
            <DefensesHeadings headings={cmdHeadings} />
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
