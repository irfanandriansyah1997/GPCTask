/**
 * Font Theme Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.09.16
 */
export interface FontThemeInterface {
    fontStyle: FontStyleThemeInterface;
    fontSize: FontSizeThemeInterface;
    fontWeight: FontWeightThemeInterface;
}

/**
 * Font Style Theme Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.09.16
 */
export interface FontStyleThemeInterface {
    primary: string;
    secondary: string;
}

/**
 * Font Size Theme Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.09.16
 */
export interface FontSizeThemeInterface {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    featured: string;
}

/**
 * Font Size Theme Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.09.16
 */
export interface FontWeightThemeInterface {
    hairline: number;
    thin: number;
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
    black: number;
}
