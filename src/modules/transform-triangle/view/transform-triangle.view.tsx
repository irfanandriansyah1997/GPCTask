import * as React from 'react';

import { ViewModelAbstractInterface } from '@/interfaces/general/view-model-abstract.interface';
import MoleculesTriangleComponent from '@/molecules/triangle/triangle.component';
import TransformTriangleContext from '@/modules/transform-triangle/context/transform-triangle.context';

import './style/style.scss';
import TextComponent from '@/atoms/text/text.component';
import EditTextComponent from '@/atoms/edit-text/edit-text.component';
import ImageViewComponent from '@/atoms/image-view/image-view.component';
import { ComponentImageTypeEnum, ComponentImageStrecthTypeEnum } from '@/interfaces/component/component-image.enum';
import { AtomEditTextOnChangeInterface } from '@/atoms/edit-text/interfaces/component.interface';

/**
 * Listing Form View
 * @author Irfan Andriansyah <irfan@99.co>
 * @description Listing Form View Component
 * @since 2019.10.17
 */
class TransformTriangleViewDesktopPage extends React.Component<ViewModelAbstractInterface, any> {
    context!: React.ContextType<typeof TransformTriangleContext>;

    static contextType = TransformTriangleContext;

    /**
     *
     * @param title
     */
    renderHeading(title: string, label: string): React.ReactNode {
        return (
            <div className="ui-pages-transform-triangle__content__heading m-15">
                <TextComponent
                    tag="p"
                    align="left"
                    fontWeight={600}
                    styling="heading-5"
                >
                    {title}
                </TextComponent>
                <TextComponent
                    tag="span"
                    align="left"
                    fontWeight={400}
                    styling="meta"
                    fontFamily="secondary"
                >
                    {label}
                </TextComponent>
            </div>
        );
    }

    render(): React.ReactNode {
        const { triangle } = this.context;
        return (
            <div>
                <div className="ui-pages__greeting flex">
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
                            simulasi trigonometri dengan object berupa segitiga. anda dapat membuat simulasi rotasi, transform dan translasi.
                        </TextComponent>
                    </div>
                    <ImageViewComponent
                        src="https://svgur.com/i/G2b.svg"
                        alt="perihal"
                        type={ComponentImageTypeEnum.SQUARE}
                        objectFit={ComponentImageStrecthTypeEnum.INITIAL}
                    />
                </div>
                <div className="ui-pages-transform-triangle flex">
                    <div className="ui-pages-transform-triangle__content relative m-10">
                        {this.renderHeading('Rotasi', 'Simulasi Rotasi Pada Segitiga')}
                        <MoleculesTriangleComponent
                            point={triangle.rotate.point}
                            default={triangle.point}
                            size={300}
                            viewBox={500}
                        />
                        <div className="ui-pages-transform-triangle__content__footer p-10 absolute">
                            <EditTextComponent
                                addOn="text"
                                addOnText="deg"
                                name="rotate"
                                tag="input"
                                value={triangle.rotate.option.degree}
                                placeholder="Masukan rotasi derajat"
                                type="number"
                                onChange={(event: AtomEditTextOnChangeInterface) => triangle
                                    .rotate
                                    .onChange(
                                        event.target.value === ''
                                            ? 0
                                            : parseInt(event.target.value, 10)
                                    )
                                }
                            />
                        </div>
                    </div>
                    <div className="ui-pages-transform-triangle__content relative m-10">
                        {this.renderHeading('Transform', 'Simulasi Transform Pada Segitiga')}
                        <MoleculesTriangleComponent
                            point={triangle.transform.point}
                            default={triangle.point}
                            size={300}
                            viewBox={500}
                        />
                        <div className="ui-pages-transform-triangle__content__footer--dual p-10 flex absolute">
                            <EditTextComponent
                                addOn="text"
                                addOnText="X Axis"
                                name="rotate"
                                tag="input"
                                value={triangle.transform.option.scaleX}
                                type="number"
                                onChange={(event: AtomEditTextOnChangeInterface) => triangle
                                    .transform
                                    .onChange(
                                        event.target.value === ''
                                            ? 0
                                            : parseInt(event.target.value, 10),
                                        triangle.transform.option.scaleY
                                    )
                                }
                            />
                            <EditTextComponent
                                addOn="text"
                                addOnText="Y Axis"
                                name="rotate"
                                tag="input"
                                value={triangle.transform.option.scaleY}
                                type="number"
                                onChange={(event: AtomEditTextOnChangeInterface) => triangle
                                    .transform
                                    .onChange(
                                        triangle.transform.option.scaleX,
                                        event.target.value === ''
                                            ? 0
                                            : parseInt(event.target.value, 10)
                                    )
                                }
                            />
                        </div>
                    </div>
                    <div className="ui-pages-transform-triangle__content relative m-10">
                        {this.renderHeading('Translasi', 'Simulasi Translasi Pada Segitiga')}
                        <MoleculesTriangleComponent
                            point={triangle.translate.point}
                            default={triangle.point}
                            size={300}
                            viewBox={500}
                        />
                        <div className="ui-pages-transform-triangle__content__footer--dual p-10 flex absolute">
                            <EditTextComponent
                                addOn="text"
                                addOnText="X Axis"
                                name="rotate"
                                tag="input"
                                value={triangle.translate.option.positionX}
                                type="number"
                                onChange={(event: AtomEditTextOnChangeInterface) => triangle
                                    .translate
                                    .onChange(
                                        event.target.value === ''
                                            ? 0
                                            : parseInt(event.target.value, 10),
                                        triangle.translate.option.positionY
                                    )
                                }
                            />
                            <EditTextComponent
                                addOn="text"
                                addOnText="Y Axis"
                                name="rotate"
                                tag="input"
                                value={triangle.translate.option.positionY}
                                type="number"
                                onChange={(event: AtomEditTextOnChangeInterface) => triangle
                                    .translate
                                    .onChange(
                                        triangle.translate.option.positionX,
                                        event.target.value === ''
                                            ? 0
                                            : parseInt(event.target.value, 10)
                                    )
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TransformTriangleViewDesktopPage;
