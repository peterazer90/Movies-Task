import React from 'react';

function List({children}) {
    return (
        <ul className="navbar-nav align-items-center">
            {children}
        </ul>
    );
}

export default List;