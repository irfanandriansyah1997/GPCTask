import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import * as React from 'react';
import { Suspense, SFC } from 'react';

const AdminModule = React.lazy(() => import(
    /* webpackChunkName: "mobile.admin.module" */ '@/mobile/modules/admin/admin.module'
));

const LoginModule = React.lazy(() => import(
    /* webpackChunkName: "mobile.login.module" */ '@/mobile/modules/login/login.module'
));

/**
 * Render Router
 */
const DesktopRouterApps: SFC = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path="/admin" component={AdminModule} />
                <Route path="/login" component={LoginModule} />
            </Switch>
        </Suspense>
    </Router>
);

export default DesktopRouterApps;
