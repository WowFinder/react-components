import { commonSpeedUnits, Speed, Speeds as SpeedValues } from '@wowfinder/model';
import { Speeds } from '../../../Components/Creature';
import { FlyManeuverability } from '@wowfinder/ts-enums';

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
    <Speeds {...args} />);

export const Default = Template.bind(this, {
    speeds: defaultSpeeds,
});
