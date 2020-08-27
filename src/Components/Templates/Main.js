import React from 'react';

function Main({children}) {
    return (
        <main className="container h-100 d-flex flex-column">
            {children}
        </main>
    );
}

export default Main;