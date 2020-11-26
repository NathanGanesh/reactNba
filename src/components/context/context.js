import React, { useContext, useState, useEffect } from 'react';
import { URL } from '../../config';

const AppContext = React.createContext();
function AppProvider({ children }) {
	const [ articles, setArticles ] = useState([]);
	const [ videos, setVideos ] = useState([]);
	const [ teams, setTeams ] = useState([]);

	const [ loading, setLoading ] = React.useState(true);

	const [ carouselIndex, setCarouselIndex ] = useState(0);

	const changeCarouselIndex = (index) => {
		setCarouselIndex(index);
	};

	const changeLoading = (boolean) => {
		setLoading(boolean);
	};

	useEffect(() => {
		setLoading(true);
		const getProducts = async () => {
			const fetchArticles = await fetch(URL + '/articles');
			const fetchVideos = await fetch(URL + '/videos');
			const fetchTeams = await fetch(URL + '/teams');
			const articleItems = await fetchArticles.json();

			const teamItems = await fetchTeams.json();
			const videoItems = await fetchVideos.json();

			setArticles(articleItems);

			setVideos(videoItems);
			setTeams(teamItems);
			setLoading(false);
		};
		getProducts();
	}, []);

	return (
		<AppContext.Provider
			value={{ loading, articles, videos, teams, carouselIndex, changeCarouselIndex, changeLoading }}
		>
			{children}
		</AppContext.Provider>
	);
}

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
