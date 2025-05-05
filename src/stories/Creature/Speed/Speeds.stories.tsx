import { Speed, type SpeedsProfile, commonSpeedUnits } from '@wowfinder/model';
import { FlyManeuverability } from '@wowfinder/ts-enums';
import { Speeds } from '../../../Components/Creature';

export default {
    title: 'Creature/Speed/Speeds',
    component: Speeds,
};

const mkSpeed = (feetPerTurn: number): Speed => {
    return new Speed({ value: feetPerTurn, unit: commonSpeedUnits.feetTurn });
};

const defaultSpeeds: SpeedsProfile = {
    baseSpeed: mkSpeed(30),
    reducedSpeed: mkSpeed(20),
    swimSpeed: mkSpeed(15),
    flySpeed: mkSpeed(60),
    climbSpeed: mkSpeed(10),
    burrowSpeed: mkSpeed(5),
    flyManeuverability: FlyManeuverability.good,
    initiative: 0,
};

const Template = (args: { speeds: SpeedsProfile }): React.ReactNode => (
    <Speeds {...args} />
);

export const Default = Template.bind(this, {
    speeds: defaultSpeeds,
});
