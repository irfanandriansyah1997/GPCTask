import * as React from 'react';
import { Component } from 'react';
import * as PropTypes from 'prop-types';
import { RouteComponentProps } from 'react-router';
import TemplatesSelectorHOC, { TypeTemplate } from '@/templates/index';

/**
 * Generate Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2019.09.16
 */
abstract class PageAbstract<ViewModel> extends Component<RouteComponentProps> {
    protected template: TemplatesSelectorHOC;

    protected route: RouteComponentProps;

    protected viewModel: (
        ComposedComponent: React.ComponentClass<ViewModel> | React.SFC<ViewModel>,
        Router: RouteComponentProps
    ) => any;

    protected view: React.ComponentClass<ViewModel> | React.SFC<ViewModel>;

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({}),
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        }).isRequired
    };

    constructor(
        props: RouteComponentProps,
        viewModel: (
            ComposedComponent: React.ComponentClass<ViewModel> | React.SFC<ViewModel>,
            router: RouteComponentProps
        ) => any,
        view: React.ComponentClass<ViewModel> | React.SFC<ViewModel>,
        template: TypeTemplate,
        router: RouteComponentProps
    ) {
        super(props);

        this.route = router;
        this.viewModel = viewModel;
        this.view = view;
        this.template = new TemplatesSelectorHOC(template);
    }

    /**
     * Getter View Model
     * @return {(ComposedComponent: React.ComponentClass<ViewModel> | React.SFC<ViewModel>) => any}
     */
    get ViewModel(): (
        ComposedComponent: React.ComponentClass<ViewModel> | React.SFC<ViewModel>,
        Router: RouteComponentProps
    ) => any {
        return this.viewModel;
    }

    /**
     * Getter View
     * @return vm {(ComposedComponent: React.ComponentClass<ViewModel> | React.SFC<ViewModel>) => any}
     */
    get View(): React.ComponentClass<ViewModel> | React.SFC<ViewModel> {
        return this.view;
    }

    /**
     * Getter View
     * @return any
     */
    get Module(): any {
        const {
            ViewModel, View, template, route
        } = this;
        const { TemplateComponent } = template;
        const Template = TemplateComponent(ViewModel(View, route));

        return () => <Template />;
    }

    render(): React.ReactNode {
        const { Module } = this;

        return <Module />;
    }
}

export default PageAbstract;
