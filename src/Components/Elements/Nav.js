import React from 'react';

function Nav({children}) {
    return (
        <nav className="navbar navbar-expand bg-dark rounded-bottom">
            {children}
        </nav>
    );
}
export default Nav;