import React from 'react';

function Section({title, children}) {
    return (
        <section className="movies-section w-100 py-5">
            <h2 className="h2 mb-5 w-100 text-center text-black-50 font-weight-bold">{title}</h2>
            <div className="row no-gutters mx-n1 mb-n2 justify-content-center">
                {children}
            </div>
        </section>
    );
}

export default Section;