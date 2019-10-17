import {
    ViewModelListingStateReduxFormDesktopInterface,
    ViewModelListingStateFormDesktopInterface,
    ViewModelListingDispatchReduxFormDesktopInterface
} from '@/desktop-admin-page/listing/view-model/interfaces/listing-form.view-model.interface';

/**
 * Generate Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2019.10.17
 */
export interface ContextListingFormDesktopInterface {
    data: ViewModelListingStateReduxFormDesktopInterface & {
        listing: ViewModelListingStateFormDesktopInterface;
    };
    action: ViewModelListingDispatchReduxFormDesktopInterface & {};
}
