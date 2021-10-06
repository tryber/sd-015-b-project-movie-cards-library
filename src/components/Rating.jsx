import React from 'react';
import PropTypes from 'prop-types';
// para todos os requesitos foram usados como consulta
// arquivos das aulas ao vivo:https://github.com/tryber/sd-015-b-live-lectures/pull/31
// E exercícios feito do course.
class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <p className="rating">{rating}</p>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
