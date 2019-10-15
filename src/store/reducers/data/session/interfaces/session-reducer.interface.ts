/**
 * Session Reducer Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description interface used in the session reducers
 * @since 2019.09.15
 */

/**
 * Auth Reducer Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description sceleton field to implement in auth reducers
 * @since 2019.09.15
 */
export interface SessionReducerInterface {
    isLogin: boolean;
    token?: string;
    tokenExpiredTimestamp: number;
}
