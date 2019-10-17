/**
 * Listing Media Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description info to definition listing media attribute
 * @since 2019.10.17
 */
export interface ListingMediaInterface {
    pictures: ListingPhotoInterface[];
    videos?: string;
}


/**
 * Generate Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2019.10.17
 */
export interface ListingPhotoInterface {
    id: number | string;
    image: string;
    isPrimaryPicture: boolean;
}
