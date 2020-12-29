import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = () => {
	return (
		<NavBarWrapper>
			<Link to="/">.:Home:.</Link>
			<Link to="/playlists">.:Playlist:.</Link>
		</NavBarWrapper>
	);
};

export const NavBarWrapper = styled.div`
	color: white;
	background-color: hsl(197, 93%, 29%);
	border: none;
	border-radius: 4px;
	padding: 10px 24px;
	text-align: center;
	font-size: 16px;
	margin: 4px 2px;
	opacity: 0.7;
	transition: 0.3s;
	display: inline-block;
	text-decoration: none;
	cursor: pointer;
`;