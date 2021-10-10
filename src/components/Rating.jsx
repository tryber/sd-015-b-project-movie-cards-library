import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return(
      <div>
          <h4 className='rating'>{ rating }</h4>
      </div>
    );
  }
}

Rating.propTypes = { rating: PropTypes.number.isRequired};

export default Rating;
