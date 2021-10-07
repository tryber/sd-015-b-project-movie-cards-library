import React from 'react';
import '../App.css';

function MovieCard({ movie: { title, imagePath } }) {
  return (
    <section>
      <div>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
      </div>
    </section>
  );
}

export default MovieCard;
