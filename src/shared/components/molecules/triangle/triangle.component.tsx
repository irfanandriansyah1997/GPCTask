/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { MoleculesTrianglePropsInterface, MoleculesTriangleStateInterface } from './interfaces/component.interface';
import { TrianglePointInterface } from '@/interfaces/general/triangle.interface';
import AtomSVGPathlineComponent from '@/atoms/svg-pathline/svg-pathline.component';
import ColorDefaultVariableStyle from '@/styled-component/theme/default/color.variable';
import TextComponent from '@/atoms/text/text.component';
import { convertObjectToString } from '@/utils/string.util';

import './styles/style.scss';

/**
 * Generate Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2019.11.09
 */
class MoleculesTriangleComponent extends React.Component<MoleculesTrianglePropsInterface, MoleculesTriangleStateInterface> {
    constructor(props: MoleculesTrianglePropsInterface) {
        super(props);

        this.genPoint = this.genPoint.bind(this);

        this.state = {
            defaultChart: true,
            pointChart: true
        };
    }

    /**
     * Get points based on props point
     * @param {string} type
     * @return{TrianglePointInterface[]}
     */
    public genPoint(type: 'point' | 'default'): TrianglePointInterface[] {
        const { viewBox } = this.props;
        return [
            this.props[type].point1,
            this.props[type].point2,
            this.props[type].point3,
            this.props[type].point1
        ].map((item: TrianglePointInterface) => ({
            x: item.x + (viewBox / 2),
            y: item.y + (viewBox / 2)
        }));
    }

    render(): React.ReactNode {
        const { size, viewBox } = this.props;
        const { defaultChart, pointChart } = this.state;
        const { genPoint } = this;

        return (
            <div className="ui-molecules-triangle flex relative">
                <div className="ui-molecules-triangle__svg flex relative">
                    <svg
                        width={size}
                        height={size}
                        viewBox={`0 0 ${viewBox} ${viewBox}`}
                    >
                        {
                            defaultChart === true ? (
                                <AtomSVGPathlineComponent
                                    point={genPoint('default')}
                                    stroke="secondary"
                                    strokeWidth={1}
                                    radius={2}
                                    viewBox={viewBox}
                                />
                            ): null
                        }
                        {
                            pointChart === true ? (
                                <AtomSVGPathlineComponent
                                    point={genPoint('point')}
                                    stroke="primary"
                                    strokeWidth={1}
                                    radius={2}
                                    viewBox={viewBox}
                                />
                            ): null
                        }
                    </svg>
                </div>

                <div className="ui-molecules-triangle__option absolute flex">
                    <div
                        className={convertObjectToString({
                            flex: true,
                            'ui-molecules-triangle__option__item': true,
                            'ui-molecules-triangle__option__item--active': pointChart
                        })}
                        onClick={() => this.setState({ pointChart: !pointChart })}
                        onKeyDown={() => {}}
                        role="presentation"
                    >
                        <div
                            className="ui-molecules-triangle__option__indicator"
                            style={{ backgroundColor: ColorDefaultVariableStyle.primary }}
                        />
                        <TextComponent
                            align="left"
                            fontWeight={400}
                            tag="p"
                            styling="heading-6"
                            color="text"
                        >
                            Hasil Hitung
                        </TextComponent>
                    </div>
                    <div
                        className={convertObjectToString({
                            flex: true,
                            'ui-molecules-triangle__option__item': true,
                            'ui-molecules-triangle__option__item--active': defaultChart
                        })}
                        onClick={() => this.setState({ defaultChart: !defaultChart })}
                        onKeyDown={() => {}}
                        role="presentation"
                    >
                        <div
                            className="ui-molecules-triangle__option__indicator"
                            style={{ backgroundColor: ColorDefaultVariableStyle.secondary }}
                        />
                        <TextComponent
                            align="left"
                            fontWeight={400}
                            tag="p"
                            styling="heading-6"
                            color="text"
                        >
                            Default
                        </TextComponent>
                    </div>
                </div>
            </div>
        );
    }
}

export default MoleculesTriangleComponent;
