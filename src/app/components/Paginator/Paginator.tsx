import { useMovies } from '@/app/context/MoviesContex';
import { getTrendingMovies } from '@/app/services';
import React, { useState } from 'react';
import style from './Paginator.module.scss'


const Paginator = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const movies = useMovies()
  const handlePageChange = async (page: number) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    if (page >= 1 && page <= 10) {
      setCurrentPage(page);
      const updateMovies = await getTrendingMovies(page);
      movies.setMovies(updateMovies)
    }
    const updateMovies = await getTrendingMovies(page);
    movies.setMovies(updateMovies)

  };

  return (
    <div className={style.paginator}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          backgroundColor: currentPage === 1 ? '#3b3b3b' : '#575757',
        }}
      >
        &lt;
      </button>
      {Array.from({ length: 10 }, (_, index) => index + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          style={{
            backgroundColor: currentPage === page ? '#3b3b3b' : '#575757',
          }}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === 10}
        style={{
          backgroundColor: currentPage === 10 ? '#3b3b3b' : '#575757',
        }}
      >
        &gt;
      </button>
    </div>
  );
};

export default Paginator;
