/**
 * Store Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description Interfaces are used to define the strucure and type of data used in reducers and action
 * @since 2019.09.15
 */

import { DefaultDynamicObject } from './object.interface';

/**
 * Reducer Action Param Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description sceleton field to send action to reducers
 * @since 2019.09.15
 */
export interface ReducerActionParamInterface {
    type: string;
    payload: DefaultDynamicObject | any;
    page?: string;
    purpose?: 'auth' | 'refresh-token' | 'oauth2';
}
