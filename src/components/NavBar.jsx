import React from 'react';
import { Link } from 'react-router-dom';
import NavBarWrapper from './styles/NavBarWrapper';

const NavBar = () => (
		<NavBarWrapper className="navBar">
			<Link to="/">.:Home:.</Link>
			<Link to="/playlists">.:Playlist:.</Link>
		</NavBarWrapper>
	);
export default NavBar;