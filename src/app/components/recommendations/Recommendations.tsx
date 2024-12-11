import { useMovies } from '@/app/context/MoviesContex';
import { Movies } from '@/app/interface';
import MovieCard from '../movieCard/MovieCard';
import styles from './recomendations.module.scss'

const Recommendations = () => {
  const recommendationsMovies = useMovies();

  const getRandomMovies = (movies: Movies[], count: number) => {
    const shuffled = movies.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomMovies = getRandomMovies(recommendationsMovies.movies, window.innerWidth > 900 ? 12 : 6);

  return (
    <>
      <h2 className={styles.title}>Recommendations</h2>
      <div className={styles.recomendation}>
        {randomMovies.map(movie => (
          <div key={movie.id}>
            <MovieCard key={movie.id} movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Recommendations;
