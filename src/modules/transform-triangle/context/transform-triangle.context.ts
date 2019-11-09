/**
 * Transform Triangle Context API
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.09.21
 */

import * as React from 'react';
import { ContextTransformTriangleInterface } from './interfaces/transform-triangle.context.interfaces';

const TransformTriangleContext = React.createContext<
    ContextTransformTriangleInterface
>({
    triangle: {
        point: {
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
            }
        },
        rotate: {
            onChange: (degree: number) => {},
            option: {
                degree: 0
            },
            point: {
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
                }
            }
        },
        transform: {
            onChange: (scaleX: number, scaleY: number) => {},
            option: {
                scaleX: 0,
                scaleY: 0
            },
            point: {
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
                }
            }
        },
        translate: {
            onChange: (positionX: number, positionY: number) => {},
            option: {
                positionX: 0,
                positionY: 0
            },
            point: {
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
                }
            }
        }
    }
});

export default TransformTriangleContext;
