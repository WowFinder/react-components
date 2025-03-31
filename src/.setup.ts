import fs from 'fs';
import path from 'path';

// DO NOT DELETE THIS FILE
// This file is used by build system to build a clean npm package with the compiled js files in the root of the package.
// It will not be included in the npm package.

/* istanbul ignore next test script - not testable via jest */
function writeBufferSync(filePath: string[], raw: string): void {
    fs.writeFileSync(path.resolve(__dirname, ...filePath), raw);
}

/* istanbul ignore next test script - not testable via jest */
function copyFromParentSync(baseName: string): void {
    fs.copyFileSync(
        path.resolve(__dirname, '..', baseName),
        path.resolve(__dirname, baseName),
    );
}

/* istanbul ignore next test script - not testable via jest */
function main(): void {
    const source = fs
        .readFileSync(path.resolve(__dirname, '..', 'package.json'))
        .toString('utf-8');
    const sourceObj = JSON.parse(source);
    sourceObj.scripts = {};
    sourceObj.devDependencies = {};
    if (sourceObj.main.startsWith('dist/')) {
        sourceObj.main = sourceObj.main.slice(5);
    }
    if (sourceObj.types.startsWith('dist/')) {
        sourceObj.types = sourceObj.types.slice(5);
    }
    writeBufferSync(['package.json'], JSON.stringify(sourceObj, null, 2));
    writeBufferSync(['version.txt'], `${sourceObj?.version ?? ''}`);
    writeBufferSync(['yarn.lock'], '');
    copyFromParentSync('LICENSE');
    copyFromParentSync('README.md');
    copyFromParentSync('.npmignore');
}

/* istanbul ignore next test script - not testable under CI context */
function cleanup(): void {
    fs.unlinkSync(path.resolve(__dirname, 'version.txt'));
    fs.unlinkSync(path.resolve(__dirname, 'yarn.lock'));
    fs.unlinkSync(path.resolve(__dirname, 'LICENSE'));
    fs.unlinkSync(path.resolve(__dirname, 'README.md'));
    fs.unlinkSync(path.resolve(__dirname, '.npmignore'));
    fs.unlinkSync(path.resolve(__dirname, 'package.json'));
}

main();

export { cleanup };
