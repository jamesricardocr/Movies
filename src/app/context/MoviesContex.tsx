'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getGenderMovies, getTrendingMovies } from '../services';
import { Genre, Movies } from '../interface';

interface MoviesContextType {
    searchMovies: Movies[];
    setSearchMovies: React.Dispatch<React.SetStateAction<Movies[]>>
    movies: Movies[];
    setMovies: React.Dispatch<React.SetStateAction<Movies[]>>
    gender: Genre[];
}

const MoviesContext = createContext<MoviesContextType | undefined>(undefined);

interface MoviesProviderProps {
    children: React.ReactNode;
}

export const MoviesProvider: React.FC<MoviesProviderProps> = ({ children }) => {
    const [movies, setMovies] = useState<Movies[]>([]);
    const [gender, setGender] = useState<Genre[]>([]);
    const [searchMovies, setSearchMovies] = useState<Movies[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                if (!localStorage.getItem('movies') || !localStorage.getItem('genres')) {
                    const fetchedMovies: Movies[] = await getTrendingMovies();
                    setMovies(fetchedMovies);
                    const fetchedGenderMovies: Genre[] = await getGenderMovies();
                    const uniqueGenreIds = Array.from(new Set(fetchedMovies.flatMap(movie => movie.genre_ids)));
                    const filteredGenres: Genre[] = fetchedGenderMovies.filter(genre => uniqueGenreIds.includes(genre.id));
                    localStorage.setItem('genres', JSON.stringify(filteredGenres))
                    setGender(filteredGenres);
                } else {
                    const storedMovies = JSON.parse(localStorage.getItem('movies') || '[]');
                    setMovies(storedMovies);
                    const storedGender = JSON.parse(localStorage.getItem('genres') || '[]');
                    setGender(storedGender);
                }
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <MoviesContext.Provider value={{ movies, setMovies, gender, searchMovies, setSearchMovies}}>
            {children}
        </MoviesContext.Provider>
    );
};

export const useMovies = () => {
    const context = useContext(MoviesContext);
    if (!context) {
        throw new Error('useMovies must be used within a MoviesProvider');
    }
    return context;
};
