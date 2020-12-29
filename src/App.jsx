import React from "react";
import "./styles.css";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { MoviesList } from "./components/MoviesList";
import { MovieDetail } from "./components/MovieDetails";
import { MoviePlaylist } from "./components/MoviePlaylist";
import { Header } from './components/Header'; 

export default function App() {
  return (
		<>
			<div className="App">
			  <BrowserRouter>
				  <Header />
					<Switch>
						<Route path="/" exact component={MoviesList} />
						<Route path="/movie/:id" component={MovieDetail} />
						<Route path="/playlists" component={MoviePlaylist} />
					</Switch>
				</BrowserRouter>
			</div>
		</>
  );
}
