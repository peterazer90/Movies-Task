import React from 'react';

function CardButton({icon, oncClick}) {
    return (
        <button className='btn btn-sm btn-outline-danger'
                onClick={oncClick}>
            <i className={icon}></i>
        </button>
    );
}

export default CardButton;