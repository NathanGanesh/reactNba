import React, { useEffect } from 'react';
import { useGlobalContext } from '../context/context';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

export default function Carousel() {
	const { index, articles, setIndexValue } = useGlobalContext();

	useEffect(
		() => {
			const lastIndex = articles.length - 1;
			if (index < 0) {
				setIndexValue(lastIndex);
			}
			if (index > lastIndex) {
				setIndexValue(0);
			}
		},
		[ index, articles ]
	);
	useEffect(
		() => {
			let slider = setInterval(() => {
				setIndexValue(index + 1);
			}, 5000);
			return () => {
				clearInterval(slider);
			};
		},
		[ index ]
	);
	console.log(index);
	return (
		<div className="carousel-center">
			{articles.map((articleItem, articleIndex) => {
				const { author, body, date, id, image, title } = articleItem;
				let position = 'nextSlide';
				if (articleIndex === index) {
					position = 'activeSlide';
				}
				if (articleIndex === index - 1 || (index === 0 && articleIndex === articles.length - 1)) {
					position = 'lastSlide';
				}
				// console.log(articles[index]);
				console.log(image);
				return (
					<article className={position} key={id}>
						<img src={window.location + '/images/articles/' + image} alt={title} className="articles-img" />
						<div className="carousel-article">
							<h4 className="carousel-title">{title}</h4>
							<p className="carousel-description">{body}</p>
							<p className="carousel-description">{date}</p>
						</div>
					</article>
				);
			})}

			<button className="prev" onClick={() => setIndexValue(index - 1)}>
				<FiChevronLeft />
			</button>
			<button className="next" onClick={() => setIndexValue(index + 1)}>
				<FiChevronRight />
			</button>
		</div>
	);
}
