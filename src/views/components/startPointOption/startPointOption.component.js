import React from 'react';

const StartPointOption = (props) => {
    const { data, onChange } = props;

    const handleChange = e => {
        onChange(e.target.value);
    };

    return (
        <label>
            <input
                type="radio"
                value={data.startPointsId}
                name="startPoint"
                onChange={handleChange} />
            {data.title}
        </label>
    );
}

export default StartPointOption;
