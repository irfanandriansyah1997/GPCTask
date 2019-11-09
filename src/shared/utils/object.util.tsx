import { DefaultDynamicObject } from '@/interfaces/general/object.interface';

/**
 * Remove Object Null & Undefined
 * @author Irfan Andriansyah <irfan@99.co>
 * @param {DefaultDynamicObject} - obj
 * @since 2019.09.18
 */
export const removeObjectUndefined = (param: DefaultDynamicObject): DefaultDynamicObject => Object.keys(param)
    .filter((item: string) => param[item] !== undefined && param[item] !== null && param[item])
    .reduce(
        (obj: DefaultDynamicObject, item: string) => ({
            ...obj,
            [`${item}`]: param[item]
        }),
        {}
    );
