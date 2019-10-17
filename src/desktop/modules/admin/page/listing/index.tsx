import * as React from 'react';
import { Suspense } from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import { RouteComponentProps, Redirect } from 'react-router';

const Dashboard = React.lazy(() => import(
    /* webpackChunkName: "desktop.listing.dashboard" */ './listing-dashboard.page'
));
const Add = React.lazy(() => import(
    /* webpackChunkName: "desktop.listing.add" */ './listing-add.page'
));
const Edit = React.lazy(() => import(
    /* webpackChunkName: "desktop.listing.edit" */ './listing-edit.page'
));

/**
 * Admin Listing Page Router
 * @author Irfan Andriansyah <irfan@99.co>
 * @description admin listing page desktop router definition
 * @since 2019.10.16
 */
const AdminListingPageRouter: React.ComponentType<RouteComponentProps> = ({ match }: RouteComponentProps) => (
    <Suspense fallback={null}>
        <Switch>
            <Route exact path={`${match.path}`} component={Dashboard} />
            <Route exact path={`${match.path}/create`} component={Add} />
            <Route exact path={`${match.path}/:id`} component={Edit} />
            <Route path="*" render={() => <Redirect to="/404" />} />
        </Switch>
    </Suspense>
);

export default AdminListingPageRouter;
