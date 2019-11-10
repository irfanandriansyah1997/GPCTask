import * as React from 'react';
import { ComponentClass, ReactNode } from 'react';
import { RouteComponentProps } from 'react-router';

import ViewModelAbstract from '@/abstract/view-model.abstract';
import { ViewModelAbstractInterface } from '@/interfaces/general/view-model-abstract.interface';
import { ViewModelTransformTriangleStateInterface } from './interfaces/transform-triangle.view-model.interface';
import { ContextTransformTriangleInterface } from '../context/interfaces/transform-triangle.context.interfaces';
import TransformTriangleContext from '@/modules/transform-triangle/context/transform-triangle.context';
import { TriangleObjectInterface } from '@/interfaces/general/triangle.interface';
import { MatrixMultiplyCalculatorUtil, MatrixAddCalculatorUtil } from '@/utils/matrix.util';

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
                    y: 70
                },
                point2: {
                    x: 10,
                    y: -25
                },
                point3: {
                    x: 150,
                    y: -25
                },
                optionRotate: {
                    degree: 0
                },
                optionTransform: {
                    scaleX: -1,
                    scaleY: 1
                },
                optionTranslate: {
                    positionX: -20,
                    positionY: -20
                }
            };

            this.getMultiplyMatrix = this.getMultiplyMatrix.bind(this);
        }

        /**
         * Getter result point rotate
         * @return {TriangleObjectInterface}
         */
        get pointRotate(): TriangleObjectInterface {
            const { optionRotate } = this.state;
            const { degree } = optionRotate;

            const MultiplyMatrix: number[][] = this.getMultiplyMatrix([
                [
                    this.getTrigonometricValue('cos', degree || 0),
                    this.getTrigonometricValue('sin', degree || 0)
                ],
                [
                    this.getTrigonometricValue('sin', (degree || 0) * -1),
                    this.getTrigonometricValue('cos', (degree || 0))
                ]
            ]);

            return {
                point1: {
                    x: MultiplyMatrix[0][0],
                    y: MultiplyMatrix[0][1]
                },
                point2: {
                    x: MultiplyMatrix[1][0],
                    y: MultiplyMatrix[1][1]
                },
                point3: {
                    x: MultiplyMatrix[2][0],
                    y: MultiplyMatrix[2][1]
                }
            };
        }

        /**
         * Getter result point transform
         * @return {TriangleObjectInterface}
         */
        get pointTransform(): TriangleObjectInterface {
            const { optionTransform } = this.state;

            const MultiplyMatrix: number[][] = this.getMultiplyMatrix([
                [(optionTransform.scaleX || 0), 0],
                [0, (optionTransform.scaleY || 0)]
            ]);

            return {
                point1: {
                    x: MultiplyMatrix[0][0],
                    y: MultiplyMatrix[0][1]
                },
                point2: {
                    x: MultiplyMatrix[1][0],
                    y: MultiplyMatrix[1][1]
                },
                point3: {
                    x: MultiplyMatrix[2][0],
                    y: MultiplyMatrix[2][1]
                }
            };
        }

        /**
         * Getter result point translate
         * @return {TriangleObjectInterface}
         */
        get pointTranslate(): TriangleObjectInterface {
            const { optionTranslate } = this.state;
            const { positionX, positionY } = optionTranslate;

            const MultiplyMatrix: number[][] = MatrixAddCalculatorUtil(
                this.getMultiplyMatrix([
                    [1, 0],
                    [0, 1]
                ]),
                [
                    [(positionX || 0), (positionY || 0)],
                    [(positionX || 0), (positionY || 0)],
                    [(positionX || 0), (positionY || 0)]
                ]
            );

            return {
                point1: {
                    x: MultiplyMatrix[0][0],
                    y: MultiplyMatrix[0][1]
                },
                point2: {
                    x: MultiplyMatrix[1][0],
                    y: MultiplyMatrix[1][1]
                },
                point3: {
                    x: MultiplyMatrix[2][0],
                    y: MultiplyMatrix[2][1]
                }
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

        /**
         * Get degree cos / sin value
         * @param type
         * @param degree
         */
        public getTrigonometricValue(type: 'cos' | 'sin', degree: number): number {
            let response = '';

            if (type === 'cos') {
                response = Math.cos(Math.PI * degree / 180).toFixed(5);
            }

            if (type === 'sin') {
                response = Math.sin(Math.PI * degree / 180).toFixed(5);
            }

            return parseFloat(response);
        }

        /**
         * Multiply Matrix Based On State Points
         * @param {number[][]} matrix
         * @return {number[][]}
         */
        public getMultiplyMatrix(matrix: number[][]): number[][] {
            const {
                point1,
                point2,
                point3
            } = this.state;

            return MatrixMultiplyCalculatorUtil(
                [
                    [point1.x, point1.y],
                    [point2.x, point2.y],
                    [point3.x, point3.y]
                ],
                matrix
            );
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
