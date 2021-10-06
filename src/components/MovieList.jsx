// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        <section>
          { movies.map((filme) => (<MovieCard
            key={ filme.title }
            film={ filme }
          />))}
        </section>
      </div>
    );
  }
}

export default MovieList;
