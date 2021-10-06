// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section className="movie-card-body" key={ movie.title }>
        <h4 className="movie-card-title">
          { movie.title }
        </h4>
        <h5 className="movie-card-subtitle">
          { movie.subtitle }
        </h5>
        <p className="movie-card-storyline">
          { movie.storyline }
        </p>
        <img className="movie-card-image" src={ movie.imagePath } alt={ movie.title } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    rating: PropTypes.number,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
