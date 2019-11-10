import * as React from 'react';
import { ComponentClass, ReactNode } from 'react';
import { RouteComponentProps } from 'react-router';

import ViewModelAbstract from '@/abstract/view-model.abstract';
import { ViewModelAbstractInterface } from '@/interfaces/general/view-model-abstract.interface';
import { ViewModelTransformTriangleStateInterface } from './interfaces/transform-triangle.view-model.interface';
import { ContextTransformTriangleInterface } from '../context/interfaces/transform-triangle.context.interfaces';
import TransformTriangleContext from '@/modules/transform-triangle/context/transform-triangle.context';
import { TriangleObjectInterface } from '@/interfaces/general/triangle.interface';

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
                    x: 20,
                    y: 100
                },
                point2: {
                    x: 180,
                    y: 80
                },
                point3: {
                    x: 120,
                    y: 20
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
         * Getter result point rotate
         * @return {TriangleObjectInterface}
         */
        get pointRotate(): TriangleObjectInterface {
            const {
                point1,
                point2,
                point3
            } = this.state;

            return {
                point1,
                point2,
                point3
            };
        }

        /**
         * Getter result point transform
         * @return {TriangleObjectInterface}
         */
        get pointTransform(): TriangleObjectInterface {
            const {
                point1,
                point2,
                point3
            } = this.state;

            return {
                point1,
                point2,
                point3
            };
        }

        /**
         * Getter result point translate
         * @return {TriangleObjectInterface}
         */
        get pointTranslate(): TriangleObjectInterface {
            const {
                point1,
                point2,
                point3
            } = this.state;

            return {
                point1,
                point2,
                point3
            };
        }

        /**
         * Getter Context Provider
         * @return {ContextTransformTriangleInterface}
         */
        get contextValue(): ContextTransformTriangleInterface {
            const {
                point1,
                point2,
                point3,
                optionRotate,
                optionTransform,
                optionTranslate
            } = this.state;

            return {
                router: Router,
                triangle: {
                    point: {
                        point1,
                        point2,
                        point3
                    },
                    rotate: {
                        onChange: (degree: number) => this.setState({
                            optionRotate: {
                                degree
                            }
                        }),
                        option: optionRotate,
                        point: this.pointRotate
                    },
                    transform: {
                        onChange: (scaleX: number, scaleY: number) => this.setState({
                            optionTransform: {
                                scaleX, scaleY
                            }
                        }),
                        option: optionTransform,
                        point: this.pointTransform
                    },
                    translate: {
                        onChange: (positionX: number, positionY: number) => this.setState({
                            optionTranslate: {
                                positionX, positionY
                            }
                        }),
                        option: optionTranslate,
                        point: this.pointTranslate
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
