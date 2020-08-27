import React from 'react';

function Img({src, alt}) {
    return (
        <img src={src} className="movie-img card-img-top" alt={alt}/>
    );
}

export default Img;