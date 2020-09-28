import React from 'react';

import SelectedItem from 'views/components/items/selected-item.component';
import AddItem from 'views/components/items/add-item.component';

const CustomizeStep2 = (props) => {
    
    const { startPointSelected, onStartPointUnselection } = props;

    return (
        <section className="customize-step">
            <header className="step-header">
                <h1 className="title">Connect with each other</h1>
                <p className="subtitle">Three sizes available: 1,5m., 2m. or 3m. which can be connected one to each other</p>
            </header>
            <div className="row">
                <div className="col-sm-auto mb-3">
                    <SelectedItem
                        data={startPointSelected}
                        onUnselect={onStartPointUnselection} />
                </div>
                <div className="col-sm-auto mb-3">
                    <AddItem />
                </div>
            </div>
        </section>
    );
};

export default CustomizeStep2;