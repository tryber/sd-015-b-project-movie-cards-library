import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <span className='rating'>{ rating }</span>
      </div>
    );
  }
}

export default Rating;
