import React, { Component } from "react";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar"

export class MoviesList extends Component {
  state = {
    selectedMovie: null,
    searchValue: null,
    movies: this.props.movies.results,
  };

  getOneMovie = (event) => {
    this.setState({ selectedMovie: event.target.innerHTML }, () =>
      this.getInfo()
    );
  };

  getInfo = () => {
    let movieInfo = this.props.movies.results.filter(
      (movie) => movie.title === this.state.selectedMovie
    );
    this.setState({ selectedMovie: movieInfo[0] }, () =>
      console.log(this.state.selectedMovie)
    );
  };

  handleSearch = (event) => {
    this.setState({ searchValue: event.target.value });
    this.filteredMovies()
  };

  filteredMovies = () => {
    let filteredMovies = this.props.movies.results.filter(movie => movie.title.includes(this.state.searchValue));
      this.setState ({movies : filteredMovies} , () => console.log(this.state.movies));
      
  }

  
  render() {
    return (
      <div className="column">
      <SearchBar search={this.handleSearch}/>

      <div className="row">
      
        <section className="column start movie-list ">
        <h2>All movies :</h2>
          {this.state.movies.map && this.state.movies.map((movie) => (
            <p key={movie.id} onClick={this.getOneMovie}>
              {movie.title}
            </p>
          ))}


        </section>

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
