import {
    componentThemeTranslator,
    componentImageTypeTranslator,
    componentImageStrecthTypeTranslator
} from '@/utils/theme.utils';

describe('Theme Utils', () => {
    it('Get text based on component theme enum', () => {
        const testCase: any[] = [
            {
                input: 1,
                output: 'primary'
            },
            {
                input: 2,
                output: 'secondary'
            },
            {
                input: 3,
                output: 'success'
            },
            {
                input: 4,
                output: 'warning'
            },
            {
                input: 5,
                output: 'danger'
            },
            {
                input: 6,
                output: 'info'
            },
            {
                input: 7,
                output: 'control'
            },
            {
                input: 8,
                output: 'basic'
            }
        ];

        testCase.forEach((item: any) => {
            expect(componentThemeTranslator(item.input)).toBe(item.output);
        });
    });

    it('Get text based on component image type enum', () => {
        const testCase: any[] = [
            {
                input: 0,
                output: 'circle'
            },
            {
                input: 1,
                output: 'square'
            },
            {
                input: 2,
                output: 'rounded'
            },
            {
                input: 3,
                output: 'rounded-top'
            },
            {
                input: 4,
                output: 'rounded-bottom'
            },
            {
                input: 5,
                output: 'rounded-left'
            },
            {
                input: 6,
                output: 'rounded-right'
            }
        ];

        testCase.forEach((item: any) => {
            expect(componentImageTypeTranslator(item.input)).toBe(item.output);
        });
    });

    it('Get text based on component image stretch type enum', () => {
        const testCase: any[] = [
            {
                input: 0,
                output: 'contain'
            },
            {
                input: 1,
                output: 'cover'
            },
            {
                input: 2,
                output: 'fill'
            },
            {
                input: 3,
                output: 'initial'
            }
        ];

        testCase.forEach((item: any) => {
            expect(componentImageStrecthTypeTranslator(item.input)).toBe(
                item.output
            );
        });
    });
});
