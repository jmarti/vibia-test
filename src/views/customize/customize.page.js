import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { customizeActions } from 'actions/customize.actions';

const Customize = (props) => {
    console.log(props);
    const { dispatch } = props;
    const [ startPoints, setStartPoints ] = useState();

    useEffect(() => {
        dispatch(customizeActions.listStartPoints());
    }, [dispatch]);

    return (
        <div>
            Customize
        </div>
    );
};

function mapStatetoProps(state) {
    const { startPoints } = state;
    return {
        startPoints
    };
}

export default connect(mapStatetoProps)(Customize);