import { RawStats } from '@wowfinder/asset-schemas';
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

const statHeadings: Record<(typeof stats)[number], string> = {
    strength: 'STR',
    dexterity: 'DEX',
    constitution: 'CON',
    intelligence: 'INT',
    wisdom: 'WIS',
    charisma: 'CHA',
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
    // TODO: i18n
    return (
        <ColumnDiv>
            <p>
                <b></b>
                {data.map(stat => (
                    <span className="heading" key={stat.key}>
                        {stat.key}
                    </span>
                ))}
            </p>
            {stats.map(stat => (
                <p key={stat}>
                    <b>{statHeadings[stat]}</b>
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
