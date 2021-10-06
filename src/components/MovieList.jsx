import React, { Component } from "react";
import MovieCard from "./MovieCard";
import movies from "../data";

class MovieList extends Component {
  render() {
  	return (
    	<main>
        {
          movies.map((elemento) => {
            return <MovieCard filmes={ elemento } />
          })
        }
      </main>
    );
  }
}

export default MovieList;
