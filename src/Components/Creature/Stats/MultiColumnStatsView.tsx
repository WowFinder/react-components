import { RawStats } from '@wowfinder/asset-schemas';
import { useTranslation } from '@wowfinder/translations';
import { View } from '../../../helpers/wrappers';
import { ColumnDiv } from './ColumnDiv.helper';

type MultiStats = ({
    key: string;
    isMod?: boolean;
} & RawStats)[];

const stats = [
    'strength',
    'dexterity',
    'constitution',
    'intelligence',
    'wisdom',
    'charisma',
] as const;

const statHeadingKeys: Record<(typeof stats)[number], string> = {
    strength: 'stats.abbr.STR',
    dexterity: 'stats.abbr.DEX',
    constitution: 'stats.abbr.CON',
    intelligence: 'stats.abbr.INT',
    wisdom: 'stats.abbr.WIS',
    charisma: 'stats.abbr.CHA',
};

function plusPrefixed(stat: number, isMod: boolean): string {
    const prefix = isMod && stat >= 0 ? '+' : '';
    return `${prefix}${stat}`;
}

const StatValue = ({
    stat,
    isMod = false,
}: {
    stat: number;
    isMod?: boolean;
}): React.ReactNode => (
    <span className={isMod ? 'mod' : ''}>{plusPrefixed(stat, isMod)}</span>
);

const MultiColumnStatsView: View<MultiStats> = ({ data }) => {
    const { t } = useTranslation();
    return (
        <ColumnDiv>
            <p>
                <b></b>
                {data.map(stat => (
                    <span className="heading" key={stat.key}>
                        {t(stat.key)}
                    </span>
                ))}
            </p>
            {stats.map(stat => (
                <p key={stat}>
                    <b>{t(statHeadingKeys[stat])}</b>
                    {data.map(statBlock => (
                        <StatValue
                            key={statBlock.key}
                            stat={statBlock[stat]}
                            isMod={statBlock.isMod}
                        />
                    ))}
                </p>
            ))}
        </ColumnDiv>
    );
};

export type { MultiStats };

export { MultiColumnStatsView };
