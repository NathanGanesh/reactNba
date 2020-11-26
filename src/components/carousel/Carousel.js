import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../context/context';
import loadingImage from '../context/images/loading.gif';
export default function Carousel() {
	const { loading, articles, carouselIndex, changeCarouselIndex } = useGlobalContext();

	useEffect(
		() => {
			const lastIndex = articles.length - 1;
			if (carouselIndex < 0) {
				changeCarouselIndex(lastIndex);
			}
			if (carouselIndex >= lastIndex) {
				changeCarouselIndex(0);
			}
		},
		[ carouselIndex, articles ]
	);

	// useEffect(
	// 	() => {
	// 		let slider = setInterval(() => {
	// 			changeCarouselIndex(carouselIndex + 1);
	// 		}, 2500);
	// 		return () => {
	// 			clearInterval(slider);
	// 		};
	// 	},
	// 	[ changeCarouselIndex ]
	// );

	if (!loading && articles !== undefined) {
		return (
			<section className="carousel">
				<img src={window.location + '/images/articles/' + articles[carouselIndex].image} />
				<div className="carousel-description">
					<h3>{articles[carouselIndex].title}</h3>
				</div>
			</section>
		);
	}
	if (loading) {
		return (
			<div className="loading">
				<h2>Loading...</h2>
				<img src={loadingImage} alt="big time loading" />
			</div>
		);
	}
}
