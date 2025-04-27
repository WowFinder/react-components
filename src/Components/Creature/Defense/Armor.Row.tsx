import { FullArmorValues } from '@wowfinder/model';
import { EmptyTd, InputCell, InputH } from '../../helpers/InputCell';

type ArmorRowArgs = {
    readonly label: string;
    readonly idPrefix: string;
    readonly values?: FullArmorValues;
    readonly skipPhysical?: boolean;
    readonly skipEvasive?: boolean;
};

function ArmorRow({
    label,
    idPrefix,
    values,
    skipPhysical = false,
    skipEvasive = false,
}: ArmorRowArgs): React.JSX.Element {
    return (
        <tr>
            <th>{label}</th>
            <InputH id={`txt${idPrefix}Total`} value={values?.total} />
            <td>=10+</td>
            {skipPhysical ? (
                <EmptyTd />
            ) : (
                // TODO: Replace with `gear` (depends on https://github.com/WowFinder/model/issues/184)
                <InputCell id={`txt${idPrefix}Armor`} value={values?.armor} />
            )}
            {skipEvasive ? (
                <EmptyTd />
            ) : (
                <InputCell id={`txt${idPrefix}Dex`} value={values?.dexterity} />
            )}
            {skipPhysical ? (
                <EmptyTd />
            ) : (
                <InputCell
                    id={`txt${idPrefix}Natural`}
                    value={values?.natural}
                    hideZero={true}
                />
            )}
            <InputCell id={`txt${idPrefix}Size`} value={values?.size} />
            <InputCell
                id={`txt${idPrefix}Deflect`}
                value={values?.deflection}
                hideZero={true}
            />
            <InputCell
                id={`txt${idPrefix}Misc`}
                value={values?.miscAll}
                hideZero={true}
            />
            <InputCell
                id={`txt${idPrefix}Temp`}
                value={values?.temporaryAll}
                hideZero={true}
            />
        </tr>
    );
}

export { ArmorRow, type ArmorRowArgs };
