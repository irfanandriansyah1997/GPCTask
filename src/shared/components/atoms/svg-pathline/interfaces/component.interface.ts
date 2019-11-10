import { TrianglePointInterface } from '@/interfaces/general/triangle.interface';
import { ComponentColorType } from '@/interfaces/component/component-style.interface';

/**
 * Atom SVG Pathline
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.11.09
 */
export interface AtomSVGPathLinePropsInterface {
    point: TrianglePointInterface[];
    stroke: ComponentColorType;
    strokeWidth: number;
    radius: number;
    viewBox: number;
}

/**
 * Atom SVG Pathline State
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.11.09
 */
export interface AtomSVGPathLineStateInterface {
    transform: string;
}
