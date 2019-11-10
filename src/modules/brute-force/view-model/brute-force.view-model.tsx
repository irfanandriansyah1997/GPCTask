import * as React from 'react';
import { ComponentClass, ReactNode } from 'react';
import { RouteComponentProps } from 'react-router';

import ViewModelAbstract from '@/abstract/view-model.abstract';
import { ViewModelAbstractInterface } from '@/interfaces/general/view-model-abstract.interface';
import { ViewModelBruteForceStateInterface } from './interfaces/brute-force.view-model.interface';
import { ContextBruteForceInterface } from '@/modules/brute-force/context/interfaces/brute-force.context.interfaces';
import BruteForceContext from '@/modules/brute-force/context/brute-force.context';
import { TrianglePointInterface } from '@/interfaces/general/triangle.interface';

/**
 * Brute Force Desktop View Model
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.17
 */
const ViewModelBruteForcePageDesktopHOC = (
    CompossedComponent: ComponentClass<ViewModelAbstractInterface>,
    Router: RouteComponentProps
): any => {
    /**
     * View Model Brute Force
     * @author Irfan Andriansyah <irfan@99.co>
     * @since 2019.10.17
     */
    class ViewModelBruteForcePageDesktop extends ViewModelAbstract<
        ViewModelAbstractInterface,
        ViewModelBruteForceStateInterface
    > {
        constructor(props: ViewModelAbstractInterface) {
            super(props);

            this.state = {
                point1: {
                    x: 40,
                    y: 40
                },
                point2: {
                    x: 340,
                    y: 230
                },
                path: []
            };
        }

        /**
         * Getter Context Provider
         * @return {ContextBruteForceInterface}
         */
        get contextValue(): ContextBruteForceInterface {
            const {
                point1,
                point2,
                path
            } = this.state;

            return {
                router: Router,
                bruteForce: {
                    point1,
                    point2,
                    path,
                    onChangePoint: (p1: TrianglePointInterface, p2: TrianglePointInterface) => {
                        this.setState({
                            point1: p1,
                            point2: p2
                        });
                    }
                }
            };
        }

        render(): ReactNode {
            const { contextValue } = this;

            return (
                <BruteForceContext.Provider value={contextValue}>
                    <CompossedComponent {...this.props} />
                </BruteForceContext.Provider>
            );
        }
    }

    return ViewModelBruteForcePageDesktop;
};

export default ViewModelBruteForcePageDesktopHOC;
