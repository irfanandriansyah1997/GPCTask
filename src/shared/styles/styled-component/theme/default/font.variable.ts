/**
 * Font Variable
 * @author Irfan Andriansyah <irfan@99.co>
 * @description register all style and size typography
 * @since 2019.09.16
 */

import { FontThemeInterface } from '@/styled-component/interfaces/font-theme.interface';

const FontDefaultVariableStyle: FontThemeInterface = {
    fontStyle: {
        primary: '\'Avenir Next\', sans-serif',
        secondary: '\'Roboto\', sans-serif'
    },
    fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '32px',
        '4xl': '36px',
        '5xl': '48px',
        featured: '28px'
    },
    fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900
    }
};

export default FontDefaultVariableStyle;
