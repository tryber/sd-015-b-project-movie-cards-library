// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { film } = this.props;
    return (
      <div>
        <img src={ film.imagePath } alt={ film.title } />
        <h1>{ film.title }</h1>
        <h2>{ film.subtitle }</h2>
        <p>{ film.storyline }</p>
        <p>{ film.rating }</p>
      </div>
    );
  }
}

MovieCard.propTypes = {

  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,

};

export default MovieCard;
