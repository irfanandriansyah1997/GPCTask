import { ReactNode } from 'react';

import { DefaultPropsInterface } from '@/interfaces/component/component.interface';
import { ComponentColorInterface } from '@/interfaces/component/component-style.interface';

/**
 * Atom Icon Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @description interface definition for icon component
 * @since 2019.10.18
 */
export type AtomsIconPropsInterface = Omit<
    DefaultPropsInterface,
    'children'
> & {
    size?: string | number;
    onClick?: () => void;
    children: ReactNode;
} & ComponentColorInterface;
