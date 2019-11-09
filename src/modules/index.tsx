import * as React from 'react';
import { Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const TriangleModule = React.lazy(() => import(
    /* webpackChunkName: "triangle" */ '@/modules/transform-triangle/transform-triangle.page'
));

/**
 * App Modules
 * @author Irfan Andriansyah <irfan@99.co>
 */
class AppModules extends React.Component<any> {
    render(): React.ReactNode {
        return (
            <div className="ui-app">
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/" component={TriangleModule} />
                            <Route path="/triangle" component={TriangleModule} />
                        </Switch>
                    </Suspense>
                </Router>
            </div>
        );
    }
}

export default AppModules;
