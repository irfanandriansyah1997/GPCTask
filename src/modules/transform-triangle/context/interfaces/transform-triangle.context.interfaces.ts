import { BaseDefaultContext } from '@/interfaces/general/context.interface';
import { TriangleObjectInterface } from '@/interfaces/general/triangle.interface';

/**
 * Context Transform Triangle Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.17
 */
export interface ContextTransformTriangleInterface extends BaseDefaultContext {
    triangle: {
        point: TriangleObjectInterface;
        translate: TranslatePositionInterface;
        transform: TransformPositionInterface;
        rotate: RotatePositionInterface;
    };
}

/**
 * Translate Position Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.11.08
 */
export interface TranslatePositionInterface {
    point: TriangleObjectInterface;
    option: {
        positionX: number;
        positionY: number;
    };
    onChange: (positionX: number, positionY: number) => void;
}

/**
 * Transform Position Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.11.08
 */
export interface TransformPositionInterface {
    point: TriangleObjectInterface;
    option: {
        scaleX: number;
        scaleY: number;
    };
    onChange: (scaleX: number, scaleY: number) => void;
}

/**
 * Rotate Position Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.11.08
 */
export interface RotatePositionInterface {
    point: TriangleObjectInterface;
    option: {
        degree: number;
    };
    onChange: (degree: number) => void;
}
