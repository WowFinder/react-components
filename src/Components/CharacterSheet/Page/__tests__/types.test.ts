import { expectStringEnum } from '@wowfinder/ts-enums';
import { PageType } from '../types';

describe('types', () => {
    describe('PageType', () => {
        it('should be a string enum', () => {
            expectStringEnum(PageType);
        });
    });
});
