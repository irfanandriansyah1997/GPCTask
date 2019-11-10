import { RouteComponentProps } from 'react-router';

import PageAbstract from '@/abstract/page.abstract';
import BruteForceViewDesktopPage from './view/brute-force.view';
import ViewModelBruteForceDesktopHOC from './view-model/brute-force.view-model';
import { ViewModelAbstractInterface } from '@/interfaces/general/view-model-abstract.interface';

/**
 * Brute Force Pages
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2019.10.16
 */
class BruteForce extends PageAbstract<ViewModelAbstractInterface> {
    constructor(props: RouteComponentProps) {
        super(props, ViewModelBruteForceDesktopHOC, BruteForceViewDesktopPage, props);
    }
}

export default BruteForce;
