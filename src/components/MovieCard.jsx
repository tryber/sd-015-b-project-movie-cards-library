import React from 'react';
import '../App.css';

function MovieCard({ movie: { title, imagePath } }) {
  return (
    <section>
      <div>
        <img src={ imagePath } alt={ title } />
      </div>
    </section>
  );
}

export default MovieCard;
