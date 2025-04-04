import styled from 'styled-components';
import {
    FullResistances,
    ResistanceBreakdown,
    breakdownByType,
} from '@wowfinder/model';
import { useTranslation } from '@wowfinder/translations';
import { capitalizeFirstLetter } from '@wowfinder/ts-utils';
import {
    borderThick,
    borderThin,
    borderless,
    printableBottomBorder,
    reverseColors,
    smallText,
} from '../../../styles';
import { ModCell } from '../../helpers/InputCell';

const StyledTable = styled.table`
    & th,
    & td,
    & input {
        box-sizing: border-box;
        width: 12.5mm;
        text-align: center;
        ${borderless}
    }
    & td {
        ${borderThin}
    }
    ${printableBottomBorder('& td')}
    & td.thick {
        ${borderThick}
    }
    & tbody th {
        ${reverseColors}
        font-size: 9pt;
    }
    & thead th {
        ${smallText}
    }
`;

type RowArgs = {
    readonly id: string;
    readonly value: ResistanceBreakdown;
};
function Row({ id, value }: RowArgs): React.JSX.Element {
    const { t } = useTranslation();
    const idSuffix = capitalizeFirstLetter(id);
    return (
        <tr id={`trResist${idSuffix}`}>
            <th title={capitalizeFirstLetter(t(`damageTypes.full.${id}`))}>
                {t(`damageTypes.abbr.${id}`)}
            </th>
            <ModCell id={`txtResistTotal${idSuffix}`} value={value?.total} />
            <ModCell
                id={`txtResistGear${idSuffix}`}
                value={value?.gear}
                hideZero={true}
            />
            <ModCell
                id={`txtResistEnhancement${idSuffix}`}
                value={value?.enhancement}
                hideZero={true}
            />
            <ModCell
                id={`txtResistDeflection${idSuffix}`}
                value={value?.deflection}
                hideZero={true}
            />
            <ModCell
                id={`txtResistNatural${idSuffix}`}
                value={value?.natural}
                hideZero={true}
            />
            <ModCell
                id={`txtResistTemporal${idSuffix}`}
                value={value?.temporal}
                hideZero={true}
            />
            <ModCell
                id={`txtResistAura${idSuffix}`}
                value={value?.aura}
                hideZero={true}
            />
        </tr>
    );
}

type ResistancesBlockProps = {
    readonly resistances: FullResistances;
};

export function ResistancesBlock({
    resistances,
}: ResistancesBlockProps): React.JSX.Element {
    const { t } = useTranslation();
    const byType = breakdownByType(resistances);
    return (
        <StyledTable>
            <thead>
                <tr id="trResistTitles">
                    <th></th>
                    <th>{t('charsheet.common.total')}</th>
                    <th>{t('charsheet.common.enhancement')}</th>
                    <th>{t('charsheet.common.gear')}</th>
                    <th>{t('charsheet.common.misc')}</th>
                    <th>{t('charsheet.common.temp')}</th>
                </tr>
            </thead>
            <tbody>
                <Row id="bludgeoning" value={byType.bludgeoning} />
                <Row id="slashing" value={byType.slashing} />
                <Row id="piercing" value={byType.piercing} />
                <Row id="arcane" value={byType.arcane} />
                <Row id="fire" value={byType.fire} />
                <Row id="cold" value={byType.cold} />
                <Row id="nature" value={byType.nature} />
                <Row id="shadow" value={byType.shadow} />
                <Row id="holy" value={byType.holy} />
                <Row id="psychic" value={byType.psychic} />
            </tbody>
        </StyledTable>
    );
}
