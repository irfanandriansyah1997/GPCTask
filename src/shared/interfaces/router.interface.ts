import { DefaultDynamicObject } from './object.interface';

/**
 * Router Page Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.09.16
 */
export interface RouterPageInterface {
    match: MatchParamRouterInterface;
}

/**
 * Math Param Router Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.09.16
 */
export interface MatchParamRouterInterface {
    params: DefaultDynamicObject;
    isExact?: boolean;
    path: string;
    url: string;
}
