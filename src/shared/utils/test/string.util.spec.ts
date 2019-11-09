import { convertObjectToString, trimString } from '@/utils/string.util';

describe('Testing String Util', () => {
    it('Convert Object To String', () => {
        expect(convertObjectToString({
            relative: true,
            inline: false,
            absolute: undefined,
            'mt-10': true
        })).toBe('relative mt-10');
    });

    it('Trim String', () => {
        expect(
            trimString(
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit adipisci voluptatibus inventore repellat, nemo sint odit voluptatem tempore velit, rerum quaerat. Harum molestiae placeat nemo iste adipisci dolorum dolorem aspernatur!',
                100
            )
        ).toBe('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit adipisci voluptatibus inventore r...');
    });

    it('Trim String with same length', () => {
        expect(
            trimString(
                'Lorem ipsum'
            )
        ).toBe('Lorem ipsum');
    });
});
