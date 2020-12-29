import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
	return (
		<nav className="navBar">
			<Link to="/">
				Home
			</Link>
			<Link to="/playlists">
				Playlist
			</Link>
		</nav>
	);
};
