import React, { Component } from "react";

class MovieCard extends Component {	
	render() {
		const { filmes } = this.props;
		return (
			<section>
				<h2>{ filmes.title }</h2>
				<img src={ filmes.imagePath } alt={ filmes.imagePath } />
				<div>
					<h3>{ filmes.subtitle }</h3>
					<p>{ filmes.storyline }</p>
				</div>
				<div>
					{filmes.rating}
				</div>
			</section>
		);
	}
}

export default MovieCard;
