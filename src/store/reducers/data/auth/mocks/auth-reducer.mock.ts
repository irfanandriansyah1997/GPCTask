/**
 * Auth Reducer Mock Sample Data
 * @author Irfan Andriansyah <irfan@99.co>
 * @description generate sampe data for auth reducers
 * @since 2019.09.15
 */

import { AuthReducerInterface } from '@/reducers/data/auth/interfaces/auth-reducer.interface';

const AuthReducersMock: AuthReducerInterface = {
    api: {
        isFetching: false,
        errorToggle: false,
        errorPayload: {
            errorMessage: '',
            errorStackTrace: '',
            statusCode: 200
        }
    },
    model: {
        email: '',
        profilePicture: '',
        username: ''
    }
};

export default AuthReducersMock;
