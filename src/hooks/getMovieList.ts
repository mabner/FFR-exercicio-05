import { useEffect, useState } from 'react';
import { MoviesService } from '../services/MoviesService';

export interface Movie {
	id: number;
	title: string;
}

export const getMovieList = () => {
	const [movies, setMovies] = useState<Movie[]>([]);
	useEffect(() => {
		MoviesService.getPopularMovies().then((list) =>
			setMovies(list.data.results)
		);
	}, []);
	return movies;
};
