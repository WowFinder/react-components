import { FC } from 'react';
import styled from 'styled-components';
import { Speed, commonSpeedUnits } from '@wowfinder/model';
import { SpeedsProfile } from '@wowfinder/model/Profile';
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

const Cells: FC<CellsProps> = ({ hkey, name, speed }) => {
    const { t } = useTranslation();
    const heading = t(`charsheet.speed.${hkey}`) ?? '';
    return <SpeedCells {...{ name, speed, heading }} />;
};

type SpeedsProps = {
    readonly speeds: SpeedsProfile;
};

const zeroSpeed = new Speed({ value: 0, unit: commonSpeedUnits.feetTurn });

const Speeds: FC<SpeedsProps> = ({ speeds }) => {
    return (
        <StyledTable>
            <tbody>
                <tr>
                    <Cells hkey="base" name="Base" speed={speeds.baseSpeed} />
                    <Cells
                        hkey="reduced"
                        name="Reduced"
                        speed={speeds.reducedSpeed}
                    />
                </tr>
                <tr>
                    <Cells
                        hkey="fly"
                        name="Fly"
                        speed={speeds.flySpeed ?? zeroSpeed}
                    />
                    <Maneuverability value={speeds.flyManeuverability} />
                </tr>
                <tr>
                    <Cells
                        hkey="swim"
                        name="Swim"
                        speed={speeds.swimSpeed ?? zeroSpeed}
                    />
                    <Cells
                        hkey="climb"
                        name="Climb"
                        speed={speeds.climbSpeed ?? zeroSpeed}
                    />
                </tr>
                <tr>
                    <Cells
                        hkey="burrow"
                        name="Burrow"
                        speed={speeds.burrowSpeed ?? zeroSpeed}
                    />
                    <Cells hkey="misc" name="Misc" speed={zeroSpeed} />
                </tr>
            </tbody>
        </StyledTable>
    );
};

export { Speeds, type SpeedsProps };
