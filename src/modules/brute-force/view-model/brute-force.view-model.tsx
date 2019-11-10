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
                point2: {
                    x: 20,
                    y: 20
                },
                point1: {
                    x: -20,
                    y: -20
                }
            };
        }

        /**
         * Getter Context Provider
         * @return {ContextBruteForceInterface}
         */
        get contextValue(): ContextBruteForceInterface {
            const {
                point1,
                point2
            } = this.state;

            return {
                router: Router,
                bruteForce: {
                    point1,
                    point2,
                    path: this.paths,
                    onChangePoint1: (p1: TrianglePointInterface) => {
                        if (point2.x > p1.x && point2.y > p1.x) {
                            this.setState({
                                point1: p1
                            });
                        }
                    },
                    onChangePoint2: (p2: TrianglePointInterface) => {
                        if (point1.x < p2.x && point1.y < p2.x) {
                            this.setState({
                                point2: p2
                            });
                        }
                    }
                }
            };
        }

        /**
         * Get Path Based On Line
         * @return {TrianglePointInterface[]}
         */
        get paths(): TrianglePointInterface[] {
            const result: TrianglePointInterface[] = [];
            const { point1, point2 } = this.state;
            const x1 = point1.x;
            const y1 = point1.y;
            const x2 = point2.x;
            const y2 = point2.y;
            const m_new = 2 * (y2 - y1);
            let slope_error_new = m_new - (x2 - x1);
            let y = y1;

            for (let x = x1; x <= x2; x += 1) {
                result.push({ x, y });

                // Add slope to increment
                // angle formed
                slope_error_new += m_new;

                // Slope error reached limit,
                // time to increment y and
                // update slope error.
                if (slope_error_new >= 0) {
                    y += 1;
                    slope_error_new -= 2 * (x2 - x1);
                }
            }

            return result;
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
