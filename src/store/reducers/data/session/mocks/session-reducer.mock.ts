/**
 * Session Reducer Mock Sample Data
 * @author Irfan Andriansyah <irfan@99.co>
 * @description generate sampe data for auth reducers
 * @since 2019.09.15
 */

import { SessionReducerInterface } from '@/reducers/data/session/interfaces/session-reducer.interface';

const SessionReducersMock: SessionReducerInterface = {
    isLogin: false,
    token: undefined,
    tokenExpiredTimestamp: 0
};

export default SessionReducersMock;
