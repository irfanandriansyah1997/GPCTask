import * as React from 'react';
import { Link } from 'react-router-dom';
import { render, shallow } from 'enzyme';

import Button from '@/atoms/button/button.component';
import IconComponent from '@/atoms/icon/icon.component';
import { DefaultDynamicObject } from '@/interfaces/general/object.interface';
import { ComponentThemeEnum } from '@/interfaces/component/component-theme.enum';
import { ComponentButtonSizeType } from '@/interfaces/component/component-style.interface';
import { AtomButtonPropsInterface, AtomButtonIconSizeValue } from '@/atoms/button/interfaces/component.interface';
import TextComponent from '@/atoms/text/text.component';
import { componentThemeTranslator } from '@/utils/theme.utils';
import ButtonComponent from '@/atoms/button/button.component';

require('config/enzyme.config');

const FIXTURE: AtomButtonPropsInterface[] = [
    {
        children: 'Test',
        className: 'test',
        icon: undefined,
        size: 'giant',
        styling: ComponentThemeEnum.PRIMARY,
        type: 'button',
        state: 'fill',
        onClick: jest.fn()
    },
    {
        children: 'Test',
        className: 'test',
        icon: undefined,
        size: 'large',
        styling: ComponentThemeEnum.SUCCESS,
        type: 'button',
        state: 'ghost',
        onClick: jest.fn()
    },
    {
        children: 'Test',
        className: 'test',
        icon: undefined,
        size: 'medium',
        styling: ComponentThemeEnum.INFO,
        type: 'button',
        state: 'outline',
        onClick: jest.fn()
    },
    {
        children: 'Test',
        className: 'test',
        icon: undefined,
        size: 'small',
        styling: ComponentThemeEnum.SUCCESS,
        type: 'button',
        state: 'outline',
        onClick: jest.fn()
    },
    {
        children: 'Test',
        className: 'test',
        icon: undefined,
        size: 'tiny',
        styling: ComponentThemeEnum.WARNING,
        type: 'button',
        state: 'fill',
        onClick: jest.fn()
    },
    {
        children: 'Test',
        className: 'test',
        icon: undefined,
        size: 'tiny',
        styling: undefined,
        type: 'button',
        state: 'fill',
        onClick: jest.fn()
    }
];


describe('Testing button component in atomic component ', () => {
    it('Render button component without icon', () => {
        const textPadding: any = {
            giant: 'pl-24 pr-24',
            large: 'pl-20 pr-20',
            medium: 'pl-20 pr-20',
            small: 'pl-16 pr-16',
            tiny: 'pl-12 pr-12'
        };

        const textStyling: any = {
            giant: 'heading-4',
            large: 'heading-5',
            medium: 'heading-6',
            small: 'meta',
            tiny: 'caption'
        };

        FIXTURE.forEach((item: AtomButtonPropsInterface) => {
            const props: AtomButtonPropsInterface = item;

            const buttonRender = render(<Button {...props} />);
            const buttonShallow = shallow(<Button {...props} />);
            const text: DefaultDynamicObject = buttonShallow.find(TextComponent).props();

            expect(buttonRender.hasClass(item.className as string)).toBe(true);
            expect(buttonRender.hasClass('ui-atomic-button')).toBe(true);
            expect(buttonRender.hasClass('ui-atomic-button--icon')).toBe(false);
            expect(buttonRender.hasClass(`ui-atomic-button--size-${item.size}`)).toBe(true);
            expect(buttonRender.hasClass(`ui-atomic-button--state-${item.state}`)).toBe(true);
            if (item.styling) {
                expect(buttonRender.hasClass(`ui-atomic-button--styling-${componentThemeTranslator(item.styling)}`)).toBe(true);
            } else {
                expect(buttonRender.hasClass(`ui-atomic-button--styling-${componentThemeTranslator(ComponentThemeEnum.PRIMARY)}`)).toBe(true);
            }

            expect(buttonRender.hasClass(textPadding[item.size as any])).toBe(true);
            expect(text.styling).toBe(textStyling[item.size as any]);
            expect(buttonShallow.find(IconComponent).length).toBe(0);
        });
    });

    it('Render button component with icon', () => {
        const textStyling: AtomButtonIconSizeValue = {
            giant: 28,
            large: 24,
            medium: 20,
            small: 16,
            tiny: 12
        };

        FIXTURE.forEach((item: AtomButtonPropsInterface) => {
            const props: AtomButtonPropsInterface = {
                ...item,
                children: undefined,
                icon: 'close'
            };

            const buttonRender = render(<Button {...props} />);
            const buttonShallow = shallow(<Button {...props} />);
            const icon: DefaultDynamicObject = buttonShallow.find(IconComponent).props();

            expect(buttonRender.hasClass('ui-atomic-button--icon')).toBe(true);
            expect(icon.size).toBe(textStyling[item.size as ComponentButtonSizeType]);
            expect(icon.children).toBe(props.icon);
            expect(item.onClick).toHaveBeenCalledTimes(0);

            const button = buttonShallow.find('button');
            button.simulate('click');
            expect(item.onClick).toHaveBeenCalledTimes(1);
        });
    });

    it('Render button component with tag props is link', () => {
        FIXTURE.forEach((item: AtomButtonPropsInterface) => {
            const props: AtomButtonPropsInterface = {
                ...item,
                children: undefined,
                icon: 'close',
                tag: 'link',
                to: '/example-url'
            };

            const buttonShallow = shallow(<Button {...props} />);
            const link: DefaultDynamicObject = buttonShallow.find(Link).props();

            expect(link.to).toBe(props.to);

            buttonShallow.setProps({ to: undefined });
            const linkUpdate: DefaultDynamicObject = buttonShallow.find(Link).props();
            expect(linkUpdate.to).toBe('');

            expect(buttonShallow.find(IconComponent).length).toBe(1);
            expect(buttonShallow.find(IconComponent).props().children).toBe(props.icon);
        });
    });

    it('Render button component with link', () => {
        const props: AtomButtonPropsInterface = {
            children: 'Test',
            className: 'test',
            icon: undefined,
            size: 'giant',
            styling: ComponentThemeEnum.PRIMARY,
            type: 'button',
            state: 'fill',
            onClick: jest.fn(),
            tag: 'link',
            to: '/hello-world'
        };

        const button = shallow(<ButtonComponent {...props} />);

        expect(button.find(Link).props().to).toBe(props.to);
    });

    it('Render button icon component', () => {
        const props: AtomButtonPropsInterface = {
            children: 'test',
            className: 'test',
            icon: 'clear',
            size: 'giant',
            styling: ComponentThemeEnum.PRIMARY,
            type: 'button',
            state: 'fill',
            onClick: jest.fn(),
            iconPositon: 'pre'
        };

        const button0 = render(<ButtonComponent {...props} />);
        expect(button0.hasClass('ui-atomic-button--icon-pre')).toBe(true);

        const button1 = render(<ButtonComponent {...props} iconPositon="post" />);
        expect(button1.hasClass('ui-atomic-button--icon-post')).toBe(true);
    });
});
