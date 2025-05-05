import { FC, ReactElement, useState } from 'react';
import { MainPage } from './Main';
import { Page } from './Page';
import type {
    CharXpProps,
    FullPageSelection,
    PageArgs,
    PartialPageSelection,
    TypedPageArgs,
} from './types';
import { PageType } from './types';

/* TODO Replace usages as the different page types are implemented */
const Placeholder =
    (id: string): FC<PageArgs> =>
    props => (
        <Page id={id} {...props}>
            <div />
        </Page>
    );

const pageTypes: { [keys in PageType]: React.FC<PageArgs> } = {
    [PageType.main]: MainPage,
    /* TODO https://github.com/WowFinder/react-components/issues/149 */ [PageType.skills]:
        Placeholder('skills'),
    /* TODO https://github.com/WowFinder/react-components/issues/150 */ [PageType.inventory]:
        Placeholder('inventory'),
    /* TODO https://github.com/WowFinder/react-components/issues/151 */ [PageType.magicScores]:
        Placeholder('magicScores'),
    /* TODO https://github.com/WowFinder/react-components/issues/152 */ [PageType.spells]:
        Placeholder('spells'),
    /* TODO https://github.com/WowFinder/react-components/issues/153 */ [PageType.feralForms]:
        Placeholder('feralForms'),
    /* TODO https://github.com/WowFinder/react-components/issues/154 */ [PageType.travelForms]:
        Placeholder('travelForms'),
    /* TODO https://github.com/WowFinder/react-components/issues/155 */ [PageType.moonkinForm]:
        Placeholder('moonkinForm'),
    /* TODO https://github.com/WowFinder/react-components/issues/156 */ [PageType.treeForm]:
        Placeholder('treeForm'),
};

const defaultPages: FullPageSelection = {
    [PageType.main]: true,
    [PageType.skills]: true,
    [PageType.inventory]: true,
    [PageType.magicScores]: true,
    [PageType.spells]: false,
    [PageType.feralForms]: true,
    [PageType.travelForms]: false,
    [PageType.moonkinForm]: false,
    [PageType.treeForm]: false,
};

function TypedPage<T extends CharXpProps = CharXpProps>({
    type,
    ...props
}: TypedPageArgs<T>): ReactElement {
    const [selectedPages] = useState<PartialPageSelection>(defaultPages);
    return pageTypes[type]({
        ...props,
        visible: !!selectedPages[type],
    }) as ReactElement;
}

export { TypedPage };
