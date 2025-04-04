module.exports = {
    printWidth: 80,
    trailingComma: 'all',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    arrowParens: 'avoid',
    bracketSameLine: true,
    endOfLine: 'crlf',
    importOrder: ['^react$', '^[^./@]', '^@', '^[./]'],
    importOrderSeparation: false,
    importOrderSortSpecifiers: true,
    plugins: ['@trivago/prettier-plugin-sort-imports'],
};

