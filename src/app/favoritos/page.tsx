'use client';
import { useEffect, useState } from 'react';
import styles from "./page.module.scss";
import MovieCard from "@/app/components/movieCard/MovieCard";
import { Movies } from "@/app/interface/interfaceGetTrendingMovies";

export default function Page() {
  const [filteredMovies, setFilteredMovies] = useState<Movies[]>([]);

  useEffect(() => {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      setFilteredMovies(JSON.parse(favorites));
    } else {
      setFilteredMovies([]); 
    }
  }, []);

  return (
    <div className={styles.page}>
      <h1>Favorites</h1>
      {filteredMovies.length > 0 ? (
        <div className={styles.grid}>
          {filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>No favorites yet.</p>
      )}
    </div>
  );
}
