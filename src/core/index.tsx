import * as React from 'react';

import { StateTypesCoreApps } from './interfaces/core.interface';
import CoreContext from './context/core.context';

const MobileRouterApps = React.lazy(() => import(/* webpackChunkName: "mobile.module" */ '@/mobile/router'));
const DesktopRouterApps = React.lazy(() => import(/* webpackChunkName: "desktop.module" */ '@/desktop/router'));

/**
 * Core Apps
 * @author Irfan Andriansyah <irfan@99.co>
 * @description the purpose class for generate component mobile / desktop site
 * @since 2019.10.16
 */
class CoreApps extends React.PureComponent<any, StateTypesCoreApps> {
    constructor(props: any) {
        super(props);

        this.onUpdateDimension = this.onUpdateDimension.bind(this);
        this.state = {
            isMobile: window.innerWidth <= 414,
            width: window.innerWidth
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.onUpdateDimension);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onUpdateDimension);
    }

    /**
     * On Update Dimension
     * @description this method will invoke if user change size browser
     */
    onUpdateDimension() {
        this.setState({
            isMobile: window.innerWidth <= 414,
            width: window.innerWidth
        });
    }

    render(): React.ReactNode {
        const { isMobile, width } = this.state;

        return (
            <React.Suspense fallback={null}>
                <CoreContext.Provider value={{ isMobile, width }}>
                    {isMobile ? <MobileRouterApps /> : <DesktopRouterApps />}
                </CoreContext.Provider>
            </React.Suspense>
        );
    }
}

export default CoreApps;
