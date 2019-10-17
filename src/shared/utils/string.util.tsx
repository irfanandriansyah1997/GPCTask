import { DefaultDynamicObject } from '@/interfaces/general/object.interface';

/**
 * String Util
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

/**
 * Convert Object To String
 * @author Irfan Andriansyah <irfan@99.co>
 * @description the purpose of method is convert dictionary to string and filter if value is null
 * @param {DefaultDynamicObject} - obj
 * @since 2019.09.18
 */
export const convert_obj_to_string = (obj: DefaultDynamicObject) => Object.keys(obj)
    .filter((item) => obj[item] && obj[item] !== '')
    .map((item) => item)
    .join(' ');
