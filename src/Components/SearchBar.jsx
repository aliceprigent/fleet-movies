import React from "react";

export default function SearchBar(props) {
  return (
    <div className="search-bar row">
    <h1>FLEET <br/><span className="fleet-color">MOVIES</span></h1>
      <input
        type="text"
        name="search"
        className="search"
        onChange={props.search}
        placeholder="Search for a movie..."
      ></input>
       <img className="img-search" alt="search" src="https://img.icons8.com/ios/50/000000/search--v1.png"/> 
    </div>
  );
}
