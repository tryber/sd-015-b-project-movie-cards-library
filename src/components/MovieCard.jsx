import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { atual, key } = this.props;
    console.log(key);
    return (
      <article className="movie-card">
        <img src={ atual.imagePath } alt={ atual.title } />
        <h3>{ atual.title }</h3>
        <h4>{ atual.subtitle }</h4>
        <p>{ atual.storyline }</p>
        <p>{ atual.rating }</p>
      </article>
    );
  }
}

MovieCard.propTypes = {
  atual: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
  key: PropTypes.number.isRequired,
};
export default MovieCard;
