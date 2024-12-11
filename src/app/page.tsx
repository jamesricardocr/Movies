'use client'
import styles from "./page.module.scss";
import MovieCard from "./components/movieCard/MovieCard";
import { useMovies } from "./context/MoviesContex";
import Paginator from "./components/Paginator/Paginator";
import { useEffect } from "react";

export default function Home() {
  const movies = useMovies();

  return (
    <div className={styles.page}>
      <div className={styles.grid}>
        {movies && movies.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      <Paginator/>
    </div>
  );
}
