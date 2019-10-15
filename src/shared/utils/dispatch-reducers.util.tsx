import { DefaultDynamicObject } from '@/interfaces/object.interface';

/**
 * withTargetDispatch helper
 * @param dispatchAction
 * @param target
 */
export const withTargetDispatch = (dispatchAction: any, target: DefaultDynamicObject) => async (
    dispatch: (param: any) => void
) => {
    /**
     * set target dispatch
     * @param action
     */
    const targetedDispatch = (action: any) => {
        const updatedAction = {
            ...action,
            ...target
        };

        return dispatch(updatedAction);
    };

    return dispatchAction(targetedDispatch);
};

/**
 * withTarget helper
 * @param actionCreator
 * @param target
 */
export const withTarget = (actionCreator: any, target: DefaultDynamicObject) => (...args: any) => {
    let result = actionCreator.apply({}, args);

    if (typeof result === 'object') {
        result = {
            ...result,
            ...target
        };

        return result;
    }
    if (typeof result === 'function') {
        return withTargetDispatch(result, target);
    }

    return result;
};

export default withTarget;
