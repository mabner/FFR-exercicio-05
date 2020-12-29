export const actions = {
	listMovies: 'ListMovies',
	addMovie: 'AddMovie',
	removeMovie: 'RemoveMovie',
	
};

export const listMovies = (id, movie) => ({
	type: actions.listMovies,
	id,
	movie,
});

export const addMovie = (movie) => ({
	type: actions.addMovie,
	movie,
});

export const removeMovie = (id) => ({
	type: actions.removeMovie,
	id,
});
