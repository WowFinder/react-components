import { FC } from 'react';
import { type Speed } from '@wowfinder/model';
import { InputSuffixedCell } from '../../helpers/InputCell';
import { TargetUnit, targetUnits } from './TargetUnit';

type InputSpeedCellProps = {
    id: string;
    speed: Speed;
    targetUnit?: TargetUnit;
};

const InputSpeedCell: FC<InputSpeedCellProps> = ({
    id,
    speed,
    targetUnit = targetUnits.feet,
}) => {
    const value = Math.round(speed.as(targetUnit.unit));
    return (
        <InputSuffixedCell id={id} value={value} suffix={targetUnit.suffix} />
    );
};

type EmptySpeedProps = {
    heading?: string;
};

const EmptySpeed: FC<EmptySpeedProps> = ({ heading }) => (
    <>
        {heading && <th>{heading}</th>}
        <td></td>
        <td></td>
        <td></td>
    </>
);

type SpeedCellsProps = {
    name: string;
    speed: Speed;
    heading?: string;
};

const SpeedCells: FC<SpeedCellsProps> = ({ name, speed, heading }) => {
    if (!speed?.value) {
        return <EmptySpeed heading={heading} />;
    }
    return (
        <>
            {heading && <th>{heading}</th>}
            <InputSpeedCell
                id={`txtSpeed${name}Feet`}
                speed={speed}
                targetUnit={targetUnits.feet}
            />
            <InputSpeedCell
                id={`txtSpeed${name}Meters`}
                speed={speed}
                targetUnit={targetUnits.meters}
            />
            <InputSpeedCell
                id={`txtSpeed${name}Squares`}
                speed={speed}
                targetUnit={targetUnits.squares}
            />
        </>
    );
};

export { SpeedCells, type SpeedCellsProps };
