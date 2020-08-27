import React from 'react';

function Alert({text}) {
    return (
        <p className='font-weight-bold text-danger w-100 text-center'>{text}</p>
    );
}

export default Alert;