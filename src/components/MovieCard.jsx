// implement MovieCard component here
import React from 'react';


class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
    <div className="movie-card movie-card-body">
      <img src={imagePath} className="movie-card-image" alt={title} />
      <h4 className="movie-card-title">{title}</h4>
    </div>
    )
  }
}

export default MovieCard;
