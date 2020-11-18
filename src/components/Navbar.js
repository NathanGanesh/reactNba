import React from 'react';
import { sublinks } from './context/data';
import logo from './context/nba_logo.png';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context/context';
import { Link } from 'react-router-dom';

export default function Navbar() {
	const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
	const displaySubMenu = (e) => {
		const pageName = e.target.textContent;
		const tempBtn = e.target.getBoundingClientRect();
		const center = (tempBtn.left + tempBtn.right) / 2;
		const bottom = tempBtn.bottom - 3;
		openSubmenu(pageName, { center, bottom });
	};

	const handleSubMenu = (e) => {
		if (!e.target.classList.contains('nav-bar-button-link')) {
			closeSubmenu();
		}
	};

	return (
		<nav className="main-nav-bar" onMouseOver={handleSubMenu}>
			<div>
				<Link className="main-link" to={'/home'}>
					<button className="btn nav-bar-logo">
						<img src={logo} />
					</button>
				</Link>
			</div>
			<div>
				<ul className="nav-bar-items">
					{sublinks.map((item, index) => {
						return (
							<button className="nav-bar-button-link" onMouseOver={displaySubMenu} key={index}>
								{item.page}
							</button>
						);
					})}
				</ul>
			</div>
			<div>
				<button className="btn sign-button">Sign in</button>
			</div>
		</nav>
	);
}
