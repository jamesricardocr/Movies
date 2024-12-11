
import { Movies } from '../../interface/interfaceGetTrendingMovies';
import Image from 'next/image';
import styles from './movie.module.scss';
import Link from 'next/link';
import { formatGenreName } from '@/app/utils';
import CircularRating from '../circularRaiting/CircularRaiting';
import FavoriteHeart from '../favoriteHeart/FavoriteHeart';

interface MovieCardProps {
  movie: Movies;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const hasPoster = movie.poster_path !== null && movie.poster_path !== undefined;

  return (
    <div style={{ display: hasPoster ? 'block' : 'none' }} className={styles.card }>
      <div >
        <picture>
          <Image
            priority
            width={200}
            height={223}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </picture>
      </div>
      <div className={styles.contianer}>
        <Link href={`/movies/${formatGenreName(movie.title)}?id=${movie.id}`}>
          <h3>{movie.title}</h3>
        </Link>
        <h4>{movie.release_date}</h4>
        <div className={styles.actions}>
          <div className={styles.raiting}>
            <p>Rating</p>
            <CircularRating size={50} rating={movie.vote_average * 10} />
          </div>
          <div className={styles.favorite}>
            <p>Favorites</p>
            <FavoriteHeart movie={movie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
