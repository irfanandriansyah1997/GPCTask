import { HashRouter as Router, Switch } from 'react-router-dom';
import * as React from 'react';
import { Suspense, SFC } from 'react';

/**
 * Render Router
 */
const RouterApps: SFC = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch />
            Hello World
        </Suspense>
    </Router>
);

export default RouterApps;
