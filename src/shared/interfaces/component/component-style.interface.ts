// ColorDefaultVariableStyle
import ColorDefaultVariableStyle from '@/styled-component/theme/default/color.variable';
import { FontStyleThemeInterface } from '@/styled-component/interfaces/font-theme.interface';

/**
 * Type component for font family type
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.20
 */
export type ComponentTextFontFamilyType = keyof FontStyleThemeInterface;

/**
 * Type component for color type
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.20
 */
export type ComponentColorType = keyof typeof ColorDefaultVariableStyle;

/**
 * Type component for styling
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.20
 */
export type ComponentTextStylingType =
    | 'heading-1'
    | 'heading-2'
    | 'heading-3'
    | 'heading-4'
    | 'heading-5'
    | 'heading-6'
    | 'default'
    | 'featured'
    | 'meta'
    | 'caption';

/**
 * Type component for font weight type
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.20
 */
export type ComponentTextFontWeightType = 300 | 400 | 500 | 600 | 700;

/**
 * Type component for font weight type
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.20
 */
export type ComponentTextAlignType =
    | 'center'
    | 'left'
    | 'right'
    | 'initital'
    | 'justify';

/**
 * Interface for color selector
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.21
 */
export interface ComponentColorInterface {
    color?: ComponentColorType;
}

/**
 * Type component size for button and link component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.20
 */
export type ComponentButtonSizeType =
    | 'giant'
    | 'large'
    | 'medium'
    | 'small'
    | 'tiny';


/**
 * Position icon is pre content or post content
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.20
 */
export type ComponentPlaceIconComponent =
    | 'pre'
    | 'post';
