import {
    Speed,
    Speeds as SpeedValues,
    commonSpeedUnits,
} from '@wowfinder/model';
import { FlyManeuverability } from '@wowfinder/ts-enums';
import { Speeds } from '../../../Components/Creature';

export default {
    title: 'Creature/Speed/Speeds',
    component: Speeds,
};

const mkSpeed = (feetPerTurn: number): Speed => {
    return new Speed({ value: feetPerTurn, unit: commonSpeedUnits.feetTurn });
};

const defaultSpeeds = new SpeedValues({
    base: mkSpeed(30),
    swim: mkSpeed(15),
    fly: mkSpeed(60),
    climb: mkSpeed(10),
    burrow: mkSpeed(5),
    maneuverability: FlyManeuverability.good,
});

const Template = (args: { speeds: SpeedValues }): React.ReactNode => (
    <Speeds {...args} />
);

export const Default = Template.bind(this, {
    speeds: defaultSpeeds,
});
