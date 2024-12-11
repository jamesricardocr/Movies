import { Movies } from '@/app/interface';
import { useState } from 'react';

interface FavoriteHeartProps {
  movie: Movies;
}

const FavoriteHeart: React.FC<FavoriteHeartProps> = ({ movie }) => {
  const isMovieFavorited = (movieId: number): boolean => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.some((fav: Movies) => fav.id === movieId);
  };

  const [isFavorited, setIsFavorited] = useState(isMovieFavorited(movie.id));

  const toggleFavorite = () => {
    const favorites: Movies[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (isFavorited) {
      const updatedFavorites = favorites.filter((fav: Movies) => fav.id !== movie.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      favorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    setIsFavorited(!isFavorited);
  };

  return (
    <div onClick={toggleFavorite} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        fill={isFavorited ? '#E54545' : 'white'}
        viewBox="0 0 24 24"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </div>
  );
};

export default FavoriteHeart;
