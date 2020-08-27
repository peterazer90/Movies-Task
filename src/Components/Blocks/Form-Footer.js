import React from 'react';
import {Link} from "react-router-dom";

function FormFooter({question, link, answer}) {
    return (
        <p className="w-100 text-black-50 m-0">{question}
            <Link to={link} className="d-inline text-danger ml-2">{answer}</Link>
        </p>
    );
}

export default FormFooter;