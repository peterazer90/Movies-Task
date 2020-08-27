import React from 'react';

function Form({children}) {
    return (
        <form className="col-lg-6 mx-auto bg-white p-4 border-secondary border rounded-lg">
            {children}
        </form>
    );
}

export default Form;