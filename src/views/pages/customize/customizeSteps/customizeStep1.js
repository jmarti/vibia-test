import React, { useState } from 'react';

import StartPointOption from 'views/components/forms/custom-radio.component';
import LoadingItem from 'views/components/items/loading-item.component';
import { Button } from 'views/components/buttons/buttons.component';

const CustomizeStep1 = (props) => {
    
    const { startPointOptions, onStartPointSelection } = props;

    const [ selectedOption, setSelectedOption ] = useState();

    const handleStartPointSelect = startPointsId => {
        setSelectedOption(startPointOptions.find(option =>
            option.startPointsId === startPointsId));
    };

    const handleClick = () => {
        onStartPointSelection(selectedOption);
    };

    return (
        <section className="customize-step">
            <header className="step-header">
                <h1 className="title">Start point</h1>
                <p className="subtitle">Choose the location for your electrical connection point</p>
            </header>
            <div className="row">
                { startPointOptions
                    ? startPointOptions.map(option => (
                        <div className="col-sm-auto mb-3" key={option.startPointsId}>
                            <StartPointOption
                                data={option}
                                onChange={handleStartPointSelect} />
                        </div> ))
                    : <div className="col-sm-auto mb-3">
                        <LoadingItem />
                      </div>
                }
            </div>
            <Button
                disabled={!selectedOption}
                onClick={handleClick}>
                Pasar al paso 2
            </Button>
        </section>
    );
};

export default CustomizeStep1;