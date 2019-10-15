import * as React from 'react';
import { SFC } from 'react';
import * as PropTypes from 'prop-types';

import './styles/style.scss';

/**
 * Default Template Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2019.09.18
 */
const DefaultTemplateComponent: SFC<any> = ({ children }) => (
    <div className="ui-template-default">
        <div className="ui-template-default__content p-25">{children}</div>
    </div>
);

DefaultTemplateComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};

export default DefaultTemplateComponent;
