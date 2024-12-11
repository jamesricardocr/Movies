import { getTrending, Movies } from "../interface/interfaceGetTrendingMovies";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
  },
};

export const getSearchMovies = async (nameMovie: string): Promise<Movies[]> => {
  try {
    const response = await fetch( `https://api.themoviedb.org/3/search/movie?query=${nameMovie}&language=en`, options);
    const data: getTrending = await response.json();
    localStorage.setItem('SearchMovies', JSON.stringify(data.results));
    
    return data.results;
  } catch (err) {
    console.error(err);
    throw new Error('Error fetching trending movies');
  }
};


