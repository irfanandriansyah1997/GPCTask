import { TriangleObjectInterface } from '@/interfaces/general/triangle.interface';

export interface MoleculesTrianglePropsInterface {
    point: TriangleObjectInterface;
    default: TriangleObjectInterface;
    viewBox: number;
    size: number;
}

export interface MoleculesTriangleStateInterface {
    pointChart: boolean;
    defaultChart: boolean;
}
