'use client';
import { useEffect} from 'react';
import { useMovies } from "@/app/context/MoviesContex";
import styles from "./page.module.scss";
import MovieCard from "@/app/components/movieCard/MovieCard";
import {useParams } from 'next/navigation';
import { Movies } from "@/app/interface/interfaceGetTrendingMovies";
import { getSearchMovies } from '@/app/services/getSearchMovies';

export default function Page() {
    const category = useParams();
    const movies = useMovies()


    useEffect(() => {
        const searchMovie = async () => {
            const fetchedMovies: Movies[] = await getSearchMovies(category.nameMovie.toString());
            movies.setSearchMovies(fetchedMovies);
        }
        searchMovie()
    }, [category, movies]);

    return (
        <div className={styles.page}>
            <h1>{category && category.type}</h1>
      {movies.searchMovies.length > 0 ? (
        <div className={styles.grid}>
          {movies.searchMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>No hay películas disponibles.</p>
      )}
        </div>
    );
}
