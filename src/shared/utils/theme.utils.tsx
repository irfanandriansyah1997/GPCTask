import { ComponentThemeEnum } from '@/interfaces/component/component-theme.enum';
import { ComponentImageTypeEnum, ComponentImageStrecthTypeEnum } from '@/interfaces/component/component-image.enum';

/**
 * Component Theme Translator
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.18
 * @param {ComponentThemeEnum} Type - type theme
 */
export const componentThemeTranslator = (type: ComponentThemeEnum): string => {
    const theme: any = {
        [ComponentThemeEnum.PRIMARY]: 'primary',
        [ComponentThemeEnum.SECONDARY]: 'secondary',
        [ComponentThemeEnum.SUCCESS]: 'success',
        [ComponentThemeEnum.WARNING]: 'warning',
        [ComponentThemeEnum.DANGER]: 'danger',
        [ComponentThemeEnum.INFO]: 'info',
        [ComponentThemeEnum.CONTROL]: 'control',
        [ComponentThemeEnum.BASIC]: 'basic',
        [ComponentThemeEnum.DEFAULT]: 'default'
    };

    return theme[type as any];
};


/**
 * Component Image Type Translator
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.18
 * @param {ComponentImageTypeEnum} Type - type image
 */
export const componentImageTypeTranslator = (type: ComponentImageTypeEnum): string => {
    const theme: any = {
        [ComponentImageTypeEnum.CIRCLE]: 'circle',
        [ComponentImageTypeEnum.SQUARE]: 'square',
        [ComponentImageTypeEnum.ROUNDED]: 'rounded',
        [ComponentImageTypeEnum.ROUNDED_TOP]: 'rounded-top',
        [ComponentImageTypeEnum.ROUNDED_BOTTOM]: 'rounded-bottom',
        [ComponentImageTypeEnum.ROUNDED_LEFT]: 'rounded-left',
        [ComponentImageTypeEnum.ROUNDED_RIGHT]: 'rounded-right'
    };

    return theme[type as any];
};

/**
 * Component Image Type Translator
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.18
 * @param {ComponentImageStrecthTypeEnum} Type - type strecth image
 */
export const componentImageStrecthTypeTranslator = (type: ComponentImageStrecthTypeEnum): string => {
    const theme: any = {
        [ComponentImageStrecthTypeEnum.COVER]: 'cover',
        [ComponentImageStrecthTypeEnum.CONTAIN]: 'contain',
        [ComponentImageStrecthTypeEnum.FILL]: 'fill',
        [ComponentImageStrecthTypeEnum.INITIAL]: 'initial'
    };

    return theme[type as any];
};
