import * as React from 'react';
import { Suspense } from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import { RouteComponentProps, Redirect } from 'react-router';

const Add = React.lazy(() => import(
    /* webpackChunkName: "mobile.listing.add" */ './listing-add.page'
));

/**
 * Admin Listing Page Router
 * @author Irfan Andriansyah <irfan@99.co>
 * @description admin listing page mobile router definition
 * @since 2019.10.16
 */
const AdminListingPageRouter: React.ComponentType<RouteComponentProps> = ({ match }: RouteComponentProps) => (
    <Suspense fallback={null}>
        <Switch>
            <Route exact path={`${match.path}/create`} component={Add} />
            <Route path="*" render={() => <Redirect to="/404" />} />
        </Switch>
    </Suspense>
);

export default AdminListingPageRouter;
