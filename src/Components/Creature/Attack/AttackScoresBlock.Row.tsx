import { FC } from 'react';
import { sum } from '@wowfinder/ts-utils';
import { ModCell } from '../../helpers/InputCell';

type AttackScoresRowProps = {
    label: string;
    idSuffix: 'Melee' | 'Ranged' | 'Cmb';
    baseAttackBonus?: number;
    statModifier?: number;
    sizeModifier?: number;
};

const AttackScoresRow: FC<AttackScoresRowProps> = ({
    label,
    idSuffix,
    baseAttackBonus = 0,
    statModifier = 0,
    sizeModifier = 0,
}) => {
    const hasValue = [baseAttackBonus, statModifier, sizeModifier].some(
        v => !!v,
    );
    const total = sum(baseAttackBonus, statModifier, sizeModifier);
    return (
        <tr>
            <th>{label}</th>
            <ModCell
                id={`txtTotal${idSuffix}`}
                value={total}
                hideZero={!hasValue}
            />
            <ModCell
                id={`txtBab${idSuffix}`}
                value={baseAttackBonus}
                hideZero={true}
            />
            <ModCell
                id={`txtStat${idSuffix}`}
                value={statModifier}
                hideZero={true}
            />
            <ModCell
                id={`txtSize${idSuffix}`}
                value={sizeModifier}
                hideZero={true}
            />
        </tr>
    );
};

export { AttackScoresRow, type AttackScoresRowProps };
