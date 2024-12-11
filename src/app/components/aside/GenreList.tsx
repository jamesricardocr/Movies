'use client'
import { useMovies } from '@/app/context/MoviesContex'
import { formatGenreName } from '@/app/utils';
import { useRouter } from 'next/navigation'; 
import style from './genreList.module.scss';

const GenreList = () => {
  const genreList = useMovies()
  const router = useRouter(); 

  const handleSelectList = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value.split('&'); 
    const genreId = selectedOption[1]; 
    const genreName = selectedOption[0]; 

    if (genreId) {
      const normalizeRute = formatGenreName(genreName)
      router.push(`/generos/${normalizeRute.toLowerCase()}?id=${genreId}`);
    }
  }

  return (
    <div className={style.genreList}>
      <label htmlFor="genre">Genre</label>
      <select id='genre' className={style.select} onChange={handleSelectList} defaultValue="">
        <option value="" disabled>Select a genre</option>
        {genreList.gender.map(genre => (
          <option key={genre.id} value={`${genre.name}&${genre.id}`}>{genre.name}</option>
        ))}
      </select>
    </div>
  )
}

export default GenreList;
