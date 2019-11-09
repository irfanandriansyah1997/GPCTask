import * as React from 'react';
import { ComponentClass, ReactNode } from 'react';
import { RouteComponentProps } from 'react-router';

import ViewModelAbstract from '@/abstract/view-model.abstract';
import { ViewModelAbstractInterface } from '@/interfaces/general/view-model-abstract.interface';
import { ViewModelTransformTriangleStateInterface } from './interfaces/transform-triangle.view-model.interface';
import { ContextTransformTriangleInterface } from '../context/interfaces/transform-triangle.context.interfaces';
import TransformTriangleContext from '@/modules/transform-triangle/context/transform-triangle.context';

/**
 * Transform Triangle Desktop View Model
 * @author Irfan Andriansyah <irfan@99.co>
 * @description Listing Form View Component
 * @since 2019.10.17
 */
const ViewModelTransformTrianglePageDesktopHOC = (
    CompossedComponent: ComponentClass<ViewModelAbstractInterface>,
    Router: RouteComponentProps
): any => {
    /**
     * View Model Transform Triangle
     * @author Irfan Andriansyah <irfan@99.co>
     * @description
     * @since 2019.10.17
     */
    class ViewModelListingFormPageDesktop extends ViewModelAbstract<
        ViewModelAbstractInterface,
        ViewModelTransformTriangleStateInterface
    > {
        constructor(props: ViewModelAbstractInterface) {
            super(props);

            this.state = {
                point1: {
                    x: 10,
                    y: 100
                },
                point2: {
                    x: 60,
                    y: 100
                },
                point3: {
                    x: 110,
                    y: 100
                },
                optionRotate: {
                    degree: 0
                },
                optionTransform: {
                    scaleX: 0,
                    scaleY: 0
                },
                optionTranslate: {
                    positionX: 0,
                    positionY: 0
                }
            };
        }

        /**
         *
         */
        get contextValue(): ContextTransformTriangleInterface {
            const { point1, point2, point3 } = this.state;

            return {
                router: Router,
                triangle: {
                    point: {
                        point1,
                        point2,
                        point3
                    },
                    rotate: {
                        onChange: (degree: number) => {},
                        option: {
                            degree: 0
                        },
                        point: {
                            point1,
                            point2,
                            point3
                        }
                    },
                    transform: {
                        onChange: (scaleX: number, scaleY: number) => {},
                        option: {
                            scaleX: 0,
                            scaleY: 0
                        },
                        point: {
                            point1,
                            point2,
                            point3
                        }
                    },
                    translate: {
                        onChange: (positionX: number, positionY: number) => {},
                        option: {
                            positionX: 0,
                            positionY: 0
                        },
                        point: {
                            point1,
                            point2,
                            point3
                        }
                    }
                }
            };
        }

        render(): ReactNode {
            const { contextValue } = this;

            return (
                <TransformTriangleContext.Provider value={contextValue}>
                    <CompossedComponent {...this.props} />
                </TransformTriangleContext.Provider>
            );
        }
    }

    return ViewModelListingFormPageDesktop;
};

export default ViewModelTransformTrianglePageDesktopHOC;
