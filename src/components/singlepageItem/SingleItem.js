import React, { useState } from 'react';
import play from '../context/images/play.png';
export default function SingleItem(props) {
	const { image, title, date, id } = props;
	console.log(props);
	const [ limit, setLimit ] = React.useState(3);

	return (
		<div className="article-news">
			<img src={window.location + '/images/videos/' + image} />
			<div className="play">
				<img src={play} className="article-play" />
			</div>

			<div className="single-article">
				<div className="single-article-description">
					<p>{id}</p>
					<p className="date">{date}</p>
				</div>

				<h3>{title}</h3>
			</div>
		</div>
	);
}
