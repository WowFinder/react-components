import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ColumnsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    column-gap: 3mm;
`;

const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 0;
    flex-grow: 1;
    flex: 1;
    max-width: 50%;
    & > *,
    & > h1 {
        margin-top: 5mm;
    }
    & > h1 {
        margin-bottom: -5mm;
    }
    & > *:first-child {
        margin-top: 0;
    }
`;

const Column: React.FC<{
    id: string;
    children: ReactNode;
}> = ({ id, children }) => (
    <ColumnDiv id={`column-${id}`}>{children}</ColumnDiv>
);

type ColumnsProps = {
    readonly id: string;
    readonly columns: {
        readonly id: string;
        readonly children?: React.ReactNode;
    }[];
};

function Columns({ id, ...props }: ColumnsProps): React.JSX.Element {
    return (
        <ColumnsContainer id={id}>
            {props.columns.map(c => (
                <Column key={c.id} id={c.id}>
                    {c.children}
                </Column>
            ))}
        </ColumnsContainer>
    );
}

export { type ColumnsProps, Columns };
