import * as React from 'react';
import { ComponentType, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';


const ListingPage = React.lazy(() => import(
    /* webpackChunkName: "mobile.listing.page" */ './page/listing'
));

/**
 * Admin Mobile Router
 * @author Irfan Andriansyah <irfan@99.co>
 * @description admin module mobile router definition
 * @since 2019.10.16
 */
const AdminMobileRouterApps: ComponentType<RouteComponentProps> = ({ match }: RouteComponentProps) => (
    <Suspense fallback={null}>
        <Switch>
            <Route path={`${match.path}/listing`} component={ListingPage} />
        </Switch>
    </Suspense>
);

export default AdminMobileRouterApps;
