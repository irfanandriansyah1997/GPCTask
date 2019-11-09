import { DefaultPropsInterface } from '@/interfaces/component/component.interface';
import {
    ComponentTextStylingType,
    ComponentTextFontWeightType,
    ComponentTextAlignType,
    ComponentTextFontFamilyType,
    ComponentColorInterface
} from '@/interfaces/component/component-style.interface';
import { ComponentTextTagType } from '@/interfaces/component/component-tag.interface';

/**
 * Atom Text Component Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.20
 */
export interface AtomsTextPropsInterface
    extends DefaultPropsInterface,
        ComponentColorInterface {
    itemType?: string;
    itemProp?: string;
    className?: string;
    tag: ComponentTextTagType;
    align: ComponentTextAlignType;
    isNotRenderDangerous?: boolean;
    styling: ComponentTextStylingType;
    fontWeight: ComponentTextFontWeightType;
    fontFamily?: ComponentTextFontFamilyType;
    onClick?: () => void;
}
