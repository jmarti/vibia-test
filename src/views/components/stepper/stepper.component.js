import React from 'react';

import './stepper.scss';

const Stepper = (props) => {
    const { steps, activeStep } = props;

    return (
        <ol className="stepper">
            {steps && steps.map((step, i) =>
                <li
                    key={`step-${i}`}
                    className={activeStep >= i ? 'active' : ''}
                    data-step={i + 1}>
                    <span>{step.title}</span>
                </li>
            )}
        </ol>
    );
}

export default Stepper;
