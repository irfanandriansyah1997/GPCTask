import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';

import { EnvironmentApps } from '@/interfaces/general/environment.interface';
import { ConfigureStoreResponseInterface } from './interfaces/configure-store.interface';

/**
 * Configure Store Helper
 * @author Irfan Andriansyah <irfan@99.co>
 * @description singleton class for helped generate store and setup redux
 * @since 2019.09.15
 */
class ConfigureStoreHelper {
    private env: EnvironmentApps;

    private reducers: any;

    constructor(env: EnvironmentApps, reducers: any | undefined = undefined) {
        this.env = env;

        if (reducers) {
            this.reducers = reducers;
        }
    }

    /**
     * Getter composeEnhancers Method
     * @description Getter compose enhancers
     * @return {any}
     */
    get composeEnhancers(): any {
        const { env } = this;

        if (env === 'DEVELOP') {
            return (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        }

        return compose;
    }

    /**
     * Getter persisConfig Method
     * @description Getter persist config
     * @return {PersistConfig}
     */
    get persistConfig(): PersistConfig {
        return {
            key: 'root',
            storage,
            whitelist: ['common']
        };
    }

    /**
     * setReducers Method
     * @param {any} reducers - reducers from return method combineReducers
     * @description setter reducers
     * @return {this}
     */
    setReducers(reducers: any): this {
        this.reducers = reducers;
        return this;
    }

    /**
     * generateStore Method
     * @description generate store redux config
     * @return {ConfigureStoreResponseInterface}
     */
    generateStore(): ConfigureStoreResponseInterface {
        const { persistConfig, reducers, composeEnhancers } = this;

        const persistReducers = persistReducer(persistConfig, reducers);

        const store = createStore(persistReducers, {}, composeEnhancers(applyMiddleware(thunk)));
        const persistor = persistStore(store);

        return {
            store,
            persistor
        };
    }
}

export default ConfigureStoreHelper;
