import React from 'react';

import './button.scss';

const buttonColors = ['primary'];

const Button = (props) => {
    const handleClick = e => {
        console.log(props);
        typeof props.onClick === 'function' && props.onClick(e);
    };

    return (
        <button
            type={props.type ? props.type : 'button'}
            className={
                'btn' +
                (buttonColors.includes(props.color) ? ` btn-${props.color}` : ` btn-primary`)
            }
            disabled={props.disabled}
            onClick={handleClick}
        >
            {props.children}
        </button>
    );
};

export default Button;