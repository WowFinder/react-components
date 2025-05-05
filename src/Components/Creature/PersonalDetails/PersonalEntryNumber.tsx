import styled from 'styled-components';
import { fThousands } from '@wowfinder/ts-utils';
import { borderless, bottomLine } from '../../../styles';
import { PersonalEntry, PersonalItemProps } from './base';

const StyledInput = styled.input`
    display: block;
    ${borderless}
    ${bottomLine}
    max-width: 100%;
    text-align: right;
`;

class PersonalEntryNumber extends PersonalEntry<number> {
    subRender({ id, value }: PersonalItemProps<number>): React.JSX.Element {
        const v = value ?? '';
        return <StyledInput id={`txt${id}`} value={v} readOnly={true} />;
    }
}

const log1000 = Math.log(1000);

function logBase1000(n: number): number {
    return Math.log(n) / log1000;
}

const suffixes = ['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];

class PersonalEntryBigNumber extends PersonalEntry<number> {
    subRender({ id, value }: PersonalItemProps<number>): React.JSX.Element {
        let val = '';
        if (value != null) {
            const maxS = suffixes.length;
            let s = Math.floor(logBase1000(value));
            s = Math.min(s, maxS - 1);
            let v = value / Math.pow(1000, s);
            val = `${fThousands(v)}${suffixes[s]}`;
        }

        return <StyledInput id={`txt${id}`} value={val} readOnly={true} />;
    }
}

export { PersonalEntryNumber, PersonalEntryBigNumber };
