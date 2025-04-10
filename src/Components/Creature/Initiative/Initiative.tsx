import React from 'react';
import styled from 'styled-components';
import { statMod } from '@wowfinder/model';
import { useTranslation } from '@wowfinder/translations';
import { borderless, printableBottomBorder, smallText } from '../../../styles';

const StyledTable = styled.table`
    margin-top: 5mm;
    border-spacing: 0;
    & td,
    & th,
    & input {
        box-sizing: border-box;
        width: 15.5mm;
        text-align: center;
    }
    & td {
        border: 0.2mm #000 solid;
    }
    ${printableBottomBorder('& td')}
    & td.separator, & th:empty {
        ${borderless};
        width: 3.5mm;
    }
    & th {
        ${smallText};
    }
    & input {
        ${borderless};
    }
`;

type InitiativeProps = {
    dexterity: number;
    misc?: number;
    temporary?: number;
};

const Initiative: React.FC<InitiativeProps> = ({
    dexterity,
    misc = 0,
    temporary = 0,
}) => {
    const { t } = useTranslation();
    const dexMod = statMod(dexterity);
    const total = dexMod + misc + temporary;
    return (
        <StyledTable id="tblInitiative">
            <tbody>
                <tr>
                    <th>{t('charsheet.initiative.total')}</th>
                    <th></th>
                    <th>{t('stats.abbr.DEX')}</th>
                    <th></th>
                    <th>{t('charsheet.initiative.misc')}</th>
                    <th></th>
                    <th>{t('charsheet.initiative.temp')}</th>
                </tr>
                <tr>
                    <td>
                        <input id="txtInitiativeTotal" defaultValue={total} />
                    </td>
                    <td className="separator">=</td>
                    <td>
                        <input id="txtInitiativeDex" defaultValue={dexMod} />
                    </td>
                    <td className="separator">+</td>
                    <td>
                        <input id="txtInitiativeMisc" defaultValue={misc} />
                    </td>
                    <td className="separator">+</td>
                    <td>
                        <input
                            id="txtInitiativeTemp"
                            defaultValue={temporary}
                        />
                    </td>
                </tr>
            </tbody>
        </StyledTable>
    );
};

export { Initiative, type InitiativeProps };
