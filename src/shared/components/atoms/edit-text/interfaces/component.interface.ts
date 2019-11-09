import { DefaultPropsInterface } from '@/interfaces/component/component.interface';
import { ComponentThemeEnum } from '@/interfaces/component/component-theme.enum';
import { ComponentInputTagType } from '@/interfaces/component/component-tag.interface';

/**
 * Edit text addon type
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.18
 */
export type AtomEditTextAddon = 'icon' | 'text';

/**
 * Edit text type
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.18
 */
export type AtomEditTextType =
    | 'text'
    | 'number'
    | 'password'
    | 'email'
    | 'tel'
    | 'url';

export interface AtomEditTextOnChangeInterface {
    target: HTMLInputElement | HTMLTextAreaElement;
}

/**
 * Edit text props type
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.18
 */
export interface AtomEditTextPropsInterface extends DefaultPropsInterface {
    name: string;
    label?: string;
    error?: string;
    caption?: string;
    className?: string;
    addOnText?: string;
    required?: boolean;
    withoutMargin?: boolean;
    placeholder?: string;
    type?: AtomEditTextType;
    addOn?: AtomEditTextAddon;
    value: string | number;
    tag: ComponentInputTagType;
    styling?: ComponentThemeEnum;
    onClick?: (event: any) => void;
    onChange?: (event: AtomEditTextOnChangeInterface) => void;
}

/**
 * Edit text state interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.24
 */
export interface AtomEditTextStateInterface {
    focus: boolean;
}
