import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';

import { customizeActions } from 'actions/customize.actions';

import Stepper from 'views/components/stepper/stepper.component';

import CustomizeStep1 from './customizeSteps/customizeStep1';
import CustomizeStep2 from './customizeSteps/customizeStep2';

import './customizeSteps/customizeStep.scss';

const Customize = (props) => {
    const { dispatch } = props;
    const [ startPoint, setStartPoint ] = useState();
    const [ activeStep, setActiveStep ] = useState(0);
    
    const startPointOptions = useSelector(state => state.customize.startPoints);
    const steps = useSelector(state => state.customize.formSteps);
    useEffect(() => {
        dispatch(customizeActions.listStartPoints());
    }, [dispatch]);

    const handleStartPointSelection = selectedStartPoint => {
        setStartPoint(selectedStartPoint);
        setActiveStep(1);
    };
    const handleStartPointUnselection = () => {
        setStartPoint(undefined);
        setActiveStep(0);
    }
    
    return (
        <div className="container">
            <Stepper steps={steps} activeStep={activeStep} />

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