import { Genre, MovieGenre } from "../interface/interfaceGetGenderMovies";


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    },
};

export const getGenderMovies = async (): Promise<Genre[]> => {
    try {
        const response = await fetch('https://api.themoviedb.org/3/genre/movie/list', options);
        const data: MovieGenre = await response.json();
        localStorage.setItem('genres', JSON.stringify(data.genres));
        return data.genres;
    } catch (err) {
        console.error(err);
        throw new Error('Error fetching trending movies');
    }
};


