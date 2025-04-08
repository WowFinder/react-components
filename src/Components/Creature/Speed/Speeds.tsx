import styled from 'styled-components';
import {
    Speed,
    Speeds as SpeedsValues,
    commonSpeedUnits,
} from '@wowfinder/model';
import { useTranslation } from '@wowfinder/translations';
import {
    borderThick,
    borderThin,
    borderless,
    printableBottomBorder,
    reverseColors,
    smallText,
} from '../../../styles';
import { Maneuverability } from './Maneuverability';
import { SpeedCells } from './SpeedCells';
import { ChildlessFC } from '../../../helpers';

const StyledTable = styled.table`
    & th,
    & td,
    & input {
        width: 11.5mm;
        text-align: center;
    }
    & td {
        ${borderThin}
        text-align: left;
    }
    ${printableBottomBorder('& td')}
    & td.thick {
        ${borderThick}
    }
    & tbody th {
        ${reverseColors}
    }
    & thead th {
        ${smallText}
    }
    & input {
        width: 6mm;
        text-align: right;
        ${borderless};
    }
    & span.suffix {
        text-align: left;
    }
    & td[colspan='2'] {
        font-size: 10pt;
        select {
            width: 100%;
        }
        ${borderless}
    }
`;

type CellsProps = {
    hkey: string;
    name: string;
    speed: Speed;
};

const Cells: ChildlessFC<CellsProps> = ({ hkey, name, speed }) => {
    const { t } = useTranslation();
    const heading = t(`charsheet.speed.${hkey}`) ?? '';
    return <SpeedCells {...{ name, speed, heading }} />;
};

type SpeedsProps = {
    readonly speeds: SpeedsValues;
};

const zeroSpeed = new Speed({ value: 0, unit: commonSpeedUnits.feetTurn });

const Speeds: ChildlessFC<SpeedsProps> = ({ speeds }) => {
    return (
        <StyledTable>
            <tbody>
                <tr>
                    <Cells hkey="base" name="Base" speed={speeds.base} />
                    <Cells
                        hkey="reduced"
                        name="Reduced"
                        speed={speeds.encumbered}
                    />
                </tr>
                <tr>
                    <Cells hkey="fly" name="Fly" speed={speeds.fly} />
                    <Maneuverability value={speeds.maneuverability} />
                </tr>
                <tr>
                    <Cells hkey="swim" name="Swim" speed={speeds.swim} />
                    <Cells hkey="climb" name="Climb" speed={speeds.climb} />
                </tr>
                <tr>
                    <Cells hkey="burrow" name="Burrow" speed={speeds.burrow} />
                    <Cells hkey="misc" name="Misc" speed={zeroSpeed} />
                </tr>
            </tbody>
        </StyledTable>
    );
};

export { Speeds, type SpeedsProps };
