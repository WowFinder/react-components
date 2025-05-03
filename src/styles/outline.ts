// TODO: Use a provider and context to handle this (https://github.com/WowFinder/react-components/issues/188)
// const debug = (process.env.NODE_ENV ?? '') === 'development';

interface DebugOutlineArgs {
    selector?: string;
    width?: string;
    style?: string;
    color?: string;
}
const debugOutline = ({
    selector = '&',
    width = '1px',
    style = 'dashed',
    color = '#ccc',
}: DebugOutlineArgs): string => {
    const debug = process.env.NODE_ENV === 'development';
    return debug
        ? `@media screen {
        ${selector} {
            outline: ${width} ${style} ${color};
        }
    }`
        : '';
};

export { debugOutline };
