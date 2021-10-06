import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = this.props;

    return (
      <div>test</div>
    );
  }
}

export default MovieCard;
