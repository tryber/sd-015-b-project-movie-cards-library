import React, { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component {
  render() {
    const { movies } = this.props
  	return (
    	<main>
        {
          movies.map((elemento) => {
            return <MovieCard filmes={ elemento } key={ elemento.title } />
          })
        }
      </main>
    );
  }
}

export default MovieList;
