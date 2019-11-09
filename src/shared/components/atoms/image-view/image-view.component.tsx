import { SFC } from 'react';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Validator } from 'prop-types';

import { convertObjectToString } from '@/utils/string.util';
import { removeObjectUndefined } from '@/utils/object.util';
import { DefaultDynamicObject } from '@/interfaces/general/object.interface';
import { DefaultImageComponentProps } from '@/interfaces/component/component-image.interface';
import { componentImageTypeTranslator, componentImageStrecthTypeTranslator } from '@/utils/theme.utils';
import { ComponentImageStrecthTypeEnum, ComponentImageTypeEnum } from '@/interfaces/component/component-image.enum';

import './styles/style.scss';

/**
 * ImageView Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.18
 */
const ImageViewComponent: SFC<DefaultImageComponentProps> = ({
    alt,
    className,
    objectFit,
    type,
    shadow,
    width,
    height,
    ...resProps
}: DefaultImageComponentProps) => {
    /**
     * Getter ClassName
     * @description generate className based on props image
     * @return {string}
     */
    const getClassName = (): string => convertObjectToString({
        [`${className}`]: className !== undefined,
        'ui-atomic-image': true,
        'ui-atomic-image--shadow': shadow,
        [`ui-atomic-image--type-${componentImageTypeTranslator(type)}`]: true,
        [`ui-atomic-image--object-fit-${componentImageStrecthTypeTranslator(objectFit)}`]: true
    });

    /**
     * Getter Style
     * @description generate styling css for image component
     * @return {DefaultDynamicObject}
     */
    const getStyle = (): DefaultDynamicObject => {
        const style: DefaultDynamicObject = removeObjectUndefined({
            width,
            height
        });

        return {
            width: Object.prototype.hasOwnProperty.call(style, 'width') ? `${style.width}px` : undefined,
            height: Object.prototype.hasOwnProperty.call(style, 'height') ? `${style.height}px` : undefined
        };
    };

    return (
        <img
            {...resProps}
            alt={alt}
            style={getStyle()}
            role="presentation"
            className={getClassName()}
            onKeyDown={resProps.onClick}
        />
    );
};

ImageViewComponent.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    objectFit: PropTypes.oneOf<ComponentImageStrecthTypeEnum>([
        ComponentImageStrecthTypeEnum.CONTAIN,
        ComponentImageStrecthTypeEnum.COVER,
        ComponentImageStrecthTypeEnum.FILL,
        ComponentImageStrecthTypeEnum.INITIAL
    ]) as Validator<ComponentImageStrecthTypeEnum>,
    type: PropTypes.oneOf<ComponentImageTypeEnum>([
        ComponentImageTypeEnum.CIRCLE,
        ComponentImageTypeEnum.SQUARE,
        ComponentImageTypeEnum.ROUNDED,
        ComponentImageTypeEnum.ROUNDED_BOTTOM,
        ComponentImageTypeEnum.ROUNDED_LEFT,
        ComponentImageTypeEnum.ROUNDED_TOP,
        ComponentImageTypeEnum.ROUNDED_RIGHT
    ]) as Validator<ComponentImageTypeEnum>,
    itemProp: PropTypes.string,
    shadow: PropTypes.bool,
    width: PropTypes.number,
    height: PropTypes.number
};

ImageViewComponent.defaultProps = {
    className: undefined,
    objectFit: ComponentImageStrecthTypeEnum.INITIAL,
    onClick: () => {},
    type: ComponentImageTypeEnum.SQUARE,
    itemProp: undefined,
    shadow: false,
    width: undefined,
    height: undefined
};

export default ImageViewComponent;
