const colors = {
    transparent: 'transparent',
    white: '#fff',
    gray6: '#666',
    gray3: '#333',
    black: '#000',
    link: '#00f',
    linkBackground: '#ccf',
} as const;
Object.freeze(colors);

const reverseColors = `
        color: ${colors.white};
        background-color: ${colors.black};
`;

const linkColors = `
        color: ${colors.link};
        background-color: ${colors.linkBackground};
`;

const mainColor = `
    color: ${colors.black};
    background: ${colors.white};
`;

const autoReverseColors = `
    ${reverseColors}
    @media "print" {
        ${mainColor}
    }
`;

export { colors, reverseColors, linkColors, mainColor, autoReverseColors };
