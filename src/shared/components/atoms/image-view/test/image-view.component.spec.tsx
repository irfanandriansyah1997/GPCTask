import * as React from 'react';
import { render, shallow } from 'enzyme';

import ImageView from '@/atoms/image-view/image-view.component';
import { DefaultImageComponentProps } from '@/interfaces/component/component-image.interface';
import { ComponentImageStrecthTypeEnum, ComponentImageTypeEnum } from '@/interfaces/component/component-image.enum';
import { componentImageTypeTranslator, componentImageStrecthTypeTranslator } from '@/utils/theme.utils';

require('config/enzyme.config');

const FIXTURE: DefaultImageComponentProps[] = [
    {
        className: 'class-sample-1',
        alt: 'Testing Alt 1',
        src: 'images link 1',
        objectFit: ComponentImageStrecthTypeEnum.CONTAIN,
        type: ComponentImageTypeEnum.CIRCLE
    },
    {
        className: 'class-sample-2',
        alt: 'Testing Alt 2',
        src: 'images link 2',
        objectFit: ComponentImageStrecthTypeEnum.FILL,
        type: ComponentImageTypeEnum.ROUNDED
    },
    {
        className: 'class-sample-3',
        alt: 'Testing Alt 3',
        src: 'images link 3',
        objectFit: ComponentImageStrecthTypeEnum.COVER,
        type: ComponentImageTypeEnum.SQUARE
    }
];

describe('Testing image view component in atomic component ', () => {
    it('Test render image view component', () => {
        FIXTURE.forEach((item: DefaultImageComponentProps) => {
            const image = render(<ImageView {...item} />);

            expect(image.hasClass(item.className as string)).toBe(true);
            expect(image.hasClass(`ui-atomic-image--type-${componentImageTypeTranslator(item.type)}`)).toBe(true);
            expect(image.hasClass(`ui-atomic-image--object-fit-${componentImageStrecthTypeTranslator(item.objectFit)}`)).toBe(true);
            expect(image.prop('alt')).toBe(item.alt);
            expect(image.prop('src')).toBe(item.src);
        });
    });

    it('Set width and height image view', () => {
        const props: DefaultImageComponentProps = {
            className: 'class-sample-3',
            alt: 'Testing Alt 3',
            src: 'images link 3',
            objectFit: ComponentImageStrecthTypeEnum.COVER,
            type: ComponentImageTypeEnum.SQUARE,
            width: 32,
            height: 32
        };

        const image = render(<ImageView {...props} />);
        expect(image.prop('style')).toHaveProperty('width', '32px');
        expect(image.prop('style')).toHaveProperty('height', '32px');
    });

    it('User on click image component', () => {
        const props: DefaultImageComponentProps = {
            className: 'class-sample-3',
            alt: 'Testing Alt 3',
            src: 'images link 3',
            objectFit: ComponentImageStrecthTypeEnum.COVER,
            type: ComponentImageTypeEnum.SQUARE,
            width: 32,
            height: 32,
            onClick: jest.fn()
        };

        const image = shallow(<ImageView {...props} />);

        /**
         * Before On Click Backdrop
         */
        expect(props.onClick).toHaveBeenCalledTimes(0);

        /**
         * On Click Backdrop
         */
        image.find('img').simulate('click');
        expect(props.onClick).toHaveBeenCalledTimes(1);
    });
});
