import { RawStats } from '@wowfinder/asset-schemas';
import {
    addStatSets,
    defaultStatsMock as defaults,
    statMod,
    twentyStatsMock as twenty,
    // fullBonusStatsMock,
} from '@wowfinder/model';
import { MultiStats } from '../../../Components/Creature/Stats/MultiColumnStatsView';

type StatsColumn = {
    isMod?: boolean;
} & RawStats;

const gear: StatsColumn = {
    isMod: true,
    // ...fullBonusStatsMock,
    strength: 2,
    dexterity: 3,
    constitution: 4,
    intelligence: 1,
    wisdom: 6,
    charisma: 5,
} as const;

const total = addStatSets(defaults, gear);

const mods: StatsColumn = {
    isMod: true,
    strength: statMod(total.strength),
    dexterity: statMod(total.dexterity),
    constitution: statMod(total.constitution),
    intelligence: statMod(total.intelligence),
    wisdom: statMod(total.wisdom),
    charisma: statMod(total.charisma),
} as const;

const multiStats: MultiStats = [
    {
        key: 'charsheet.common.base',
        ...defaults,
    },
    {
        key: 'charsheet.common.gear',
        ...gear,
    },
    {
        key: 'charsheet.common.total',
        ...total,
    },
    {
        key: 'charsheet.common.mod',
        ...mods,
    },
];

const statMocks: {
    defaults: RawStats;
    twenty: RawStats;
    gear: RawStats;
    total: RawStats;
    mods: RawStats;
    multiStats: MultiStats;
} = {
    defaults,
    twenty,
    gear,
    total,
    mods,
    multiStats,
} as const;

export { statMocks, type StatsColumn };
