import * as React from 'react';
import { ComponentType, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { RouteComponentProps, Redirect } from 'react-router';


const ListingPage = React.lazy(() => import(
    /* webpackChunkName: "desktop.listing.page" */ './page/listing'
));

/**
 * Admin Desktop Router
 * @author Irfan Andriansyah <irfan@99.co>
 * @description admin module desktop router definition
 * @since 2019.10.16
 */
const AdminDesktopRouterApps: ComponentType<RouteComponentProps> = ({ match }: RouteComponentProps) => (
    <Suspense fallback={null}>
        <Switch>
            <Route path={`${match.path}/listing`} component={ListingPage} />
            <Route path="*" render={() => <Redirect to="/404" />} />
        </Switch>
    </Suspense>
);

export default AdminDesktopRouterApps;
