import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieDetail from '../components/MovieDetails';
import MoviePlaylist from '../components/MoviePlaylist';

const AppRoutes = () => (
	<Switch>
		<Route path="/" exact component={MoviesList} />
		<Route path="/movie/:id" component={MovieDetail} />
		<Route path="/playlists" component={MoviePlaylist} />
	</Switch>
);
export default AppRoutes;
