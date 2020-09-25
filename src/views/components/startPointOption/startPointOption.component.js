import React from 'react';

import './startPointOption.scss';

const StartPointOption = (props) => {
    const { data, onChange } = props;

    const handleChange = e => {
        onChange(e.target.value);
    };

    return (
        <label className="custom-radio">
            <input
                type="radio"
                value={data.startPointsId}
                name="startPoint"
                onChange={handleChange} />
            <span className="content">
                <span className="box"></span>
                <span className="image-wrapper">
                    { data.image &&
                        <img
                            src={data.image}
                            alt={data.title} />
                    }
                </span>
                
                { data.title &&
                    <span className="title">{data.title}</span>
                }

                { data.description &&
                    <small>{data.description}</small>
                }
            </span>
        </label>
    );
}

export default StartPointOption;
