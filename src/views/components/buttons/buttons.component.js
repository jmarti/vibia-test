import React from 'react';

import './buttons.component.scss';


const buttonColors = ['primary'];
const buttonVariants = ['outline'];

export const Button = (props) => {
    const handleClick = e => {
        typeof props.onClick === 'function' && props.onClick(e);
    };
    
    return (
        <button
            type={['button', 'submit', 'reset'].includes(props.type) ? props.type : 'button'}
            className={'btn ' + setButtonClass(props)}
            disabled={props.disabled}
            onClick={handleClick}
        >
            {props.children}
        </button>
    );
};

export const ButtonIcon = (props) => {
    const handleClick = e => {
        typeof props.onClick === 'function' && props.onClick(e);
    };

    return (
        <button
        type={['button', 'submit', 'reset'].includes(props.type) ? props.type : 'button'}
            className={ 'btn btn-icon ' + setButtonClass(props)}
            disabled={props.disabled}
            onClick={handleClick}
        >
            {props.children}
        </button>
    );
};

function setButtonClass(props) {
    return 'btn-' +
        (buttonVariants.includes(props.variant) ? `${props.variant}-` : '') +
        (buttonColors.includes(props.color) ? `${props.color}` : `primary`);
}