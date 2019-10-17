/**
 * Listing Info Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description info to definition listing info attribute
 * @since 2019.10.17
 */
export interface ListingInfoInterface {
    // must need create enum
    propertyType: any;
    price: number;
    landSize: number;
    buildingSize: number;
    bathroom?: number;
    bedroom?: number;
    isExistMaidBedroom: boolean;
    // must need create enum
    certificate?: any;
    electricalPower?: number | string;
    floor?: number;
    carport?: number;
    garage?: number;
    ageProperty?: number;
    directionBuilding?: string;
    // must need create enum
    furnish?: any;
}

/**
 * Listing Advertising Info Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description info to definition listing advertising info attribute
 * @since 2019.10.17
 */
export interface ListingAdvertisingInfoInterface {
    advertisingTitleByOwner?: string;
    advertisingTitle?: string;
    // must need create enum
    rlg?: any;
    exclusive?: boolean;
    addressAdvertising?: string;
    descriptionAdvertising?: string;
    facilities?: string;
    commision?: number;
    // must need create enum
    marketingTools?: any;
}
