import styled from 'styled-components';
import { useTranslation } from '@wowfinder/translations';
import { ChildlessFC } from '../../../helpers';
import { borderless, printableBottomBorder, smallText } from '../../../styles';

type HitPointProps = {
    readonly base: number;
    readonly current?: number;
    readonly misc?: number;
    readonly temporary?: number;
};

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

const HitPoints: ChildlessFC<HitPointProps> = ({
    base,
    current,
    misc = 0,
    temporary = 0,
}) => {
    const { t } = useTranslation();
    const total = base + misc;
    const curr = typeof current === 'undefined' ? total + temporary : current;
    return (
        <StyledTable id="tblHp">
            <tbody>
                <tr>
                    <th>{t('charsheet.hitpoints.curr')}</th>
                    <th></th>
                    <th>{t('charsheet.hitpoints.total')}</th>
                    <th></th>
                    <th>{t('charsheet.hitpoints.base')}</th>
                    <th></th>
                    <th>{t('charsheet.hitpoints.misc')}</th>
                    <th></th>
                    <th>{t('charsheet.hitpoints.temp')}</th>
                </tr>
                <tr>
                    <td>
                        <input id="txtHpCurrent" defaultValue={curr} />
                    </td>
                    <td className="separator">/</td>
                    <td>
                        <input id="txtHpTotal" defaultValue={total} />
                    </td>
                    <td className="separator">=</td>
                    <td>
                        <input id="txtHpBase" defaultValue={base} />
                    </td>
                    <td className="separator">+</td>
                    <td>
                        <input id="txtHpMisc" defaultValue={misc} />
                    </td>
                    <td className="separator">+</td>
                    <td>
                        <input id="txtHpTemp" defaultValue={temporary} />
                    </td>
                </tr>
            </tbody>
        </StyledTable>
    );
};

export { HitPoints, type HitPointProps };
