import { DefaultPropsInterface } from './component.interface';

export interface InputOptionItemInterface {
    id: number | string;
    text: string;
}

export interface InputOptionPropsInterface extends DefaultPropsInterface {
    className?: string;
    item: InputOptionItemInterface[];
    active?: number | string | null;
    label?: string;
    labelIcon?: string;
    onChangeValue: (index: number | string | null) => void;
    error?: string;
    direction?: 'horizontal' | 'vertical';
}

export type InputMultipleOptionsPropsInterface = Omit<InputOptionPropsInterface, 'active' | 'onChangeValue'> & {
    active: any[];
    onChangeValue: (index: number[] | string[]) => void;
    direction?: 'horizontal' | 'vertical';
};

export interface MultipleInputOptionItemInterface {
    item: InputOptionItemInterface[];
    active?: number | string | null;
}

export interface MultipleOptionInterface {
    step: MultipleInputOptionItemInterface[];
}

export interface MultipleOptionPropsInterface extends DefaultPropsInterface, MultipleOptionInterface {
    className?: string;
    label?: string;
    labelIcon?: string;
    onChangeValue: (index: number, value: number | string | null) => void;
    error?: string;
}

export interface FormAliasInterface {
    name: string;
    alias: string;
}
