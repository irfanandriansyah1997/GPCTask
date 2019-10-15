/**
 * Auth Reducers
 * @author Irfan Andriansyah <irfan@99.co>
 * @description defined all field and structure data for auth reducers
 * @since 2019.09.15
 */

import { AuthReducerInterface } from './interfaces/auth-reducer.interface';
import { ReducerActionParamInterface } from '@/interfaces/store.interface';
import {
    AUTH_ON_FETCH_DATA, AUTH_ON_SUCCESS, AUTH_ON_ERROR, USER_ON_LOGOUT
} from './constant/auth-reducer.constant';
import AuthReducersMock from './mocks/auth-reducer.mock';

/**
 * Auth Reducers
 * @author Irfan Andriansyah <irfan@99.co>
 * @description structure data and handler to catch any action in auth reducers
 * @since 2019.09.15
 */
const AuthReducers = (
    state: AuthReducerInterface = AuthReducersMock,
    action: ReducerActionParamInterface
): AuthReducerInterface => {
    switch (action.type) {
    case AUTH_ON_FETCH_DATA:
        return {
            ...state,
            api: {
                ...state.api,
                isFetching: true
            }
        };
    case AUTH_ON_SUCCESS:
        return {
            ...state,
            api: {
                ...state.api,
                isFetching: false,
                errorToggle: false,
                errorPayload: AuthReducersMock.api.errorPayload
            },
            model: action.payload
        };
    case AUTH_ON_ERROR:
        return {
            ...state,
            api: {
                ...state.api,
                isFetching: false,
                errorToggle: true,
                errorPayload: action.payload.error
            }
        };
    case USER_ON_LOGOUT:
        return AuthReducersMock;
    default:
        return state;
    }
};

export default AuthReducers;
