function plusPrefixed(value: number = 0, isMod: boolean = true): string {
    const prefix = isMod && value >= 0 ? '+' : '';
    return `${prefix}${value}`;
}

export { plusPrefixed };
