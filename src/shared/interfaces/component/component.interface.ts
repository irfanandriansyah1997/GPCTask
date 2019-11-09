import { ReactNode } from 'react';

/**
 * Default Props Component Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.09.18
 */
export interface DefaultPropsInterface {
    children?: ReactNode | string | Element;
    className?: string;
}
