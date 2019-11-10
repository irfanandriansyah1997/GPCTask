import { DefaultPropsInterface } from './component.interface';

/**
 * Default Menut Item Menu Item Component Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2019.10.19
 */
export interface DefaultMenuItemComponentProps extends DefaultPropsInterface {
    link: string;
    exact?: boolean;
    icon?: boolean | string;
    type: 'child' | 'default';
    label?: string;
}
