import React from 'react';
import Carousel from '../components/carousel/Carousel';
import { useGlobalContext } from '../components/context/context';
import SingleItem from '../components/singlepageItem/SingleItem';
import { Link } from 'react-router-dom';

export default function Home() {
	const { videos } = useGlobalContext();
	return (
		<div>
			<Carousel />
			<div>
				{videos.map((article) => {
					return (
						<Link to={`/videos/${article.id}`} className="main-link">
							<article key={article.id}>
								<SingleItem {...article} />
							</article>
						</Link>
					);
				})}
				<div>NBA videos</div>
			</div>
		</div>
	);
}
