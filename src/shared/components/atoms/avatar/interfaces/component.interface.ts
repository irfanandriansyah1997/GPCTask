import { DefaultImageComponentProps, SizeTypeImage } from '@/interfaces/component/component-image.interface';

/**
 * Atom Avatar Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description interface for definition avatar props component
 * @since 2019.10.18
 */
export type AtomsAvatarPropsInterface = Omit<DefaultImageComponentProps, 'width' | 'height' | 'objectFit'> & {
    size?: SizeTypeImage;
};
