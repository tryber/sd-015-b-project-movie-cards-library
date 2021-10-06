import React from "react";
import PropTypes from 'prop-types' 

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <article>
        <img src={ movies.imagePath } alt={movies.title} />
        <h2>{ movies.title }</h2>
        <h3>{ movies.subtitle }</h3>
        <p>{ movies.storyline }</p>
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
}

export default MovieCard;
