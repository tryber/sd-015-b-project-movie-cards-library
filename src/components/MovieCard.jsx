import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <section>
        <section className="movie-cards">
          <img src={ movie.imagePath } alt={ movie.title } />
          <h4>{movie.title}</h4>
          <h5>{movie.subtitle}</h5>
          <p>{movie.storyline}</p>
        </section>
        <Rating rating={ movie.rating } />
      </section>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: PropTypes.shape({
    title: 'Title',
    subtitle: 'Subtitle',
    storyline: 'StoryLine',
    rating: 'Rating',
    imagePath: 'Image',
  }),
};

export default MovieCard;
