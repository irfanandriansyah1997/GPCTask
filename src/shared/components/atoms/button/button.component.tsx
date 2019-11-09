/* eslint-disable react/button-has-type */

import { SFC } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as PropTypes from 'prop-types';

import IconComponent from '@/atoms/icon/icon.component';
import TextComponent from '@/atoms/text/text.component';
import { convertObjectToString } from '@/utils/string.util';
import { componentThemeTranslator } from '@/utils/theme.utils';
import { ComponentThemeEnum } from '@/interfaces/component/component-theme.enum';
import { ComponentLinkTagType } from '@/interfaces/component/component-tag.interface';
import {
    AtomButtonPropsInterface,
    AtomButtonSizeValue,
    AtomButtonStateType,
    AtomButtonType,
    AtomButtonPaddingValue,
    AtomButtonIconSizeValue
} from './interfaces/component.interface';
import { ComponentButtonSizeType, ComponentTextStylingType, ComponentPlaceIconComponent } from '@/interfaces/component/component-style.interface';
import { DefaultDynamicObject } from '@/interfaces/general/object.interface';

import './style/style.scss';
/**
 * Button Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.25
 */
const ButtonComponent: SFC<AtomButtonPropsInterface> = ({
    to,
    tag,
    size,
    icon,
    state,
    styling,
    children,
    iconPositon,
    isNotRenderDangerous,
    ...res
}: AtomButtonPropsInterface) => {
    /**
     * Getter ClassName
     * @description generate className based on props button
     * @return {string}
     */
    const getClassName = (): string => convertObjectToString({
        block: true,
        [`${res.className}`]: res.className !== undefined,
        'ui-atomic-button': true,
        'ui-atomic-button--icon': children === undefined && icon !== undefined,
        [`ui-atomic-button--styling-${componentThemeTranslator(styling || ComponentThemeEnum.DEFAULT)}`]: true,
        [`ui-atomic-button--icon-${iconPositon}`]: children !== undefined && icon !== undefined,
        [`ui-atomic-button--size-${size}`]: true,
        [`ui-atomic-button--state-${state}`]: true,
        ...getPaddingSize(size || 'medium')
    });


    /**
     * Getter Styling For Button Text
     * @oaram size {ComponentButtonSizeType} - button size props
     * @description generate className based on props image
     * @return {string}
     */
    const getFontSize = (buttonSize: ComponentButtonSizeType): ComponentTextStylingType => {
        const textStyling: AtomButtonSizeValue = {
            giant: 'heading-4',
            large: 'heading-5',
            medium: 'heading-6',
            small: 'meta',
            tiny: 'caption'
        };

        return textStyling[buttonSize];
    };

    /**
     * Getter font size for icon
     * @oaram size {ComponentButtonSizeType} - button size props
     * @return {number}
     */
    const getIconFontSize = (buttonSize: ComponentButtonSizeType): number => {
        const textStyling: AtomButtonIconSizeValue = {
            giant: 28,
            large: 24,
            medium: 20,
            small: 16,
            tiny: 12
        };

        return textStyling[buttonSize];
    };

    /**
     * Getter Styling For Button Text
     * @oaram size {ComponentButtonSizeType} - button size props
     * @description generate className based on props image
     * @return {string}
     */
    const getPaddingSize = (buttonSize: ComponentButtonSizeType): DefaultDynamicObject => {
        const textStyling: AtomButtonPaddingValue = {
            giant: {
                'pl-24 pr-24': true
            },
            large: {
                'pl-20 pr-20': true
            },
            medium: {
                'pl-20 pr-20': true
            },
            small: {
                'pl-16 pr-16': true
            },
            tiny: {
                'pl-12 pr-12': true
            }
        };

        if (children === undefined && icon !== undefined) {
            return {};
        }

        return textStyling[buttonSize];
    };

    /**
     * Getter Content Button
     * @description generate button content
     * @return {React.ReactNode}
     */
    const getContent = (): React.ReactNode => (
        <div className="ui-atomic-button__content flex">
            {children !== undefined ? (
                <TextComponent
                    tag="span"
                    styling={getFontSize(size || 'medium')}
                    fontWeight={700}
                    align="center"
                    isNotRenderDangerous
                >
                    {children}
                </TextComponent>
            ) : null}
            {icon !== undefined ? (
                <IconComponent size={getIconFontSize(size || 'medium')}>{icon}</IconComponent>
            ) : null}
        </div>
    );

    if (tag === 'button') {
        return (
            <button
                {...res}
                className={getClassName()}
            >
                {getContent()}
            </button>
        );
    }

    return (
        <Link
            to={to || ''}
            className={getClassName()}
        >
            {getContent()}
        </Link>
    );
};

ButtonComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]),
    className: PropTypes.string,
    icon: PropTypes.string,
    iconPositon: PropTypes.oneOf<ComponentPlaceIconComponent>([
        'post',
        'pre'
    ]),
    onClick: PropTypes.func,
    size: PropTypes.oneOf<ComponentButtonSizeType>([
        'giant',
        'large',
        'medium',
        'small',
        'tiny'
    ]),
    state: PropTypes.oneOf<AtomButtonStateType>([
        'fill',
        'ghost',
        'outline'
    ]),
    styling: PropTypes.oneOf<ComponentThemeEnum>([
        ComponentThemeEnum.BASIC,
        ComponentThemeEnum.CONTROL,
        ComponentThemeEnum.DANGER,
        ComponentThemeEnum.DEFAULT,
        ComponentThemeEnum.INFO,
        ComponentThemeEnum.PRIMARY,
        ComponentThemeEnum.SECONDARY,
        ComponentThemeEnum.SUCCESS,
        ComponentThemeEnum.WARNING
    ]),
    tag: PropTypes.oneOf<ComponentLinkTagType>([
        'button',
        'link'
    ]),
    to: PropTypes.string,
    type: PropTypes.oneOf<AtomButtonType>([
        'button',
        'reset',
        'submit'
    ])
};

ButtonComponent.defaultProps = {
    children: undefined,
    className: undefined,
    icon: undefined,
    iconPositon: 'pre',
    onClick: () => {},
    size: 'medium',
    state: 'fill',
    styling: ComponentThemeEnum.PRIMARY,
    tag: 'button',
    to: undefined,
    type: 'button'
};

export default ButtonComponent;
