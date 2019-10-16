import * as React from 'react';

import { StateTypesCoreApps } from './interfaces/core.interface';

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
            <div className="ui-apps">
                {isMobile ? 'mobile ' : 'desktop '}
                {width}
            </div>
        );
    }
}

export default CoreApps;
