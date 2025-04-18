import React, { FC } from 'react';
import { type Class } from '@wowfinder/model';
import { useTranslation } from '@wowfinder/translations';

type ClassPickerEntryProps = {
    readonly cls: Class;
    readonly selected: boolean;
};

const ClassPickerEntry: FC<ClassPickerEntryProps> = ({ cls, selected }) => {
    const { t } = useTranslation();
    const selectedProp = selected ? { selected: true } : {};
    const k = cls.key;
    return (
        <option key={k} value={k} {...selectedProp}>
            {t(`classes.${k}`)}
        </option>
    );
};

type EmptyClassPickerEntryProps = {
    readonly selected: boolean;
};

const EmptyClassPickerEntry: FC<EmptyClassPickerEntryProps> = ({
    selected,
}) => {
    const selectedProp = selected ? { selected: true } : {};
    return <option value="" {...selectedProp}></option>;
};

type ClassPickerPropsBase = {
    readonly classes: Class[];
    readonly initialSelection?: string;
    readonly allowEmpty?: boolean;
};
type ClassPickerPropsNonEmpty = ClassPickerPropsBase & {
    readonly initialSelection: string;
};
type ClassPickerPropsEmpty = ClassPickerPropsBase & {
    readonly allowEmpty: true;
};
type ClassPickerProps = Readonly<
    ClassPickerPropsNonEmpty | ClassPickerPropsEmpty
>;

const ClassPicker: FC<ClassPickerProps> = ({
    classes,
    initialSelection,
    allowEmpty = false,
}) => {
    const [selectedKey, setSelectedKey] = React.useState<string | undefined>(
        initialSelection,
    );
    return (
        <select
            value={selectedKey ?? ''}
            onChange={e => setSelectedKey(e.target.value)}>
            {allowEmpty && (
                <EmptyClassPickerEntry selected={selectedKey === ''} />
            )}
            {classes.map(cls => (
                <ClassPickerEntry
                    key={cls.key}
                    cls={cls}
                    selected={selectedKey === cls.key}
                />
            ))}
        </select>
    );
};

export { ClassPicker };
export type { ClassPickerProps };
