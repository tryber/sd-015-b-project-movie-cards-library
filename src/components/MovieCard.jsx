// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

export default function MovieCard({ movie }) {
  return (
    <div>
      <h4>{movie.title}</h4>
      <h5>{movie.subtitle}</h5>
      <p>{movie.storyline}</p>
      <img src={ movie.imagePath } alt={ movie.title } />
      <Rating rating={ movie.rating } />
    </div>
  );
}
