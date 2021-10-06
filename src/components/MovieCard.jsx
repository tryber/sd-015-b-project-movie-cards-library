import React from "react";
import Rating from "./Rating";

class MovieCard extends React.Component {
  render () {
    const {movie} = this.props;
    return(
      <div>
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>        
        <Rating rating={movie.rating}/>               
        <img src={movie.imagePath} alt={movie.title} />
      <h1></h1>
    </div>
    );
    
  }
}
export default MovieCard