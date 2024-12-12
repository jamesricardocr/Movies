'use client';
import { useEffect, useRef, useState } from 'react';
import { useMovies } from "@/app/context/MoviesContex";
import { useSearchParams } from 'next/navigation';
import Recommendations from '@/app/components/recommendations/Recommendations';
import CircularRating from '@/app/components/circularRaiting/CircularRaiting';
import FavoriteHeart from '@/app/components/favoriteHeart/FavoriteHeart';
import Image from 'next/image';
import { Genre, Movies } from '@/app/interface';
import style from './page-movies.module.scss'

export default function Page() {

  const [filteredMovies, setFilteredMovies] = useState<Movies>();
  const [genre, setGenre] = useState<Genre[]>([]);
  const searchParams = useSearchParams();
  const previousId = useRef<string | null>(null);
  const movies = useMovies();
  const id = searchParams.get('id');
  

  useEffect(() => {
    const fetchFilteredMovies = () => {
      if (!movies.movies.length) return;
      if (id === previousId.current) {
        return;
      }

      if (id) {
        const allMovies = [...movies.movies, ...movies.searchMovies];
        const favorites = localStorage.getItem('favorites');
        if (favorites) {
          const favoriteMovies: Movies[] = JSON.parse(favorites);
          allMovies.push(...favoriteMovies);
        }

        const filtered = allMovies.filter(movie => movie.id === Number(id));

        if (filtered.length > 0) {
          setFilteredMovies(filtered[0]);
          const filteredGenre: Genre[] = movies.gender.filter(gen => {
            if (filtered[0].genre_ids.length > 0) {
              return filtered[0].genre_ids.some(genreId => genreId === gen.id);
            }
            return false;
          });
          setGenre(filteredGenre);
        } else {
          console.log('No se encontró ninguna película con el ID especificado.');
        }
      }

    };

    fetchFilteredMovies();
  }, [id, movies.movies, movies.gender, movies.searchMovies]);


  return (
    <div className={style.page} >
      {filteredMovies
        ? <div className={style.container} style={{
          background: `url(https://image.tmdb.org/t/p/w1280${filteredMovies?.backdrop_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          width: '100vw'
        }}>
          <div className={style.image}>
            <picture>
              <Image width={305} height={395} src={`https://image.tmdb.org/t/p/w500${filteredMovies.poster_path}`} alt={filteredMovies.title} />
            </picture>
          </div>
          <div className={style.content}>
            <h1>{filteredMovies.title}</h1>
            <h4>{filteredMovies.release_date}</h4>
            <h2>{filteredMovies.overview}</h2>
            <div className={style.actions}>
              <CircularRating size={70} rating={filteredMovies.vote_average * 10} />
              <FavoriteHeart movie={filteredMovies} />
            </div>
            <div className={style.genre}>
              {genre && genre.map(gen => (
                <span key={gen.id}>{gen.name}</span>
              ))}
            </div>
          </div>
        </div>
        : <p>no hay peliculas</p>
      }
      <div className={style.recomend}>
        <Recommendations />
      </div>
    </div>
  );
}
