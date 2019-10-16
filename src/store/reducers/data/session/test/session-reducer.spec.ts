import { SessionReducerInterface } from '@/store/reducers/data/session/interfaces/session-reducer.interface';
import SessionReducers from '@/store/reducers/data/session/index';
import SessionReducersMock from '@/store/reducers/data/session/mocks/session-reducer.mock';
import { SET_CREDENTIAL, UNSET_CREDENTIAL } from '@/store/reducers/data/session/constant/session-reducer.constant';

describe('Testing Session Reducers', () => {
    it('Invoke on set credential', () => {
        const input: SessionReducerInterface = {
            isLogin: true,
            token: 'askjaishashaishqiyroyt1935113',
            tokenExpiredTimestamp: 5401941895180
        };

        expect(
            SessionReducers(
                SessionReducersMock,
                {
                    type: SET_CREDENTIAL,
                    payload: input
                }
            )
        ).toStrictEqual(input);
    });

    it('Invoke on unset credential', () => {
        const mockBeforeChange: SessionReducerInterface = {
            isLogin: true,
            token: 'askjaishashaishqiyroyt1935113',
            tokenExpiredTimestamp: 5401941895180
        };

        expect(
            SessionReducers(
                mockBeforeChange,
                {
                    type: UNSET_CREDENTIAL,
                    payload: {}
                }
            )
        ).toStrictEqual(SessionReducersMock);
    });

    it('Test default state', () => {
        expect(
            SessionReducers(
                undefined,
                {
                    type: 'not-defined-action',
                    payload: {}
                }
            )
        ).toStrictEqual(SessionReducersMock);
    });
});
