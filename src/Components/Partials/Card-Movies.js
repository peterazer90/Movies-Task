import React, {useContext} from 'react';
import Skeleton from 'react-loading-skeleton/lib';
import {FavoriteContexts} from "../../Helpers/Contexts";
import Img from "../Elements/Img";
import CardButton from "../Blocks/Card-Button";

function CardMovies({movies, loading, hasDeleteBtn = false}) {
    const {favorites, addFavorites} = useContext(FavoriteContexts);
    const onFavoriteClick = (id) => {
        movies.filter(movie => {
            if (movie.imdbID === id) {
                const isInFavorite = favorites.find(favorite => favorite.imdbID === id)
                !isInFavorite && addFavorites([...favorites, movie])
            }
        })
    }
    const onDeleteClick = (id) => {
        addFavorites(favorites.filter(favorite => favorite.imdbID !== id))
    }
    return (
        movies.map(movie =>
            <article className="col-lg-4 px-1 pb-2" key={movie.imdbID}>
                <figure className="card m-0 h-100">
                    {(loading) ? <Skeleton height={200}/> : <Img src={movie.Poster} alt={movie.Title}/>}
                    <figcaption className="card-body d-flex flex-column">
                        <h5 className="card-title">{(loading) ? <Skeleton/> : movie.Title}</h5>
                        <div className="card-text mt-auto d-flex justify-content-between align-items-center">
                            <small className="text-muted">
                                {(loading) ? <Skeleton width={120}/> : `Year: ${movie.Year}`}
                            </small>
                            {(loading) ? <Skeleton width={32} height={31}/> :
                                <CardButton
                                    icon={(hasDeleteBtn) ? 'icofont-delete-alt' : 'icofont-heart'}
                                    oncClick={() => (hasDeleteBtn) ? onDeleteClick(movie.imdbID) : onFavoriteClick(movie.imdbID)}
                                />
                            }
                        </div>
                    </figcaption>
                </figure>
            </article>
        )
    );
}

export default CardMovies;