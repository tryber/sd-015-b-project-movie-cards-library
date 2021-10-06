import React from 'react';

class MovieList extends React.Component {
  render() {
    const movies = this.props;
    return (
      <section>
        {movies}
      </section>
    );
  }
}

export default MovieList;
