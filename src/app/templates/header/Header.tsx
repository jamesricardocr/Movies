import Logo from '@/app/components/logo/Logo'
import React from 'react'
import style from './header.module.scss'
import { useMovies } from '@/app/context/MoviesContex';
import { Movies } from '@/app/interface';
import FavoriteHeart from '@/app/components/favoriteHeart/FavoriteHeart';
import CircularRating from '@/app/components/circularRaiting/CircularRaiting';
import Link from 'next/link';
import { formatGenreName } from '@/app/utils';

interface HeaderProps {
  hidden: boolean;
}

const Header: React.FC<HeaderProps> = ({ hidden }) => {

  const recommendationsMovies = useMovies();

  const getRandomMovies = (movies: Movies[], count: number,) => {
    const shuffled = movies.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomMovies = getRandomMovies(recommendationsMovies.movies, 1);

  return (
    <>
      {hidden ?

        <header className={style.header} style={{
          background: `url(https://image.tmdb.org/t/p/w1280/${randomMovies[0]?.backdrop_path})`,
          height: true ? '0' : 'initial'
        }}>
          <div className={style.mainBar}>
            <Logo />
          </div>
          <div className={style.content}>
            <div className={style.info}>
              <h1>{randomMovies[0]?.title}</h1>
              <p>{randomMovies[0]?.overview}</p>
              {randomMovies[0] &&
                <Link  href={`/movies/${formatGenreName(randomMovies[0]?.title)}?id=${randomMovies[0]?.id}`}>
                  <h3>See More</h3>
                </Link>}
            </div>
            <div className={style.actions}>
              {randomMovies[0] &&
                <>
                  <FavoriteHeart movie={randomMovies[0]} />
                  <CircularRating size={92} rating={randomMovies[0]?.vote_average * 10} />
                </>
              }
            </div>
          </div>

        </header>
        : <div className={style.mainBar}>
          <Logo />
        </div>}
    </>
  )
}

export default Header