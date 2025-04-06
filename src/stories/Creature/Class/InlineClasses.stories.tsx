import {
    type ClassEntries,
    mockArcaneClass,
    mockMeleeClass,
    mockStealthClass,
} from '@wowfinder/model';
import { InlineClasses } from '../../../Components/Creature/Class/InlineClasses';
import { ViewProps } from '../../../helpers';

const baseTestEntries: ClassEntries = [
    { class: mockMeleeClass, level: 2 },
    { class: mockArcaneClass, level: 6 },
    { class: mockStealthClass, level: 1 },
];

const duplicatedTestEntries: ClassEntries = [
    { class: mockMeleeClass, level: 2 },
    { class: mockArcaneClass, level: 3 },
    { class: mockMeleeClass, level: 1 },
    { class: mockArcaneClass, level: 6 },
];

export default {
    title: 'Creature/Class/InlineClasses',
    component: InlineClasses,
};
const Template = ({ data }: ViewProps<ClassEntries>): React.ReactNode => (
    <InlineClasses data={data} />
);

export const Default = Template.bind(this, {
    data: baseTestEntries,
});
export const Duplicated = Template.bind(this, {
    data: duplicatedTestEntries,
});
export const Empty = Template.bind(this, {
    data: [],
});
