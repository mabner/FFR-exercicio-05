import React, { useState, useEffect } from 'react';
import { MoviesService } from '../services/MoviesService';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addMovie } from '../actions/playlistActions';

export const MovieDetail = (props) => {
	const dispatch = useDispatch();
	const [movie, setMovie] = useState({ data: [] });
	const id = props?.match?.params?.id;

	const requestMovie = async () => {
		const movieResult = await MoviesService.getMovieById(
			props.match.params.id
		);
		setMovie(movieResult);
	};
	useEffect(() => {
		requestMovie();
	}, []);

	const baseUrl = `https://image.tmdb.org/t/p/original/${movie.data.backdrop_path}`;

	//console.log('Request: ' + requestMovie);
	//console.log('Disp: ' + dispatch);
	console.log('ID: ' + id)
	return (
		<>
			<div
				className="bg-image"
				style={{
					backgroundImage: `url(${baseUrl})`,
					backgroundColor: 'GrayText',
					backgroundBlendMode: 'screen, difference, lighten',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<div className="bg-text">
					<h1>{movie.data.title}</h1>
					<h3>{movie.data.tagline}</h3>
					<p>{movie.data.overview}</p>
					<p>Release date: {movie.data.release_date}</p>
					<p>Average vote: {movie.data.vote_average}</p>
					<p>Movie poster:</p>
					<img
						src={
							'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' +
							movie.data.poster_path
						}
						alt={movie.data.title}
					/>
				</div>
				<div>
					{/* TODO
					 * Implement backdrop as a page background, making a semi-transparent div with the text
					 */}
				</div>

				<p>
					<Link to="/" className="backLink">
						Go back
					</Link>
					<button
						onClick={() => dispatch(addMovie(movie.data[id]))}
						className="addPlaylist"
					>
						+ playlist
					</button>
				</p>
			</div>
		</>
	);
};
