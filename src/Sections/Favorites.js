import React, {useContext, useEffect, useState} from 'react';
import Section from "../Components/Templates/Section";
import {FavoriteContexts} from "../Hooks/Contexts";
import CardMovies from "../Components/Partials/Card-Movies";
import Alert from "../Components/Elements/Alert";

function Favorites() {
    const {favorites} = useContext(FavoriteContexts);
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => isLoading(false), 1000)
    }, []);

    return (
        <Section title={'My Favorite Movies'}>
            {(!favorites || favorites.length === 0) ? <Alert text={'No Favorites Added'}/> :
                <CardMovies movies={favorites} loading={loading} hasDeleteBtn={true}/>}
        </Section>
    );
}

export default Favorites;