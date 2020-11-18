import React from 'react';
import { FaHome, FaNewspaper, FaVideo, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
export const sublinks = [
	{
		page: 'news',
		links: [
			{ label: 'home', url: '/news' },
			{ label: 'top stories', url: '/news/category/top-stories' },
			{ label: 'draft', url: '/draft' },
			{ label: 'free Agent Tracker', url: '/2020-tracker' },
			{ label: 'Season FAQ', url: '/news/category/top-stories' },
			{ label: 'key dates', url: '/key-dates' },
			{ label: 'Writer archive', url: '/news/writers-archive' }
		]
	},
	{
		page: 'videos',
		links: [
			{ label: 'videos', url: '/videos' },
			{ label: 'libraries', url: '/products' },
			{ label: 'help', url: '/products' },
			{ label: 'billing', url: '/products' }
		]
	},
	{
		page: 'fantasy',
		links: [
			{ label: 'fantasy', url: '/fantasy' },
			{ label: 'nba pickers', url: '/products' },
			{ label: 'help', url: '/products' },
			{ label: 'billing', url: '/products' }
		]
	}
];

export const links = [
	{
		id: 1,
		url: '/',
		text: 'home'
	},
	{
		id: 2,
		url: '/news',
		text: 'news'
	},
	{
		id: 3,
		url: '/videos',
		text: 'videos'
	},
	{
		id: 4,
		url: '/games',
		text: 'contact'
	},
	{
		id: 5,
		url: '/profile',
		text: 'profile'
	}
];
