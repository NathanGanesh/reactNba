import React, { useState, useContext, useEffect } from 'react';
import { sublinks } from './data';
import { URL } from '../../config';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	//navbar
	const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);
	const [ isSubmenuOpen, setIsSubmenuOpen ] = useState(false);
	const [ page, setPage ] = useState({ page: '', links: [] });
	const [ location, setLocation ] = useState({});

	//carousel
	const [ articles, setArticles ] = useState([]);
	const [ index, setIndex ] = React.useState(0);

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetch(URL + '/articles');
			const articlesJson = await data.json();

			setArticles(articlesJson);
		};
		fetchData();
	}, []);

	const setIndexValue = (index) => {
		setIndex(index);
	};

	const openSidebar = () => {
		setIsSidebarOpen(true);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};
	const openSubmenu = (text, coordinates) => {
		const page = sublinks.find((link) => link.page === text);
		setPage(page);
		setLocation(coordinates);
		setIsSubmenuOpen(true);
	};
	const closeSubmenu = () => {
		setIsSubmenuOpen(false);
	};

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				openSidebar,
				closeSidebar,
				isSubmenuOpen,
				openSubmenu,
				closeSubmenu,
				page,
				location,
				articles,
				index,
				setIndexValue
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
