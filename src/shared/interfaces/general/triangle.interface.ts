/**
 * Triangle Item Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.11.08
 */
export interface TrianglePointInterface {
    x: number;
    y: number;
}

/**
 * Triangle Object Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2019.11.08
 */
export interface TriangleObjectInterface {
    point1: TrianglePointInterface;
    point2: TrianglePointInterface;
    point3: TrianglePointInterface;
}
