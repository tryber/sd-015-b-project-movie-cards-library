// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <section>
        <img src={ imagePath } alt={ `${title} Titulo` } />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <div>
          <Rating rating={ rating } />
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: PropTypes.shape({
    storyline: 'N/A',
    rating: 'N/A',
    imagePath: 'https://spassodourado.com.br/wp-content/uploads/2015/01/default-placeholder.png',
  }),
};

export default MovieCard;
