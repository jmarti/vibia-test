import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { ButtonIcon } from '../buttons/buttons.component';

import './selected-item.component.scss';


const SelectedItem = (props) => {
    const { type, data, onUnselect } = props;

    const handleUnselect = e => {
        onUnselect();
    };

    return (
        <article className="selected-item">
            { type &&
                <span className="badge">{type}</span>
            }
            <ButtonIcon variant="outline" icon={faTrashAlt} onClick={handleUnselect}>
                <FontAwesomeIcon icon={faTrashAlt} />
            </ButtonIcon>
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
        </article>
    );
}

export default SelectedItem;
