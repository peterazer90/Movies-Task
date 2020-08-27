import React from 'react';

function Button({text, onClick}) {
    return (
        <div className="w-100 text-center mb-4">
            <button type="button" className="btn btn-dark rounded px-4" onClick={onClick}>{text}</button>
        </div>
    );
}

export default Button;