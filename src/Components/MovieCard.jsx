import React from 'react'

export default function MovieCard(props) {
    return (
        <div>
        <section className="start row">
        <img className="movie-img" src={`https://image.tmdb.org/t/p/original/${props.movie.poster_path}`} alt="movie"/>
        <div className="column start">
        <h3>{props.movie.title}</h3>
        <p>Note : {props.movie.vote_average} / 10</p>

        </div>
        </section>

        <section className="start column">
        <h4>Overview :</h4>
        <p className="overview">{props.movie.overview}</p>
        </section>
        </div>
    )
}

