import React from 'react';

class MovieCard extends React.Component {
  render() {
    return(
      <div className='movie-card'>
        <img src={this.props.movie.imagePath} alt={this.props.movie.title} />
        <h4>{this.props.movie.title}</h4>
      </div>
    );
  }
}

export default MovieCard;
