import { Validator } from 'prop-types';
import { SFC, createElement } from 'react';
import * as PropTypes from 'prop-types';

import { convertObjectToString } from '@/utils/string.util';
import { removeObjectUndefined } from '@/utils/object.util';
import { defaultFontWeightConst } from '@/shared/const/font.const';
import { AtomsTextPropsInterface } from './interfaces/component.interface';
import { DefaultDynamicObject } from '@/interfaces/general/object.interface';
import { ComponentTextTagType } from '@/interfaces/component/component-tag.interface';
import ColorDefaultVariableStyle, { ColorDefaultKeyVariableStyle } from '@/styled-component/theme/default/color.variable';
import {
    ComponentTextAlignType,
    ComponentColorType,
    ComponentTextStylingType,
    ComponentTextFontWeightType,
    ComponentTextFontFamilyType
} from '@/interfaces/component/component-style.interface';

import './styles/style.scss';

/**
 * Text Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.20
 */
const TextComponent: SFC<AtomsTextPropsInterface> = ({
    tag,
    color,
    align,
    styling,
    children,
    className,
    fontFamily,
    fontWeight,
    isNotRenderDangerous,
    ...res
}: AtomsTextPropsInterface) => {
    /**
     * Getter ClassName
     * @description generate className based on props text
     * @return {string}
     */
    const getClassName = (): string => convertObjectToString({
        [`${className}`]: className,
        'ui-atomic-text': true,
        [`ui-atomic-text--style-${styling}`]: true,
        [`ui-atomic-text--font-${fontFamily}`]: true,
        [`ui-atomic-text--font-weight-${defaultFontWeightConst[fontWeight]}`]: true,
        [`ui-atomic-text--align-${align}`]: true
    });

    /**
     * Getter Style
     * @description generate style for text ex: font color text
     * @return {string}
     */
    const getStyle = (): DefaultDynamicObject => {
        if (color && Object.prototype.hasOwnProperty.call(ColorDefaultVariableStyle, color)) {
            const response: DefaultDynamicObject = {
                color: ColorDefaultVariableStyle[color]
            };

            return removeObjectUndefined(response);
        }

        return {};
    };

    if (isNotRenderDangerous) {
        return createElement(tag, {
            className: getClassName(),
            style: getStyle(),
            children
        });
    }

    return createElement(tag, {
        className: getClassName(),
        style: getStyle(),
        dangerouslySetInnerHTML: { __html: children }
    });
};

TextComponent.propTypes = {
    align: PropTypes.oneOf<ComponentTextAlignType>([
        'center',
        'initital',
        'justify',
        'justify',
        'left',
        'right'
    ]).isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node, PropTypes.string
    ]).isRequired,
    itemType: PropTypes.string,
    itemProp: PropTypes.string,
    className: PropTypes.string,
    tag: PropTypes.oneOf<ComponentTextTagType>([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'b',
        'div',
        'i',
        'p',
        'span'
    ]).isRequired,
    color: PropTypes.oneOf(
        ColorDefaultKeyVariableStyle
    ) as Validator<ComponentColorType>,
    styling: PropTypes.oneOf<ComponentTextStylingType>([
        'caption',
        'default',
        'featured',
        'heading-1',
        'heading-2',
        'heading-3',
        'heading-4',
        'heading-5',
        'heading-6',
        'meta'
    ]).isRequired,
    fontWeight: PropTypes.oneOf<ComponentTextFontWeightType>([
        300,
        400,
        500,
        600,
        700
    ]) as Validator<ComponentTextFontWeightType>,
    fontFamily: PropTypes.oneOf<ComponentTextFontFamilyType>([
        'primary',
        'secondary'
    ]) as Validator<ComponentTextFontFamilyType>,
    onClick: PropTypes.func
};

TextComponent.defaultProps = {
    itemType: undefined,
    itemProp: undefined,
    className: undefined,
    color: undefined,
    fontWeight: 400,
    fontFamily: 'primary',
    onClick: () => {}
};

export default TextComponent;
