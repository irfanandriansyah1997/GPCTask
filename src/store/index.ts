/**
 * Redux Store
 * @author Irfan Andriansyah <irfan@99.co>
 * @description the purpose of this file for register all reducers
 * @since 2019.09.15
 */

import { Reducers } from './reducers';
import ConfigureStoreHelper from './utils/configure-store.util';
import { EnvironmentApps } from '@/interfaces/environment.interface';
import { ConfigureStoreResponseInterface } from './utils/interfaces/configure-store.interface';

/**
 * Generate Store
 * @author Irfan Andriansyah <irfan@99.co>
 * @description generate store redux config
 * @since 2019.09.15
 */
const GenerateStore = (env: EnvironmentApps): ConfigureStoreResponseInterface => {
    const config = new ConfigureStoreHelper(env).setReducers(Reducers).generateStore();

    return config;
};

export default GenerateStore;
