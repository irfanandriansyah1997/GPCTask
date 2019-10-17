/**
 * Listing Context API
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.09.21
 */

import * as React from 'react';

import { ListingFormMock } from '@/shared/mocks/listing/listing.mock';
import AuthReducersMock from '@/store/reducers/data/auth/mocks/auth-reducer.mock';
import SessionReducersMock from '@/store/reducers/data/session/mocks/session-reducer.mock';
import { ContextListingFormDesktopInterface } from './interfaces/listing-form.context.interface';

const ListingFormContext = React.createContext<ContextListingFormDesktopInterface>({
    data: {
        auth: AuthReducersMock,
        session: SessionReducersMock,
        listing: ListingFormMock
    },
    action: {}
});

export default ListingFormContext;
