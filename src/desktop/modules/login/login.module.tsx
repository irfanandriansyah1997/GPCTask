import * as React from 'react';
import { ComponentType } from 'react';
import { RouteComponentProps } from 'react-router';
import Step from '@/atoms/step/step.component';

/**
 * Login Desktop Router
 * @author Irfan Andriansyah <irfan@99.co>
 * @description Login module desktop router definition
 * @since 2019.10.16
 */
const LoginDesktopRouterApps: ComponentType<RouteComponentProps> = (_: RouteComponentProps) => (
    <div>
        <Step title="Media" currentStep={1} maxStep={4} />
    </div>
);

export default LoginDesktopRouterApps;
