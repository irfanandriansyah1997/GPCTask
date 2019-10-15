import * as React from 'react';
import { Component } from 'react';
import { ViewModelAbstractInterface } from '@/interfaces/view-model-abstract.interface';
import { BaseDefaultContext } from '@/interfaces/context.interface';

/**
 * View Model Abstract
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.09.16
 */
abstract class ViewModelAbstract<Props, State> extends Component<ViewModelAbstractInterface & Props, {} & State> {
    /**
     * getter baseContext
     * @description getter parameter base context api
     * @return { BaseDefaultContext }
     */
    get baseContext(): BaseDefaultContext {
        const { auth, session } = this.props;

        return {
            auth,
            session
        };
    }

    abstract render(): React.ReactNode;
}

export default ViewModelAbstract;
