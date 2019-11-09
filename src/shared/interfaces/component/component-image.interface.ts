import { DefaultPropsInterface } from './component.interface';
import { ComponentImageStrecthTypeEnum, ComponentImageTypeEnum } from './component-image.enum';

export type SizeTypeImage = 'small' | 'default' | 'big' | number;

/**
 * Generate Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2019.10.18
 */
export interface DefaultImageComponentProps extends DefaultPropsInterface {
    src: string;
    alt: string;
    onClick?: () => void;
    objectFit: ComponentImageStrecthTypeEnum;
    type: ComponentImageTypeEnum;
    itemProp?: string;
    shadow?: boolean;
    width?: number;
    height?: number;
}
