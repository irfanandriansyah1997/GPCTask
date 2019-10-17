import withTarget from '../dispatch-reducers.util';

/**
 * Action Sample Dispatch
 */
const sampleActionDispatch = (type: any) => (
    dispatch: any
) => {
    dispatch({
        type: 'event-handler-action-mock',
        payload: {
            type
        }
    });
};

/**
 * Action Sample Object
 */
const sampleActionObject = (type: any) => ({
    payload: {
        type
    }
});

/**
 * Action Sample Number
 */
const sampleActionNumber = (type: any) => type;

describe('Dispatch Reducers Util', () => {
    it('Invoke function withTarget', () => {
        withTarget(
            sampleActionDispatch,
            { target: 'example-invoke' }
        )('testing')((output: any) => {
            expect(output).toStrictEqual({
                type: 'event-handler-action-mock',
                payload: {
                    type: 'testing'
                },
                target: 'example-invoke'
            });
        });

        expect(withTarget(
            sampleActionObject,
            { target: 'example-invoke' }
        )('testing')).toStrictEqual({ payload: { type: 'testing' }, target: 'example-invoke' });

        expect(withTarget(
            sampleActionNumber,
            { target: 'example-invoke' }
        )('testing')).toStrictEqual('testing');
    });
});
