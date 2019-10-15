/**
 * Api Model Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description Interfaces are used to define the strucure and type of data used in API Request
 * @since 2019.09.15
 */

/**
 * Api Model Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description sceleton field to catch any response from api
 * @since 2019.09.15
 */
export interface ApiModelInterface {
    isFetching: boolean;
    errorToggle: boolean;
    errorPayload: ApiErrorInterface;
}

/**
 * Api Error Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description sceleton field to save response data if fetch api has error
 * @since 2019.09.15
 */
export interface ApiErrorInterface {
    statusCode: number | string | any;
    errorMessage: string;
    errorStackTrace?: any;
}
