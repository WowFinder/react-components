import { RawStats } from '@wowfinder/asset-schemas';
import {
    CreatureBase,
    ProgressionBonuses,
    Speeds,
    combineProgressionBonuses,
} from '@wowfinder/model';
import {
    type AttackScoresBlockProps,
    type MultiStats,
} from '../../../Creature';

// TODO: Consider migrating logic to model

function fullStats(char?: CreatureBase): MultiStats {
    return [
        {
            key: 'base',
            isMod: false,
            strength: char?.baseStats.strength ?? 0,
            dexterity: char?.baseStats.dexterity ?? 0,
            constitution: char?.baseStats.constitution ?? 0,
            intelligence: char?.baseStats.intelligence ?? 0,
            wisdom: char?.baseStats.wisdom ?? 0,
            charisma: char?.baseStats.charisma ?? 0,
        },
        // TODO: Add remaining columns (gear, racial, mods, ???)
    ];
}

function getStatTotals(char?: CreatureBase): RawStats {
    const stats = fullStats(char);
    const total = stats.find((s: MultiStats[number]) => s.key === 'total');
    const base = stats.find((s: MultiStats[number]) => s.key === 'base');
    // TODO: Handle exception case (or include asserts to ensure `total` exists)
    return total ?? base ?? ({} as any);
}

const defaultSpeeds: Speeds = new Speeds({
    base: 30,
});

function getSpeeds(char?: CreatureBase): Speeds {
    // TODO: Include bonuses
    return char?.race.speeds ?? defaultSpeeds;
}

function getBonuses(char?: CreatureBase): ProgressionBonuses {
    return combineProgressionBonuses(
        (char?.classes ?? []).map(c => ({
            progression: c.class,
            level: c.level,
        })),
    );
}

function getAttackScores(char?: CreatureBase): AttackScoresBlockProps {
    return {
        baseAttackBonus: getBonuses(char).bab,
        stats: getStatTotals(char),
        sizeModifier: char?.race.size ?? 0,
    };
}

function getHitPoints(char?: CreatureBase): number {
    return getBonuses(char).hp;
}

export { fullStats, getSpeeds, getAttackScores, getStatTotals, getHitPoints };
