import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import './add-item.component.scss';


const AddItem = () => {

    return (
        <button className="add-item">
            <span className="icon">
                <FontAwesomeIcon icon={faPlus} />
            </span>
            Add a new Stick
        </button>
    );
}

export default AddItem;
