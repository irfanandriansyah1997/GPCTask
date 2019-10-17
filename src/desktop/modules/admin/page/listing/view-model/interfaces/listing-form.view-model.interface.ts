import { ListingFormInterface } from '@/interfaces/listing/listing-form.interface';
import { ViewModelAbstractInterface } from '@/interfaces/general/view-model-abstract.interface';

/**
 * View Model Listing Form Desktop Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description props definition for viem model listing form
 * @since 2019.10.17
 */
export type ViewModelListingPropsFormDesktopInterface = ViewModelListingStateReduxFormDesktopInterface &
    ViewModelListingDispatchReduxFormDesktopInterface

/**
 * View Model Listing State Form Desktop
 * @author Irfan Andriansyah <irfan@99.co>
 * @description Interface for definition state redux on view model listing form
 * @since 2019.10.17
 */
export type ViewModelListingStateReduxFormDesktopInterface = ViewModelAbstractInterface


/**
 * View Model Listing Dispatch Form Desktop
 * @author Irfan Andriansyah <irfan@99.co>
 * @description Interface for definition dispatch redux on view model listing form
 * @since 2019.10.17
 */
export type ViewModelListingDispatchReduxFormDesktopInterface = any


/**
 * View Model Listing Form Desktop Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description state definition for viem model listing form
 * @since 2019.10.17
 */
export type ViewModelListingStateFormDesktopInterface = ListingFormInterface
