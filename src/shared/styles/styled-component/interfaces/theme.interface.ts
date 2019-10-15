import { ColorThemeInterface } from './color-theme.interfaces';
import { FontThemeInterface } from './font-theme.interface';

/**
 * Theme Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description defintion theme interface
 * @since 2019.09.16
 */
export interface ThemeInterface {
    color: ColorThemeInterface;
    font: FontThemeInterface;
}
