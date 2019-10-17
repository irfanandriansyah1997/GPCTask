/**
 * List Reducer Store
 * @author Irfan Andriansyah <irfan@99.co>
 * @description the purpose of this file for register all reducers
 * @since 2019.09.15
 */

import { combineReducers } from 'redux';
import { filterActions } from 'redux-ignore';

/** Data Reducers */
import AuthReducers from './data/auth';
import SessionReducers from './data/session';

/** UI Reducers */

import { ReducerActionParamInterface } from '@/interfaces/general/store.interface';

export const Reducers = combineReducers({
    common: combineReducers({
        data: combineReducers({
            auth: filterActions(
                AuthReducers,
                (action: ReducerActionParamInterface) => action.page === 'login' || action.purpose === 'auth'
            ),
            session: filterActions(
                SessionReducers,
                (action: ReducerActionParamInterface) => action.page === 'login' || action.purpose === 'auth'
            )
        })
    })
});

export type TypeReducers = ReturnType<typeof Reducers>;
