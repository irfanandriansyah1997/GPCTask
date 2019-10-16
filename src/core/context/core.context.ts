/**
 * Core Context API
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.16
 */

import * as React from 'react';
import { StateTypesCoreApps } from '@/core/interfaces/core.interface';

const CoreContext = React.createContext<StateTypesCoreApps>({
    isMobile: false,
    width: 0
});

export default CoreContext;
