import React from 'react';

function Alert({text, type = 'danger'}) {
    return (
        <p className={`text-${type} font-weight-bold  w-100 text-center`}>{text}</p>
    );
}

export default Alert;