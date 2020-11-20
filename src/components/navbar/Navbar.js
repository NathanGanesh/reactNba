import React from 'react';
import logo from '../context/images/nba_logo.png';
import { Link } from 'react-router-dom';
export default function Navbar() {
	return (
		<div className="main-nav-bar">
			<Link to="/" className="main-link">
				<img src={logo} />
			</Link>
			<div>
				<ul className="nav-bar-items">
					<Link to="/" className="main-link">
						<li>Home</li>
					</Link>
					<Link to="/news" className="main-link">
						<li>News</li>
					</Link>
					<Link to="/videos" className="main-link">
						<li>Videos</li>
					</Link>
				</ul>
			</div>
			<button className="button-login">Sign in</button>
		</div>
	);
}
