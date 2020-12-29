import { actions as playlistActions } from '../actions/playlistActions';

const initialState = {
  movies: {},
  playlist: []
};

export const playlist = (state = initialState, action) => {
  let movies, playlist;
  switch ( action.type )
  {
    case playlistActions.listMovies:
      movies = { ...state.movies };
      movies[ action.id ] = action.movies;
      return {
        ...state,
        movies,
      }
    case playlistActions.addMovie:
      playlist = [...new Set([...state.playlist, action.movie])];
      return {
        ...state,
        playlist,
      };
    case playlistActions.removeMovie:
      playlist = state.playlist.filter((_, i) => i !== action.id);
      return {
        ...state,
        playlist,
      };
    default:
      return state;
  }
};
