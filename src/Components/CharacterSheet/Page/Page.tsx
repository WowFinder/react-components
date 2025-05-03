import { ReactNode } from 'react';
import styled from 'styled-components';
import {
    baseFont,
    borderless,
    debugOutline,
    mainColor,
    printableBottomBorder,
} from '../../../styles';

type PageStyledProps = {
    visible: boolean;
};

const PageStyled = styled.section<PageStyledProps>`
    ${baseFont}
    width: 190mm;
    height: 277mm;
    margin: 10mm;
    padding: 0;
    ${mainColor}
    ${borderless}
    display: ${(props: PageStyledProps) => (props.visible ? 'block' : 'none')};
    ${printableBottomBorder('input, select')}
    @media print {
        -webkit-print-color-adjust: exact;
        page-break-after: always;
        margin: 0;
        &:last-child {
            page-break-after: avoid;
        }
        select {
            -webkit-appearance: none;
            appearance: none;
        }
    }
    ${debugOutline({})}
`;

type PageProps = {
    key: string;
    id: string;
    visible?: boolean;
    children: ReactNode;
};

function Page({ id, children, visible = true }: PageProps): React.JSX.Element {
    return (
        <PageStyled visible={visible} id={`page${id}`}>
            {children}
        </PageStyled>
    );
}

export default Page;
