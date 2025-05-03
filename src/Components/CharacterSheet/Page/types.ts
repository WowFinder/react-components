import type { CreatureBase } from '@wowfinder/model';

enum PageType {
    main = 'main',
    skills = 'skills',
    inventory = 'inventory',
    magicScores = 'magicScores',
    spells = 'spells',
    feralForms = 'feralForms',
    travelForms = 'travelForms',
    moonkinForm = 'moonkinForm',
    treeForm = 'treeForm',
}

type CharProps = {
    char?: CreatureBase;
};

type CharXpProps = CharProps & {
    char?: CreatureBase;
    xp?: number;
};

type PageArgs<T extends CharXpProps = CharXpProps> = T & { visible: boolean };

type TypedPageArgs<T extends CharXpProps = CharXpProps> = PageArgs<T> & {
    type: PageType;
};

type HitPointProps = Partial<CharProps> & { current?: number };

type PartialPageSelection = { [keys in PageType]?: boolean };

type FullPageSelection = { [keys in PageType]: boolean };

export { PageType };

export type {
    CharProps,
    CharXpProps,
    HitPointProps,
    PageArgs,
    TypedPageArgs,
    PartialPageSelection,
    FullPageSelection,
};
