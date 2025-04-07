import { expectExactExportFCs } from '../../../../__tests__/helpers';
import * as HitPoints from '../index';

describe('Creature HitPoints components index', () => {
    it('should export all the components', () => {
        expectExactExportFCs(
            HitPoints,
            HitPoints.HitPoints,
            HitPoints.InlineHitPoints,
        );
    });
});
