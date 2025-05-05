import { RawStats } from '@wowfinder/asset-schemas';
import {
    CreatureFacade,
    ProgressionBonuses,
    type SpeedsProfile,
    baseDefault,
    buildSpeedsProfile,
    combineProgressionBonuses,
} from '@wowfinder/model';
import { Counter } from '@wowfinder/ts-utils';
import {
    type AttackScoresBlockProps,
    type MultiStats,
} from '../../../Creature';

// TODO: Consider migrating logic to model

function fullStats(char?: CreatureFacade): MultiStats {
    return [
        {
            key: 'base',
            isMod: false,
            ...(char ? char.intrinsicProfile.statsProfile : baseDefault),
        },
        {
            key: 'total',
            isMod: false,
            ...(char ? char.fullProfile.statsProfile : baseDefault),
        },
        // TODO: Add remaining columns (gear, racial, mods, ???)
    ] as const;
}

function getStatTotals(char?: CreatureFacade): RawStats {
    const stats = fullStats(char);
    const total = stats.find((s: MultiStats[number]) => s.key === 'total');
    const base = stats.find((s: MultiStats[number]) => s.key === 'base');
    return total ?? base ?? baseDefault;
}

const defaultSpeeds: SpeedsProfile = buildSpeedsProfile({
    baseSpeed: 30,
});

function getSpeeds(char?: CreatureFacade): SpeedsProfile {
    return char?.fullProfile.speedsProfile ?? defaultSpeeds;
}

function getBonuses(char?: CreatureFacade): ProgressionBonuses {
    return combineProgressionBonuses(
        (char?.fullProfile.progressionProfile.classes ?? []).map(c => ({
            progression: c.class,
            level: c.level,
        })),
    );
}

function getAttackScores(char?: CreatureFacade): AttackScoresBlockProps {
    return {
        baseAttackBonus: getBonuses(char).bab,
        stats: getStatTotals(char),
        sizeModifier: char?.fullProfile.size ?? 0,
    };
}

const defaultCounter: Counter = {
    current: 0,
    max: 0,
    min: 0,
    initial: 0,
};

function getHitPoints(char?: CreatureFacade): Counter {
    return char?.fullProfile.vitalsProfile.hp ?? defaultCounter;
}

export { fullStats, getSpeeds, getAttackScores, getStatTotals, getHitPoints };
