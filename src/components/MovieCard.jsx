import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import '../App.css';

class MovieCards extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <img src={ movie.imagePath } alt={ movie.title } />
        <article>
          <h4>{movie.title}</h4>
          <h5>{movie.subtitle}</h5>

          <p>{movie.storyline}</p>
        </article>

        <div>
          <Rating rating={ movie.rating } />
        </div>
      </div>
    );
  }
}
MovieCards.propTypes = {
  movie: PropTypes.exact({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string }).isRequired,

};

export default MovieCards;
