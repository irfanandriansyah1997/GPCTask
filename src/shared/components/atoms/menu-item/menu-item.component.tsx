import { SFC } from 'react';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import TextComponent from '@/atoms/text/text.component';
import IconComponent from '@/atoms/icon/icon.component';
import { convertObjectToString } from '@/utils/string.util';
import { DefaultMenuItemComponentProps } from '@/interfaces/component/component-menu-item.interface';

import './styles/style.scss';

/**
 * Menu Item Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.19
 */
const MenuItemComponent: SFC<DefaultMenuItemComponentProps> = ({
    className,
    link,
    icon,
    type,
    children,
    exact,
    label
}: DefaultMenuItemComponentProps) => {
    /**
     * Getter ClassName
     * @description generate className based on props image
     * @return {string}
     */
    const getClassName = (): string => convertObjectToString({
        [`${className}`]: className !== undefined,
        flex: true,
        relative: true,
        'mt-35': true,
        'mb-35': true,
        'ui-atomic-menu-item': true,
        [`ui-atomic-menu-item--type-${type}`]: true
    });

    return (
        <NavLink
            exact={exact}
            to={link}
            className={getClassName()}
            activeClassName="ui-atomic-menu-item--active"
        >
            {icon ? (
                <IconComponent
                    size={20}
                    className={convertObjectToString({
                        'ml-12': type === 'default',
                        'ml-32': type === 'child'
                    })}
                >
                    {icon}
                </IconComponent>
            ) : null}
            <div
                className={convertObjectToString({
                    'ui-atomic-menu-item__text': true,
                    'ml-12': (icon !== false && icon !== undefined) && (type === 'default' || type === 'child'),
                    'ml-16': (icon === false || icon === undefined) && type === 'default',
                    'ml-32': (icon === false || icon === undefined) && type === 'child'
                })}
            >
                <TextComponent
                    tag="p"
                    align="left"
                    fontWeight={600}
                    styling="heading-5"
                >
                    {children}
                </TextComponent>
                { label ? (
                    <TextComponent
                        tag="p"
                        align="left"
                        fontWeight={400}
                        styling="meta"
                        fontFamily="secondary"
                    >
                        {label}
                    </TextComponent>
                ): null}
            </div>
        </NavLink>
    );
};

MenuItemComponent.propTypes = {
    link: PropTypes.string.isRequired,
    exact: PropTypes.bool,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    type: PropTypes.oneOf<'child' | 'default'>(['child', 'default']).isRequired
};

MenuItemComponent.defaultProps = {
    exact: false,
    icon: false
};

export default MenuItemComponent;
