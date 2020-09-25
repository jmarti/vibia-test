import React from 'react';

import StartPointSelected from 'views/components/startPointSelected/startPointSelected.component';

const CustomizeStep2 = (props) => {
    
    const { startPointSelected, onStartPointUnselection } = props;

    return (
        <section className="customize-step">
            <header className="step-header">
                <h1 className="title">Connect with each other</h1>
                <p className="subtitle">Three sizes available: 1,5m., 2m. or 3m. which can be connected one to each other</p>
            </header>
            <StartPointSelected
                data={startPointSelected}
                onUnselect={onStartPointUnselection} />
        </section>
    );
};

export default CustomizeStep2;