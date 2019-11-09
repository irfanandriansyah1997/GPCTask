import * as React from 'react';
import { render, mount } from 'enzyme';
import { BrowserRouter, NavLink } from 'react-router-dom';

import { DefaultMenuItemComponentProps } from '@/interfaces/component/component-menu-item.interface';
import MenuItem from '@/atoms/menu-item/menu-item.component';
import IconComponent from '@/atoms/icon/icon.component';
import TextComponent from '@/atoms/text/text.component';
import { DefaultDynamicObject } from '@/interfaces/general/object.interface';

require('config/enzyme.config');

const FIXTURE: DefaultMenuItemComponentProps[] = [
    {
        children: 'Text Link',
        className: 'testing-link',
        link: '/test-link',
        type: 'child',
        icon: 'close',
        exact: true
    },
    {
        children: 'Text Link',
        className: 'testing-link',
        link: '/test-link',
        type: 'default',
        icon: 'close',
        exact: false
    },
    {
        children: 'Text Link',
        className: 'testing-link',
        link: '/test-link',
        type: 'child',
        icon: false,
        exact: true
    },
    {
        children: 'Text Link',
        className: 'testing-link',
        link: '/test-link',
        type: 'default',
        icon: false,
        exact: false
    }
];

describe('Testing menu-item component in atomic component ', () => {
    it('Test render menu-item component', () => {
        FIXTURE.forEach((item: DefaultMenuItemComponentProps) => {
            const menu = render(
                <BrowserRouter>
                    <MenuItem {...item} />
                </BrowserRouter>
            );

            expect(menu.hasClass(`ui-atomic-menu-item--type-${item.type}`)).toBe(true);
            // console.log(menu.find(NavLink));
        });
    });

    it('Test render menu-item with icon', () => {
        FIXTURE
            .filter((item: DefaultMenuItemComponentProps) => item.icon)
            .forEach((item: DefaultMenuItemComponentProps) => {
                const menu = mount(
                    <BrowserRouter>
                        <MenuItem {...item} />
                    </BrowserRouter>
                );

                const propsNavLink: DefaultDynamicObject = menu.find(NavLink).props();
                const propsText: DefaultDynamicObject = menu.find(TextComponent).props();
                const propsIcon: DefaultDynamicObject = menu.find(IconComponent).props();

                /** Check props NavLink Component */
                expect(propsNavLink.to).toBe(item.link);
                expect(propsNavLink.exact).toBe(item.exact);

                /** Check props Text Component */
                expect(propsText.children).toBe(item.children);
                expect(propsText.className).toBe('ml-12');

                /** Check props Icon Component */
                if (item.type === 'default') {
                    expect(propsIcon.className).toBe('ml-12');
                    expect(propsIcon.children).toBe(item.icon);
                }

                if (item.type === 'child') {
                    expect(propsIcon.className).toBe('ml-32');
                    expect(propsIcon.children).toBe(item.icon);
                }
            });
    });

    it('Test render menu-item without icon', () => {
        FIXTURE
            .filter((item: DefaultMenuItemComponentProps) => item.icon === false)
            .forEach((item: DefaultMenuItemComponentProps) => {
                const menu = mount(
                    <BrowserRouter>
                        <MenuItem {...item} />
                    </BrowserRouter>
                );

                const propsNavLink: DefaultDynamicObject = menu.find(NavLink).props();
                const propsText: DefaultDynamicObject = menu.find(TextComponent).props();

                /** Check props NavLink Component */
                expect(propsNavLink.to).toBe(item.link);
                expect(propsNavLink.exact).toBe(item.exact);

                /** Check props Text Component */
                expect(propsText.children).toBe(item.children);

                /** Check props Icon Component */
                if (item.type === 'default') {
                    expect(propsText.className).toBe('ml-16');
                }

                if (item.type === 'child') {
                    expect(propsText.className).toBe('ml-32');
                }
            });
    });
});
