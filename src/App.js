import React from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesList from './Components/MoviesList';
import SearchBar from './Components/SearchBar';
import movies from './movies.json'


function App() {
  return (
    <div className="App">
    <SearchBar/>
    <MoviesList movies={movies}/>
     
    </div>
  );
}

export default App;
