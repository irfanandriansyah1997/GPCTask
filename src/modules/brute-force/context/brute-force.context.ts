/**
 * Transform Triangle Context API
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.09.21
 */

import * as React from 'react';
import { ContextBruteForceInterface } from './interfaces/brute-force.context.interfaces';
import { TrianglePointInterface } from '@/interfaces/general/triangle.interface';

const BruteForceContext = React.createContext<ContextBruteForceInterface>({
    bruteForce: {
        point1: {
            x: 0,
            y: 0
        },
        point2: {
            x: 0,
            y: 0
        },
        path: [],
        onChangePoint: (
            point: TrianglePointInterface,
            point2: TrianglePointInterface
        ) => {}
    }
});

export default BruteForceContext;
