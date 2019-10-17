import { ListingOwnerInterface } from './attribute/listing-owner.interface';
import { ListingInfoInterface, ListingAdvertisingInfoInterface } from './attribute/listing-info.interface';
import { ListingMediaInterface } from './attribute/listing-media.interface';

/**
 * Listing Form Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2019.10.17
 */
export type ListingFormInterface = ListingOwnerInterface &
    ListingInfoInterface &
    ListingAdvertisingInfoInterface &
    ListingMediaInterface
