import React, { useState } from 'react';

import StartPointOption from 'views/components/startPointOption/startPointOption.component';

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
        <section>
            <h1>Start point</h1>
            <p>Choose the location for your electrical connection point</p>
            <div>
                { startPointOptions && startPointOptions.map(option => (
                    <StartPointOption
                        key={option.startPointsId}
                        data={option}
                        onChange={handleStartPointSelect} />
                )) }
            </div>
            <button
                onClick={handleClick} 
                disabled={!selectedOption}>
                    Pasar al paso 2</button>
        </section>
    );
};

export default CustomizeStep1;