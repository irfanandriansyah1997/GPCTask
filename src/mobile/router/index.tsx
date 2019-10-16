import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import * as React from 'react';
import { Suspense, SFC } from 'react';

/**
 * Sample Component
 */
const Component: SFC = () => (
    <div>Admin Mobile</div>
);

/**
 * Render Router
 */
const MobileRouterApps: SFC = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Component} />
            </Switch>
        </Suspense>
    </Router>
);

export default MobileRouterApps;
