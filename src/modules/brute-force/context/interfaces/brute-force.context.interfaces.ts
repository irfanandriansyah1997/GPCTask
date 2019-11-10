import { BaseDefaultContext } from '@/interfaces/general/context.interface';
import { TrianglePointInterface } from '@/interfaces/general/triangle.interface';

/**
 * Context Brute Force Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.17
 */
export interface ContextBruteForceInterface extends BaseDefaultContext {
    bruteForce: {
        point1: TrianglePointInterface;
        point2: TrianglePointInterface;
        path: TrianglePointInterface[];
        onChangePoint: (
            point1: TrianglePointInterface,
            point2: TrianglePointInterface
        ) => void;
    };
}
