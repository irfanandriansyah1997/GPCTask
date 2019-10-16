import AuthReducers from '@/store/reducers/data/auth';
import AuthReducersMock from '@/store/reducers/data/auth/mocks/auth-reducer.mock';
import { AuthReducerInterface, AuthModelInterface } from '@/store/reducers/data/auth/interfaces/auth-reducer.interface';
import { ApiErrorInterface } from '@/interfaces/api-model.interface';
import {
    AUTH_ON_FETCH_DATA,
    AUTH_ON_SUCCESS,
    AUTH_ON_ERROR,
    USER_ON_LOGOUT
} from '@/store/reducers/data/auth/constant/auth-reducer.constant';

require('config/enzyme.config');

describe('Testing Auth Reducers', () => {
    it('Invoke on fetch data', () => {
        const expectedOutput: AuthReducerInterface = {
            ...AuthReducersMock,
            api: {
                ...AuthReducersMock.api,
                isFetching: true
            }
        };

        expect(
            AuthReducers(
                AuthReducersMock,
                {
                    type: AUTH_ON_FETCH_DATA,
                    payload: {}
                }
            )
        ).toStrictEqual(expectedOutput);
    });

    it('Invoke on success fetch data', () => {
        const input: AuthModelInterface = {
            username: '99.co',
            email: 'admin@99.co',
            profilePicture: 'nopicture.jpg'
        };

        const expectedOutput: AuthReducerInterface = {
            ...AuthReducersMock,
            api: {
                ...AuthReducersMock.api,
                isFetching: false,
                errorToggle: false
            },
            model: input
        };

        expect(
            AuthReducers(
                AuthReducersMock,
                {
                    type: AUTH_ON_SUCCESS,
                    payload: input
                }
            )
        ).toStrictEqual(expectedOutput);
    });

    it('Invoke on error fetch data', () => {
        const input: ApiErrorInterface = {
            errorMessage: 'Error Message 500',
            errorStackTrace: [],
            statusCode: 500
        };

        const expectedOutput: AuthReducerInterface = {
            ...AuthReducersMock,
            api: {
                ...AuthReducersMock.api,
                isFetching: false,
                errorToggle: true,
                errorPayload: input
            }
        };

        expect(
            AuthReducers(
                AuthReducersMock,
                {
                    type: AUTH_ON_ERROR,
                    payload: {
                        error: input
                    }
                }
            )
        ).toStrictEqual(expectedOutput);
    });

    it('Invoke on logout', () => {
        const mockBeforeChange: AuthReducerInterface = {
            ...AuthReducersMock,
            api: {
                ...AuthReducersMock.api,
                isFetching: true
            }
        };

        expect(
            AuthReducers(
                mockBeforeChange,
                {
                    type: USER_ON_LOGOUT,
                    payload: {}
                }
            )
        ).toStrictEqual(AuthReducersMock);
    });

    it('Test default state', () => {
        expect(
            AuthReducers(
                undefined,
                {
                    type: 'not-defined-action',
                    payload: {}
                }
            )
        ).toStrictEqual(AuthReducersMock);
    });
});
