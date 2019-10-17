/**
 * Auth Reducer Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description interface used in the auth reducers
 * @since 2019.09.15
 */

import { ApiModelInterface } from '@/interfaces/general/api-model.interface';

/**
 * Auth Reducer Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description sceleton field to implement in auth reducers
 * @since 2019.09.15
 */
export interface AuthReducerInterface {
    model: AuthModelInterface;
    api: ApiModelInterface;
}

/**
 * Auth Model Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description sceleton field result api auth from server
 * @since 2019.09.15
 */
export interface AuthModelInterface {
    username: string;
    email: string;
    profilePicture: string;
}

/**
 * Auth Model Form Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description sceleton form field for auth login action
 * @since 2019.09.16
 */
export interface AuthModelFormInterface {
    username: string;
    password: string;
}

/**
 * Pop Up Lisitng Auth Reducers Interface
 * @author Cathrine <cathrine@99.co>
 * @description sceleton field result api
 * @since 2019.09.30
 */
export interface ListingPopupAuthReducerInterface {
    model: ListingPopupModelInterface;
    api: ApiModelInterface;
}

/**
 * Pop Up Lisitng Auth Model Interface
 * @author Cathrine <cathrine@99.co>
 * @description sceleton field result api
 * @since 2019.09.30
 */
export interface ListingPopupModelInterface {
    username: string;
    password: string;
    displayName: string;
    targetPortalId: string;
}
