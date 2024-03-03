import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesList from '../../components/MoviesList/MoviesList';
import themoviedbApi from '../../helpers/themoviedb-api';
import Loader from '../../components/Loader/Loader';
import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = query => {
    setSearchParams({ query });
  };

  useEffect(() => {
    const searchMovies = async query => {
      setLoading(true);

      try {
        const response = await themoviedbApi.searchMovies(query);
        setMovies(response.data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    const query = searchParams.get('query');
    if (query) {
      searchMovies(query);
    }
  }, [searchParams]);

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      {loading && <Loader size={80} color="#00BFFF" />}
      {error && (
        <div className={css.Error}>An error occurred: {error.message}</div>
      )}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
