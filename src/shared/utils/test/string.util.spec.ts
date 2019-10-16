import { convert_obj_to_string } from '@/utils/string.util';

describe('Testing String Util', () => {
    it('Convert Object To String', () => {
        expect(convert_obj_to_string({
            relative: true,
            inline: false,
            absolute: undefined,
            'mt-10': true
        })).toBe('relative mt-10');
    });
});
