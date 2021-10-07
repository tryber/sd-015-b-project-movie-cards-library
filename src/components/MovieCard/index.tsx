import React from 'react';
import './styles.scss';
import Rating from '../Rating';

interface MovieProps {
  movie: {
    title: string,
  subtitle: string,
  storyline: string,
  rating: number,
  imagePath: string,
  },
  key: string
}
function MovieCard(props: MovieProps) {
  const { movie } = props;
  return (
    <div className={'card'}>
      <img src={ movie.imagePath } alt={ movie.title } />
      <div className={'card-details'}>
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <Rating rating={ movie.rating } />
      </div>
    </div>
  )
}

export default MovieCard;
