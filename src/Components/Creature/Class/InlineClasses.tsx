import styled from 'styled-components';
import {
    type ClassEntries,
    type ClassEntry,
    combinedClassEntries,
} from '@wowfinder/model';
import { useTranslation } from '@wowfinder/translations';
import { type View } from '../../../helpers';

const EntryContainer = styled.span`
    display: inline-block;
    margin: 0 0.25em;
`;

const InlineClassEntry: View<ClassEntry> = ({ data }) => {
    const { t } = useTranslation();
    const classKey = t(`classes.${data.class.key}`);
    return (
        <EntryContainer className="inline-class-entry">
            <b>{classKey}</b>: <span>{data.level}</span>;
        </EntryContainer>
    );
};

const InlineClasses: View<ClassEntries> = ({ data }) => {
    return combinedClassEntries(data).map(entry => {
        return <InlineClassEntry key={entry.class.key} data={entry} />;
    });
};

export { InlineClasses };
