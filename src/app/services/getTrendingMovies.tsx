import { getTrending, Movies } from "../interface/interfaceGetTrendingMovies";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
  },
};


export const getTrendingMovies = async (page: number = 1): Promise<Movies[]> => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options);
    const data: getTrending = await response.json();
    return data.results;
  } catch (err) {
    console.error(err);
    throw new Error('Error fetching trending movies');
  }
};


