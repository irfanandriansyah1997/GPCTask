import { removeObjectUndefined } from '@/utils/object.util';

describe('Testing Object Util', () => {
    it('Remove object undefined', () => {
        expect(removeObjectUndefined({
            relative: true,
            inline: false,
            absolute: undefined,
            fixed: null,
            'mt-10': true
        })).toStrictEqual({
            relative: true,
            'mt-10': true
        });
    });
});
