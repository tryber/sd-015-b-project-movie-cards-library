// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

const movies = [
  {
    title: 'Movie Title 1',
    subtitle: 'Movie Subtitle 1',
    storyline: 'Movie Storyline 1',
    rating,
    imagePath: 'images/movie_1',
  },
  {
    title: 'Movie Title 2',
    subtitle: 'Movie Subtitle 2',
    storyline: 'Movie Storyline 2',
    rating,
    imagePath: 'images/movie_2',
  },
  {
    title: 'Movie Title 3',
    subtitle: 'Movie Subtitle 3',
    storyline: 'Movie Storyline 3',
    ratingThree,
    imagePath: 'images/movie_3',
  },
];

class MovieList extends React.Component {
  render() {
    return (
      <div>
        { movies.map((movie) => <MovieCard key={ movie.title } />) }
      </div>
    );
  }
}

export default MovieList;
