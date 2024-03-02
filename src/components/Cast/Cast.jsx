import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import themoviedbApi from '../../helpers/themoviedb-api';
import Loader from '../../components/Loader/Loader';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      setLoading(true);

      try {
        const response = await themoviedbApi.fetchMovieCast(movieId);
        setCast(response.data.cast);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <ul>
      {loading && <Loader size={40} color="#00BFFF" />}
      {error && (
        <div className={css.Error}>An error occurred: {error.message}</div>
      )}
      {cast.map(({ cast_id, name, character, profile_path }) => (
        <li key={cast_id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${profile_path}`}
            alt={name}
          />
          <h3>{name}</h3>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
