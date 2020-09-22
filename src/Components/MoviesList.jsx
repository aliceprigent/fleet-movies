import React, { Component } from "react";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import axios from "axios";

export class MoviesList extends Component {
  state = {
    selectedMovie: null,
    searchValue: null,
    movies: null,
  };

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=f592b248d3fc07380aa06b3da2798b53"
      )
      .then((dbRes) =>
        this.setState({ movies: dbRes.data.results }, () =>
          console.log(dbRes.data)
        )
      )
      .catch((err) => console.log(err));
  }

  getOneMovie = (event) => {
    this.setState({ selectedMovie: event.target.innerHTML }, () =>
      this.getMovieInfo()
    );
  };

  getMovieInfo = () => {
    let movieInfo = this.state.movies.filter(
      (movie) => movie.title === this.state.selectedMovie
    );
    this.setState({ selectedMovie: movieInfo[0] }, () =>
      console.log(this.state.selectedMovie)
    );
  };

  handleSearch = (event) => {
    this.setState({ searchValue: event.target.value });
    this.filteredMovies();
  };

  filteredMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=f592b248d3fc07380aa06b3da2798b53&query=${this.state.searchValue}`)
      .then((res) => this.setState({ movies: res.data.results }, () => console.log(this.state.movies)))
      .catch((err) => console.log(err));
  };

  render() {
    if (!this.state.movies) {
      return <div>Loading...</div>;
    }
    return (
      <div className="column">
      
       
        <SearchBar search={this.handleSearch} />
        

        <div className="mobile row">
        <div className="column start">
        <h2 style={{margin: "1em", padding: "0px"}}> All movies :</h2>
        

          <section className="column start movie-list ">
           
            {this.state.movies.map &&
              this.state.movies.map((movie) => (
                  <div className="row"> <img alt="arrow" className="arrow" src="https://img.icons8.com/material-rounded/24/000000/forward.png"/>
                <p key={movie.id} onClick={this.getOneMovie}>
                {movie.title}
                </p>
                </div>
              ))}
              
          </section>
          </div>

          {this.state.selectedMovie && (
            <section className="movie-details">
              <MovieCard movie={this.state.selectedMovie} />
            </section>
          )}
        </div>
      </div>
    );
  }
}

export default MoviesList;
