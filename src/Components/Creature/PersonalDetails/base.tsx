import React from 'react';
import styled from 'styled-components';
import { smallText } from '../../../styles';

type SubRenderProps<T> = {
    id: string;
    value?: T | null;
};

type PersonalItemProps<T> = SubRenderProps<T> & {
    label: string;
    width: number;
};

const Below = styled.span`
    display: block;
    ${smallText}
    max-width: 100%;
`;

abstract class PersonalEntry<T> extends React.Component<PersonalItemProps<T>> {
    render(): React.JSX.Element {
        const Label = styled.label`
            display: inline-block;
            width: ${this.props.width}mm;
            margin: 0 1mm;
        `;
        const { id, value } = this.props;
        return (
            <Label id={`lbl${this.props.id}`}>
                {this.subRender({
                    id,
                    value,
                })}
                <Below>{this.props.label}</Below>
            </Label>
        );
    }

    abstract subRender(props: SubRenderProps<T>): React.JSX.Element;
}

export { type PersonalItemProps, PersonalEntry };
