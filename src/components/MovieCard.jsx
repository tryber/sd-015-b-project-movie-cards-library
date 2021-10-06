// implement MovieCard component here
import React from 'react';


class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
    <div className="movie-card">
      <img src={imagePath} />
      
    </div>
    )
  }
}

export default MovieCard;
