import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeMovie } from '../actions/playlistActions';
import NavBarWrapper from './styles/NavBarWrapper';
import MoviesList from './MoviesList';


const MoviePlaylist = () => {
	const dispatch = useDispatch();
	const movieList = useSelector((state) => state.movies);
	const { playlist } = movieList;
	
	console.log('playlist: ' + playlist);
	console.log( 'movieList: ' + movieList );
	return (
		<>
			<h1>My Playlist</h1>
			<ul>
				{playlist.map((movie, index) => (
					<li key={index}>
						{/* <NavBarWrapper> */}

						<Link to={`/movie/${movie?.id}`}>
							{ String(movie?.title)}
						</Link>
						<button
							onClick={() => dispatch(removeMovie(index))}
							className="navBar"
						>
							X
						</button>
						{/* </NavBarWrapper> */}
					</li>
				))}
			</ul>
		</>
	);
	
};
export default MoviePlaylist;
