import React from 'react';

const Steper = (props) => {
    const { steps, activeStep } = props;

    return (
        <ul>
            {steps && steps.map((step, i) =>
                <li key={`step-${i}`}>
                    {activeStep === i ? <span>(active) </span> : ''}
                    {step.title}
                </li>
            )}
        </ul>
    );
}

export default Steper;
