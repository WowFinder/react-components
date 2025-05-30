import { TFunction } from 'i18next';
import styled from 'styled-components';
import { Race } from '@wowfinder/model';
import { useTranslation } from '@wowfinder/translations';
import type { CharXpProps } from '../../CharacterSheet/Page/types';
// TODO #459: Add support for drop-downs
import {
    PersonalEntryBigNumber,
    PersonalEntryNumber,
} from './PersonalEntryNumber';
import {
    PersonalEntryText,
    PersonalEntryTextCentered,
} from './PersonalEntryText';

const Personal = styled.div`
    display: inline-block;
    flex: auto;
    height: auto;
    width: 123mm;
    margin: 5mm 0;
    & input,
    & select {
        font-size: 9pt;
    }
`;

function raceName(race: Race | null, t: TFunction): string {
    if (!race) return '';
    const baseName = race.key.split('.', 2)[0];
    return t(`races.${baseName}`);
}

const PersonalBlock: React.FC<CharXpProps> = ({ char, xp = 0 }) => {
    // TODO #460: insert values as they become available
    const { t } = useTranslation();
    const label = (key: string): string => t(`charsheet.personal.${key}`);
    const tlevel = Math.floor((1 + Math.sqrt(1 + (4 * xp) / 1000)) / 2);
    const next = tlevel * (tlevel + 1) * 1000;
    const values =
        (char && {
            charName: char.fullProfile.personalDetails.fullName,
            align: char.fullProfile.personalDetails.alignment,
            tlevel,
            xp,
            next,
            faith: char.fullProfile.personalDetails.faith,
            origin: char.fullProfile.personalDetails.origin,
            // ⚠️ race not currently exposed by CreatureFacade / CreatureProfile APIs in `model`
            race: '',
            gender: char.fullProfile.personalDetails.gender,
            age: `${char.fullProfile.personalDetails.age.fullYears}`,
            height: `${char.fullProfile.personalDetails.height.feetInches}`,
            weight: `${char.fullProfile.personalDetails.weight}`,
            hair: char.fullProfile.personalDetails.hair,
            eyes: char.fullProfile.personalDetails.eyes,
        }) ||
        {};
    return (
        <Personal>
            <PersonalEntryText
                id="CharacterName"
                label={label('charName')}
                width={45}
                value={values.charName}
            />
            <PersonalEntryText
                id="Alignment"
                label={label('align')}
                width={22}
                value={values.align}
            />
            <PersonalEntryText id="Player" label={label('player')} width={45} />
            <PersonalEntryNumber
                id="TotalLevel"
                label={label('tLevel')}
                width={12}
                value={values.tlevel}
            />
            <PersonalEntryBigNumber
                id="Experience"
                label={label('xp')}
                width={17}
                value={values.xp}
            />
            <PersonalEntryBigNumber
                id="NextLevel"
                label={label('nLevel')}
                width={17}
                value={values.next}
            />
            <PersonalEntryText
                id="Faith"
                label={label('faith')}
                width={30}
                value={values.faith}
            />
            <PersonalEntryText
                id="Origin"
                label={label('origin')}
                width={30}
                value={values.origin}
            />
            <PersonalEntryText
                id="Race"
                label={label('race')}
                width={22}
                value={values.race}
            />
            <PersonalEntryText id="Size" label={label('size')} width={16} />
            <PersonalEntryText
                id="Gender"
                label={label('gender')}
                width={10}
                value={values.gender}
            />
            <PersonalEntryTextCentered
                id="Age"
                label={label('age')}
                width={8}
                value={values.age}
            />
            <PersonalEntryTextCentered
                id="Height"
                label={label('height')}
                width={11}
                value={values.height}
            />
            <PersonalEntryTextCentered
                id="Weight"
                label={label('weight')}
                width={11}
                value={values.weight}
            />
            <PersonalEntryText
                id="Hair"
                label={label('hair')}
                width={10}
                value={values.hair}
            />
            <PersonalEntryText
                id="Eyes"
                label={label('eyes')}
                width={10}
                value={values.eyes}
            />
        </Personal>
    );
};

export { PersonalBlock, raceName };
