import { TrianglePointInterface } from '@/interfaces/general/triangle.interface';

/**
 * Transform Triangle View Model State
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.11.08
 */
export interface ViewModelTransformTriangleStateInterface {
    point1: TrianglePointInterface;
    point2: TrianglePointInterface;
    point3: TrianglePointInterface;
    optionTranslate: {
        positionX: number;
        positionY: number;
    };
    optionTransform: {
        scaleX: number;
        scaleY: number;
    };
    optionRotate: {
        degree: number;
    };
}
