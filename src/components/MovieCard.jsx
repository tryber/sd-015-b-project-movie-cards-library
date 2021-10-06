import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div>
        <p>
          title:
          {title}
        </p>
        <p>
          subtitle:
          {subtitle}
        </p>
        <p>
          storyline:
          {storyline}
        </p>
        <p>
          rating:
          {rating}
        </p>
        <img src={imagePath} />
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
