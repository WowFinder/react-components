import { FC } from 'react';
import { RawStats } from '@wowfinder/asset-schemas';
import { statMod } from '@wowfinder/model';
import { useTranslation } from '@wowfinder/translations';
import { AttackScoresRow } from './AttackScoresBlock.Row';
import { AttackScoresBlockTable } from './AttackScoresBlock.Table';

// See: https://github.com/edurne85/wowfinder/issues/458

type AttackScoresBlockProps = {
    baseAttackBonus?: number;
    stats?: Partial<RawStats>;
    sizeModifier?: number;
};

const AttackScoresBlock: FC<AttackScoresBlockProps> = ({
    baseAttackBonus = 0,
    stats = {},
    sizeModifier = 0,
}) => {
    const { t } = useTranslation();
    const strMod = Object.hasOwn(stats, 'strength')
        ? statMod(stats?.strength ?? 0)
        : 0;
    const dexMod = Object.hasOwn(stats, 'dexterity')
        ? statMod(stats?.dexterity ?? 0)
        : 0;
    return (
        <AttackScoresBlockTable>
            <thead>
                <tr>
                    <th></th>
                    <th>{t('charsheet.common.total')}</th>
                    <th>{t('charsheet.attack.bab')}</th>
                    <th>{t('charsheet.common.stat')}</th>
                    <th>{t('charsheet.common.size')}</th>
                </tr>
            </thead>
            <tbody>
                <AttackScoresRow
                    label={t('charsheet.attack.melee')}
                    idSuffix="Melee"
                    baseAttackBonus={baseAttackBonus}
                    statModifier={strMod}
                    sizeModifier={sizeModifier}
                />
                <AttackScoresRow
                    label={t('charsheet.attack.ranged')}
                    idSuffix="Ranged"
                    baseAttackBonus={baseAttackBonus}
                    statModifier={dexMod}
                    sizeModifier={sizeModifier}
                />
                <AttackScoresRow
                    label={t('charsheet.attack.cmb')}
                    idSuffix="Cmb"
                    baseAttackBonus={baseAttackBonus}
                    statModifier={strMod}
                    sizeModifier={sizeModifier}
                />
            </tbody>
        </AttackScoresBlockTable>
    );
};

export { AttackScoresBlock, type AttackScoresBlockProps };
