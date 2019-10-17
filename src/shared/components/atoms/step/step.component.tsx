import * as React from 'react';
import { PropsInterface } from './interfaces/component.interface';
import './styles/style.scss';

// eslint-disable-next-line require-jsdoc-except/require-jsdoc
const Step: React.ComponentType<PropsInterface> = (props) => {
    // eslint-disable-next-line react/prop-types
    const { currentStep, maxStep, title } = props;
    const stepDefined = currentStep && maxStep;
    const percentage = currentStep && maxStep ? (currentStep / maxStep) * 100.0 : 0;
    const progressStyle = {
        background: `linear-gradient(to right, #2369ff 0%, #2369ff ${percentage}%, #eef1f6 ${percentage}%,#eef1f6 100%)`
    };

    return (
        <article className="ui-atoms-step">
            <div className="ui-atoms-step__title-wrapper">
                <span>{title}</span>
                <span>{stepDefined ? `${currentStep} dari ${maxStep}` : ''}</span>
            </div>
            <div className="ui-atoms-step__progress-bar" style={progressStyle} />
        </article>
    );
};

export default Step;
