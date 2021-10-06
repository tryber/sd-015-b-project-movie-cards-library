// implement MovieCard component here
import React from 'react';
import movies from '../data';


class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    return (
        <div>
        <h4>{movies.title}</h4>
        <h5>{movies.subtitle}</h5>
        <p>{movies.storyline}</p>
        `rating: ${movies.rating}`,
        `imagePath: ${movies.imagePath}`,
        </div>
    );
  }
}

export default MovieCard;
