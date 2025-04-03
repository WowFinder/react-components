import { plusPrefixed } from '../../helpers';

type CommonValue = number | string;

type CellArgsStrict<T> = {
    readonly id: string;
    readonly value: T;
    readonly hideZero?: boolean;
    readonly classes?: string[];
};

type CellArgs<T> = Readonly<Partial<CellArgsStrict<T>>>;

function mkClassName(...classes: string[]): { className?: string } {
    return classes.length > 0 ? { className: classes.join(' ') } : {};
}

function InputH({
    id,
    value,
    hideZero = false,
    classes = [],
}: CellArgs<CommonValue>): React.JSX.Element {
    const zeroDisplayValue = hideZero ? '' : 0;
    const val = value != null ? value || zeroDisplayValue : '';
    const className = mkClassName(...classes);
    return (
        <th {...className}>
            <input
                data-testid="InputH"
                {...(id ? { id } : {})}
                value={val}
                readOnly={true}
            />
        </th>
    );
}

function InputCell({
    id,
    value,
    hideZero = false,
    classes = [],
}: CellArgs<CommonValue>): React.JSX.Element {
    const zeroDisplayValue = hideZero ? '' : 0;
    const val = value != null ? value || zeroDisplayValue : '';
    const className = mkClassName(...classes);
    return (
        <td {...className}>
            <input
                data-testid="InputCell"
                {...(id ? { id } : {})}
                value={val}
                readOnly={true}
            />
        </td>
    );
}

type ModCellProps = Readonly<
    Pick<CellArgs<number>, 'id' | 'value' | 'hideZero'>
>;

function ModCell({ id, value, hideZero }: ModCellProps): React.JSX.Element {
    const shouldShow = !!value || !hideZero;
    const formattedValue = shouldShow ? plusPrefixed(value) : '';
    return <InputCell id={id} value={formattedValue} hideZero={hideZero} />;
}

function CheckCell({
    id,
    value,
    classes = [],
}: CellArgs<boolean>): React.JSX.Element {
    const className = [...classes, 'check-box'].join(' ');
    return (
        <td className={className}>
            <input
                data-testid="CheckCell"
                type="checkbox"
                {...(id ? { id } : {})}
                checked={value}
                readOnly={true}
            />
        </td>
    );
}

type InputSuffixedCellProps = Readonly<{
    id: string;
    value: number | string;
    suffix: string;
}>;

function InputSuffixedCell({
    id,
    value,
    suffix,
}: InputSuffixedCellProps): React.JSX.Element {
    return (
        <td>
            <input
                data-testid="InputSuffixedCell"
                id={id}
                value={value}
                readOnly={true}
            />
            <span data-testid="InputSuffixedCell-span" className="suffix">
                {suffix}
            </span>
        </td>
    );
}

export {
    InputH,
    InputCell,
    ModCell,
    CheckCell,
    InputSuffixedCell,
    type CellArgs,
    type CellArgsStrict,
    type ModCellProps,
};
