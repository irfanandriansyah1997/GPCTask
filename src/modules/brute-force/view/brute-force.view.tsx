import * as React from 'react';

import { ViewModelAbstractInterface } from '@/interfaces/general/view-model-abstract.interface';
import BruteForceContext from '@/modules/brute-force/context/brute-force.context';
import TextComponent from '@/atoms/text/text.component';
import ImageViewComponent from '@/atoms/image-view/image-view.component';
import { ComponentImageTypeEnum, ComponentImageStrecthTypeEnum } from '@/interfaces/component/component-image.enum';
import AtomSVGPathlineComponent from '@/atoms/svg-pathline/svg-pathline.component';

import './style/style.scss';
import EditTextComponent from '@/atoms/edit-text/edit-text.component';
import { AtomEditTextOnChangeInterface } from '@/atoms/edit-text/interfaces/component.interface';
import { TrianglePointInterface } from '@/interfaces/general/triangle.interface';

/**
 * Listing Brute Force View
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.10.17
 */
class BruteForceViewDesktopPage extends React.Component<ViewModelAbstractInterface, any> {
    context!: React.ContextType<typeof BruteForceContext>;

    static contextType = BruteForceContext;

    render(): React.ReactNode {
        const { bruteForce } = this.context;
        const {
            point1,
            point2,
            onChangePoint1,
            onChangePoint2,
            path
        } = bruteForce;

        return (
            <div>
                <div
                    className="ui-pages__greeting flex"
                >
                    <div className="ui-pages__greeting__content">
                        <TextComponent
                            tag="p"
                            align="left"
                            fontWeight={600}
                            styling="heading-2"
                        >
                            Selamat Datang
                        </TextComponent>

                        <TextComponent
                            tag="span"
                            align="left"
                            fontWeight={400}
                            styling="heading-5"
                            fontFamily="secondary"
                            color="heading600"
                            className="mt-5 block"
                        >
                            simulasi metodologi brute force, mengambil semua titik dari 1 garis yang telah ditentukan
                        </TextComponent>
                    </div>
                    <ImageViewComponent
                        src="https://svgur.com/i/G2o.svg"
                        alt="perihal"
                        type={ComponentImageTypeEnum.SQUARE}
                        objectFit={ComponentImageStrecthTypeEnum.INITIAL}
                    />
                </div>
                <div className="ui-pages-brute-force flex">
                    <div className="ui-pages-brute-force__graph">
                        <div className="ui-pages-brute-force__heading m-15">
                            <TextComponent
                                tag="p"
                                align="left"
                                fontWeight={600}
                                styling="heading-5"
                            >
                                Simulasi Grafik
                            </TextComponent>
                            <TextComponent
                                tag="span"
                                align="left"
                                fontWeight={400}
                                styling="meta"
                                fontFamily="secondary"
                            >
                                Simulasi Brute Force
                            </TextComponent>
                        </div>
                        <div className="ui-pages-brute-force__svg relative">
                            <svg
                                width="300"
                                height="300"
                                viewBox="0 0 500 500"
                            >
                                <AtomSVGPathlineComponent
                                    point={[
                                        {
                                            x: point1.x + 250,
                                            y: point1.y + 250
                                        },
                                        {
                                            x: point2.x + 250,
                                            y: point2.y + 250
                                        }
                                    ]}
                                    stroke="secondary"
                                    strokeWidth={1}
                                    radius={2}
                                    viewBox={500}
                                />
                            </svg>
                        </div>
                        <div className="ui-pages-brute-force__footer mt-10">
                            <div className="ui-pages-brute-force__footer__sub-item flex mb-10 pl-10 pr-10">
                                <EditTextComponent
                                    addOn="text"
                                    addOnText="X Axis"
                                    name="rotate"
                                    tag="input"
                                    value={point1.x}
                                    type="number"
                                    onChange={(event: AtomEditTextOnChangeInterface) => onChangePoint1({
                                        x: event.target.value === ''
                                            ? 0
                                            : parseInt(event.target.value, 10),
                                        y: point1.y
                                    })}
                                />
                                <EditTextComponent
                                    addOn="text"
                                    addOnText="Y Axis"
                                    name="rotate"
                                    tag="input"
                                    value={point1.y}
                                    type="number"
                                    onChange={(event: AtomEditTextOnChangeInterface) => onChangePoint1({
                                        y: event.target.value === ''
                                            ? 0
                                            : parseInt(event.target.value, 10),
                                        x: point1.x
                                    })}
                                />
                            </div>
                            <div className="ui-pages-brute-force__footer__sub-item flex mb-10 pl-10 pr-10">
                                <EditTextComponent
                                    addOn="text"
                                    addOnText="X Axis"
                                    name="rotate"
                                    tag="input"
                                    value={point2.x}
                                    type="number"
                                    onChange={(event: AtomEditTextOnChangeInterface) => onChangePoint2({
                                        x: event.target.value === ''
                                            ? 0
                                            : parseInt(event.target.value, 10),
                                        y: point2.y
                                    })}
                                />
                                <EditTextComponent
                                    addOn="text"
                                    addOnText="Y Axis"
                                    name="rotate"
                                    tag="input"
                                    value={point2.y}
                                    type="number"
                                    onChange={(event: AtomEditTextOnChangeInterface) => onChangePoint2({
                                        y: event.target.value === ''
                                            ? 0
                                            : parseInt(event.target.value, 10),
                                        x: point2.x
                                    })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="ui-pages-brute-force__content flex pr-10">
                        {path.map((item: TrianglePointInterface) => (
                            <div key={`${item.x}-${item.y}`}>
                                <div className="m-5 p-10 ui-pages-brute-force__content__item flex">
                                    <TextComponent
                                        align="left"
                                        tag="p"
                                        fontWeight={400}
                                        styling="caption"
                                        color="text"
                                        className="mb-10"
                                    >
                                        Point Garis
                                    </TextComponent>
                                    <TextComponent
                                        align="left"
                                        tag="p"
                                        fontWeight={400}
                                        styling="heading-5"
                                    >
                                        {`(${item.x}, ${item.y})`}
                                    </TextComponent>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default BruteForceViewDesktopPage;
