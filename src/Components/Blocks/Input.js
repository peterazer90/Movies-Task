import React from 'react';

function Input({attributes, onChange}) {
    return (
        attributes.map((attribute, index) =>
        <div className="form-group" key={index}>
            <label htmlFor={attribute.type}>{attribute.text}</label>
            <input id={attribute.type} name={attribute.type} type={attribute.type} className="form-control"
                   placeholder={attribute.placeholder}
                   onChange={onChange}
            />
            <small className="form-text text-danger">{attribute.error}</small>
        </div>
        )
    );
}

export default Input;