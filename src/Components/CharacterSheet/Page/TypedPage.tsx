import { ReactElement, useState } from 'react';
import type {
    CharXpProps,
    FullPageSelection,
    PageArgs,
    PartialPageSelection,
    TypedPageArgs,
} from './types';
import { PageType } from './types';

const pageTypes: { [keys in PageType]: React.FC<PageArgs> } = {
    /* TODO https://github.com/WowFinder/react-components/issues/148 */ [PageType.main]:
        () => <></>,
    /* TODO https://github.com/WowFinder/react-components/issues/149 */ [PageType.skills]:
        () => <></>,
    /* TODO https://github.com/WowFinder/react-components/issues/150 */ [PageType.inventory]:
        () => <></>,
    /* TODO https://github.com/WowFinder/react-components/issues/151 */ [PageType.magicScores]:
        () => <></>,
    /* TODO https://github.com/WowFinder/react-components/issues/152 */ [PageType.spells]:
        () => <></>,
    /* TODO https://github.com/WowFinder/react-components/issues/153 */ [PageType.feralForms]:
        () => <></>,
    /* TODO https://github.com/WowFinder/react-components/issues/154 */ [PageType.travelForms]:
        () => <></>,
    /* TODO https://github.com/WowFinder/react-components/issues/155 */ [PageType.moonkinForm]:
        () => <></>,
    /* TODO https://github.com/WowFinder/react-components/issues/156 */ [PageType.treeForm]:
        () => <></>,
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
