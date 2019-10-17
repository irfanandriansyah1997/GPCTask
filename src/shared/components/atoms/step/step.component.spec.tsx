import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Step from './step.component';

describe('Step', () => {
    it('is defined', () => {
        expect(Step).toBeDefined();
    });

    it('shows the title', () => {
        const title = 'Hello';
        const component = renderer.create(<Step title={title} currentStep={1} maxStep={4} />);
        expect(component.root.findAllByProps({ children: title })).toHaveLength(1);
    });

    it('define step 1 of 4', () => {
        const component = renderer.create(<Step title="hello" currentStep={1} maxStep={4} />);
        expect(component.root.findAllByProps({ children: '1 dari 4' })).toHaveLength(1);
    });

    it('define step 2 of 4', () => {
        const component = renderer.create(<Step title="hello" currentStep={2} maxStep={4} />);
        expect(component.root.findAllByProps({ children: '2 dari 4' })).toHaveLength(1);
    });

    it('define step 3 of 4', () => {
        const component = renderer.create(<Step title="hello" currentStep={3} maxStep={4} />);
        expect(component.root.findAllByProps({ children: '3 dari 4' })).toHaveLength(1);
    });

    it('define step 4 of 4', () => {
        const component = renderer.create(<Step title="hello" currentStep={4} maxStep={4} />);
        expect(component.root.findAllByProps({ children: '4 dari 4' })).toHaveLength(1);
    });

    it('does not provide any step', () => {
        const component = renderer.create(<Step title="hello" />);
        expect(component.root.findAllByProps({ children: '1 dari 4' })).toHaveLength(0);
    });
});
