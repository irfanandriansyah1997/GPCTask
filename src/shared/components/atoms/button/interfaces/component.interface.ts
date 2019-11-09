import { DefaultPropsInterface } from '@/interfaces/component/component.interface';
import { ComponentButtonSizeType, ComponentPlaceIconComponent, ComponentTextStylingType } from '@/interfaces/component/component-style.interface';
import { ComponentThemeEnum } from '@/interfaces/component/component-theme.enum';
import { ComponentLinkTagType } from '@/interfaces/component/component-tag.interface';
import { DefaultDynamicObject } from '@/interfaces/general/object.interface';


/**
 * Type component state in button component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.20
 */
export type AtomButtonStateType =
    | 'fill'
    | 'outline'
    | 'ghost';

/**
 * Type component type for tag button
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.20
 */
export type AtomButtonType =
    | 'submit'
    | 'reset'
    | 'button';

/**
 * Type component size for generate classname
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.20
 */
export type AtomButtonSizeValue = {[key in ComponentButtonSizeType]: ComponentTextStylingType};

/**
 * Type component icon size for generate classname
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.20
 */
export type AtomButtonIconSizeValue = {[key in ComponentButtonSizeType]: number};

/**
 * Type component size for generate classname
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.20
 */
export type AtomButtonPaddingValue = {[key in ComponentButtonSizeType]: DefaultDynamicObject};


/**
 * Atom Button Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.25
 */
export interface AtomButtonPropsInterface extends DefaultPropsInterface {
    to?: string;
    icon?: string;
    type?: AtomButtonType;
    tag?: ComponentLinkTagType;
    state?: AtomButtonStateType;
    styling?: ComponentThemeEnum;
    isNotRenderDangerous?: boolean;
    size?: ComponentButtonSizeType;
    iconPositon?: ComponentPlaceIconComponent;
    onClick?: () => void;
}
