import React from 'react'

export default function MovieCard(props) {
    return (
        <div>
        <section className="start details-section row">
        <img className="movie-img" src={`https://image.tmdb.org/t/p/original/${props.movie.poster_path}`} alt="movie"/>
        <div className="column start">
        <h3 className="fleet-button">{props.movie.title}</h3>
        <p className="overview"><b>NOTE</b> : {props.movie.vote_average} / 10</p>
        
        <p>{props.movie.overview}
        
</p>
       
        </div>
        
        </section>

        <section className="start column">
        
       
        </section>
        </div>
    )
}

