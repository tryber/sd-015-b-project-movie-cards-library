import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    // const { title, subtitle, storyline, rating, imagePath } = movie;
    const { title, subtitle, storyline, imagePath } = movie;
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

// MovieCard.propTypes = {
//   movie: PropTypes.shape({
//     title: PropTypes.string,
//     subtitle: PropTypes.string,
//     storyline: PropTypes.string,
//     imagePath: PropTypes.string,
//   }).isRequired,
// };

export default MovieCard;
