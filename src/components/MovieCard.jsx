import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div>
        <p>
          title: {title}
        </p>
        <p>
          subtitle: {subtitle}
        </p>
        <p>
          storyline: {storyline}
        </p>
        <p>
          rating: {rating}
        </p>
        <p>
          imagePath: {imagePath}
        </p>
      </div>
    );
  }
}

// MovieCard.propTypes = {
//   movie: PropTypes.Object,
// };

export default MovieCard;
