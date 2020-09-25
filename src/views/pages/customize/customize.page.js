import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';

import { customizeActions } from 'actions/customize.actions';

import Steper from 'views/components/steper/steper.component';
import CustomizeStep1 from './customizeSteps/customizeStep1';
import CustomizeStep2 from './customizeSteps/customizeStep2';


const Customize = (props) => {
    const { dispatch } = props;
    const [ startPoint, setStartPoint ] = useState();
    const [ activeStep, setActiveStep ] = useState(0);
    
    const startPointOptions = useSelector(state => state.customize.startPoints);
    const steps = useSelector(state => state.customize.formSteps);
    useEffect(() => {
        dispatch(customizeActions.listStartPoints());
    }, []);

    const handleStartPointSelection = selectedStartPoint => {
        setStartPoint(selectedStartPoint);
        setActiveStep(1);
    };
    const handleStartPointUnselection = () => {
        setStartPoint(undefined);
        setActiveStep(0);
    }
    
    return (
        <div>
            <Steper steps={steps} activeStep={activeStep} />

            { !startPoint
                ? <CustomizeStep1
                    startPointOptions={startPointOptions}
                    onStartPointSelection={handleStartPointSelection}/>
                : <CustomizeStep2
                        startPointSelected={startPoint}
                        onStartPointUnselection={handleStartPointUnselection} />
            }
        </div>
    );
};


function mapStatetoProps(state) {
    const { customize } = state;
    return {
        customize
    };
}

export default connect(mapStatetoProps)(Customize);