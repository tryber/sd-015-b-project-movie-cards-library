import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <article>
        <img src={ movie.imagePath } alt={ movie.title } />
        <h2>{ movie.title }</h2>
        <h3>{ movie.subtitle }</h3>
        <p>{ movie.storyline }</p>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,

  })
};

export default MovieCard;
