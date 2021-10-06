import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <p>
          title:
          {movie.title}
        </p>
        <p>
          subtitle:
          {movie.subtitle}
        </p>
        <p>
          storyline:
          {movie.storyline}
        </p>
        <p>
          rating:
          {movie.rating}
        </p>
        <p>
          imagePath:
          {movie.imagePath}
        </p>
      </div>
    );
  }
}

MovieCard.defaultProps = {
  movie: {
    title: 'Sem titulo',
    subtitle: 'Sem subtitulo',
    storyline: 'Sem storyline',
    rating: 0,
    imagePath: 'Sem imagem',
  },
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

export default MovieCard;
