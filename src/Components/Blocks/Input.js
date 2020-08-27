import React from 'react';

function Input({attributes, onChange}) {
    return (
        attributes.map((attribute, index) =>
            <div className="form-group" key={index}>
                <label htmlFor={attribute.name}>{attribute.text}</label>
                <input id={attribute.name} name={attribute.name} type={attribute.type}
                       className={`form-control border ${!attribute.isValid && 'border-danger'}`}
                       placeholder={attribute.placeholder}
                       onChange={onChange}
                       value={attribute.value}
                />
                {!attribute.isValid &&
                <small className="form-text text-danger">{attribute.error}</small>
                }
            </div>
        )
    );
}

export default Input;