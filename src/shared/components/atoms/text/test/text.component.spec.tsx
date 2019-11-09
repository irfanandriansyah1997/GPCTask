import * as React from 'react';
import { render } from 'enzyme';

import Text from '@/atoms/text/text.component';
import { AtomsTextPropsInterface } from '@/atoms/text/interfaces/component.interface';
import { defaultFontWeightConst } from '@/shared/const/font.const';
import ColorDefaultVariableStyle from '@/styled-component/theme/default/color.variable';

require('config/enzyme.config');

const FIXTURE: AtomsTextPropsInterface[] = [
    {
        align: 'center',
        className: 'hello-world',
        fontWeight: 300,
        styling: 'heading-1',
        tag: 'h1',
        children: 'heading 1'
    },
    {
        align: 'justify',
        className: 'hello-world',
        fontWeight: 400,
        styling: 'heading-2',
        tag: 'h2',
        children: 'heading 2'
    },
    {
        align: 'right',
        className: 'hello-world',
        fontWeight: 500,
        styling: 'heading-3',
        tag: 'h3',
        children: 'heading 4'
    },
    {
        align: 'left',
        className: 'hello-world',
        fontWeight: 500,
        styling: 'heading-3',
        tag: 'h2',
        children: 'heading 5'
    }
];

describe('Testing text component', () => {
    it('Test render text component', () => {
        FIXTURE.forEach((item: AtomsTextPropsInterface) => {
            const text = render(<Text {...item} />);

            expect(text.text()).toContain(item.children);
            expect(text.hasClass('ui-atomic-text')).toBe(true);
            expect(text.hasClass(`ui-atomic-text--style-${item.styling}`)).toBe(true);
            expect(
                text.hasClass(`ui-atomic-text--font-weight-${defaultFontWeightConst[item.fontWeight]}`)
            ).toBe(true);
            expect(text.hasClass(`ui-atomic-text--align-${item.align}`)).toBe(true);
        });
    });

    it('Test render color in text component', () => {
        const props: AtomsTextPropsInterface = {
            align: 'center',
            className: 'hello-world',
            fontWeight: 300,
            styling: 'heading-1',
            tag: 'h1',
            children: 'heading 1',
            color: 'success100'
        };
        const text = render(<Text {...props} />);

        expect(text.text()).toContain(props.children);
        expect(text.hasClass('ui-atomic-text')).toBe(true);
        expect(text.hasClass(`ui-atomic-text--style-${props.styling}`)).toBe(true);
        expect(
            text.hasClass(`ui-atomic-text--font-weight-${defaultFontWeightConst[props.fontWeight]}`)
        ).toBe(true);
        expect(text.hasClass(`ui-atomic-text--align-${props.align}`)).toBe(true);
        expect(text.prop('style')).toHaveProperty('color', ColorDefaultVariableStyle.success100);
    });
});
