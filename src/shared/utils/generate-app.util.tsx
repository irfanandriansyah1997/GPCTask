import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SFC } from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { EnvironmentApps } from '@/interfaces/general/environment.interface';
import { ConfigureStoreResponseInterface } from '@/store/utils/interfaces/configure-store.interface';
import GenerateStore from '@/store';
import CoreApps from '@/core';
import DefaultTheme from '@/styled-component/theme/default';

/**
 * Generate App Util
 * @author Irfan Andriansyah <irfan@99.co>
 * @description for generate main apps based on environment variable
 * @since 2019.09.16
 */
class GenerateAppUtil {
    private store: ConfigureStoreResponseInterface;

    constructor(env: EnvironmentApps) {
        this.store = GenerateStore(env);
    }

    /**
     * Generate App Util
     * @author Irfan Andriansyah <irfan@99.co>
     * @description for generate main apps based on environment variable
     * @since 2019.09.16
     */
    get App(): SFC<any> {
        const { store, persistor } = this.store;

        return () => (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ThemeProvider theme={DefaultTheme}>
                        <CoreApps />
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        );
    }

    /**
     * run
     * @description run react dom render
     * @since 2019.09.16
     */
    run(): void {
        const { App } = this;

        ReactDOM.render(<App />, document.getElementById('app'));
    }
}

export default GenerateAppUtil;
