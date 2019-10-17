import * as React from 'react';
import { SFC, ComponentClass } from 'react';

import DefaultTemplateComponent from './default/default.template';
import { TemplateItemInterface } from '@/interfaces/general/template.interface';
import { DefaultDynamicObject } from '@/interfaces/general/object.interface';

const ListTemplate = [
    {
        key: 'default',
        component: DefaultTemplateComponent
    }
] as const;

export type TypeTemplate = typeof ListTemplate[number]['key'];

/**
 * Templates HOC
 * @author Irfan Andriansyah <irfan@99.co>
 * @description the purpose this class for selector template in this apps
 * @since 2019.09.18
 */
class TemplatesSelectorHOC {
    private template: TypeTemplate;

    constructor(template: TypeTemplate) {
        this.template = template;
        this.TemplateComponent = this.TemplateComponent.bind(this);
    }

    /**
     * Getter Selected Template
     * @private
     * @description selected template based on template attribute
     * @return {TemplateItemInterface}
     */
    private get SelectedTemplate(): ComponentClass<any> | SFC<any> {
        const { template } = this;
        const listTemplateParsed: readonly TemplateItemInterface[] = ListTemplate;
        const listTemplate: DefaultDynamicObject = listTemplateParsed.reduce(
            (temp: DefaultDynamicObject, current: TemplateItemInterface) => ({
                ...temp,
                [`${current.key}`]: current.component
            }),
            {}
        );

        return listTemplate[template];
    }

    /**
     * Render Template Component
     * @public
     * @param Children {React.ComponentClass<ViewModelListingPageInterface>}
     * @description render selected template based on template attribute
     * @return {SFC<any>}
     */
    public TemplateComponent(Children: React.ComponentClass<any> | SFC<any>): SFC<any> {
        const { SelectedTemplate } = this;

        return () => (
            <SelectedTemplate>
                <Children />
            </SelectedTemplate>
        );
    }
}

export default TemplatesSelectorHOC;
