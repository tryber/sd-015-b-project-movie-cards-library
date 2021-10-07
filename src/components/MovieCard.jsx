import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    
    return (
      <section>
        <div>
          <img src={ imagePath } alt={ `${title} sprite` } />
        </div>
        <div>
          <h4>{ title }</h4>
          <h5>{ subtitle }</h5>
          <p>{ storyline }</p>
        </div>
      </section>
    );
  }
}

export default MovieCard;
