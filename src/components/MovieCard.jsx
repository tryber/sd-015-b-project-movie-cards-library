import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    // pegando a prop movies do arquivo MovieList inserido no MovieCard
    const { movies } = this.props;
    console.log(movies);
    return (
      <article className="movie-card">
        <img src={ movies.imagePath } alt={ movies.title } className="movie-card-image" />
        <h4 className="movie-card-title">{ movies.title }</h4>
        <h5 className="movie-card-subtitle">{ movies.subtitle }</h5>
        <p className="movie-card-storyline">{ movies.storyline }</p>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
