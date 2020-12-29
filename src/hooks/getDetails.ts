import { useEffect, useState } from 'react';
import { MoviesService } from '../services/MoviesService';

export interface Movie {
	id: number;
	title: string;
	tagline: string;
	overview: string;
	release_date: string;
	vote_average: string;
	poster_path: string;
}
export const getMovieList = () => {
	const [list, setPlaylist] = useState<Movie[]>([]);
	useEffect(() => {
		MoviesService.getPopularMovies().then((list) =>
			setPlaylist(list.data.results)
		);
	}, []);
	return list;
};
