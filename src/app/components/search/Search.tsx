import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import style from './search.module.scss';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchInput.trim() !== '') {
      const normalizedSearch = searchInput.trim().toLowerCase();
      router.push(`/search/${normalizedSearch}`);
    }
  };

  return (
    <div className={style.search}>
      <form onSubmit={handleSearch}>
        <div>
          <label htmlFor="search">Search</label>
          <input
            id="search"
            type="search"
            placeholder="Keywords"
            value={searchInput}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
