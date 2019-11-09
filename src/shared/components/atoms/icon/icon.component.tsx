import * as React from 'react';
import * as PropTypes from 'prop-types';

import { convertObjectToString } from '@/utils/string.util';
import { AtomsIconPropsInterface } from './interfaces/component.interface';
import { DefaultDynamicObject } from '@/interfaces/general/object.interface';
import ColorDefaultVariableStyle from '@/styled-component/theme/default/color.variable';

import './style/style.scss';

/**
 * Icon Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @description for render icon in web
 * @since 2019.10.18
 */
class IconComponent extends React.Component<AtomsIconPropsInterface> {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node, PropTypes.string
        ]).isRequired,
        color: PropTypes.string,
        size: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['default', 'small', 'big'])]),
        onClick: PropTypes.func
    };

    static defaultProps = {
        className: null,
        color: null,
        size: 'default',
        onClick: () => {}
    };

    /**
     * Getter Style
     * @description generate style for icon ex: font size and font color icon
     * @return {string}
     */
    get style(): DefaultDynamicObject {
        const { color, size } = this.props;

        const response: DefaultDynamicObject = {};

        if (color && Object.prototype.hasOwnProperty.call(ColorDefaultVariableStyle, color)) {
            response.color = ColorDefaultVariableStyle[color];
        }

        if (typeof size === 'number') {
            response.fontSize = `${size}px`;
        }

        return response;
    }

    /**
     * Getter ClassName
     * @description generate className based on props card
     * @return {string}
     */
    get className(): string {
        const { size, className } = this.props;
        const response: DefaultDynamicObject = {
            [`${className}`]: className,
            'ui-atomic-icon': true,
            'material-icons': true
        };

        if (typeof size === 'string') {
            response[`ui-atomic-icon--${size}`] = true;
        }

        return convertObjectToString(response);
    }

    render(): React.ReactNode {
        const { children, onClick } = this.props;

        return (
            <i
                className={this.className}
                style={this.style}
                onClick={onClick}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
            >
                {children}
            </i>
        );
    }
}

export default IconComponent;
