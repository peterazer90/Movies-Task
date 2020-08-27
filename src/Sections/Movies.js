import React, {useEffect, useState} from 'react';
import Section from "../Components/Templates/Section";
import CardMovies from "../Components/Partials/Card-Movies";
import {GetData} from "../API/API-Methods";
import {GetSearchMovies} from "../API/API-Urls";
import {HelperTimeOut} from "../Helpers/Helper-TimeOut";

function Movies() {
    const [movies, storeMovies] = useState(null);
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        GetData(GetSearchMovies('joker')).then(data => {
            storeMovies(data.Search);
            HelperTimeOut(isLoading(false))
        });
    }, []);

    return (
        <Section title={'Latest Movies'}>
            {movies && <CardMovies movies={movies} loading={loading}/>}
        </Section>
    );
}

export default Movies;