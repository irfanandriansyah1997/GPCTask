import * as React from 'react';
import { DefaultDynamicObject } from '@/interfaces/general/object.interface';
import { TrianglePointInterface } from '@/interfaces/general/triangle.interface';
import ColorDefaultVariableStyle from '@/styled-component/theme/default/color.variable';
import { AtomSVGPathLinePropsInterface, AtomSVGPathLineStateInterface } from './interfaces/component.interface';

/**
 * SVG Path Line Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @description generate d position in path svg
 * @since 2019.11.09
 */
class AtomSVGPathlineComponent extends React.Component<
    AtomSVGPathLinePropsInterface,
    AtomSVGPathLineStateInterface
> {
    public node: any = React.createRef<HTMLOrSVGElement>();

    /**
     * check is path is colinear or not
     * @param {TrianglePointInterface} p1 - point 1 in path
     * @param {TrianglePointInterface} p2 - point 2 in path
     * @param {TrianglePointInterface} p3 - point 3 in path
     * @return {boolean}
     */
    static isColinear(
        p1: TrianglePointInterface,
        p2: TrianglePointInterface,
        p3: TrianglePointInterface
    ): boolean {
        return (p1.y - p2.y) * (p1.x - p3.x) === (p1.y - p3.y) * (p1.x - p2.x);
    }

    /**
     * set point move to next point
     * @param {TrianglePointInterface} p1 - point 1 in path
     * @param {TrianglePointInterface} p2 - point 2 in path
     * @param {number} radius - radius
     * @return {TrianglePointInterface}
     */
    static moveTo(
        p1: TrianglePointInterface,
        p2: TrianglePointInterface,
        radius: number
    ): TrianglePointInterface {
        const vector: TrianglePointInterface = {
            x: p1.x - p2.x,
            y: p1.y - p2.y
        };
        const length: number = Math.sqrt((vector.x * vector.x) + (vector.y * vector.y));
        const unitVector: TrianglePointInterface = {
            x: vector.x / length,
            y: vector.y / length
        };

        return {
            x: p2.x + (unitVector.x * radius),
            y: p2.y + (unitVector.y * radius)
        };
    }

    constructor(props: AtomSVGPathLinePropsInterface) {
        super(props);

        this.getPath = this.getPath.bind(this);
        this.getTransformAttribute = this.getTransformAttribute.bind(this);

        this.state = {
            transform: ''
        };
    }

    componentDidMount() {
        this.setState({
            transform: this.getTransformAttribute()
        });
    }

    /**
     * Getter Transform Attribute
     * @return {string}
     */
    getTransformAttribute(): string {
        const { node } = this;
        const { viewBox } = this.props;

        if (node.current) {
            const boundingClient: DefaultDynamicObject = node.current.getBoundingClientRect();
            const responseY = (viewBox - boundingClient.height) / 2;
            const responseX = (viewBox - boundingClient.width) / 2;

            return `translate(${responseX}px, ${responseY}px)`;
        }

        return '';
    }

    /**
     * get path props for path tag
     * @param {TrianglePointInterface[]} points - point path
     * @param {number} radius - radius when before and after path meet
     * @return {string}
     */
    public getPath(points: TrianglePointInterface[], radius: number): string {
        return points
            .slice(1)
            .reduce((
                acc: any,
                p: TrianglePointInterface,
                i: number
            ) => {
                const next: TrianglePointInterface = points[i + 1];
                const prev: any = acc[acc.length - 1];

                if (next && !AtomSVGPathlineComponent.isColinear(prev.point, p, next)) {
                    const before: TrianglePointInterface = AtomSVGPathlineComponent.moveTo(prev.point, p, radius);
                    const after: TrianglePointInterface = AtomSVGPathlineComponent.moveTo(next, p, radius);
                    return acc.concat({
                        point: p,
                        s: `L ${before.x} ${before.y} S ${p.x} ${p.y} ${after.x} ${after.y} `
                    });
                }

                return acc.concat({
                    point: p,
                    s: `L ${p.x} ${p.y} `
                });
            }, [{
                point: points[0],
                s: `M ${points[0].x} ${points[0].y} `
            }])
            .map((p: any) => p.s)
            .join('');
    }

    render(): React.ReactNode {
        const {
            point,
            radius,
            viewBox,
            ...other
        } = this.props;
        const { transform } = this.state;
        const { getPath } = this;

        return (
            <path
                ref={this.node}
                {...other}
                style={{ transform }}
                fill="rgba(0, 0, 0, 0)"
                d={getPath(point, radius)}
                stroke={ColorDefaultVariableStyle[other.stroke]}
            />
        );
    }
}

export default AtomSVGPathlineComponent;
