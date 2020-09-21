import React from "react";

export default function SearchBar(props) {
  return (
    <div className="search-bar">
      <input
        type="text"
        name="search"
        className="search"
        onChange={props.search}
        placeholder="Search for a movie..."
      ></input>
    </div>
  );
}
