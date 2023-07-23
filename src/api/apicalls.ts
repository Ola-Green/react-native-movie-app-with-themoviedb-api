import Config from "react-native-config";
export const baseImagePath = (size: string, path: string) => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};
export const nowPlayingMovies: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${Config.API_KEY}`;
export const upcomingMovies: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${Config.API_KEY}`;
export const popularMovies: string = `https://api.themoviedb.org/3/movie/popular?api_key=${Config.API_KEY}`;
export const searchMovies = (keyword: string) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${Config.API_KEY}&query=${keyword}`;
};
export const movieDetails = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${Config.API_KEY}`;
};
export const movieCastDetails = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Config.API_KEY}`;
};
