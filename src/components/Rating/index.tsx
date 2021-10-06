import React from "react";
import './styles.scss';

interface Rating {
  rating: Number;
}
export function Rating(props: Rating) {
  return <span className= 'rating'>{props.rating}</span>
}