import * as React from 'react';
import { render, shallow } from 'enzyme';

import EditTextComponent from '@/atoms/edit-text/edit-text.component';
import { AtomEditTextPropsInterface } from '@/atoms/edit-text/interfaces/component.interface';
import { ComponentThemeEnum } from '@/interfaces/component/component-theme.enum';
import { componentThemeTranslator } from '@/utils/theme.utils';
import IconComponent from '@/atoms/icon/icon.component';
import TextComponent from '@/atoms/text/text.component';

require('config/enzyme.config');


const FIXTURE: AtomEditTextPropsInterface[] = [
    {
        caption: 'caption',
        label: 'label 1',
        error: 'Error',
        name: 'name',
        tag: 'input',
        value: 1,
        onChange: jest.fn(),
        styling: ComponentThemeEnum.PRIMARY
    },
    {
        caption: 'caption',
        error: 'Error',
        label: 'label 2',
        name: 'name',
        tag: 'input',
        value: 1,
        onChange: jest.fn(),
        styling: ComponentThemeEnum.SUCCESS
    }
];

describe('Testing edit text component in atomic component ', () => {
    it('Render edit text component', () => {
        FIXTURE.forEach((item: AtomEditTextPropsInterface) => {
            const editTextRender = render(<EditTextComponent {...item} />);

            expect(editTextRender.hasClass('ui-atomic-edit-text')).toBe(true);
            expect(editTextRender.hasClass('ui-atomic-edit-text--with-addons')).toBe(false);
            expect(editTextRender.hasClass(`ui-atomic-edit-text--styling-${componentThemeTranslator(item.styling || ComponentThemeEnum.DEFAULT)}`)).toBe(true);
            expect(editTextRender.find('.ui-atomic-edit-text__label-text').text()).toBe(item.label);
            expect(editTextRender.find('.ui-atomic-edit-text__caption-text').text()).toBe(item.caption);
        });
    });

    it('Render edit text component with addon icon & text', () => {
        FIXTURE.forEach((item: AtomEditTextPropsInterface) => {
            const props1: AtomEditTextPropsInterface = {
                ...item,
                addOn: 'icon',
                addOnText: 'close'
            };
            const props2: AtomEditTextPropsInterface = {
                ...item,
                addOn: 'text',
                addOnText: 'close'
            };

            const editTextRender1 = shallow(<EditTextComponent {...props1} />);
            const editTextRender2 = render(<EditTextComponent {...props2} />);
            const editTextProps: any = editTextRender1.find('input').props();

            expect(editTextProps.id).toBe(props1.name);
            expect(editTextProps.value).toBe(props1.value);

            expect(props1.onChange).toHaveBeenCalledTimes(0);
            const event = { target: { value: 'sometext' } };
            jest.resetAllMocks();
            editTextRender1.find('input').simulate('change', event);
            expect(props1.onChange).toHaveBeenCalledTimes(1);

            expect(editTextRender1.find(IconComponent).props().children).toBe(props1.addOnText);
            expect(editTextRender2.find('.ui-atomic-edit-text__add-on__text').text()).toBe(props2.addOnText);
            expect(editTextRender2.find('.ui-atomic-error').text()).toBe(props2.error);
        });
    });

    it('Render textarea component', () => {
        const props: AtomEditTextPropsInterface = {
            caption: 'caption',
            label: 'label 1',
            error: 'Error',
            name: 'name',
            tag: 'textarea',
            value: 1,
            onChange: jest.fn(),
            styling: ComponentThemeEnum.PRIMARY
        };

        const editText = shallow(<EditTextComponent {...props} />);
        const editTextProps: any = editText.find('textarea').props();

        expect((editText.state() as any).focus).toBe(false);

        /**
         * On Focus
         */
        editText.find('textarea').simulate('focus');
        expect((editText.state() as any).focus).toBe(true);

        /**
         * On Blur
         */
        expect((editText.state() as any).focus).toBe(true);
        editText.find('textarea').simulate('blur');
        expect((editText.state() as any).focus).toBe(false);

        /**
         * On Change
         */
        expect(props.onChange).toHaveBeenCalledTimes(0);
        const event = { target: { value: 'sometext' } };
        jest.resetAllMocks();
        editText.find('textarea').simulate('change', event);
        expect(props.onChange).toHaveBeenCalledTimes(1);

        expect(editTextProps.id).toBe(props.name);
        expect(editTextProps.value).toBe(props.value);
    });

    it('Render component without label & error', () => {
        const props: AtomEditTextPropsInterface = {
            caption: undefined,
            label: undefined,
            error: undefined,
            name: 'name',
            tag: 'textarea',
            value: 1,
            onChange: jest.fn(),
            styling: ComponentThemeEnum.PRIMARY
        };

        const editText = shallow(<EditTextComponent {...props} />);
        const instance: any = editText.instance();

        expect(instance.labelComponent(props.label, props.name, props.caption)).toBeNull();
        expect(instance.errorComponent(props.error)).toBeNull();

        /**
         * Set props label
         */
        editText.setProps({ label: 'hello world' });
        expect(editText.find('.ui-atomic-edit-text__caption-text').length).toBe(0);
    });

    it('Render component with addon', () => {
        const props: AtomEditTextPropsInterface = {
            caption: undefined,
            label: undefined,
            error: undefined,
            name: 'name',
            tag: 'textarea',
            addOn: 'icon',
            addOnText: 'close',
            value: 1,
            onChange: jest.fn(),
            styling: ComponentThemeEnum.PRIMARY
        };

        const editText = shallow(<EditTextComponent {...props} />);
        const instance = editText.instance();

        const addOnIcon = shallow((instance as any).addonComponent(props.addOn, props.addOnText));
        expect(addOnIcon.find(IconComponent).props().children).toBe(props.addOnText);

        const addOnText = shallow((instance as any).addonComponent('text', props.addOnText));
        expect(addOnText.find(TextComponent).props().children).toBe(props.addOnText);
    });
});
