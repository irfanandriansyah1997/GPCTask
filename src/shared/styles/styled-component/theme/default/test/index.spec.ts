import DefaultTheme from '@/styled-component/theme/default';

describe('Testing theme variable', () => {
    it('test font variable', () => {
        // Font Style
        expect(DefaultTheme.font.fontStyle.primary).toBe('\'Avenir Next\', sans-serif');
        expect(DefaultTheme.font.fontStyle.secondary).toBe('\'Roboto\', sans-serif');

        // Font Size
        expect(DefaultTheme.font.fontSize.xs).toBe('12px');
        expect(DefaultTheme.font.fontSize.sm).toBe('14px');
        expect(DefaultTheme.font.fontSize.base).toBe('16px');
        expect(DefaultTheme.font.fontSize.lg).toBe('18px');
        expect(DefaultTheme.font.fontSize.xl).toBe('20px');
        expect(DefaultTheme.font.fontSize['2xl']).toBe('24px');
        expect(DefaultTheme.font.fontSize['3xl']).toBe('32px');
        expect(DefaultTheme.font.fontSize['4xl']).toBe('36px');
        expect(DefaultTheme.font.fontSize['5xl']).toBe('48px');
        expect(DefaultTheme.font.fontSize.featured).toBe('28px');

        // Font Weight
        expect(DefaultTheme.font.fontWeight.hairline).toBe(100);
        expect(DefaultTheme.font.fontWeight.thin).toBe(200);
        expect(DefaultTheme.font.fontWeight.light).toBe(300);
        expect(DefaultTheme.font.fontWeight.normal).toBe(400);
        expect(DefaultTheme.font.fontWeight.medium).toBe(500);
        expect(DefaultTheme.font.fontWeight.semibold).toBe(600);
        expect(DefaultTheme.font.fontWeight.bold).toBe(700);
        expect(DefaultTheme.font.fontWeight.extrabold).toBe(800);
        expect(DefaultTheme.font.fontWeight.black).toBe(900);
    });

    it('test font variable', () => {
        // Color
        expect(DefaultTheme.color.white).toBe('#fff');
        expect(DefaultTheme.color.black).toBe('#000');
        expect(DefaultTheme.color.primary).toBe('#216bff');
        expect(DefaultTheme.color.secondary).toBe('#ff72b6');
        expect(DefaultTheme.color.heading).toBe('#222b45');
        expect(DefaultTheme.color.text).toBe('#8f9bb3');
        expect(DefaultTheme.color.success).toBe('#50bf31');
        expect(DefaultTheme.color.info).toBe('#39a0f9');
        expect(DefaultTheme.color.warning).toBe('#ffc021');
        expect(DefaultTheme.color.danger).toBe('#ff4f38');
        expect(DefaultTheme.color.primary100).toBe('#d2e7ff');
        expect(DefaultTheme.color.primary200).toBe('#a6ccff');
        expect(DefaultTheme.color.primary300).toBe('#79afff');
        expect(DefaultTheme.color.primary400).toBe('#5895ff');
        expect(DefaultTheme.color.primary600).toBe('#1852db');
        expect(DefaultTheme.color.primary700).toBe('#103cb7');
        expect(DefaultTheme.color.primary800).toBe('#0a2a93');
        expect(DefaultTheme.color.primary900).toBe('#061d7a');
        expect(DefaultTheme.color.secondary100).toBe('#ffe2e5');
        expect(DefaultTheme.color.secondary200).toBe('#ffc6d0');
        expect(DefaultTheme.color.secondary300).toBe('#ffaac2');
        expect(DefaultTheme.color.secondary400).toBe('#ff95bd');
        expect(DefaultTheme.color.secondary600).toBe('#db53a2');
        expect(DefaultTheme.color.secondary700).toBe('#b7398f');
        expect(DefaultTheme.color.secondary800).toBe('#93247b');
        expect(DefaultTheme.color.secondary900).toBe('#7a156e');
        expect(DefaultTheme.color.success100).toBe('#e9fbd6');
        expect(DefaultTheme.color.success200).toBe('#cff8ae');
        expect(DefaultTheme.color.success300).toBe('#a8eb82');
        expect(DefaultTheme.color.success400).toBe('#83d85f');
        expect(DefaultTheme.color.success600).toBe('#36a423');
        expect(DefaultTheme.color.success700).toBe('#208918');
        expect(DefaultTheme.color.success800).toBe('#0f6e0f');
        expect(DefaultTheme.color.success900).toBe('#095b0f');
        expect(DefaultTheme.color.info100).toBe('#d7f4fe');
        expect(DefaultTheme.color.info200).toBe('#afe6fe');
        expect(DefaultTheme.color.info300).toBe('#88d3fd');
        expect(DefaultTheme.color.info400).toBe('#6abffb');
        expect(DefaultTheme.color.info600).toBe('#297dd6');
        expect(DefaultTheme.color.info700).toBe('#1c5db3');
        expect(DefaultTheme.color.info800).toBe('#124190');
        expect(DefaultTheme.color.info900).toBe('#0a2e77');
        expect(DefaultTheme.color.warning100).toBe('#fff7d2');
        expect(DefaultTheme.color.warning200).toBe('#ffeda6');
        expect(DefaultTheme.color.warning300).toBe('#ffe179');
        expect(DefaultTheme.color.warning400).toBe('#ffd458');
        expect(DefaultTheme.color.warning600).toBe('#db9e18');
        expect(DefaultTheme.color.warning700).toBe('#b77e10');
        expect(DefaultTheme.color.warning800).toBe('#93600a');
        expect(DefaultTheme.color.warning900).toBe('#7a4b06');
        expect(DefaultTheme.color.danger100).toBe('#ffe8d7');
        expect(DefaultTheme.color.danger200).toBe('#ffcbaf');
        expect(DefaultTheme.color.danger300).toBe('#ffa887');
        expect(DefaultTheme.color.danger400).toBe('#ff8669');
        expect(DefaultTheme.color.danger600).toBe('#db2f28');
        expect(DefaultTheme.color.danger700).toBe('#b71c23');
        expect(DefaultTheme.color.danger800).toBe('#931122');
        expect(DefaultTheme.color.danger900).toBe('#7a0a21');
        expect(DefaultTheme.color.heading100).toBe('#fff');
        expect(DefaultTheme.color.heading200).toBe('#f7f9fc');
        expect(DefaultTheme.color.heading300).toBe('#edf1f7');
        expect(DefaultTheme.color.heading400).toBe('#e4e9f2');
        expect(DefaultTheme.color.heading500).toBe('#c5cee0');
        expect(DefaultTheme.color.heading600).toBe('#8f9bb3');
        expect(DefaultTheme.color.heading700).toBe('#2e3a59');
        expect(DefaultTheme.color.heading900).toBe('#192038');
        expect(DefaultTheme.color.heading1000).toBe('#151a30');
        expect(DefaultTheme.color.heading1100).toBe('#101426');
    });
});
