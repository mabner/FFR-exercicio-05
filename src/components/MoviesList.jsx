import React, { useState, useEffect } from 'react';
import { MoviesService } from '../services/MoviesService';
import { Link } from 'react-router-dom';

export const MoviesList = () => {
	const [movies, setMovies] = useState({ data: { results: [] } });

	const requestMovies = async () => {
		const moviesResult = await MoviesService.getPopularMovies();
		setMovies(moviesResult);
	};

	useEffect(() => {
		requestMovies();
	}, []);

	return (
		<>
			<ul>
				{movies.data.results.map((movie) => (
					<li key={movie.id}>
						<span className="movieID">{movie.id}</span> - {movie.title} -
						<Link to={`movie/` + movie.id} className="detailLink">
							Details
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};
// movie.poster_path - Imagem do poster do filme
