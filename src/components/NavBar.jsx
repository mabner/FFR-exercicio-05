import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
	return (
		<div className="App">
			<h1>The Movie Database API</h1>
			<Link to="/" className="navBar">
				Home
			</Link>
			<Link to="/playlists" className="navBar">
				Playlist
			</Link>
		</div>
	);
};
