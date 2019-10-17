import * as React from 'react';
import { connect } from 'react-redux';
import { ComponentClass, ReactNode } from 'react';
import { RouteComponentProps } from 'react-router';

import { TypeReducers } from '@/store/reducers';
import ViewModelAbstract from '@/abstract/view-model.abstract';
import { ListingFormMock } from '@/shared/mocks/listing/listing.mock';
import ListingFormContext from '@/desktop-admin-page/listing/context/listing-form.context';
import { AuthReducerInterface } from '@/store/reducers/data/auth/interfaces/auth-reducer.interface';
import { SessionReducerInterface } from '@/store/reducers/data/session/interfaces/session-reducer.interface';
import { ContextListingFormDesktopInterface } from '@/desktop-admin-page/listing/context/interfaces/listing-form.context.interface';
import {
    ViewModelListingPropsFormDesktopInterface,
    ViewModelListingStateReduxFormDesktopInterface,
    ViewModelListingStateFormDesktopInterface
} from './interfaces/listing-form.view-model.interface';

/**
 * Listing Add Desktop View Model
 * @author Irfan Andriansyah <irfan@99.co>
 * @description Listing Form View Component
 * @since 2019.10.17
 */
const ViewModelListingFormPageDesktopHOC = (
    CompossedComponent: ComponentClass<ViewModelListingPropsFormDesktopInterface>,
    Router: RouteComponentProps
): any => {
    /**
     * Map State To Props
     * @param state { TypeReducers }
     * @description mapping data from redux serve to props
     * @return { ViewModelListingStatePageInterface }
     */
    const mapStateToProps = (state: TypeReducers): ViewModelListingStateReduxFormDesktopInterface => ({
        auth: state.common.data.auth as AuthReducerInterface,
        session: state.common.data.session as SessionReducerInterface,
        router: Router
    });

    /**
     * View Model Listing
     * @author Irfan Andriansyah <irfan@99.co>
     * @description
     * @since 2019.10.17
     */
    class ViewModelListingFormPageDesktop extends ViewModelAbstract<
        ViewModelListingPropsFormDesktopInterface,
        ViewModelListingStateFormDesktopInterface
    > {
        constructor(props: ViewModelListingPropsFormDesktopInterface) {
            super(props);

            this.state = ListingFormMock;
        }

        /**
         *
         */
        get contextValue(): ContextListingFormDesktopInterface {
            const { auth, router, session } = this.props;

            return {
                action: {},
                data: {
                    auth,
                    listing: this.state,
                    router,
                    session
                }
            };
        }

        render(): ReactNode {
            const { contextValue } = this;

            return (
                <ListingFormContext.Provider value={contextValue}>
                    <CompossedComponent {...this.props} />
                </ListingFormContext.Provider>
            );
        }
    }

    return connect(
        mapStateToProps,
        null
    )(
        // @ts-ignore
        ViewModelListingFormPageDesktop
    );
};

export default ViewModelListingFormPageDesktopHOC;
