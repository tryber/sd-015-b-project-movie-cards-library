import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    return (
      <div className='movie-card'>
        <img src={this.props.movie.imagePath} alt={this.props.movie.title} />
        <h4>{this.props.movie.title}</h4>
        <h5>{this.props.movie.subtitle}</h5>
        <p>{this.props.movie.storyline}</p>
        <Rating className='rating' rating={this.props.movie.rating} />
      </div>
    );
  }
}

export default MovieCard;
