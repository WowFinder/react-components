import styled from 'styled-components';
import { type SaveBreakdown, type SaveBreakdowns } from '@wowfinder/model';
import { useTranslation } from '@wowfinder/translations';
import {
    FontFamily,
    borderThick,
    borderThin,
    borderless,
    font,
    printableBottomBorder,
    reverseColors,
    smallText,
} from '../../../styles';
import { ModCell } from '../../helpers/InputCell';

const StyledTable = styled.table`
    ${font({ family: FontFamily.priori })}
    border-spacing: 0;
    & th,
    & td {
        padding: 0;
    }
    & th,
    & td,
    & input {
        box-sizing: border-box;
        width: 11.5mm;
        text-align: center;
        font-size: 10pt;
        ${borderless}
    }
    & td {
        ${borderThin}
    }
    ${printableBottomBorder('& td')}
    & td.thick {
        ${borderThick}
    }
    & thead th {
        ${smallText}
    }
    & tbody th {
        ${reverseColors}
    }
`;

type RowProps = {
    readonly idSuffix: string;
    readonly label: string;
    readonly value?: SaveBreakdown;
};

function Row({ idSuffix, label, value }: RowProps): React.JSX.Element {
    return (
        <tr id={`tr${idSuffix}`}>
            <th>{label}</th>
            <ModCell id={`txtTotal${idSuffix}`} value={value?.total} />
            <ModCell id={`txtStat${idSuffix}`} value={value?.stat} />
            <ModCell id={`txtBase${idSuffix}`} value={value?.base} />
            <ModCell
                id={`txtEnhance${idSuffix}`}
                value={value?.enhancement}
                hideZero={true}
            />
            <ModCell
                id={`txtGear${idSuffix}`}
                value={value?.gear}
                hideZero={true}
            />
            <ModCell
                id={`txtMisc${idSuffix}`}
                value={value?.misc}
                hideZero={true}
            />
            <ModCell
                id={`txtTemp${idSuffix}`}
                value={value?.temporary}
                hideZero={true}
            />
        </tr>
    );
}

type SavesBlockProps = {
    readonly saves: SaveBreakdowns;
};

function SavesBlock({ saves }: SavesBlockProps): React.JSX.Element {
    const { t } = useTranslation();
    return (
        <StyledTable>
            <thead>
                <tr id="trSavesTitles">
                    <th></th>
                    <th>{t('charsheet.common.total')}</th>
                    <th>{t('charsheet.common.stat')}</th>
                    <th>{t('charsheet.common.base')}</th>
                    <th>{t('charsheet.common.enhancement')}</th>
                    <th>{t('charsheet.common.gear')}</th>
                    <th>{t('charsheet.common.misc')}</th>
                    <th>{t('charsheet.common.temp')}</th>
                </tr>
            </thead>
            <tbody>
                <Row
                    idSuffix="Fort"
                    label={t('charsheet.saves.abbr.fort')}
                    value={saves.fortitude}
                />
                <Row
                    idSuffix="Refl"
                    label={t('charsheet.saves.abbr.refl')}
                    value={saves.reflexes}
                />
                <Row
                    idSuffix="Will"
                    label={t('charsheet.saves.abbr.will')}
                    value={saves.will}
                />
            </tbody>
        </StyledTable>
    );
}

export { SavesBlock, type SavesBlockProps };
