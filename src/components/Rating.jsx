// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() { 
    return (
    <div className="movie-card-rating">
      <h2 className="rating">{this.props.rating}</h2>
    </div>
    );
  }
}

export default Rating;