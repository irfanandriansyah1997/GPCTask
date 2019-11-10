import * as React from 'react';

import { ViewModelAbstractInterface } from '@/interfaces/general/view-model-abstract.interface';
import BruteForceContext from '@/modules/brute-force/context/brute-force.context';
import TextComponent from '@/atoms/text/text.component';
import ImageViewComponent from '@/atoms/image-view/image-view.component';
import { ComponentImageTypeEnum, ComponentImageStrecthTypeEnum } from '@/interfaces/component/component-image.enum';

import './style/style.scss';
import AtomSVGPathlineComponent from '@/atoms/svg-pathline/svg-pathline.component';

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
        const { point1, point2 } = bruteForce;
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
                        <svg
                            width="300"
                            height="300"
                            viewBox="0 0 500 500"
                        >
                            <AtomSVGPathlineComponent
                                point={[
                                    point1,
                                    point2
                                ]}
                                stroke="secondary"
                                strokeWidth={1}
                                radius={2}
                                viewBox={500}
                            />
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default BruteForceViewDesktopPage;
