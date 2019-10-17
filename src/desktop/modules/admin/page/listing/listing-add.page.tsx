import { RouteComponentProps } from 'react-router';

import PageAbstract from '@/abstract/page.abstract';
import ListingFormViewDesktopPage from './view/listing-form.view';
import ViewModelListingAddPageDesktopHOC from './view-model/listing-form.view-model';
import { ViewModelListingPropsFormDesktopInterface } from './view-model/interfaces/listing-form.view-model.interface';

/**
 * Listing Add Pages
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2019.10.16
 */
class ListingAddPage extends PageAbstract<ViewModelListingPropsFormDesktopInterface> {
    constructor(props: RouteComponentProps) {
        super(props, ViewModelListingAddPageDesktopHOC, ListingFormViewDesktopPage, 'default', props);
    }
}

export default ListingAddPage;
