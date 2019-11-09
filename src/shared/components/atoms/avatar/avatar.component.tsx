import { SFC } from 'react';
import * as React from 'react';
import { Validator } from 'prop-types';
import * as PropTypes from 'prop-types';

import ImageViewComponent from '../image-view/image-view.component';
import { AtomsAvatarPropsInterface } from './interfaces/component.interface';
import { SizeTypeImage } from '@/interfaces/component/component-image.interface';
import { ComponentImageStrecthTypeEnum, ComponentImageTypeEnum } from '@/interfaces/component/component-image.enum';

/**
 * AvatarComponent Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.18
 */
const AvatarComponent: SFC<AtomsAvatarPropsInterface> = ({
    size,
    ...resProps
}: AtomsAvatarPropsInterface) => {
    /**
     * Getter Size
     * @description generate styling width and height for avatar component
     * @return {DefaultDynamicObject}
     */
    const getSize = (): number => {
        if (size === 'small') {
            return 24;
        } if (size === 'default') {
            return 32;
        } if (size === 'big') {
            return 48;
        }

        return size as number;
    };

    return (
        <ImageViewComponent
            {...resProps}
            width={getSize()}
            height={getSize()}
            objectFit={ComponentImageStrecthTypeEnum.COVER}
        />
    );
};

AvatarComponent.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
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
    size: PropTypes.oneOfType([
        PropTypes.oneOf([
            'small',
            'default',
            'big'
        ]),
        PropTypes.number
    ]) as Validator<SizeTypeImage>
};

AvatarComponent.defaultProps = {
    className: undefined,
    onClick: () => {},
    type: ComponentImageTypeEnum.SQUARE,
    itemProp: undefined,
    shadow: false,
    size: 'default'
};

export default AvatarComponent;
