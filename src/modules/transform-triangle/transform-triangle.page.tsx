import { RouteComponentProps } from 'react-router';

import PageAbstract from '@/abstract/page.abstract';
import ListingFormViewDesktopPage from './view/transform-triangle.view';
import ViewModelListingAddPageDesktopHOC from './view-model/transform-triangle.view-model';
import { ViewModelAbstractInterface } from '@/interfaces/general/view-model-abstract.interface';

/**
 * Listing Add Pages
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2019.10.16
 */
class ListingAddPage extends PageAbstract<ViewModelAbstractInterface> {
    constructor(props: RouteComponentProps) {
        super(props, ViewModelListingAddPageDesktopHOC, ListingFormViewDesktopPage, props);
    }
}

export default ListingAddPage;
