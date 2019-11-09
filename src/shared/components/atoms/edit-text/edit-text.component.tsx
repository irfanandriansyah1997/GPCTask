/**
 * @author Cathrine <Cathrine@99.co>
 * @description input component
 * @since 2019.10.21
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';

import TextComponent from '@/atoms/text/text.component';
import IconComponent from '@/atoms/icon/icon.component';
import { convertObjectToString } from '@/utils/string.util';
import { componentThemeTranslator } from '@/utils/theme.utils';
import { ComponentThemeEnum } from '@/interfaces/component/component-theme.enum';
import {
    AtomEditTextPropsInterface,
    AtomEditTextStateInterface
} from './interfaces/component.interface';

import './style/style.scss';

/**
 * Input Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @description This is an input component featuring side icon, add on and text area, choose input / text area with 'tag'
 * @usage input with add on or icon (withAddon attr is a must) : activate the input by adding 'addOn', choosing either will need to include 'addOnText'
 * @since 2019.10.24
 */
class EditTextComponent extends React.Component<
    AtomEditTextPropsInterface,
    AtomEditTextStateInterface
> {
    static propTypes = {
        name: PropTypes.string.isRequired,
        label: PropTypes.string,
        error: PropTypes.string,
        className: PropTypes.string,
        addOnText: PropTypes.string,
        required: PropTypes.bool,
        withoutMargin: PropTypes.bool,
        caption: PropTypes.string,
        placeholder: PropTypes.string,
        type: PropTypes.oneOf([
            'text',
            'number',
            'password',
            'email',
            'tel',
            'url'
        ]),
        addOn: PropTypes.oneOf(['icon', 'text']),
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
        tag: PropTypes.oneOf(['input', 'textarea']).isRequired,
        styling: PropTypes.oneOf([
            ComponentThemeEnum.PRIMARY,
            ComponentThemeEnum.DANGER,
            ComponentThemeEnum.DEFAULT,
            ComponentThemeEnum.WARNING,
            ComponentThemeEnum.INFO,
            ComponentThemeEnum.SUCCESS
        ]),
        onChange: PropTypes.func
    };

    static defaultProps = {
        type: 'text',
        label: undefined,
        error: undefined,
        addOn: undefined,
        caption: undefined,
        required: undefined,
        withoutMargin: false,
        className: undefined,
        addOnText: undefined,
        placeholder: undefined,
        styling: ComponentThemeEnum.DEFAULT,
        onChange: (event: { target: HTMLInputElement }) => {}
    };

    constructor(props: AtomEditTextPropsInterface) {
        super(props);

        this.state = {
            focus: false
        };

        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.addonComponent = this.addonComponent.bind(this);
    }

    /**
     * Event handler on focus
     * @description Event handler edit text on focus
     */
    onFocus() {
        this.setState({ focus: true });
    }

    /**
     * Event handler on blur
     * @description Event handler edit text on blur
     */
    onBlur() {
        this.setState({ focus: false });
    }

    /**
     * @description getting classname
     */
    get className(): string {
        const {
            className,
            addOn,
            styling,
            label,
            withoutMargin
        } = this.props;
        const { focus } = this.state;

        return convertObjectToString({
            'mt-25': label && withoutMargin === false,
            'mb-25': label && withoutMargin === false,
            'ui-atomic-edit-text': true,
            'ui-atomic-edit-text--focus': focus,
            'ui-atomic-edit-text--with-addons': addOn !== undefined,
            [`ui-atomic-edit-text--with-addons-${addOn}`]: addOn !== undefined,
            [`ui-atomic-edit-text--styling-${componentThemeTranslator(
                styling || ComponentThemeEnum.DEFAULT
            )}`]: true,
            [`${className}`]: className
        });
    }

    /**
     * Getter Textarea Field Component
     * @description render textare field
     * @return {React.ReactNode}
     */
    get textareaComponent(): React.ReactNode {
        const { className, labelComponent, errorComponent } = this;
        const {
            required,
            value,
            label,
            name,
            error,
            caption,
            onChange,
            placeholder
        } = this.props;

        if (label) {
            return (
                <div className={className}>
                    {labelComponent(label, name, caption)}
                    <div className="ui-atomic-edit-text__content flex relative">
                        <textarea
                            required={required}
                            id={name}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            value={value}
                            onChange={onChange}
                            placeholder={placeholder}
                        />
                    </div>
                    {errorComponent(error)}
                </div>
            );
        }

        return null;
    }

    /**
     * Getter Input Field Component
     * @description render input field
     * @return {React.ReactNode}
     */
    get inputComponent(): React.ReactNode {
        const {
            label,
            error,
            addOn,
            addOnText,
            tag,
            caption,
            styling,
            ...res
        } = this.props;
        const {
            className,
            labelComponent,
            errorComponent,
            addonComponent
        } = this;
        delete res.withoutMargin;
        delete res.children;

        return (
            <div className={className}>
                {labelComponent(label, res.name, caption)}
                <div className="ui-atomic-edit-text__content flex relative">
                    {React.createElement(tag, {
                        ...res,
                        id: res.name,
                        onFocus: this.onFocus,
                        onBlur: this.onBlur
                    })}
                    {addonComponent(addOn, addOnText)}
                </div>
                {errorComponent(error)}
            </div>
        );
    }

    /**
     * Getter Error Component
     * @description render error message
     * @return {React.ReactNode}
     */
    public errorComponent(error: string | undefined): React.ReactNode {
        if (error) {
            return (
                <TextComponent
                    align="center"
                    fontWeight={600}
                    tag="span"
                    styling="meta"
                    className="ui-atomic-error mt-8"
                >
                    {error}
                </TextComponent>
            );
        }

        return null;
    }

    /**
     * Getter Label Component
     * @description render label tag
     * @return {React.ReactNode}
     */
    public labelComponent(
        label: string | undefined,
        name: string,
        caption: string | undefined
    ): React.ReactNode {
        if (label) {
            return (
                <label
                    className="ui-atomic-edit-text__label mb-5 flex"
                    htmlFor={name}
                >
                    <TextComponent
                        className="ui-atomic-edit-text__label-text"
                        tag="span"
                        styling="heading-5"
                        fontWeight={400}
                        align="left"
                    >
                        {label}
                    </TextComponent>
                    {caption ? (
                        <TextComponent
                            className="ui-atomic-edit-text__caption-text"
                            tag="span"
                            styling="caption"
                            fontWeight={400}
                            align="left"
                            color="text"
                        >
                            {caption}
                        </TextComponent>
                    ) : null}
                </label>
            );
        }

        return null;
    }

    /**
     * Getter Addon Component
     * @description render addon tag
     * @return {React.ReactNode}
     */
    public addonComponent(
        addOn: 'text' | 'icon' | undefined,
        addOnText: string | undefined
    ): React.ReactNode {
        const { styling, onClick } = this.props;
        if (addOn) {
            return (
                <div
                    role="presentation"
                    onClick={onClick}
                    className={`ui-atomic-edit-text__add-on absolute flex ui-atomic-edit-text__add-on--${componentThemeTranslator(
                        styling || ComponentThemeEnum.DEFAULT
                    )}`}
                >
                    {addOn === 'icon' ? (
                        <IconComponent className="ui-atomic-edit-text__add-on__icon">
                            {addOnText || ''}
                        </IconComponent>
                    ) : (
                        <TextComponent
                            className="ui-atomic-edit-text__add-on__text"
                            align="left"
                            color="heading600"
                            tag="span"
                            styling="heading-6"
                            fontWeight={400}
                        >
                            {addOnText || ''}
                        </TextComponent>
                    )}
                </div>
            );
        }

        return null;
    }

    render(): React.ReactNode {
        const { tag } = this.props;
        const { inputComponent, textareaComponent } = this;

        if (tag === 'textarea') {
            return textareaComponent;
        }

        return inputComponent;
    }
}

export default EditTextComponent;
