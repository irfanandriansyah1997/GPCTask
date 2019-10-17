import { ComponentClass, SFC } from 'react';

/**
 * Template Item Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description Interface for template
 * @since 2019.09.18
 */
export interface TemplateItemInterface {
    key: string;
    component: ComponentClass<any> | SFC<any>;
}
