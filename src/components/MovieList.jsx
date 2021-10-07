// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

// Função que renderiza os elementos
function renderMovieCard(movie) {

}

class MovieList extends React.Component {
    render() {
      return (
          <div className="movie-list">
            { movies.map( (movie) => <MovieCard movie={ movie } key={ movie.title } />) }
          </div>
      );
    }
  }
  
  export default MovieList;
  