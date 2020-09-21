
import logo from './logo.svg';
import './App.css';
import MoviesList from './Components/MoviesList';
import SearchBar from './Components/SearchBar';
import movies from './movies.json'


import React, { Component } from 'react'

export class App extends Component {
  render() {
   
    return (
      <div className="App">
  
      <MoviesList movies={movies}/>

      </div>
    )
  }
}

export default App


