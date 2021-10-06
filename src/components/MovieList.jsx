// implement MovieList component here
import React from "react";
import PropTypes from 'prop-types';
import MovieCard from "./MovieCard";

class MovieList extends React.Component {
  render() {
    const {movies} = this.props;
    return (
      <div>
        {movies.map((elemento) => <MovieCard key={ elemento.title } movie={ elemento } />) }
      </div>
    )
  }
}

export default MovieList;