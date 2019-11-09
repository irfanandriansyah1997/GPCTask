import * as React from 'react';
import { render } from 'enzyme';

import Avatar from '@/atoms/avatar/avatar.component';
import { AtomsAvatarPropsInterface } from '@/atoms/avatar/interfaces/component.interface';
import { ComponentImageTypeEnum } from '@/interfaces/component/component-image.enum';

require('config/enzyme.config');

const DefaultProps: AtomsAvatarPropsInterface = {
    className: 'class-sample-3',
    alt: 'Testing Alt 3',
    src: 'images link 3',
    type: ComponentImageTypeEnum.SQUARE,
    size: 15
};


describe('Testing avatar view component in atomic component ', () => {
    it('Set size custom', () => {
        const props: AtomsAvatarPropsInterface = {
            ...DefaultProps,
            size: 15
        };

        const image = render(<Avatar {...props} />);
        expect(image.prop('style')).toHaveProperty('width', '15px');
        expect(image.prop('style')).toHaveProperty('height', '15px');
    });

    it('Set size small custom', () => {
        const props: AtomsAvatarPropsInterface = {
            ...DefaultProps,
            size: 'small'
        };

        const image = render(<Avatar {...props} />);
        expect(image.prop('style')).toHaveProperty('width', '24px');
        expect(image.prop('style')).toHaveProperty('height', '24px');
    });

    it('Set size default custom', () => {
        const props: AtomsAvatarPropsInterface = {
            ...DefaultProps,
            size: 'default'
        };

        const image = render(<Avatar {...props} />);
        expect(image.prop('style')).toHaveProperty('width', '32px');
        expect(image.prop('style')).toHaveProperty('height', '32px');
    });

    it('Set size big custom', () => {
        const props: AtomsAvatarPropsInterface = {
            ...DefaultProps,
            size: 'big'
        };

        const image = render(<Avatar {...props} />);
        expect(image.prop('style')).toHaveProperty('width', '48px');
        expect(image.prop('style')).toHaveProperty('height', '48px');
    });
});
