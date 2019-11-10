import * as React from 'react';

import './style/style.scss';
import TextComponent from '@/atoms/text/text.component';
import MenuItemComponent from '@/atoms/menu-item/menu-item.component';
import IconComponent from '@/atoms/icon/icon.component';
import { DefaultMenuItemComponentProps } from '@/interfaces/component/component-menu-item.interface';
import { DefaultMenu } from '@/shared/const/menu.const';

/**
 * Drawer Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.11.09
 */
const DrawerComponent: React.SFC<any> = () => (
    <div className="ui-molecules-drawer fixed">
        <div className="ui-molecules-drawer__heading pl-72 relative pr-16 pt-24 pb-24 mb-72">
            <TextComponent
                align="left"
                fontWeight={700}
                styling="heading-2"
                tag="h1"
                color="heading"
            >
                Simulator
            </TextComponent>
            <TextComponent
                align="left"
                fontWeight={400}
                styling="heading-5"
                tag="h3"
                fontFamily="secondary"
                color="text"
            >
                Trigonometri
            </TextComponent>
        </div>
        <div className="ui-molecules-drawer__menu">
            {DefaultMenu.map((item: DefaultMenuItemComponentProps) => (
                <MenuItemComponent
                    key={item.label}
                    {...item}
                />
            ))}
        </div>
        <div className="ui-molecules-drawer__footer absolute hidden">
            <div className="ui-molecules-drawer__footer__title flex p-16">
                <TextComponent
                    align="left"
                    fontWeight={500}
                    styling="heading-4"
                    tag="h1"
                    color="heading700"
                >
                    Author Apps
                </TextComponent>
            </div>
            <div className="ui-molecules-drawer__footer__content flex p-16">
                <div className="ui-molecules-drawer__footer__account flex mr-20">
                    <IconComponent color="primary">keyboard</IconComponent>
                    <div className="ui-molecules-drawer__footer__user flex ml-10">
                        <TextComponent
                            align="left"
                            fontWeight={500}
                            styling="heading-6"
                            tag="h1"
                            color="heading700"
                        >
                            Syauqi Ilham A.
                        </TextComponent>
                        <TextComponent
                            align="left"
                            fontWeight={500}
                            styling="meta"
                            tag="h1"
                            color="heading600"
                        >
                            10116900
                        </TextComponent>
                    </div>
                </div>
                <div className="ui-molecules-drawer__footer__account flex">
                    <IconComponent color="secondary">palette</IconComponent>
                    <div className="ui-molecules-drawer__footer__user flex ml-10">
                        <TextComponent
                            align="left"
                            fontWeight={500}
                            styling="heading-6"
                            tag="h1"
                            color="heading700"
                        >
                            Irfan Andriansyah
                        </TextComponent>
                        <TextComponent
                            align="left"
                            fontWeight={500}
                            styling="meta"
                            tag="h1"
                            color="heading600"
                        >
                            10116903
                        </TextComponent>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


export default DrawerComponent;
