'use client';
import { useEffect, useRef, useState } from 'react';
import { useMovies } from "@/app/context/MoviesContex";
import styles from "./page.module.scss";
import MovieCard from "@/app/components/movieCard/MovieCard";
import { useSearchParams, useParams } from 'next/navigation';
import { Movies } from "@/app/interface/interfaceGetTrendingMovies";

export default function Page() {
  const [filteredMovies, setFilteredMovies] = useState<Movies[]>([]);
  const movies = useMovies();
  const searchParams = useSearchParams();
  const category = useParams();
  
  const id = searchParams.get('id');

  const previousId = useRef<string | null>(null);

  useEffect(() => {
    const fetchFilteredMovies = () => {
      if (!movies.movies.length) return; 

      if (id === previousId.current) {
        return; 
      }

      if (id) {
        const filtered = movies.movies.filter(movie => movie.genre_ids.includes(Number(id)));
        setFilteredMovies(filtered);
      } else {
        setFilteredMovies(movies.movies);
      }
      previousId.current = id;
    };

    fetchFilteredMovies();
  }, [id, movies.movies]); 

  return (
    <div className={styles.page}>
      <h1>{category && category.type}</h1>
      {filteredMovies.length > 0 ? (
        <div className={styles.grid}>
          {filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>No hay películas disponibles.</p>
      )}
    </div>
  );
}
