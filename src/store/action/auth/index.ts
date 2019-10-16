import { RouteComponentProps } from 'react-router';
import { AuthModelFormInterface } from '@/reducers/data/auth/interfaces/auth-reducer.interface';
import {
    AUTH_ON_FETCH_DATA,
    AUTH_ON_SUCCESS,
    AUTH_ON_ERROR,
    USER_ON_LOGOUT
} from '@/reducers/data/auth/constant/auth-reducer.constant';
import { UNSET_CREDENTIAL, SET_CREDENTIAL } from '@/store/reducers/data/session/constant/session-reducer.constant';

/**
 * authLoginAction
 * @param param {AuthModelFormInterface} - parameter form
 */
export const authLoginAction = (param: AuthModelFormInterface, router: RouteComponentProps | undefined) => (
    dispatch: any
) => {
    dispatch({
        type: AUTH_ON_FETCH_DATA
    });

    new Promise(resolve => setTimeout(resolve, 300))
        .then(() => {
            dispatch({
                type: AUTH_ON_SUCCESS,
                payload: {
                    username: param.username,
                    email: 'anon@99.co',
                    profilePicture: 'picture.png'
                }
            });

            dispatch({
                type: SET_CREDENTIAL,
                payload: {
                    isLogin: true,
                    token: 'hafuqfajh7qryq8t7q0jkqcj90418290hcjkahdhadnad',
                    tokenExpiredTimestamp: 4724986633000
                }
            });

            if (router) {
                router.history.push('/');
            }
        })
        .catch((error) => {
            dispatch({
                type: AUTH_ON_ERROR,
                payload: {
                    error: {
                        statusCode: 500,
                        errorMessage: 'Error Message',
                        errorStackTrace: []
                    }
                }
            });
        });
};

/**
 * authLoginAction
 * @description Event invoke on user click button logout
 * @param param {AuthModelFormInterface} - parameter form
 */
export const userOnLogout = () => (dispatch: any) => {
    dispatch({
        type: USER_ON_LOGOUT
    });

    dispatch({
        type: UNSET_CREDENTIAL
    });
};
