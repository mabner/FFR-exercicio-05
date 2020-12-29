import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeMovie } from '../actions/playlistActions';

export const MoviePlaylist = () => {
	const dispatch = useDispatch();
	const movieList = useSelector((sel) => sel.movies);
	const { playlist } = movieList;
	
	console.log('playlist: ' + playlist);
	console.log('movieList: ' + movieList);
	
	return (
		<>
			<h1>Movie Playlist</h1>
			<ul>
				{playlist.map((movie, id) => (
					<li key={id}>
						<Link to={`/movie/${movie?.id}`}>{movie?.tittle}</Link>
						<button
							onClick={() => dispatch(removeMovie(id))}
							className="navBar"
						>
							X
						</button>
					</li>
				))}
			</ul>
		</>
	);
};;
