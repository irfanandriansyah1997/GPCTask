import { SessionReducerInterface } from './interfaces/session-reducer.interface';
import { ReducerActionParamInterface } from '@/interfaces/store.interface';
import { SET_CREDENTIAL, UNSET_CREDENTIAL } from './constant/session-reducer.constant';
import SessionReducersMock from './mocks/session-reducer.mock';

/**
 * Session Reducers
 * @author Irfan Andriansyah <irfan@99.co>
 * @description defined all field and structure data for session reducers
 * @since 2019.09.15
 */

/**
 * Session Reducers
 * @author Irfan Andriansyah <irfan@99.co>
 * @description structure data and handler to catch any action in session reducers
 * @since 2019.09.15
 */
const SessionReducers = (
    state: SessionReducerInterface = SessionReducersMock,
    action: ReducerActionParamInterface
): SessionReducerInterface => {
    switch (action.type) {
    case SET_CREDENTIAL:
        return {
            ...state,
            ...action.payload
        };
    case UNSET_CREDENTIAL:
        return SessionReducersMock;
    default:
        return state;
    }
};
export default SessionReducers;
