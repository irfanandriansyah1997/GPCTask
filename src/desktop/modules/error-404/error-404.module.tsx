import * as React from 'react';
import { ComponentType } from 'react';
import { RouteComponentProps } from 'react-router';

/**
 * Error 404 Desktop Router
 * @author Irfan Andriansyah <irfan@99.co>
 * @description Error 404 module desktop router definition
 * @since 2019.10.16
 */
const Error404DesktopRouterApps: ComponentType<RouteComponentProps> = (_: RouteComponentProps) => (
    <div>Page Not Found</div>
);

export default Error404DesktopRouterApps;
