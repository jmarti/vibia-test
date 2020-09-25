import React from 'react';

const StartPointSelected = (props) => {
    const { data, onUnselect } = props;

    const handleUnselect = e => {
        onUnselect();
    };

    return (
        <article>
            {data.title}
            <button onClick={handleUnselect}>x</button> 
        </article>
    );
}

export default StartPointSelected;
