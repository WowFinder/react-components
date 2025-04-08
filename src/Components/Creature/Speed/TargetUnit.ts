import { SpeedUnit } from '@wowfinder/model';
import { LengthUnit, TimeUnit } from '@wowfinder/ts-enums';

type TargetUnit = {
    unit: SpeedUnit;
    suffix: string;
};

const targetUnits: { [key: string]: TargetUnit } = {
    feet: {
        unit: new SpeedUnit({ length: LengthUnit.foot, time: TimeUnit.turn }),
        suffix: "'",
    },
    meters: {
        unit: new SpeedUnit({ length: LengthUnit.meter, time: TimeUnit.turn }),
        suffix: 'm',
    },
    squares: {
        unit: new SpeedUnit({ length: LengthUnit.square, time: TimeUnit.turn }),
        suffix: '□',
    },
};

export { type TargetUnit, targetUnits };
